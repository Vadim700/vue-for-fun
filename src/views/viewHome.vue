<template>
  <div class="space-y-14 sm:space-y-20">
    <!-- Hero -->
    <section
      class="border-brand/10 shadow-card relative overflow-hidden rounded-3xl border bg-white/75 px-5 py-10 backdrop-blur sm:px-10 sm:py-14 lg:px-14"
    >
      <div
        class="bg-accent/25 pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        class="bg-brand/10 pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div
        class="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
      >
        <div>
          <p class="eyebrow rise" style="--i: 0">Pet project · Vue 3</p>

          <h1
            class="rise mt-4 text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl xl:text-6xl"
            style="--i: 1"
          >
            A playground
            <br class="hidden sm:block" />
            where <span class="text-brand">experiments</span> live
          </h1>

          <p class="text-ink-soft rise mt-6 max-w-xl text-base sm:text-lg" style="--i: 2">
            Posts, a kanban board, a UI kit, CSS art and tiny JavaScript tricks — all in one place.
            The project grows as a sandbox: I try things and keep what works.
          </p>

          <div class="rise mt-8 flex flex-wrap gap-3" style="--i: 3">
            <RouterLink to="/ui" class="btn btn-primary">
              Open UI kit
              <ArrowRight :size="16" />
            </RouterLink>
            <RouterLink to="/onlycss/bgs" class="btn btn-ghost">
              <Palette :size="16" />
              Browse CSS backgrounds
            </RouterLink>
          </div>

          <dl
            class="rise mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4"
            style="--i: 4"
          >
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse">
              <dt class="text-ink-soft text-xs font-bold uppercase">{{ stat.label }}</dt>
              <dd class="text-2xl font-black">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>

        <div class="rise relative hidden lg:block" style="--i: 3" aria-hidden="true">
          <div class="bg-ink shadow-float relative rounded-3xl p-6 text-stone-100">
            <div class="flex gap-1.5">
              <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
            </div>
            <pre
              class="mt-5 overflow-x-auto font-mono text-[13px] leading-relaxed text-stone-300"
            ><code>{{ snippet }}</code></pre>
          </div>

          <div
            class="bg-accent text-brand absolute -top-6 -left-6 grid h-20 w-20 rotate-[-8deg] place-content-center rounded-2xl text-2xl font-black shadow-lg"
          >
            &lt;/&gt;
          </div>
          <div
            class="shadow-float border-ink/5 text-ink absolute -right-5 -bottom-7 rotate-3 rounded-2xl border bg-white px-4 py-3 text-sm font-bold"
          >
            48 CSS backgrounds ✨
          </div>
        </div>
      </div>
    </section>

    <!-- Sections -->
    <section aria-labelledby="sections-title">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="sections-title" class="text-2xl font-black tracking-tight sm:text-3xl">
            Project sections
          </h2>
          <p class="text-ink-soft mt-1">Six directions — from layout to API experiments.</p>
        </div>
        <span class="chip">{{ cards.length }} sections</span>
      </div>

      <ul class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <li
          v-for="(card, index) in cards"
          :key="card.to"
          class="rise"
          :style="{ '--i': index + 1 }"
        >
          <RouterLink
            :to="card.to"
            class="group border-ink/5 shadow-card hover:shadow-float hover:border-brand/20 flex h-full flex-col gap-3 rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-1"
          >
            <span
              class="grid h-11 w-11 place-content-center rounded-xl"
              :class="card.tone"
              aria-hidden="true"
            >
              <component :is="card.icon" :size="22" />
            </span>

            <h3 class="group-hover:text-brand text-lg font-extrabold transition-colors">
              {{ card.title }}
            </h3>
            <p class="text-ink-soft text-sm leading-relaxed">{{ card.text }}</p>

            <span class="text-brand mt-auto inline-flex items-center gap-1 pt-2 text-sm font-bold">
              Open
              <ArrowRight
                :size="16"
                class="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </RouterLink>
        </li>
      </ul>
    </section>

    <!-- Stack -->
    <section
      class="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <div>
        <h2 class="text-xl font-extrabold">Built with</h2>
        <p class="text-ink-soft mt-1 text-sm">
          Vue 3 (Composition API), Vite, Pinia, Tailwind CSS 4, Motion and highlight.js — with heavy
          parts loaded lazily.
        </p>
      </div>
      <ul class="flex flex-wrap gap-2">
        <li v-for="tech in stack" :key="tech" class="chip">{{ tech }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Blocks, Camera, Images, ListTodo, Palette, Sparkles } from 'lucide-vue-next'

const snippet = `const fun = createApp({
  sections: [
    'posts', 'todos', 'onlycss',
    'ui', 'funjs', 'gallery',
  ],
})

fun.mount('#app')`

const stats = [
  { value: '6', label: 'sections' },
  { value: '48', label: 'backgrounds' },
  { value: '9', label: 'posts' },
  { value: '4', label: 'columns' },
]

const cards = [
  {
    to: '/posts',
    title: 'Posts',
    text: 'An Instagram-style grid: the active frame takes 2×2 while the rest reflow.',
    icon: Images,
    tone: 'bg-brand/10 text-brand',
  },
  {
    to: '/todos',
    title: 'Todos',
    text: 'A kanban board with drag & drop, four columns and localStorage persistence.',
    icon: ListTodo,
    tone: 'bg-emerald-100 text-emerald-700',
  },
  {
    to: '/onlycss',
    title: 'OnlyCSS',
    text: '48 gradient patterns, a 3D carousel and scroll animations — no JS.',
    icon: Palette,
    tone: 'bg-accent/25 text-amber-800',
  },
  {
    to: '/ui',
    title: 'UI Kit',
    text: 'Tooltip, calendar, modal, histogram and custom form controls with source code.',
    icon: Blocks,
    tone: 'bg-sky-100 text-sky-700',
  },
  {
    to: '/funjs',
    title: 'FunJS',
    text: 'Experiments with data collections and cookies — short notes with practice.',
    icon: Sparkles,
    tone: 'bg-violet-100 text-violet-700',
  },
  {
    to: '/gallery',
    title: 'Gallery',
    text: 'A photo collection with lazy loading and an adaptive grid.',
    icon: Camera,
    tone: 'bg-rose-100 text-rose-700',
  },
]

const stack = ['Vue 3', 'Vite', 'Pinia', 'Tailwind CSS 4', 'Motion', 'highlight.js']
</script>

<style scoped>
.rise {
  animation: rise 0.5s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  animation-delay: calc(var(--i, 0) * 70ms);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
