<template>
    <div>
      <h1>Landing Page for {{ config.public.PROJECT_NAME }}</h1>
      <div v-html="renderedMarkdown"></div>
      <img v-if="projectImage" :src="projectImage" alt="Project Image">
    </div>
  </template>
  
  <script setup>
  import { marked } from 'marked';
  const { $projectContent, $projectAssetsPath } = useNuxtApp();
  const config = useRuntimeConfig();
  
  // Convert Markdown to HTML
  const renderedMarkdown = marked($projectContent);
  
  // Example: Load an image from the project's assets folder
  const projectImage = $projectAssetsPath ? `${$projectAssetsPath}/example.jpg` : null;
  </script>
  
  <style scoped>
  /* Additional styles can be added */
  </style>