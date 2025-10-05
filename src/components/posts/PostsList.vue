<template>
  <div class="list">
    <PostItem v-for="post in postsStore.posts" :key="post.id" :post="post" />
    <button
      class="border rounded-sm p-2 min-h-[200px] grid place-content-center cursor-pointer group"
    >
      <Plus
        size="120"
        stroke-width="1"
        class="group-hover:text-red-500 group-hover:scale-[1.3] transition-all duration-200 ease-in-out"
      />
    </button>
  </div>
</template>

<script setup>
import { Plus } from 'lucide-vue-next'
import PostItem from './PostItem.vue'
import { usePostsStore } from '@/stores/postsStore'

const postsStore = usePostsStore()
const postsList = postsStore.getPosts()
</script>

<style scoped lang="scss">
.list {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
