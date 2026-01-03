<template>
  <label
    @click="toggle"
    for="switcher"
    :class="$attrs.class"
    class="inline-flex items-center w-10 h-6 border cursor-pointer rounded-full transition-colors"
    :style="{
      borderColor: !checked ? 'red' : '#4bb4b5',
      backgroundColor: !checked ? 'rgba(255,0,0,0.2)' : 'transparent',
    }"
  >
    <input
      type="checkbox"
      :checked="handleClick"
      class="sr-only"
      name="switcher"
      id="switcher"
      @change="handleClick"
    />
    <span
      class="absolute w-4 h-4 bg-red-600 rounded-full transition-transform"
      :class="checked ? 'translate-x-5 !bg-[#4bb4b5]' : 'translate-x-1'"
    ></span>
  </label>
</template>

<script setup>
import { ref } from 'vue'

let checked = ref(false)
const handleClick = () => (checked.value = !checked.value)

const emit = defineEmits(['change'])

const toggle = () => {
  checked.value = !checked.value
  emit('change', checked.value)
}
</script>

<style lang="scss" scoped></style>
