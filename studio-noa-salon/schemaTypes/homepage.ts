import {defineType, defineField} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
        name: 'heroImageDesktop',
        title: 'Hero image - desktop',
        type: 'image',
        options: {
          hotspot: true, // Allows cropping
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'heroImageMobile',
        title: 'Hero image - mobile',
        type: 'image',
        options: {
          hotspot: true, // Allows cropping
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'aboutImage',
        title: 'About image',
        type: 'image',
        options: {
          hotspot: true, // Allows cropping
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'aboutHeading',
        title: 'About heading',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'aboutSubheading',
        title: 'About subheading',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'aboutDescription',
        title: 'About description',
        type: 'array',
        of: [{type: 'block'}],
      }),
      defineField({
        name: 'testimonialsTitle',
        title: 'Testimonials title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [
          { 
            type: 'reference',
            to: [{ type: 'testimonials' }],
           }
        ],
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'servicesTitle',
        title: 'Services title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'salonServiceTitle',
        title: 'Salon service title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'salonServices',
        title: 'Salon services',
        type: 'array',
        of: [
          { 
            type: 'reference',
            to: [{ type: 'services' }],
           }
        ],
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'academyServiceTitle',
        title: 'Academy service title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'academyServices',
        title: 'Academy services',
        type: 'array',
        of: [
          { 
            type: 'reference',
            to: [{ type: 'services' }],
           }
        ],
        validation: (Rule) => Rule.required(),
      }),
  ],
  preview: {
    select: {
      media: 'heroImage',
    },
    prepare({ media }) {
      return {
        title: 'Homepage',
        media,
      };
    },
  },
});


