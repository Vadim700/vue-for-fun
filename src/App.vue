<template>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <Header />

  <main id="main-content" class="w-full flex-1">
    <div class="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 sm:py-10 lg:px-12">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <!--
            The wrapper guarantees Transition always has a single element root,
            even when a page renders a fragment (e.g. ViewOnlyCss).
          -->
          <div :key="route.matched[0]?.path ?? route.path">
            <component :is="Component" />
          </div>
        </Transition>
      </RouterView>
    </div>
  </main>

  <footer class="border-t border-black/5 bg-white/50">
    <div
      class="text-ink-soft mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"
    >
      <p>© {{ year }} Vue for Fun — a Vue 3 pet project</p>
      <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span>Vue 3</span>
        <span aria-hidden="true">·</span>
        <span>Vite</span>
        <span aria-hidden="true">·</span>
        <span>Pinia</span>
        <span aria-hidden="true">·</span>
        <span>Tailwind CSS</span>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '@/components/vHeader.vue'

const route = useRoute()
const year = new Date().getFullYear()
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
