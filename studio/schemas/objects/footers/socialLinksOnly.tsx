import {defineField} from 'sanity';

export default defineField({
  name: 'socialLinksOnly',
  title: 'Social Links Only',
  type: 'object',
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
    defineField({
      type: 'sectionSettings',
      name: 'settings',
    }),
  ],
  preview: {
    select: {
      title: 'copyright',
    },
    prepare({title}: {title: string}) {
      return {
        title: title || 'Missing title',
      };
    },
  },
});
