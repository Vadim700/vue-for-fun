<template>
  <Teleport to="body">
    <div
      ref="modal"
      v-if="open"
      class="w-full h-full grid absolute z-5 top-0 left-0 before:absolute before:bg-black before:w-full before:h-full before:opacity-80 before:backdrop-blur-[5px]"
      @click="handleOutsideClick"
    >
      <motion.div
        :initial="{ opacity: 0, scale: 0.6, translateY: 50 }"
        :animate="{ opacity: 1, scale: 1, translateY: 0 }"
        :exit="{ opacity: 0, scale: 0.6 }"
        :transition="{
          duration: 0.2,
          delay: 0,
          ease: 'easeOut',
        }"
      >
        <div
          class="border w-full max-w-[500px] min-w-[350px] absolute left-[50%] top-[50%] -translate-[50%] bg-white px-6 py-4 pt-8"
          ref="modalInner"
          @click.stop
        >
          <button
            class="absolute top-2 right-2 cursor-pointer hover:text-red-500"
            @click="closeModal()"
          >
            <X />
          </button>
          <h3 class="text-3xl text-center mb-4">
            <slot name="header"></slot>
          </h3>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </motion.div>
    </div>
  </Teleport>
</template>

<script setup>
import { X } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'
import { motion } from 'motion-v'

// const props = defineProps(['open'])
const emit = defineEmits(['close'])
const modalInner = ref(null)
const props = defineProps({
  open: Boolean,
})

const handleOutsideClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && props.open) {
    closeModal()
  }
}

const closeModal = () => {
  emit('close')
}

onMounted(() => document.addEventListener('keydown', handleKeydown))

onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
</style>
