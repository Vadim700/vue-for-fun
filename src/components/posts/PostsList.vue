<template>
  <div class="">
    <AnimatePresence mode="popLayout">
      <motion.div
        class="list"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 0.8 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
      >
        <motion.div
          v-for="(post, index) in postsStore.posts"
          :key="post.id"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :exit="{ opacity: 0, scale: 0.8 }"
          :transition="{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
          }"
        >
          <PostItem :post="post" />
        </motion.div>
        <button
          class="list__button rounded-sm p-2 min-h-[200px] grid place-content-center cursor-pointer group outline-0"
          @click="onClickPlus"
        >
          <Plus
            size="120"
            stroke-width="1"
            class="group-hover:text-red-500 group-hover:scale-[1.3] transition-all duration-200 ease-in-out"
          />
        </button>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<script setup>
import { Plus } from 'lucide-vue-next'
import PostItem from './PostItem.vue'
import { usePostsStore } from '@/stores/postsStore'
import { motion, AnimatePresence } from 'motion-v'

const postsStore = usePostsStore()
const postsList = postsStore.getPosts()

const emit = defineEmits(['isOpen'])
const onClickPlus = () => {
  emit('isOpen', true)
}
</script>

<style scoped lang="scss">
.list {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  &__button {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
}
</style>
