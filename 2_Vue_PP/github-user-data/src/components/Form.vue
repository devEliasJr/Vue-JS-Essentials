<script setup>
import { ref } from 'vue';

const emit = defineEmits(['formSubmit'])
const searchInput = ref('')

function handleSubmit(e) {
  e.preventDefault()
  emit('formSubmit', searchInput.value)
}
</script>

<template>
  <form @submit="handleSubmit">
    <input required type="text" v-model.lazy="searchInput" placeholder="Nome do usuario">
    <button type="submit">Carregar Usuario</button>
  </form>
  
</template>