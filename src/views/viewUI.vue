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

      <div v-if="isUiPage" class="grid grid-cols-3 grid-rows-2 gap-3 mx-auto">
        <RouterLink
          to="/ui/tooltip"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <Tooltip class="pt-10" :title="'Helper text'" :active="true" />
          <h3 class="text-2xl">Tooltip</h3>
          <span class="text-lg">Container</span>
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
          <h3 class="text-2xl">Form Elements</h3>
          <span class="text-lg">Element</span>
        </RouterLink>

        <RouterLink
          to="/ui/calendar"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <Calendar :preview="true" class="m-auto" />
          <h3 class="text-2xl">Calendar</h3>
          <span class="text-lg">Container</span>
        </RouterLink>

        <RouterLink
          to="/ui/modal"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <div
            class="p-6 relative before:absolute before:w-full before:h-full before:bg-gray-900 before:left-0 before:top-0 before:opacity-50 select-none"
          >
            <div
              class="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 rounded-md"
            >
              <form action="#" @submit.prevent>
                <div class="mb-2 grid grid-rows-2">
                  <label for="name" class="uppercase text-left">Name</label>
                  <input type="text" id="name" class="border border-zinc-400 rounded-sm" />
                </div>
                <div class="mb-2 grid grid-rows-2">
                  <label for="mail" class="uppercase text-left">Email</label>
                  <input type="text" id="mail" class="border border-zinc-400 rounded-sm" />
                </div>
                <button
                  @click="openModal = false"
                  class="uppercase bg-blue-400 px-10 py-2 text-md text-white w-full rounded-sm hover:bg-blue-500 cursor-pointer transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <h3 class="text-2xl">Modal</h3>
          <span class="text-lg">Container</span>
        </RouterLink>

        <RouterLink
          to="/ui/histogram"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <h3 class="text-2xl">Histogram</h3>
          <span class="text-lg">Container</span>
        </RouterLink>

        <RouterLink
          to="/ui/avatar"
          class="grid grid-rows-[1fr_auto_auto] border rounded-xl aspect-square p-2 text-center"
        >
          <h3 class="text-2xl">Avatar</h3>
          <span class="text-lg">Container</span>
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
import Calendar from '@/components/ui/Calendar.vue'

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
