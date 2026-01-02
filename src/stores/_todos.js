import { defineStore } from 'pinia';
import todoService from '../services/todoService.js'

export const usetodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
    loading: false,
    isDeleting: false
  }),


  getters: {
    totaltodoLength() {
      return this.todo.length
    },
  },


  actions: {
    async gotTodos() {
      this.loading = true;
      try {
        this.todo = await todoService.fetchtodo();
      } catch (e) {
        console.error(e);
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async deleteTodo(id) {
      this.isDeleting = true;
      this.todo = this.todo.filter(post => post.id !== id);

      setTimeout(() => {
        this.isDeleting = false;
      }, 100);
    },

    newTodo(payload) {
      const maxId = this.todo.reduce((max, post) => Math.max(max, post.id), 0);
      const newPost = { ...payload, id: maxId + 1 };
      this.todo.push(newPost);
    },

    updateTodo(state, payload) {
      const foundedItem = this.state.todos.find(todo => todo.id === payload.id);

    }
  },
})

