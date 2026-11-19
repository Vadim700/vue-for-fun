import { defineStore } from 'pinia'

export const useBgStore = defineStore('bgsStore', {
  state: () => ({
    bgs: [],
    bg: {},
  }),

  getters: {
    getCurrent: (state) => state.bg,
  },

  actions: {
    setCurrentItem(styles) {
      this.bg = {
        background: styles.background,
        backgroundSize: styles.backgroundSize,
        backgroundColor: styles.backgroundColor,
        backgroundImage: styles.backgroundImage,
        backgroundPosition: styles.backgroundPosition,
      }
    },
  },

  persist: {
    key: 'vue-for-fun:bg',
  },
})
