<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-[210px_minmax(0,1fr)]">
    <Aside :links="links" />

    <div class="min-w-0">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Aside from '../components/vAside.vue'

const links = [
  {
    path: '/funjs/data-collection',
    label: 'data-collection',
  },
  {
    path: '/funjs/cookies',
    label: 'cookies',
  },
]
</script>
