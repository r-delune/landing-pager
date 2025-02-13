<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
<script setup>
const { $projectContent } = useNuxtApp();
console.log($projectContent);
</script>
