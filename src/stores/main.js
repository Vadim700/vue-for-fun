import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    topic: '',
  }),

  getters: {
    getTopic: (state) => state.topic,
  },

  actions: {
    setTopic(payload) {
      this.topic = String(payload ?? '').toLowerCase()
    },
  },

  // Persistence is handled by pinia-plugin-persistedstate,
  // not by manual calls inside the action
  persist: {
    key: 'vue-for-fun:main',
  },
})
