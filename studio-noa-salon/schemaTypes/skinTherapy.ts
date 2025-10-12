import {defineField, defineType} from 'sanity'

export const skinTherapyType = defineType({
  name: 'skinTherapy',
  title: 'Skin Therapy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
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
    defineField({
        name: 'treatments',
        title: 'Tretmaji',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'treatment',
            title: 'Tretma',
            fields: [
              defineField({
                name: 'treatmentName',
                title: 'Ime tretmaja',
                type: 'string',
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: 'treatmentDescription',
                title: 'Opis tretmaja',
                type: 'array',
                of: [{type: 'block'}],
                validation: (Rule) => Rule.required(),
              }),
            ],
            preview: {
              select: {
                title: 'treatmentName',
              },
            },
          },
        ],
        validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

