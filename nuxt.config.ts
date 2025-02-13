// https://nuxt.com/docs/api/configuration/nuxt-config

import { existsSync } from 'fs';
import { resolve } from 'path';

const PROJECT_NAME = process.env.PROJECT_NAME || 'default';  // Default project


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      PROJECT_NAME,
    },
  },
  modules: ['@nuxt/content'],
  content: {
    // Disable content base as we'll use custom directory
    documentDriven: false,
    // Configure the root directory for content
    sources: {
      content: {
        driver: 'fs',
        prefix: `/${PROJECT_NAME}`, // Add prefix for the project
        base: resolve(__dirname, 'projects')
      }
    }
  },
  css: [
    existsSync(resolve(`./projects/${PROJECT_NAME}/styles.css`))
      ? `~/projects/${PROJECT_NAME}/styles.css`
      : '~/styles/default.css', // Fallback
  ],
  
})
