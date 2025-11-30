<template>
  <div
    class="auto-cols-max grid gap-4 grid-cols-6 grid-rows-2"
    :class="{ 'grid-flow-row': flowRows, 'grid-flow-col': !flowRows }"
  >
    <div
      v-for="item of items"
      @click="setActive(item.id)"
      :key="item.id"
      class="grid place-content-center text-white aspect-square bg-[#213b28] shadow-[#213b28] shadow-md rounded-md cursor-pointer"
      :class="{ 'col-span-2 row-span-2': item.active }"
    >
      {{ item.id }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
  { id: 6, active: false },
  { id: 7, active: false },
  { id: 8, active: false },
  { id: 9, active: false },
])

const setActive = (id) => {
  items.value.forEach((item) => (item.active = false))
  const foundedItem = items.value.find((i) => i.id === id)
  foundedItem.active = true
}

const flowRows = computed(
  () => items.value[1].active || items.value[3].active || items.value[7].active,
)
</script>

<style scoped lang="scss">
.wow {
  grid-auto-flow: column;
}
</style>
