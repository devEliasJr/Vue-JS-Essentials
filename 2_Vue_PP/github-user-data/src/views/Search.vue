<script setup>
  import { ref } from 'vue';
  import Profile from '../components/Profile.vue';

  const isOpen = ref(true);


  // import OptionsApi from './components/OptionsApi.vue'


  // CHAMADA Para o uso com Option API
  // export default {
  //   components: {
  //     OptionsApi,
  //   }
  // }
  
</script>
<template>
  <!-- <OptionsApi /> -->
  <input type="checkbox" v-model="isOpen" />{{ isOpen }}
  <Profile v-if="isOpen">
    <h1>GitHub User Data</h1>
    <template v-slot:footer>
      <footer>
        Desenvolvido por Elias Jr.
      </footer>
    </template>
  </Profile>
</template>