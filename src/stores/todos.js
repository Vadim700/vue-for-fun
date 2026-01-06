import postsService from '@/services/postsService';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
  }),


  getters: {
    getTodoList: () => this.todos,
    getCompleted: () => this.todos.filter(todo => todo.comleted),
    getActiveTodos: () => this.todos.filter(todo => !todo.comleted),
    getTodoById: (id) => this.todos.filter(todo => todo.id === id)
  },


  actions: {
    async fetchData() {
      this.todos = postsService.fetchTodos()
    },

    toggleTodo(id) {
      const founded = this.todos.find(todo => todo.id === id);
      if (founded) {
        founded.completed = !founded.completed
      }
    }
  },

  repsist: true
})
