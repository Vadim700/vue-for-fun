<template>
  <form action="#" class="" @submit.prevent="handleFormSubmit">
    <div class="relative flex flex-col mb-4">
      <label for="title" class="text-xl">Title</label>
      <input
        v-model="title"
        class="border rounded-sm outline-0 px-4 py-2"
        type="search"
        name="title"
        id="title"
      />
      <span
        v-if="errors.title"
        class="absolute -bottom-4 first-letter:uppercase left-0 text-red-500 text-xs"
        >{{ errors.title }}</span
      >
    </div>
    <div class="relative flex flex-col mb-8">
      <label for="body" class="text-xl">Message</label>
      <textarea
        class="border rounded-sm resize-none outline-0 px-4 py-2"
        v-model="body"
        name="body"
        id="body"
        cols="30"
        rows="7"
      ></textarea>
      <span
        v-if="errors.body"
        class="absolute -bottom-4 first-letter:uppercase left-0 text-red-500 text-xs"
        >{{ errors.body }}</span
      >
    </div>

    <button
      type="submit"
      class="w-full border px-4 py-2 cursor-pointer bg-amber-900 rounded-sm text-white outline-none hover:bg-amber-800 animate-all uppercase"
    >
      Add post
    </button>
  </form>
</template>

<script setup>
import { usePostsStore } from '@/stores/postsStore'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const postsStore = usePostsStore()

const schema = yup.object({
  title: yup.string().required().min(3),
  body: yup.string().required().min(6),
})

const emit = defineEmits(['close'])

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const { value: title } = useField('title')
const { value: body } = useField('body')

const handleFormSubmit = handleSubmit((values) => {
  postsStore.addPost(values)

  title.value = ''
  body.value = ''

  emit('close')
})
</script>

<style lang="scss" scoped></style>
