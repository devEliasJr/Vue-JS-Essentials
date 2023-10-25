import { defineStore } from "pinia";

export const useSearchHistoryStore = defineStore("searchHistory", {
  state: () => {
    return {
      users: [],
    };
  },
  actions: {
    pushHistory(username) {
      this.users.unshift(username);
    },
  },
});
