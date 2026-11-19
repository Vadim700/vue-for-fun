<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-[210px_minmax(0,1fr)]">
    <Aside :links="links" />

    <div class="min-w-0">
      <template v-if="isUiPage">
        <header class="text-center">
          <p class="eyebrow">UI Kit</p>
          <h1 class="page-title mt-2">Reusable components</h1>
          <p class="page-subtitle mx-auto">
            A small component library: preview each one live and grab its HTML/CSS from the tabs
            below.
          </p>
        </header>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <RouterLink
            v-for="item in previews"
            :key="item.to"
            :to="item.to"
            class="group border-ink/5 shadow-card hover:shadow-float hover:border-brand/20 flex flex-col rounded-2xl border bg-white p-4 text-center transition duration-300 hover:-translate-y-1"
          >
            <div class="flex flex-1 items-center justify-center py-6">
              <component :is="item.component" v-bind="item.props" />
            </div>
            <h3 class="group-hover:text-brand text-xl font-extrabold transition-colors">
              {{ item.title }}
            </h3>
            <span class="text-ink-soft text-sm">{{ item.kind }}</span>
          </RouterLink>

          <RouterLink
            to="/ui/elements"
            class="group border-ink/5 shadow-card hover:shadow-float hover:border-brand/20 flex flex-col rounded-2xl border bg-white p-4 text-center transition duration-300 hover:-translate-y-1"
          >
            <div class="grid flex-1 grid-cols-2 content-center gap-x-4 gap-y-3 py-6 text-left">
              <Radio title="Default" />
              <Radio title="Selected" :checked="true" />
              <Checkbox title="Default" />
              <Checkbox title="Checked" :checked="true" />
              <Switcher :size="40" />
              <Switcher :size="40" :checked="true" />
            </div>
            <h3 class="group-hover:text-brand text-xl font-extrabold transition-colors">
              Form Elements
            </h3>
            <span class="text-ink-soft text-sm">Element</span>
          </RouterLink>

          <RouterLink
            to="/ui/modal"
            class="group border-ink/5 shadow-card hover:shadow-float hover:border-brand/20 flex flex-col rounded-2xl border bg-white p-4 text-center transition duration-300 hover:-translate-y-1"
          >
            <div
              class="flex flex-1 items-center justify-center rounded-xl bg-slate-900/10 p-6"
              aria-hidden="true"
            >
              <div class="w-full max-w-[170px] rounded-lg bg-white p-3 text-left shadow-lg">
                <div class="mx-auto mb-2 h-2 w-16 rounded bg-zinc-200"></div>
                <div class="mb-2 h-5 rounded border border-zinc-300"></div>
                <div class="mb-2 h-5 rounded border border-zinc-300"></div>
                <div class="h-5 rounded bg-blue-400"></div>
              </div>
            </div>
            <h3 class="group-hover:text-brand mt-2 text-xl font-extrabold transition-colors">
              Modal
            </h3>
            <span class="text-ink-soft text-sm">Container</span>
          </RouterLink>
        </div>
      </template>

      <RouterView v-else />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Tooltip from '@/components/ui/Tooltip.vue'
import Aside from '@/components/vAside.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Radio from '@/components/ui/Radio.vue'
import Switcher from '@/components/ui/Switcher.vue'
import Calendar from '@/components/shared/Calendar.vue'
import Histogram from '@/components/shared/Histogram.vue'
import Avatar from '@/components/shared/Avatar.vue'

const route = useRoute()
const isUiPage = computed(() => route.path === '/ui')

const links = [
  { path: '/ui/tooltip', label: 'tooltip' },
  { path: '/ui/elements', label: 'form elements' },
  { path: '/ui/calendar', label: 'calendar' },
  { path: '/ui/modal', label: 'modal' },
  { path: '/ui/histogram', label: 'histogram' },
  { path: '/ui/avatar', label: 'avatar' },
]

const previews = [
  {
    to: '/ui/tooltip',
    title: 'Tooltip',
    kind: 'Container',
    component: Tooltip,
    props: { title: 'Helper text', active: true },
  },
  {
    to: '/ui/calendar',
    title: 'Calendar',
    kind: 'Container',
    component: Calendar,
    props: { preview: true },
  },
  {
    to: '/ui/histogram',
    title: 'Histogram',
    kind: 'Container',
    component: Histogram,
    props: {},
  },
  {
    to: '/ui/avatar',
    title: 'Avatar',
    kind: 'Element',
    component: Avatar,
    props: {},
  },
]
</script>
