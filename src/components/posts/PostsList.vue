<template>
  <div class="relative w-full" :class="isDesktop ? 'aspect-[3/1]' : 'aspect-[3/4]'">
    <button
      v-for="(item, index) in items"
      :key="item.id"
      type="button"
      class="post-tile group absolute p-1 focus-visible:outline-offset-4"
      :class="{ 'z-10': item.active }"
      :style="tileStyle(index, item)"
      :aria-pressed="item.active"
      :aria-label="`Show post ${item.id}`"
      @click="select(item.id)"
    >
      <span
        class="relative block h-full w-full overflow-hidden rounded-xl bg-black/10 transition-[box-shadow] duration-300"
        :class="{ 'shadow-float ring-2 ring-white/80': item.active }"
      >
        <img
          :src="sources[item.id]"
          :alt="`Plant Shop promo post #${item.id}`"
          :loading="item.active ? 'eager' : 'lazy'"
          :fetchpriority="item.active ? 'high' : 'auto'"
          decoding="async"
          class="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        />

        <span
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <span
          class="bg-paper/90 text-brand absolute bottom-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-extrabold"
        >
          0{{ item.id }}
        </span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useMediaQuery } from '@/use/useMediaQuery'

import post1 from '@/assets/optimized/post-1.jpg'
import post2 from '@/assets/optimized/post-2.jpg'
import post3 from '@/assets/optimized/post-3.jpg'
import post4 from '@/assets/optimized/post-4.jpg'
import post5 from '@/assets/optimized/post-5.jpg'
import post6 from '@/assets/optimized/post-6.jpg'
import post7 from '@/assets/optimized/post-7.jpg'
import post8 from '@/assets/optimized/post-8.jpg'
import post9 from '@/assets/optimized/post-9.jpg'

const sources = {
  1: post1,
  2: post2,
  3: post3,
  4: post4,
  5: post5,
  6: post6,
  7: post7,
  8: post8,
  9: post9,
}

// [column, row] positions for the 6×2 desktop grid. The active tile spans 2×2.
const LAYOUTS = {
  1: [
    [0, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ],
  2: [
    [0, 0],
    [1, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [0, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ],
  3: [
    [0, 0],
    [1, 0],
    [2, 0],
    [4, 0],
    [5, 0],
    [0, 1],
    [1, 1],
    [4, 1],
    [5, 1],
  ],
  4: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [5, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [5, 1],
  ],
  // For tiles 5 and 6 the layout depends on the previously active tile
  5: {
    forward: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
    ],
    backward: [
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [0, 0],
      [2, 1],
      [3, 1],
      [4, 1],
      [5, 1],
    ],
  },
  6: {
    forward: [
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [2, 1],
      [0, 0],
      [3, 1],
      [4, 1],
      [5, 1],
    ],
    backward: [
      [0, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [0, 1],
      [1, 0],
      [3, 1],
      [4, 1],
      [5, 1],
    ],
  },
  7: [
    [0, 0],
    [1, 0],
    [4, 0],
    [5, 0],
    [0, 1],
    [1, 1],
    [2, 0],
    [4, 1],
    [5, 1],
  ],
  8: [
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 0],
    [5, 1],
  ],
  9: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 0],
  ],
}

const items = ref(
  Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    active: index === 0,
  })),
)

const previousActiveId = ref(1)
const isDesktop = useMediaQuery('(min-width: 640px)')

const activeId = computed(() => items.value.find((item) => item.active)?.id ?? 1)

const desktopLayout = computed(() => {
  const id = activeId.value

  if (id === 5) {
    return previousActiveId.value <= 5 ? LAYOUTS[5].forward : LAYOUTS[5].backward
  }

  if (id === 6) {
    return previousActiveId.value < 5 ? LAYOUTS[6].forward : LAYOUTS[6].backward
  }

  return LAYOUTS[id]
})

/**
 * Mobile layout: 3 columns × 4 rows, active tile at the top-left (2×2).
 * The rest fill the free cells row by row, so every change still animates.
 */
const mobileLayout = computed(() => {
  const columns = 3
  const rows = 4
  const occupied = Array.from({ length: rows }, () => Array(columns).fill(false))
  const positions = []
  const activeIndex = items.value.findIndex((item) => item.active)

  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < 2; col += 1) occupied[row][col] = true
  }
  positions[activeIndex] = { col: 0, row: 0 }

  let row = 0
  let col = 0

  items.value.forEach((_, index) => {
    if (index === activeIndex) return

    while (row < rows && occupied[row][col]) {
      col += 1
      if (col >= columns) {
        col = 0
        row += 1
      }
    }

    positions[index] = { col, row }
    if (row < rows) occupied[row][col] = true
  })

  return positions
})

const tileStyle = (index, item) => {
  const columns = isDesktop.value ? 6 : 3
  const rows = isDesktop.value ? 2 : 4
  const span = item.active ? 2 : 1

  const cell = isDesktop.value
    ? { col: desktopLayout.value[index]?.[0] ?? 0, row: desktopLayout.value[index]?.[1] ?? 0 }
    : (mobileLayout.value[index] ?? { col: 0, row: 0 })

  return {
    left: `${(cell.col / columns) * 100}%`,
    top: `${(cell.row / rows) * 100}%`,
    width: `${(span / columns) * 100}%`,
    height: `${(span / rows) * 100}%`,
  }
}

const select = (id) => {
  const current = items.value.find((item) => item.active)
  if (current && current.id === id) return

  if (current) previousActiveId.value = current.id
  items.value = items.value.map((item) => ({ ...item, active: item.id === id }))
}
</script>

<style scoped>
.post-tile {
  transition:
    left 0.4s cubic-bezier(0.22, 0.7, 0.3, 1),
    top 0.4s cubic-bezier(0.22, 0.7, 0.3, 1),
    width 0.4s cubic-bezier(0.22, 0.7, 0.3, 1),
    height 0.4s cubic-bezier(0.22, 0.7, 0.3, 1);
}
</style>
