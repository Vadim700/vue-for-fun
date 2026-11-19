<template>
  <section>
    <header class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="eyebrow">Gallery</p>
        <h1 class="page-title mt-2">Birds & Ice</h1>
        <p class="page-subtitle">
          A small photo collection that grew out of a test page: an adaptive grid, smooth hover
          effects and lazy-loaded images.
        </p>
      </div>
      <span class="chip">{{ photos.length }} photos</span>
    </header>

    <ul
      class="mt-8 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-3 lg:grid-cols-4"
    >
      <li
        v-for="(photo, index) in photos"
        :key="photo.src"
        :class="photo.span"
        class="group relative overflow-hidden rounded-2xl bg-black/5"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          :loading="index < 2 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
          decoding="async"
          class="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
        />

        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span
            class="bg-accent text-brand mb-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase"
          >
            {{ photo.tag }}
          </span>
          <p class="text-sm font-bold text-white drop-shadow">{{ photo.alt }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import bird1 from '@/assets/bird-1.jpg'
import bird2 from '@/assets/bird-2.jpg'
import bird3 from '@/assets/bird-3.jpg'
import bird4 from '@/assets/bird-4.jpg'
import bird5 from '@/assets/bird-5.jpg'
import bird6 from '@/assets/bird-6.jpg'
import bird7 from '@/assets/bird-7.jpg'
import bird8 from '@/assets/bird-8.jpg'
import bird9 from '@/assets/bird-9.jpg'
import bird10 from '@/assets/bird-10.jpg'
import ice from '@/assets/optimized/ice.jpg'
import ice2 from '@/assets/ice-2.jpg'

const photos = [
  { src: bird1, alt: 'Macaw perched on a branch', tag: 'Birds', span: 'col-span-2 row-span-2' },
  { src: bird2, alt: 'Close-up parrot portrait', tag: 'Birds', span: '' },
  { src: bird3, alt: 'Colorful parrot', tag: 'Birds', span: '' },
  {
    src: ice,
    alt: 'Blocks of blue ice under a clear sky',
    tag: 'Landscape',
    span: 'sm:col-span-2',
  },
  { src: bird4, alt: 'Parrot with vivid plumage', tag: 'Birds', span: '' },
  { src: bird5, alt: 'Bird among green leaves', tag: 'Birds', span: '' },
  { src: bird6, alt: 'Parrot on a perch', tag: 'Birds', span: '' },
  { src: bird7, alt: 'Colorful parrot shot', tag: 'Birds', span: '' },
  { src: bird8, alt: 'Parrot looking at the camera', tag: 'Birds', span: '' },
  { src: bird9, alt: 'Bird among foliage', tag: 'Birds', span: '' },
  { src: ice2, alt: 'Ice hummocks at sunset', tag: 'Landscape', span: 'sm:col-span-2' },
  { src: bird10, alt: 'Parrot in its natural habitat', tag: 'Birds', span: '' },
]
</script>
