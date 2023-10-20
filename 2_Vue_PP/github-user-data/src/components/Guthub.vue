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

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #1c1a1d;
  color: #e5e5e5;
}

#app {
  font-family: "Ubuntu", sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

img {
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  display: block;
  margin: 1rem auto;
  width: 8rem;
  height: 8rem;
}

h1,
h2 {
  color: #f64348;
  margin: 1 rem auto 0.25rem;
}

h3 {
  margin: 1 rem auto 0.25rem;
}

span {
  display: block;
  margin: 1rem auto;
}

input,
button {
  max-width: 20rem;
  margin: 1rem auto;
}

input {
  background-color: #1c1a1d;
  border: 1px solid #f64348;
  border-radius: 0.25rem;
  color: #e5e5e5;
  margin: 1rem 1rem 1rem 0;
  padding: 1rem;
}

button {
  background-color: #f64348;
  border: unset;
  padding: .8rem;
  border-radius: 0.25rem;
  color: #1c1a1d;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

a {
  color: #f64348;
}
</style>