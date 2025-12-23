<template>
  <ul>
    <li v-for="todo of todos" :key="todo">
      <TodoItem :todo="todo" />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

const todos = ref([1, 2, 3, 4, 5, 6, 7])
</script>

<style lang="sss" scoped></style>
