// https://nuxt.com/docs/api/configuration/nuxt-config

import { existsSync, readFileSync } from 'fs';
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
  css: [
    existsSync(resolve(`./projects/${PROJECT_NAME}/styles.css`))
      ? `~/projects/${PROJECT_NAME}/styles.css`
      : '~/styles/default.css', // Fallback
  ],
})
