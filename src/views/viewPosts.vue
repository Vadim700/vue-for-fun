<template>
  <vContainer :width="1040">
    <header class="text-center">
      <p class="eyebrow">Instagram layout</p>
      <h1 class="page-title mt-2 uppercase">Plant Shop</h1>
      <p class="page-subtitle mx-auto">
        Nine promo frames in a 6×2 grid. The active post expands to 2×2 while the rest glide into
        place — no layout jumps.
      </p>
    </header>

    <PostsList class="mt-8" />

    <p class="text-ink-soft mt-4 text-center text-sm">Click any frame to make it active</p>
  </vContainer>
</template>

<script setup>
import vContainer from '@/components/shared/vContainer.vue'
import PostsList from '@/components/posts/PostsList.vue'
</script>
