<template>
  <div class="mx-auto w-full" :style="{ maxWidth: `${width}px` }">
    <slot />
  </div>
</template>

<script setup>
// The width used to be assembled into a dynamic Tailwind class `max-w-[${width}px]`,
// which Tailwind cannot generate at build time. Now it is an inline style.
defineProps({
  width: {
    type: Number,
    default: 1000,
  },
})
</script>
