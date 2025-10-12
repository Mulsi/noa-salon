import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galerija',
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