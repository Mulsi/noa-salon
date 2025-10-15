import {defineField, defineType} from 'sanity'

export const galleryDetailType = defineType({
  name: 'galleryDetail',
  title: 'Galerija - Podstran',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'image'}],
    }),
  ],
})