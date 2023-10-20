<script>
export default {
  data() {
    return {
      login: "eliasDev",
      name: "Elias",
      bio: "...",
      company: "EliasDev",
      avatar_url: "http://unsplash.it/256",
      searchInput: "",
    };
  },
  methods: {
    async fetchGithubUser() {
      const res = await fetch(`https://api.github.com/users/${this.searchInput}`);
      const { login, name, bio, company, avatar_url } = await res.json();

      this.login = login;
      this.name = name;
      this.company = company;
      this.bio = bio;
      this.avatar_url = avatar_url;
    },
  },
}
</script>

<template>
  <h2>Github User Data</h2>
  <input type="text" v-model="searchInput">
  <button v-on:click="fetchGithubUser">Carregar Usuario</button>
  <img v-bind:src="avatar_url">
  <strong>@{{ login }}</strong>
  <h1>{{ name }}</h1>
  <h2>{{ company }}</h2>
  <span>{{ bio }}</span>
</template>

<style></style>