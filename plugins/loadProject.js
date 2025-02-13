import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  // Define variables to hold fetched data
  let content = 'Content not found';
  let projectAssetsPath = '/assets';
  
  // Fetch data only on the server side
  if (process.server) {
    const { readFileSync, existsSync } = await import('fs'); // Dynamically import 'fs' module
    const { resolve } = await import('path'); // Dynamically import 'path' module

    const projectPath = resolve(`./projects/${config.public.PROJECT_NAME}`);
    
    // Load content and check for assets path
    if (existsSync(`${projectPath}/content.md`)) {
      content = readFileSync(`${projectPath}/content.md`, 'utf-8');
    }

    if (existsSync(`${projectPath}/assets`)) {
      projectAssetsPath = `/projects/${config.public.PROJECT_NAME}/assets`;
    }
  }

  return {
    provide: {
      projectContent: content,
      projectAssetsPath,
    },
  };
});
