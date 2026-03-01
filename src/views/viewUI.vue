<template>
  <div class="grid grid-cols-4 gap-8">
    <Aside :links="links" />
    <div
      class="grid col-span-3"
      :class="{ 'grid-rows-[300px_1fr]': !isUiPage, 'grid-rows-[auto_1fr_4fr': isUiPage }"
    >
      <h1 v-if="isUiPage" class="text-4xl my-6 text-center text-red-800 uppercase font-bold">
        Reusable component library
      </h1>

      <div v-if="isUiPage" class="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-3">
        <RouterLink
          to="/ui/tooltip"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <Tooltip class="pt-10" :title="'Helper text'" :active="true" />
          <h3 class="text-3xl">Tooltip</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink
          to="/ui/elements"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <div class="grid grid-rows-3 grid-cols-2 grid-flow-col m-auto gap-x-8 gap-y-4">
            <Radio :title="'Default'" />
            <Radio :title="'Selected'" :checked="true" />
            <Radio :title="'Desabled'" :disabled="true" />
            <Checkbox :title="'Default'" />
            <Checkbox :title="'Checked'" :checked="true" />
            <Checkbox :title="'Disabled'" :disabled="true" :checked="true" />
          </div>
          <h3 class="text-3xl">Form Elements</h3>
          <span class="text-xl">Element</span>
        </RouterLink>
        <RouterLink
          to="/ui/calendar"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <h3 class="text-3xl">Calendar</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink
          to="/ui/modal"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <h3 class="text-3xl">Modal</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink
          to="/ui/histogram"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <h3 class="text-3xl">Histogram</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink
          to="/ui/avatar"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <h3 class="text-3xl">Avatar</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
      </div>

      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Tooltip from '@/components/ui/Tooltip.vue'
import Aside from '../components/vAside.vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Checkbox from '@/components/ui/Checkbox.vue'
import Radio from '@/components/ui/Radio.vue'
import Switcher from '@/components/ui/Switcher.vue'

const router = useRouter()
const isUiPage = ref(router.currentRoute.value.path === '/ui')

const links = [
  { path: '/ui/tooltip', label: 'tooltip' },
  { path: '/ui/elements', label: 'form elements' },
  { path: '/ui/calendar', label: 'calendar' },
  { path: '/ui/modal', label: 'modal' },
  { path: '/ui/histogram', label: 'histogram' },
  { path: '/ui/avatar', label: 'avatar' },
]

// Следим за изменением URL
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    isUiPage.value = newPath === '/ui'
  },
  { immediate: true },
)
</script>
