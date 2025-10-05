<template>
  <vContainer :width="1000">
    <h1 class="text-4xl mb-8 flex gap-8 items-center">
      Posts ({{ postsStore.totalPostsLength }})
      <Loader v-if="postsStore.loading" class="animate-spin" />
    </h1>
    <PostsList />
  </vContainer>
</template>

<script setup>
import PostsList from '@/components/posts/PostsList.vue'
import { usePostsStore } from '@/stores/postsStore'
import vContainer from '@/components/shared/vContainer.vue'
import { Loader } from 'lucide-vue-next'

const postsStore = usePostsStore()
</script>

<style scoped></style>
