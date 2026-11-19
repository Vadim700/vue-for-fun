<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[rgb(33_36_41/0.55)] p-4 backdrop-blur-[6px]"
        role="presentation"
        @click.self="close"
      >
        <div
          ref="dialogRef"
          role="dialog"
          aria-modal="true"
          :aria-label="ariaLabel"
          class="modal-panel bg-paper relative w-full max-w-lg rounded-2xl p-6 shadow-2xl sm:p-8"
        >
          <button
            type="button"
            class="text-ink-soft hover:bg-ink/5 hover:text-brand absolute top-4 right-4 grid h-9 w-9 place-content-center rounded-full transition"
            aria-label="Close"
            @click="close"
          >
            <X :size="18" />
          </button>

          <h3 v-if="$slots.header" class="mb-5 pr-10 text-2xl font-extrabold">
            <slot name="header" />
          </h3>

          <slot />
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: 'Dialog',
  },
})

const emit = defineEmits(['close'])

const dialogRef = ref(null)
const previouslyFocused = ref(null)
let previousOverflow = ''

const close = () => emit('close')

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      previouslyFocused.value = document.activeElement
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      await nextTick()
      const field = dialogRef.value?.querySelector(
        'input:not([disabled]), textarea:not([disabled]), select:not([disabled])',
      )
      const fallback = dialogRef.value?.querySelector('button:not([disabled]), a[href]')
      ;(field ?? fallback)?.focus()
    } else {
      document.body.style.overflow = previousOverflow
      previouslyFocused.value?.focus?.()
    }
  },
)

const handleKeydown = (event) => {
  if (!props.open) return

  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key !== 'Tab') return

  // Keep focus inside the dialog
  const focusable = Array.from(
    dialogRef.value?.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ) ?? [],
  ).filter((element) => element.offsetParent !== null)

  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(() => document.addEventListener('keydown', handleKeydown))

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.18s ease;
}

.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition:
    transform 0.18s ease,
    opacity 0.18s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  opacity: 0;
  transform: translateY(12px) scale(0.97);
}
</style>
