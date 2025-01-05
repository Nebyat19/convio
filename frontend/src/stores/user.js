// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    avatar: '',
  }),
  actions: {
    generateRandomUsername() {
      this.username = `Guest${Math.floor(Math.random() * 1000)}`;
    },
    setUsername(name) {
      this.username = name;
    },
    setAvatar(avatar) {
      this.avatar = avatar;
    },
  },
});
