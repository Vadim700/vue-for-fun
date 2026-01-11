<template>
  <div class="h-full relative">
    <Aside :links="links" class="fixed" />
    <div class="overflow-auto pl-60">
      <RouterView></RouterView>
    </div>
    <AnimatePresence>
      <Motion
        v-if="openSide"
        :initial="{ x: 450 }"
        :animate="{ x: -50 }"
        :exit="{ x: 450 }"
        :transition="{ duration: 0.2 }"
        class="bg-amber-100 backdrop-blur-sm h-full fixed top-0 -right-[50px] py-10 pt-20 px-8 w-[30%] z-10 overflow-auto"
        :style="bg"
        v-highlight
      >
        <button
          class="cursor-pointer absolute top-4 right-4 hover:text-red-500 z-3 grid place-content-center w-12 h-12 rounded-full bg-white"
          @click="openSide = false"
        >
          <X size="36" />
        </button>
        <pre class="relative bg-white rounded-lg p-4 pt-12 wrap-anywhere whitespace-normal text-sm">
          <button
            @click="copyToClipboard"
            class="absolute top-4 right-4 bg-amber-700 hover:bg-amber-800 text-white rounded-sm p-2 py-1 uppercase cursor-pointer transition-colors flex items-center gap-2"
            :class="{ 'bg-green-600 hover:bg-green-700': isCopied }"
            :title="isCopied ? 'Скопировано' : 'Копировать'"
          >
            <Copy v-if="!isCopied" :size="16" />
            <Check v-else :size="16" />
            <span>{{ isCopied ? 'Copied!' : 'Copy' }}</span>
          </button>
          <code class="js rounded-md">{{ bg }}</code>
        </pre>
        <Motion
          v-if="showNotification"
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
          :exit="{ opacity: 0, y: 10 }"
          class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Copied to the clipboard
        </Motion>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script setup>
import { watch, ref, onUnmounted, onMounted } from 'vue'
import Aside from '@/components/vAside.vue'
import { useRouter } from 'vue-router'
import { Motion, AnimatePresence } from 'motion-v'
import { useBgStore } from '@/stores/bgs'
import { X, Copy, Check } from 'lucide-vue-next'
import { formatObjectToCSS } from '../use/useFormatObjectToCss'

const router = useRouter()
const store = useBgStore()

let openSide = ref(false)
const bg = ref(store.bg)
const isCopied = ref(false)
const showNotification = ref(false)
let copyTimeout = null

// Функция для копирования в буфер обмена
const copyToClipboard = async () => {
  try {
    const cssText = formatObjectToCSS(bg.value)

    if (!cssText) {
      console.warn('Нет CSS стилей для копирования')
      return
    }

    await navigator.clipboard.writeText(cssText)

    isCopied.value = true
    showNotification.value = true

    clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      isCopied.value = false
      showNotification.value = false
    }, 2000)
  } catch (err) {
    console.error('Ошибка копирования: ', err)
  }
}

watch(
  () => store.bg,
  (newCurrent) => {
    if (newCurrent) {
      openSide.value = true
      bg.value = newCurrent
      isCopied.value = false
    }
  },
)

const links = [
  {
    path: '/onlycss/bgs',
    label: "BG's",
  },
  {
    path: '/onlycss/slider',
    label: 'Slider',
  },
  {
    path: '/onlycss/payments',
    label: 'payments',
  },
]

onUnmounted(() => {
  clearTimeout(copyTimeout)
})

router.push({ path: '/onlycss/bgs' })
</script>

<style scoped>
.wrap-anywhere {
  overflow-wrap: anywhere;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.test {
}
</style>
