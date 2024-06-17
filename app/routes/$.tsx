import type {LoaderFunctionArgs, MetaFunction} from '@shopify/remix-oxygen';

import {useLoaderData} from '@remix-run/react';
import {defer} from '@shopify/remix-oxygen';

import {CmsSection} from '~/components/CmsSection';
import {useSanityData} from '~/hooks/useSanityData';
import {mergeMeta} from '~/lib/meta';
import {resolveShopifyPromises} from '~/lib/resolveShopifyPromises';
import {sanityPreviewPayload} from '~/lib/sanity/sanity.payload.server';
import {getSeoMetaFromMatches} from '~/lib/seo';
import {seoPayload} from '~/lib/seo.server';
import {PAGE_QUERY} from '~/qroq/queries';

export const meta: MetaFunction<typeof loader> = mergeMeta(({matches}) =>
  getSeoMetaFromMatches(matches),
);

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const {env, sanity, storefront} = context;
  const pathname = new URL(request.url).pathname;
  const handle = getPageHandle({params, pathname});

  const queryParams = {
    handle,
  };

  const page = await sanity.query({
    groqdQuery: PAGE_QUERY,
    params: queryParams,
  });

  const {
    collectionListPromise,
    featuredCollectionPromise,
    featuredProductPromise,
  } = resolveShopifyPromises({
    document: page,
    request,
    storefront,
  });

  if (!page.data) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  const seo = seoPayload.home({
    page: page.data,
    sanity: {
      dataset: env.SANITY_STUDIO_DATASET,
      projectId: env.SANITY_STUDIO_PROJECT_ID,
    },
  });

  return defer({
    collectionListPromise,
    featuredCollectionPromise,
    featuredProductPromise,
    page,
    seo,
    ...sanityPreviewPayload({
      context,
      params: queryParams,
      query: PAGE_QUERY.query,
    }),
  });
}

export default function PageRoute() {
  const {page} = useLoaderData<typeof loader>();
  const {data, encodeDataAttribute} = useSanityData({
    initial: page,
  });

  return data?.sections && data.sections.length > 0
    ? data.sections.map((section) => (
        <CmsSection
          data={section}
          encodeDataAttribute={encodeDataAttribute}
          key={section._key}
        />
      ))
    : null;
}

function getPageHandle(args: {
  params: LoaderFunctionArgs['params'];
  pathname: string;
}) {
  const {params, pathname} = args;
  const pathWithoutSlash = pathname.replace(/^\/+/g, '');

  const handle = params['*']
    ? `/params['*']` // Handle for a page with locale having pathPrefix ex: /fr/about-us/
    : pathWithoutSlash; // Handle for default locale page  ex: /about-us/

  return handle;
}
