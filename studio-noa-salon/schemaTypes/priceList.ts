import {defineField, defineType} from 'sanity'

export const priceListType = defineType({
  name: 'priceList',
  title: 'Cenik',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov strani',
      type: 'string',
      initialValue: 'CENIK',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Kategorije',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'category',
          title: 'Kategorija',
          fields: [
            defineField({
              name: 'categoryName',
              title: 'Ime kategorije',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'services',
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
                      name: 'price',
                      title: 'Cena',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'serviceName',
                      subtitle: 'price',
                    },
                  },
                },
              ],
            }),
            defineField({
                name: 'subcategoryName',
                title: 'Ime podkategorije (npr. Paketi, Dodatne storitve)',
                type: 'string',
              }),
            defineField({
              name: 'subcategoryServices',
              title: 'Podkategorijske storitve',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'subcategoryService',
                  title: 'Storitev',
                  fields: [
                    defineField({
                      name: 'subcategoryServiceName',
                      title: 'Ime storitve',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'subcategoryServicePrice',
                      title: 'Cena',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'subcategoryServiceName',
                      subtitle: 'subcategoryServicePrice',
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'categoryName',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})