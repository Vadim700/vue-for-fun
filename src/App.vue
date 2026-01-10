<template>
  <Header />
  <main class="px-16 py-8 overflow-y-auto custom-scrollbar w-full" :style="{ background: bgColor }">
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import Header from '@/components/vHeader.vue'
import { useMainStore } from './stores/main'
import { watch, ref, onMounted } from 'vue'

const store = useMainStore()
const bgColor = ref('')

watch(
  () => store.topic,
  (newTopic) => setBg(newTopic),
  { immediate: true },
)

function setBg(topic) {
  switch (topic) {
    case 'posts':
      bgColor.value = 'linear-gradient(to right bottom, #04a561, #01703e)'
      break
    case 'todos':
      bgColor.value = 'linear-gradient(to right bottom, #5EC6C7, #066f72)'
      break
    case 'onlycss':
      bgColor.value = '#fff'
      break
    default:
      bgColor.value = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  position: relative;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 92px auto;

  background: linear-gradient(to right bottom, #108156, #108156);

  font-family: 'Nunito', sans-serif;
}

.custom-scrollbar {
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #7a3306 #fff;

  /* Webkit */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #7a3306;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #7a3306;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #7a3306;
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #7a3306;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7a3306;
}
</style>
