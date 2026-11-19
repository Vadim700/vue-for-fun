<template>
  <div ref="constraintsRef" class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <div>
      <h2 class="mb-2 text-center text-2xl font-bold">To do</h2>
      <ul>
        <li v-for="todo of toDo" :key="todo.id">
          <TodoItem :todo="todo" />
        </li>
      </ul>
    </div>

    <div>
      <h2 class="mb-2 text-center text-2xl font-bold">In progress</h2>
      <ul>
        <motion.li
          v-for="todo of activeTodos"
          :key="todo.id"
          drag
          :drag-constraints="constraintsRef"
          @drag="handleDrag"
          @drag-end="handleDragEnd"
        >
          <TodoItem :todo="todo" />
        </motion.li>
      </ul>
    </div>

    <div>
      <h2 class="mb-2 text-center text-2xl font-bold">Completed</h2>
      <Reorder.Group v-model:values="completedTodos" axis="y">
        <Reorder.Item
          v-for="(todo, index) of completedTodos"
          :key="todo.id"
          :value="todo"
          :data-index="index"
        >
          <TodoItem :todo="todo" :completed-col="true" />
        </Reorder.Item>
      </Reorder.Group>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { motion, Reorder, useDomRef } from 'motion-v'
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores/todos'

const store = useTodoStore()
const constraintsRef = useDomRef()

onMounted(() => {
  if (!store.todos.length) store.fetchData()
})

const todos = computed(() => store.todos)
const activeTodos = computed(() => todos.value.filter((todo) => !todo.completed))
const toDo = computed(() => todos.value.filter((todo) => !todo.completed))

const completedTodos = ref([])
watch(
  todos,
  (newTodos) => {
    completedTodos.value = newTodos.filter((todo) => todo.completed)
  },
  { immediate: true },
)

const handleDrag = (event) => {
  event.target.closest('li')?.classList.add('draged')
}

const handleDragEnd = (event) => {
  event.target.closest('li')?.classList.remove('draged')
}
</script>

<style lang="scss" scoped>
li {
  position: relative;
  z-index: 5;
  transition: box-shadow 0.2s;
}

.draged {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
}
</style>
