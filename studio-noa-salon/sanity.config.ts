import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'noa-salon',

  projectId: 'xy5z0niy',
  dataset: 'production',
  ignoreBrowserTokenWarning: true,
  useCdn: true,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
