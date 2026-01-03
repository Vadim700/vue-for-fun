<template>
  <div class="relative mb-2 p-2 pb-8 bg-amber-300 rounded-sm">
    <div class="first-letter:uppercase">{{ todo.title }}</div>
    <Switcher @change="onSwitchChange" class="absolute right-2 bottom-2" />
  </div>
</template>

<script setup>
import Switcher from '../ui/switcher.vue'

defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const onSwitchChange = (e) => {
  console.log(e)
}
</script>

<style lang="scss"></style>
