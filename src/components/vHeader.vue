<template>
  <header
    class="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(135deg,#a80f16_0%,#bb1017_45%,#8a0d12_100%)] text-white shadow-[0_12px_30px_-20px_rgb(0_0_0/0.9)]"
  >
    <div
      class="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 lg:h-20 lg:px-12"
    >
      <RouterLink
        to="/"
        class="group flex shrink-0 items-center gap-3"
        aria-label="Vue for Fun — home"
      >
        <span
          class="bg-accent text-brand grid h-9 w-9 place-content-center rounded-xl text-lg font-black shadow-[inset_0_-2px_0_rgb(0_0_0/0.15)] transition duration-200 group-hover:scale-105 lg:h-10 lg:w-10"
          aria-hidden="true"
        >
          V
        </span>
        <span class="flex flex-col leading-none">
          <span class="text-base font-black tracking-tight sm:text-lg">vue for fun</span>
          <span class="text-accent mt-1 text-[10px] font-extrabold tracking-[0.25em] uppercase">
            playground
          </span>
        </span>
      </RouterLink>

      <nav class="hidden md:block" aria-label="Main navigation">
        <ul class="flex items-center gap-1">
          <li v-for="item in menu" :key="item.link">
            <RouterLink :to="item.link" class="nav-link" active-class="nav-link--active">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <a
          href="https://github.com/Vadim700/vue-for-fun"
          target="_blank"
          rel="noopener noreferrer"
          class="grid h-10 w-10 place-content-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
          aria-label="GitHub repository"
        >
          <Github :size="20" />
        </a>

        <button
          type="button"
          class="grid h-10 w-10 place-content-center rounded-full text-white/90 transition hover:bg-white/10 md:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-navigation"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav
        v-if="mobileOpen"
        id="mobile-navigation"
        class="border-t border-white/10 bg-[#8a0d12]/98 backdrop-blur md:hidden"
        aria-label="Mobile navigation"
      >
        <ul class="grid gap-1 px-4 py-3">
          <li v-for="item in menu" :key="item.link">
            <RouterLink
              :to="item.link"
              class="mobile-link"
              active-class="mobile-link--active"
              @click="mobileOpen = false"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { Github, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const mobileOpen = ref(false)

const menu = [
  { label: 'Posts', link: '/posts' },
  { label: 'Todos', link: '/todos' },
  { label: 'OnlyCSS', link: '/onlycss' },
  { label: 'UI', link: '/ui' },
  { label: 'FunJS', link: '/funjs' },
  { label: 'Gallery', link: '/gallery' },
]

// Close the menu on every navigation and on Escape
watch(
  () => route.fullPath,
  () => (mobileOpen.value = false),
)

const handleKeydown = (event) => {
  if (event.key === 'Escape') mobileOpen.value = false
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.nav-link {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.5rem 0.85rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgb(255 255 255 / 0.78);
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}

.nav-link:hover {
  color: #fff;
  background-color: rgb(255 255 255 / 0.1);
}

.nav-link--active {
  color: var(--color-brand);
  background-color: var(--color-accent);
  box-shadow: 0 6px 16px -8px rgb(0 0 0 / 0.6);
}

.nav-link--active:hover {
  color: var(--color-brand);
  background-color: var(--color-accent);
}

.mobile-link {
  display: block;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgb(255 255 255 / 0.82);
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}

.mobile-link:hover {
  background-color: rgb(255 255 255 / 0.1);
  color: #fff;
}

.mobile-link--active {
  background-color: var(--color-accent);
  color: var(--color-brand);
}

.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
