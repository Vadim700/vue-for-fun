<template>
  <div class="grid grid-cols-3 gap-4" ref="constraintsRef">
    <div class="">
      <h2 class="text-white text-2xl text-center mb-2">To do</h2>
      <ul>
        <li v-for="todo of toDo" :key="todo.id">
          <TodoItem :todo="todo" />
        </li>
      </ul>
    </div>
    <div class="">
      <h2 class="text-white text-2xl text-center mb-2">In progress</h2>
      <ul>
        <motion.li
          v-for="todo of todos"
          :key="todo.id"
          drag
          :dragConstraints="constraintsRef"
          @drag="handleDrag"
          @dragStart="handleDragStart"
          @dragEnd="handleDragEnd"
        >
          <TodoItem :todo="todo" />
        </motion.li>
      </ul>
    </div>
    <div class="">
      <h2 class="text-white text-2xl text-center mb-2">Completed</h2>
      <Reorder.Group v-model:values="completedTodos" axis="y">
        <Reorder.Item
          :data-index="i"
          v-for="(todo, i) of completedTodos"
          :key="todo.id"
          :value="todo"
        >
          <TodoItem :todo="todo" :completedCol="true" />
        </Reorder.Item>
      </Reorder.Group>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { motion, useScroll, Reorder, useMotionValue } from 'motion-v'
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores/todos'
import { useDomRef } from 'motion-v'
import { useRaisedShadow } from '@/use/useRaisedShadow'

const store = useTodoStore()
onMounted(() => store.fetchData())
const todos = computed(() => store.todos)
const y = useMotionValue(0)
const boxShadow = useRaisedShadow(y)

const constraintsRef = useDomRef() // не позволяет вылетать элементам при D&D за пределеы этого ref

const completedTodos = ref([])
watch(
  todos,
  (newTodos) => {
    completedTodos.value = newTodos.filter((todo) => todo.completed)
  },
  { immediate: true },
)

const completed = computed(() => todos.value.filter((todo) => todo.completed))
const values = todos.value.map((i) => i.id)

const toDo = computed(() => todos.value.filter((todo) => !todo.completed))

const handleDragStart = (event, info) => {}

const handleDrag = (event, info) => {
  event.target.closest('li')?.classList.add('draged')
}

const handleDragEnd = (event, info) => {
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
