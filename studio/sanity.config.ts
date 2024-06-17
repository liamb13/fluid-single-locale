import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {media, mediaAssetSource} from 'sanity-plugin-media';
import {fontPicker} from '@frontvibe/sanity-font-picker';
import {colorPicker} from '@frontvibe/sanity-color-picker';
import {rangeSlider} from '@frontvibe/sanity-plugin-range-slider';
import {codeInput} from '@sanity/code-input';
import {presentationTool} from '@sanity/presentation';
import {groqdPlaygroundTool} from 'groqd-playground';

import {schemaTypes} from './schemas';
import {defaultDocumentNode, structure} from './structure';
import {projectDetails} from './project.details';
import {customDocumentActions} from './plugins/customDocumentActions';
import {singletonActions, singletonsTypes} from './structure/singletons';
import {locate} from './presentation/locate';
import {PreviewIcon} from './components/icons/Preview';

const isDev = process.env.MODE === 'development';
const {projectId, dataset, apiVersion, previewUrl} = projectDetails;
const localPreviewUrl = 'http://localhost:3000';
const devOnlyPlugins = [
  visionTool({
    defaultApiVersion: apiVersion,
    defaultDataset: dataset,
  }),
  groqdPlaygroundTool(),
];
const SANITY_STUDIO_PRODUCTION_URL = isDev ? localPreviewUrl : previewUrl;

export default defineConfig({
  name: 'default',
  title: 'Fluid',
  projectId,
  dataset,
  plugins: [
    fontPicker(),
    rangeSlider(),
    colorPicker(),
    codeInput(),
    structureTool({structure, defaultDocumentNode}),
    customDocumentActions(),
    media(),
    presentationTool({
      // Required: set the base URL to the preview location in the front end
      previewUrl: `${SANITY_STUDIO_PRODUCTION_URL}/sanity/preview`,
      locate,
      icon: PreviewIcon,
      title: 'Preview',
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonsTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonsTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource,
        );
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource,
        );
      },
    },
  },
});
