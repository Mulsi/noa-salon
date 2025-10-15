import {defineField, defineType} from 'sanity'

export const topBarType = defineType({
  name: 'topBar',
  title: 'Vrstica na vrhu',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Naslov',
        type: 'string',
      }),
    defineField({
      name: 'showTopBar',
      title: 'Prikaži/Skrij vrstico',
      type: 'boolean',
    }),
    defineField({
      name: 'text',
      title: 'Tekst',
      type: 'string',
    }),
  ],
})