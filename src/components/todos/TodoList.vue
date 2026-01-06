<template>
  <div class="grid grid-cols-3 gap-4" ref="constraintsRef">
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
        <motion.li drag :dragConstraints="constraintsRef" v-for="todo of todos" :key="todo">
          <TodoItem :todo="todo" />
        </motion.li>
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
import { motion, useScroll } from 'motion-v'
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores/todos'
import { useDomRef } from 'motion-v'

const store = useTodoStore()
onMounted(() => store.fetchData())

const constraintsRef = useDomRef() // не позволяет вылетать элементам при D&D за пределеы этого ref

const todos = computed(() => store.todos)

const completed = computed(() => todos.value.filter((todo) => todo.completed))

const toDo = computed(() => todos.value.filter((todo) => !todo.completed))
</script>

<style lang="sss" scoped></style>
