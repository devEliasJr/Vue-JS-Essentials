<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/search">Search</RouterLink>
  </nav>
  <RouterView></RouterView>
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
  margin-right: 15px;
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

footer {
  height: 2rem;
  margin-top: 2rem;
  padding: 1rem 0;
}

a {
  color: #f64348;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
}

a + a {
  margin-left: 1rem;
}

a:hover {
  cursor:pointer;
  filter: brightness(.9);
}

nav {
  border-bottom: 1px solid #fff;
  padding: 1rem 0;
  margin-bottom: 1rem;
}
</style>