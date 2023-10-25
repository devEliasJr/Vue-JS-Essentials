
<script setup>
  const props = defineProps(['repo'])
</script>

<template>
  <h3>{{ repo.full_name }}</h3>
  <p>{{ repo.description }}</p>
  <a :href="repo.html_url" target="_blank">Ver no Github</a>
</template>