<template>
  <div>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-[210px_minmax(0,1fr)]">
      <Aside :links="links" />
      <div class="min-w-0">
        <RouterView />
      </div>
    </div>

    <Teleport to="body">
      <Transition name="drawer">
        <div
          v-if="openSide"
          class="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-[2px]"
          role="presentation"
          @click.self="openSide = false"
        >
          <aside
            class="flex h-full w-full max-w-[460px] flex-col bg-[#17181c] text-stone-100 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="CSS code for the selected background"
          >
            <header
              class="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4"
            >
              <div>
                <p class="text-[10px] font-extrabold tracking-[0.22em] text-amber-400 uppercase">
                  CSS background
                </p>
                <h2 class="mt-1 text-lg font-extrabold">Ready to copy</h2>
              </div>

              <button
                type="button"
                class="grid h-9 w-9 place-content-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close panel"
                @click="openSide = false"
              >
                <X :size="20" />
              </button>
            </header>

            <div class="flex-1 space-y-4 overflow-auto p-4">
              <div
                class="h-24 rounded-xl border border-white/10"
                :style="store.bg"
                aria-hidden="true"
              ></div>

              <pre
                class="overflow-x-auto rounded-xl bg-white p-4 text-[12.5px] leading-relaxed text-slate-800"
              ><code class="hljs language-css" v-html="highlighted"></code></pre>
            </div>

            <footer class="border-t border-white/10 p-4">
              <button
                type="button"
                class="bg-accent text-brand hover:bg-accent/90 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition"
                @click="copyToClipboard"
              >
                <Check v-if="isCopied" :size="16" />
                <Copy v-else :size="16" />
                {{ isCopied ? 'Copied' : 'Copy CSS' }}
              </button>
            </footer>
          </aside>
        </div>
      </Transition>
    </Teleport>

    <Transition name="toast">
      <p
        v-if="showNotification"
        class="toast fixed bottom-6 left-1/2 z-[60] rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-2xl"
        role="status"
      >
        CSS copied to clipboard
      </p>
    </Transition>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Aside from '@/components/vAside.vue'
import { useBgStore } from '@/stores/bgs'
import { Check, Copy, X } from 'lucide-vue-next'
import { formatObjectToCSS } from '@/use/useFormatObjectToCss'
import { escapeCode, highlightToHtml } from '@/lib/highlight'

const store = useBgStore()

const openSide = ref(false)
const highlighted = ref('')
const isCopied = ref(false)
const showNotification = ref(false)

let copyTimeout = null
let highlightToken = 0

const cssText = computed(() => formatObjectToCSS(store.bg))

const links = [
  { path: '/onlycss/bgs', label: "BG's" },
  { path: '/onlycss/slider', label: 'Slider' },
  { path: '/onlycss/scroll', label: 'scroll' },
]

// A tile click updates the store — open the panel
watch(
  () => store.bg,
  () => {
    openSide.value = true
  },
)

// Panel is open — highlight the current CSS
watch(
  [openSide, () => store.bg],
  async ([isOpen]) => {
    if (!isOpen) return

    const token = ++highlightToken
    const code = cssText.value

    isCopied.value = false
    highlighted.value = escapeCode(code)

    const result = await highlightToHtml(code, 'css')
    if (token === highlightToken) highlighted.value = result || escapeCode(code)
  },
  { immediate: true },
)

watch(openSide, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const copyToClipboard = async () => {
  if (!cssText.value) return

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(cssText.value)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = cssText.value
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    }

    isCopied.value = true
    showNotification.value = true

    clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      isCopied.value = false
      showNotification.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy CSS', error)
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && openSide.value) openSide.value = false
}

onMounted(() => document.addEventListener('keydown', handleKeydown))

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  clearTimeout(copyTimeout)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease;
}

.drawer-enter-active aside,
.drawer-leave-active aside {
  transition: transform 0.25s cubic-bezier(0.2, 0.7, 0.3, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from aside,
.drawer-leave-to aside {
  transform: translateX(100%);
}

.toast {
  transform: translateX(-50%);
}

.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}

.toast-enter-to,
.toast-leave-from {
  transform: translateX(-50%);
}
</style>
