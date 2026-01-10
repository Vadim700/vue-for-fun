<template>
  <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 2xl:gap-8 lg:gap-2 h-full">
    <Aside :links="links" class="stycke"/>
    <div class="main 2xl:col-span-4 xl:col-span-3 overflow-auto">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Aside from '@/components/vAside.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const links = [
  {
    path: '/onlycss/bgs',
    label: "BG\'s",
  },
  {
    path: '/onlycss/slider',
    label: 'Slider',
  },
  {
    path: '/onlycss/payments',
    label: 'payments',
  },
]

router.push({ path: '/onlycss/bgs' })
</script>
