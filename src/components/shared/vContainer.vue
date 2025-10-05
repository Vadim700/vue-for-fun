<template>
  <div :class="`max-w-[${props.width}px]`" class="mx-auto">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: Number,
    required: true,
    default: () => {},
  },
})
</script>
