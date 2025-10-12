import {defineField, defineType} from 'sanity'

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
  ],
})