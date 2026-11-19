import postsService from '@/services/postsService'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
  }),

  getters: {
    getTodoList: (state) => state.todos,
    getCompleted: (state) => state.todos.filter((todo) => todo.completed),
    getActiveTodos: (state) => state.todos.filter((todo) => !todo.completed),
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
  },

  actions: {
    fetchData() {
      this.todos = postsService.fetchTodos()
    },

    toggleTodo(id) {
      const todo = this.todos.find((item) => item.id === id)
      if (todo) todo.completed = !todo.completed
    },
  },

  persist: {
    key: 'vue-for-fun:todos',
  },
})
