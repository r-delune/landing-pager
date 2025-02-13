import { defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  documentDriven: true,
  markdown: {
    toc: {
      depth: 3,
      searchDepth: 3,
    },
  },
}) 