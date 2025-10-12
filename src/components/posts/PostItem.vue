<template>
  <slot>
    <div class="root rounded-sm p-2 relative">
      <button
        @click="deletePost(post.id)"
        class="absolute right-2 top-2 cursor-pointer hover:text-red-500 hover:rotate-90 transition-all ease-in-out duration-200"
      >
        <X />
      </button>
      <h3
        class="text-2xl mb-2 truncate overflow-hidden whitespace-nowrap pr-10 first-letter:uppercase"
      >
        {{ post.title }}
      </h3>

      <p class="first-letter:uppercase">{{ post.body }}</p>
    </div>
  </slot>
</template>

<script setup>
import { X } from 'lucide-vue-next'
import { usePostsStore } from '@/stores/postsStore'
const { deletePost } = usePostsStore()

const props = defineProps({
  post: {
    type: Object,
    required: false,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.root {
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
