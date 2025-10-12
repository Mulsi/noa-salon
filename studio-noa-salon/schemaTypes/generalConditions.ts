import {defineField, defineType} from 'sanity'

export const generalConditionsType = defineType({
  name: 'generalConditions',
  title: 'Splošni pogoji',
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
        title: 'Opis',
        type: 'array',
        of: [{type: 'block'}],
        validation: (Rule) => Rule.required(),
    }),
  ],
})