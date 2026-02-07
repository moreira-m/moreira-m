import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { dashboardTool } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'

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
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify Deploys',
          sites: [
            {
              title: 'Portfolio Website',
              apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID || '',
              buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID || '',
              name: 'moreira-m',
              url: process.env.SANITY_STUDIO_NETLIFY_URL || '',
            },
          ],
        }),
      ],
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
