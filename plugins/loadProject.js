import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const projectPath = resolve(`./projects/${config.public.PROJECT_NAME}`);

  // Load content
  let content = 'Content not found';
  if (existsSync(`${projectPath}/content.md`)) {
    content = readFileSync(`${projectPath}/content.md`, 'utf-8');
  }

  return {
    provide: {
      projectContent: content,
      projectAssetsPath: existsSync(`${projectPath}/assets`) ? `/projects/${config.public.PROJECT_NAME}/assets` : '/assets',
    },
  };
});