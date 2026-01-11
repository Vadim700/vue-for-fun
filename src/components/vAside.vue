<template>
  <aside
    class="py-4 px-4 rounded-2xl bg-gradient-to-b from-[#fef9c2] via-yellow-200 to-[#fdc800] h-[85vh] min-w-50"
    :class="$attrs.class"
  >
    <ul class="flex flex-col">
      <li
        v-for="link in links"
        :key="link.path"
        class="not-last:border-b-2 border-zinc-400 uppercase text-xl px-4"
      >
        <RouterLink
          :to="link.path"
          class="block w-full h-full py-4 hover:text-red-700"
          active-class="text-red-500"
        >
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  links: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped lang="scss"></style>
