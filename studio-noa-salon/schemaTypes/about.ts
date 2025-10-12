import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'O nas',
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
        title: 'Tekst o nas',
        type: 'array',
        of: [{type: 'block'}],
        validation: (Rule) => Rule.required(),
    }),
  ],
})