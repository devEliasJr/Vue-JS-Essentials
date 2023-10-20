const app = Vue.createApp({
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
      const {login, name, bio, company, avatar_url} =  await res.json();

      this.login = login;
      this.name = name;
      this.company = company;
      this.bio = bio;
      this.avatar_url= avatar_url;
    },
  },
});

app.mount("#app");
