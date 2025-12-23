<template>
  <span>{{ todo }}</span>
</template>

<script setup>
defineProps({
  todo: {
    type: Number,
    required: true,
  },
})
</script>
