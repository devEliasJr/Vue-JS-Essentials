<script setup>
import { ref } from 'vue';
import { useSearchHistoryStore } from '../stores/useSearchHistoryStore';
// import { searchHistory } from '../stores/searchHistory';

const emit = defineEmits(['formSubmit', 'update:modelValue'])
const searchInput = ref('')

const searchHistory = useSearchHistoryStore()

function handleSubmit(e) {
  e.preventDefault()
  // searchHistory.users.unshift(searchInput.value)
  searchHistory.pushHistory(searchInput.value)
  emit('formSubmit', searchInput.value)
}

const showSearchHistory = () => {
  console.log(`Histórico de Pesquisa: ${searchHistory.users.join('\n')}`)
}
</script>



<template>
  <form @submit="handleSubmit">
    <input required type="text" v-model.lazy="searchInput" @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Nome do usuario">
    <button type="submit">Carregar Usuario</button>
    <button type="button" @click="showSearchHistory">Mostrar Histórico</button>
  </form>
</template>