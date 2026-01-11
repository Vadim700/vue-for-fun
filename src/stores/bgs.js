import postsService from '@/services/postsService';
import { defineStore } from 'pinia';

export const useBgStore = defineStore('bgsStore', {
  state: () => ({
    bgs: [],
    bg: {}
  }),


  getters: {
    getCurrent: (state) => {
      return state.bg
    }
  },


  actions: {
    setCurrentItem(el) {
      this.bg = {
        background: el.background,
        backgroundSize: el.backgroundSize,
        backgroundColor: el.backgroundColor,
        backgroundImage: el.backgroundImage,
        backgroundPosition: el.backgroundPosition
      }
    }
  },

  repsist: true
})
