<script setup>
const props = defineProps(['login', 'name', 'company', 'avatar_url', 'bio'])
</script>

<template>
  <div>
    <img v-bind:src="avatar_url">
    <strong>@{{ login }}</strong>
    <h1>{{ name }}</h1>
    <h2>{{ company }}</h2>
    <span>{{ bio }}</span>
  </div>
</template>