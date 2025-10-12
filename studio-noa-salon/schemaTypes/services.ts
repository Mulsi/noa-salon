import {defineField, defineType} from 'sanity'

export const servicesType = defineType({
  name: 'services',
  title: 'Storitve - Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows cropping
        },
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
})