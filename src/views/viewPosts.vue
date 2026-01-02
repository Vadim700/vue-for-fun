<template>
  <vContainer :width="1000">
    <h1 class="text-4xl mb-2 flex gap-8 items-center justify-center text-white uppercase font-bold">
      Instagram post template
    </h1>
    <span class="text-2xl w-full flex justify-center text-white mb-8">Plant Shop</span>
    <PostsList />
  </vContainer>
</template>

<script setup>
import vContainer from '@/components/shared/vContainer.vue'
import PostsList from '@/components/posts/PostsList.vue'
</script>
