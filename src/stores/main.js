import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    topic: localStorage.getItem('topic') || ''
  }),


  getters: {
    getTopic: (state) => state.topic
  },


  actions: {
    setTopic(payload) {
      this.topic = payload.toLowerCase();
      localStorage.setItem('topic', payload.toLowerCase())
    }
  },
})

