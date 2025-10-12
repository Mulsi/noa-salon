import {defineField, defineType} from 'sanity'

export const cookiesType = defineType({
  name: 'cookies',
  title: 'Piškotki',
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
        title: 'Opis piškotkov',
        type: 'array',
        of: [{type: 'block'}],
        validation: (Rule) => Rule.required(),
    }),
  ],
})