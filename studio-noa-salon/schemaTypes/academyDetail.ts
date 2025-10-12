import {defineField, defineType} from 'sanity'

export const academyDetailType = defineType({
  name: 'academyDetail',
  title: 'Academy - Podstran',
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
        name: 'services',
        title: 'Storitve',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'serviceType',
            title: 'Tip storitve',
            fields: [
              defineField({
                name: 'serviceTypeTitle',
                title: 'Naslov tipa storitve',
                type: 'string',
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: 'serviceItems',
                title: 'Storitve',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    name: 'service',
                    title: 'Storitev',
                    fields: [
                      defineField({
                        name: 'serviceName',
                        title: 'Ime storitve',
                        type: 'string',
                        validation: (rule) => rule.required(),
                      }),
                      defineField({
                        name: 'serviceDescription',
                        title: 'Opis storitve',
                        type: 'array',
                        of: [{type: 'block'}],
                        validation: (Rule) => Rule.required(),
                      }),
                      defineField({
                        name: 'buttonText',
                        title: 'Button text',
                        type: 'string',
                        validation: (rule) => rule.required(),
                        }),
                      defineField({
                        name: 'buttonLink',
                        title: 'Button link',
                        type: 'string',
                        validation: (rule) => rule.required(),
                      }),
                    ],
                    preview: {
                      select: {
                        title: 'serviceName',
                      },
                    },
                  },
                ],
                validation: (Rule) => Rule.required().min(1),
              }),
            ],
            preview: {
              select: {
                title: 'serviceTypeTitle',
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