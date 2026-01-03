import postsService from '@/services/postsService';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
  }),


  getters: {
    getTodoList: (state) => state.todos
  },


  actions: {
    async fetchData() {
      this.todos = postsService.fetchTodos()
    }
  }
})
