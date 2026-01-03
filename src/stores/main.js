import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    topic: ''
  }),


  getters: {
    getTopic: (state) => state.topic
  },


  actions: {
    setTopic(payload) {
      this.topic = payload.toLowerCase();
    }
  },
})

