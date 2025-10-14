<template>
  <vContainer :width="1000">
    <h1 class="text-4xl mb-8 flex gap-8 items-center">
      Posts ({{ postsStore.totalPostsLength }})
      <Loader v-if="postsStore.loading" class="animate-spin" />
    </h1>
    <PostsList @isOpen="onClickPlus" />
  </vContainer>
  <Modal :open="openModal" @close="onCloseModal">
    <template v-slot:header>Add new Post</template>
    <NewPostForm @close="onCloseModal" />
    <template v-slot:footer></template>
  </Modal>
</template>

<script setup>
import Modal from '@/components/modals/vModal.vue'
import NewPostForm from '@/components/forms/NewPostForm.vue'
import vContainer from '@/components/shared/vContainer.vue'
import PostsList from '@/components/posts/PostsList.vue'
import { usePostsStore } from '@/stores/postsStore'
import { Loader } from 'lucide-vue-next'
import { ref } from 'vue'

const postsStore = usePostsStore()
const openModal = ref(false)

const onClickPlus = (bool) => (openModal.value = bool)
const onCloseModal = () => (openModal.value = false)
</script>
