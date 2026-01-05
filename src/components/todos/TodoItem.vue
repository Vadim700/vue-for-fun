<template>
  <div class="relative mb-2 p-2 pb-8 bg-amber-300 rounded-sm">
    <div class="first-letter:uppercase">{{ todo.title }}</div>
    <Switcher
      @change="onSwitchChange"
      :completed="todo.completed"
      class="absolute right-2 bottom-2"
    />
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todos'
import Switcher from '../ui/switcher.vue'
const store = useTodoStore()

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const onSwitchChange = (e) => {
  store.toggleTodo(props.todo.id)
}
</script>

<style lang="scss"></style>
