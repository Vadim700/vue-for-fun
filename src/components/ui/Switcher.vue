<template>
  <label
    :class="$attrs.class"
    class="inline-flex items-center w-10 h-[21px] border cursor-pointer rounded-full transition-colors"
    :style="{
      borderColor: !modelValue ? 'red' : '#4bb4b5',
      backgroundColor: !modelValue ? 'rgba(255,0,0,0.2)' : 'transparent',
    }"
  >
    <input
      :value="modelValue"
      type="checkbox"
      :checked="modelValue"
      class="sr-only"
      name="switcher"
      @change="toggle"
    />
    <span
      class="absolute w-4 h-4 bg-red-600 rounded-full transition-transform"
      :class="modelValue ? 'translate-x-5 !bg-[#4bb4b5]' : 'translate-x-1'"
    ></span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  completed: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['change'])

const modelValue = computed({
  get() {
    return props.completed
  },
  set(value) {
    emit('change', value)
  },
})

const toggle = (event) => {
  modelValue.value = event.target.checked
}
</script>
