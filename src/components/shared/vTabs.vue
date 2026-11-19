<template>
  <section class="mt-10 w-full">
    <div class="border-ink/10 flex items-center gap-1 border-b" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        class="tab-button"
        :class="{ 'tab-button--active': activeTab === tab.id }"
        :aria-selected="activeTab === tab.id"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="border-ink/5 mt-4 overflow-auto rounded-xl border bg-slate-50 p-4" role="tabpanel">
      <pre
        v-if="activeTab === 'html'"
        class="text-[13px] leading-relaxed"
      ><code class="hljs language-xml" v-html="highlightedHtml"></code></pre>
      <pre
        v-else
        class="text-[13px] leading-relaxed"
      ><code class="hljs language-css" v-html="highlightedCss"></code></pre>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { escapeCode, highlightToHtml } from '@/lib/highlight'

const props = defineProps({
  html: {
    type: String,
    default: '',
  },
  css: {
    type: String,
    default: '',
  },
})

const tabs = [
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
]

const activeTab = ref('html')

// Show escaped code immediately, then swap in the highlighted version once ready
const highlightedHtml = ref(escapeCode(props.html))
const highlightedCss = ref(escapeCode(props.css))

let renderId = 0

const render = async () => {
  const currentId = ++renderId

  const [html, css] = await Promise.all([
    highlightToHtml(props.html, 'xml'),
    highlightToHtml(props.css, 'css'),
  ])

  if (currentId !== renderId) return

  highlightedHtml.value = html || escapeCode(props.html)
  highlightedCss.value = css || escapeCode(props.css)
}

onMounted(render)
watch(() => [props.html, props.css], render)
</script>

<style scoped>
.tab-button {
  position: relative;
  padding: 0.5rem 0.9rem;
  border: none;
  background: transparent;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #90a0b7;
  cursor: pointer;
  transition: color 0.15s ease;
}

.tab-button::after {
  content: '';
  position: absolute;
  right: 0.5rem;
  bottom: -1px;
  left: 0.5rem;
  height: 3px;
  border-radius: 9999px 9999px 0 0;
  background: transparent;
  transition: background-color 0.15s ease;
}

.tab-button:hover {
  color: var(--color-brand);
}

.tab-button--active {
  color: var(--color-brand);
}

.tab-button--active::after {
  background: var(--color-brand);
}
</style>
