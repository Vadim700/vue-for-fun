<template>
  <aside
    class="border-amber-300/70 from-amber-50 via-amber-100 to-amber-200 shadow-card min-w-0 self-start rounded-2xl border bg-gradient-to-b p-3 md:sticky md:top-24"
  >
    <p
      class="hidden px-3 pt-1 pb-2 text-[10px] font-extrabold tracking-[0.22em] text-amber-800/80 uppercase md:block"
    >
      Sections
    </p>

    <ul class="no-scrollbar flex gap-1.5 overflow-x-auto md:flex-col md:gap-1 md:overflow-visible">
      <li v-for="link in links" :key="link.path" class="shrink-0 md:shrink">
        <RouterLink :to="link.path" class="aside-link" active-class="aside-link--active">
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

<style scoped>
.aside-link {
  display: flex;
  align-items: center;
  border-radius: 0.9rem;
  padding: 0.6rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  color: #7c4a03;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease;
}

.aside-link:hover {
  background-color: rgb(255 255 255 / 0.6);
  color: #9a3412;
}

.aside-link--active {
  background-color: #fff;
  color: var(--color-brand);
  box-shadow: 0 10px 22px -18px rgb(0 0 0 / 0.7);
}

.aside-link--active:hover {
  background-color: #fff;
  color: var(--color-brand);
}
</style>
