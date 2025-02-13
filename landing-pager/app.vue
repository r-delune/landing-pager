<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script setup>
const { $directus } = useNuxtApp();
console.log($directus);
</script>