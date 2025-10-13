<template>
  <form action="#" class="">
    <div class="flex flex-col mb-3">
      <label for="title" class="text-xl">Title</label>
      <input class="border rounded-sm outline-0 px-4 py-2" type="search" name="title" id="title" />
    </div>
    <div class="flex flex-col mb-3">
      <label for="post" class="text-xl">Message</label>
      <textarea
        class="border rounded-sm resize-none outline-0 px-4 py-2"
        name="post"
        id="post"
        cols="30"
        rows="7"
      ></textarea>
    </div>

    <button
      type="submit"
      @click.prevent=""
      class="w-full border px-4 py-2 cursor-pointer bg-amber-900 text-white outline-none hover:bg-amber-800 animate-all uppercase"
    >
      Add post
    </button>
  </form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
