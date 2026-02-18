<template>
  <div class="grid grid-cols-4 gap-8">
    <Aside :links="links" />
    <div class="grid grid-rows-[auto_1fr] col-span-3">
      <h1 class="text-4xl my-6 text-center text-red-800 uppercase font-bold">
        Reusable component library
      </h1>

      <div v-if="isUiPage" class="grid grid-cols-[repeat(auto-fill,minmax(30%,1fr))] gap-3">
        <RouterLink to="/ui/tooltip" class="border rounded-xl aspect-square p-2 text-center">
          <h3 class="text-3xl">Tooltip</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink to="/ui/elements" class="border rounded-xl aspect-square p-2 text-center">
          <h3 class="text-3xl">Form Elements</h3>
          <span class="text-xl">Element</span>
        </RouterLink>
        <RouterLink to="/ui/calendar" class="border rounded-xl aspect-square p-2 text-center">
          <h3 class="text-3xl">Calendar</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink to="/ui/modal" class="border rounded-xl aspect-square p-2 text-center">
          <h3 class="text-3xl">Molad</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink to="/ui/histogram" class="border rounded-xl aspect-square p-2 text-center">
          <h3 class="text-3xl">Histogram</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
        <RouterLink to="/ui/avatar" class="border rounded-xl aspect-square p-2 text-center">
          <h3 class="text-3xl">Avatar</h3>
          <span class="text-xl">Container</span>
        </RouterLink>
      </div>

      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Aside from '../components/vAside.vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

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
