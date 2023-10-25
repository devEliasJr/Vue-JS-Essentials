<script setup>
import { reactive, ref, computed, onMounted, onUnmounted, onUpdated } from 'vue';
import UserInfo from './UserInfo.vue';
import Repository from './Repository.vue'
import Form from './Form.vue';


const state = reactive({
  login: "devEliasJr",
  name: "Elias",
  bio: "...",
  company: "EliasDev",
  avatar_url: "http://unsplash.it/256",
  repos: [],
})

async function fetchGithubUser(searchInput) {


  if (searchInput === "") {
    return
  }

  const res = await fetch(`https://api.github.com/users/${searchInput}`);
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
  <Form @form-submit="fetchGithubUser" />
  <UserInfo v-if="state.login !== ''" :login="state.login" :name="state.name" :company="state.company"
    :avatar_url="state.avatar_url" :bio="state.bio" />
  <section v-if="state.repos.length > 0">
    <h2>{{ reposCountMessage }}</h2>
    <article v-for="repo of state.repos" :key="repo.id">
      <Repository :repo="repo" />
    </article>
  </section>
</template>