<template>
  <aside class="aside py-4">
    <ul class="aside__list flex flex-col">
      <li
        v-for="link in links"
        :key="link.path"
        class="aside__item first:border-t-2 border-b-2 border-zinc-400 uppercase"
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
