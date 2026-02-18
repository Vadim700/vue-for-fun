<template>
  <section class="tabs w-full">
    <div class="tabs__header flex gap-8 border-b border-zinc-300 pb-3">
      <button
        ref="htmlBtn"
        @click="setActiveTab($event)"
        class="tabs__button uppercase cursor-pointer"
        :class="{ 'text-red-500': activeTab === 'html' }"
      >
        html
      </button>
      <button
        @click="setActiveTab($event)"
        class="tabs__button uppercase cursor-pointer"
        :class="{ 'text-red-500': activeTab === 'css' }"
      >
        css
      </button>
      <span
        class="tabs__thumb"
        :style="{ width: boundingClientRect.width + 'px', left: boundingClientRect.left + 'px' }"
      >
      </span>
    </div>
    <div class="tabs__content py-4 overflow-auto">
      <article v-if="activeTab === 'html'" ref="htmlBlock">
        <pre><code v-html="escapedHtml"></code></pre>
      </article>
      <article v-else ref="cssBlock">
        <pre><code v-html="escapedCss"></code></pre>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = defineProps({ html: String, css: String })

const activeTab = ref('html')
const htmlBtn = ref(null)
const boundingClientRect = ref({ width: 0, left: 0 })
const htmlBlock = ref(null)
const cssBlock = ref(null)

const escapedHtml = computed(() => (props.html ? escapeCode(props.html) : ''))
const escapedCss = computed(() => (props.css ? escapeCode(props.css) : ''))

const setActiveTab = (e) => {
  activeTab.value = e.currentTarget.textContent.trim()

  const { clientWidth, offsetLeft } = e.currentTarget

  updateUnderlinePosition(clientWidth, offsetLeft)
  nextTick(() => highlightCode())
}

const updateUnderlinePosition = (width, left) => {
  boundingClientRect.value.width = width
  boundingClientRect.value.left = left
}

const highlightCode = () => {
  if (htmlBlock.value) {
    const codeElement = htmlBlock.value.querySelector('code')
    if (codeElement) {
      hljs.highlightElement(codeElement)
    }
  }

  if (cssBlock.value) {
    const codeElement = cssBlock.value.querySelector('code')
    if (codeElement) {
      hljs.highlightElement(codeElement)
    }
  }
}

onMounted(() => {
  const width = htmlBtn.value.clientWidth
  updateUnderlinePosition(width, 0)

  nextTick(() => highlightCode())
})

const escapeCode = (text) => {
  if (!text.trim()) return

  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
</script>

<style scoped lang="scss">
.tabs {
  &__header {
    position: relative;
  }

  &__thumb {
    display: inline-block;
    position: absolute;
    height: 4px;
    bottom: -1px;
    background-color: red;
    transition: all 0.2s;
  }

  &__button {
  }
}
</style>
