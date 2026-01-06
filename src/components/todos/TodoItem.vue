<template>
  <div class="relative mb-2 p-2 pb-8 bg-amber-300 rounded-sm">
    <div class="first-letter:uppercase">{{ todo.title }}</div>

    <div v-if="completedCol"  class="absolute right-0 rotate-90 bottom-0 top-[50%] w-6 h-6 cursor-grab -translate-y-[50%]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.182 7.519a1 1 0 0 1 .05 1.413L5.301 11H10a1 1 0 1 1 0 2H5.301l1.93 2.068a1 1 0 0 1-1.462 1.364L2.27 12.685A1 1 0 0 1 2 12a1 1 0 0 1 .27-.684l3.5-3.748a1 1 0 0 1 1.413-.049m9.636 0a1 1 0 0 0-.05 1.413L18.699 11H14a1 1 0 1 0 0 2h4.699l-1.93 2.068a1 1 0 0 0 1.462 1.364l3.498-3.747a1 1 0 0 0 .149-.205a1 1 0 0 0-.148-1.163l-3.499-3.75a1 1 0 0 0-1.413-.048"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todos'

const store = useTodoStore()

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  completedCol: {
    type: Boolean,
    required: false,
  },
})
</script>

<style lang="scss"></style>
