// stores/room.js
import { defineStore } from 'pinia';

export const useRoomStore = defineStore('room', {
  state: () => ({
    roomId: '',
    messages: [],
    participants: [],
  }),
  actions: {
    setRoomId(id) {
      this.roomId = id;
    },
    addMessage(message) {
      this.messages.push(message);
    },
    addParticipant(user) {
      this.participants.push(user);
    },
    removeParticipant(user) {
      this.participants = this.participants.filter(participant => participant !== user);
    },
  },
});
