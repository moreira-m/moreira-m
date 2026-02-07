import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'moreira-m',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
