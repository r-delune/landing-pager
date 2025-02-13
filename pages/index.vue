<template>
  <div class="container mx-auto px-4 py-8">
    <h1>Project: {{ config.public.PROJECT_NAME }}</h1>
    <ContentDoc :path="`/${config.public.PROJECT_NAME}/index`">
      <template #default="{ doc }">
        <ContentRenderer v-if="doc" :value="doc" />
      </template>
      <template #not-found>
        <p>No content found for this project.</p>
      </template>
      <template #loading>
        <p>Loading...</p>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<style scoped>
/* Additional styles can be added */
</style>