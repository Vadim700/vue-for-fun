<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="w-full h-full grid absolute top-0 left-0 before:absolute before:bg-black before:w-full before:h-full before:opacity-80 before:backdrop-blur-[5px]"
      @click="handleBackdropClick"
    >
      <div
        class="border w-full max-w-[500px] min-w-[350px] absolute left-[50%] top-[50%] -translate-[50%] bg-white px-6 py-4 pt-8"
        ref="modalInner"
        @click.stop
      >
        <button
          class="absolute top-2 right-2 cursor-pointer hover:text-red-500"
          @click="$emit('close')"
        >
          <X />
        </button>
        <h3 class="text-3xl text-center mb-4">
          <slot name="header"></slot>
        </h3>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { X } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits(['close'])
const modalInner = ref(null)
const props = defineProps({
  open: Boolean,
})

const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && props.open) {
    emit('close')
  }
}

onMounted(() => document.addEventListener('keydown', handleKeydown))

onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
</style>
