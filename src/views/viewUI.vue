<template>
  <div class="grid grid-cols-4 gap-8">
    <Aside :links="links" />
    <div class="main col-span-3 overflow-auto">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Aside from '../components/vAside.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const links = [
  {
    path: '/ui/service',
    label: 'service',
  },
  {
    path: '/ui/use',
    label: 'use',
  },
]

router.push('/ui/service')
</script>
