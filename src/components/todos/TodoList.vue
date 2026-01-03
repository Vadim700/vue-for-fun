<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="">
      <h2 class="text-white text-2xl text-center mb-2">To do</h2>
      <ul>
        <li v-for="todo of toDo" :key="todo">
          <TodoItem :todo="todo" />
        </li>
      </ul>
    </div>
    <div class="">
      <h2 class="text-white text-2xl text-center mb-2">All</h2>
      <ul>
        <li v-for="todo of todos" :key="todo">
          <TodoItem :todo="todo" />
        </li>
      </ul>
    </div>
    <div class="">
      <h2 class="text-white text-2xl text-center mb-2">Completed</h2>
      <ul>
        <li v-for="todo of completed" :key="todo">
          <TodoItem :todo="todo" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores/todos'
const store = useTodoStore()

onMounted(() => store.fetchData())

const todos = computed(() => store.todos)

const completed = computed(() => todos.value.filter((todo) => todo.completed))

const toDo = computed(() => todos.value.filter((todo) => !todo.completed))
</script>

<style lang="sss" scoped></style>
