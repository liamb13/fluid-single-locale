// locate.ts
import {
  DocumentLocationResolver,
  DocumentLocationsState,
} from 'sanity/presentation';
import {map, Observable} from 'rxjs';

const sanityPreviewPath = (slug?: string) => `/sanity/preview?slug=/${slug}`;

export const locate: DocumentLocationResolver = (params, context) => {
  if (
    params.type === 'collection' ||
    params.type === 'home' ||
    params.type === 'page' ||
    params.type === 'product'
  ) {
    /* 
      Listen to all changes in the selected document 
      and all documents that reference it
    */
    const doc$ = context.documentStore.listenQuery(
      `*[_id==$id || references($id)]{_type,slug,title,_id,store}`,
      params,
      {perspective: 'previewDrafts'},
    ) as Observable<
      | {
          _id: string;
          _type: string;
          slug?: {current: string};
          title?: string;
          store?: {slug: {current: string}; title: string};
        }[]
      | null
    >;
    // pipe the real-time results to RXJS's map function
    return doc$.pipe(
      map((docs) => {
        if (!docs) {
          return {
            message: 'Unable to map document type to locations',
            tone: 'critical',
          } satisfies DocumentLocationsState;
        }
        /**
         * Home
         */
        const home = docs.find(({_type}) => _type === 'home');
        const homeLocation = home
          ? [
              {
                href: sanityPreviewPath(''),
                title: 'Home',
              },
            ]
          : [];

        /**
         * Pages
         */
        const pages = docs.filter(({_type, slug}) => _type === 'page' && slug);
        const pagesLocations = pages
          .map(({slug, title}) => {
            const locations: Array<{
              href: string;
              title: string;
            }> = [];

            const pageTitle = title;

            locations.push({
              href: sanityPreviewPath(slug?.current),
              title: pageTitle ? pageTitle : 'Page',
            });

            return locations;
          })
          .flat();

        /**
         * Products
         */
        const products = docs.filter(
          ({_type, store}) => _type === 'product' && store?.slug?.current,
        );
        const productsLocations = products
          .map(({store}) => {
            const locations: Array<{
              href: string;
              title: string;
            }> = [];

            locations.push({
              href: `products/${store?.slug?.current}`,
              title: store?.title || 'Product',
            });

            return locations;
          })
          .flat();

        /**
         * Collections
         */
        const collections = docs.filter(
          ({_type, store}) => _type === 'collection' && store?.slug?.current,
        );

        const collectionsLocations = collections
          .map(({store}) => {
            const locations: Array<{
              href: string;
              title: string;
            }> = [];

            locations.push({
              href: sanityPreviewPath(`collections/${store?.slug?.current}`),
              title: store?.title ? store?.title : 'Collection',
            });

            return locations;
          })
          .flat();

        return {
          locations: [
            ...collectionsLocations,
            ...pagesLocations,
            ...productsLocations,
            ...homeLocation,
          ].filter(Boolean),
        } satisfies DocumentLocationsState;
      }),
    );
  }

  return null;
};
