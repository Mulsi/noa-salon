import {defineField, defineType} from 'sanity'

export const galleryDetailType = defineType({
  name: 'galleryDetail',
  title: 'Galerija - Podstran',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Naslov strani',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'galleryGroups',
        title: 'Skupine slik',
        type: 'array',
        of: [
            {
                type: 'object',
                name: 'galleryGroup',
                title: 'Skupina slik',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Skupina slik',
                        type: 'string',
                        validation: (rule) => rule.required(),
                    }),
                    defineField({
                        name: 'images',
                        title: 'Slike',
                        type: 'array',
                        of: [{type: 'image'}],
                        validation: (rule) => rule.min(1).required(),
                    }),
                ],
                preview: {
                    select: {
                        title: 'title',
                        media: 'images.0'
                    },
                    prepare(selection) {
                        const {title, media} = selection
                        return {
                            title: title || 'Nepoimenovana skupina slik',
                            media: media
                        }
                    }
                }
            }
        ],
    }),
  ],
})