<script setup>
import { reactive, ref, computed, onMounted, onUnmounted, onUpdated } from 'vue';


const searchInput = ref('');

const state = reactive({
  login: "devEliasJr",
  name: "Elias",
  bio: "...",
  company: "EliasDev",
  avatar_url: "http://unsplash.it/256",
  repos: [],
})

async function fetchGithubUser(e) {

  e.preventDefault();

  if (searchInput.value === "") {
    return
  }

  const res = await fetch(`https://api.github.com/users/${searchInput.value}`);
  const { login, name, bio, company, avatar_url } = await res.json();

  state.login = login;
  state.name = name;
  state.company = company;
  state.bio = bio;
  state.avatar_url = avatar_url;

  fetchUserRepositories(login);

}

async function fetchUserRepositories(username) {

  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await res.json();

  state.repos = repos;
}

const reposCountMessage = computed(() => {
  return state.repos.length > 0
    ? `${state.name} possui ${state.repos.length} repositorios públicos`
    : `${state.name} não possui repositorios públicos`
})

const testeMonted = (name) => {
  console.log(name);
}

onMounted(() => {
  console.log('Componente Montado')
  testeMonted('Elias')
});

onUpdated(() => {
  console.log('Componente foi atualizado')
})

onUnmounted(() => {
  console.log('Componente desmontado')
})

</script>

<template>
  <h1>GitHub User Data</h1>
  <form @submit="fetchGithubUser">
    <input required type="text" v-model.lazy="searchInput" placeholder="Nome do usuario">
    <button>Carregar Usuario</button>
  </form>
  <div v-if="state.login !== ''">
    <img v-bind:src="state.avatar_url">
    <strong>@{{ state.login }}</strong>
    <h1>{{ state.name }}</h1>
    <h2>{{ state.company }}</h2>
    <span>{{ state.bio }}</span>
  </div>
  <section v-if="state.repos.length > 0">
    <h2>{{ reposCountMessage }}</h2>
    <article v-for="repo of state.repos" :key="repo.id">
      <h3>{{ repo.full_name }}</h3>
      <p>{{ repo.description }}</p>
      <a :href="repo.html_url" target="_blank">Ver no Github</a>
    </article>
  </section>
</template>