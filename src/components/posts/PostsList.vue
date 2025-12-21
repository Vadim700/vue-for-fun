<template>
  <div class="list" ref="listRef">
    <div
      v-for="item of positionedItems"
      @click="handleClick(item.id)"
      :key="item.id"
      class="list__item"
      :class="{ list__item_active: item.active }"
      :data-item-id="item.id"
      :style="{
        left: item.left,
        top: item.top,
        width: item.width,
        height: item.height,
      }"
    >
      {{ item.id }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

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

const elWidth = ref(0)
const listRef = ref(null)
const itemsPerRow = 6
const previousActiveId = ref(null)

const updateElementWidth = () => {
  if (listRef.value) {
    const { width } = listRef.value.getBoundingClientRect()
    elWidth.value = width / itemsPerRow
  }
}

const positionedItems = computed(() => {
  if (elWidth.value === 0) return items.value

  const activeItem = items.value.find((item) => item.active)
  const result = []
  let grid = []

  // [x, y]
  switch (activeItem.id) {
    case 1:
      grid = [
        [0, 0], [2, 0], [3, 0], [4, 0], [5, 0],
                [2, 1], [3, 1], [4, 1], [5, 1],
      ]
      break

    case 2:
      grid = [
        [0, 0], [1, 0], [3, 0], [4, 0], [5, 0],
        [0, 1],         [3, 1], [4, 1], [5, 1],
      ]
      break

    case 3:
      grid = [
        [0, 0], [1, 0], [2, 0], [4, 0], [5, 0],
        [0, 1], [1, 1],         [4, 1], [5, 1],
      ]
      break

    case 4:
      grid = [
        [0, 0], [1, 0], [2, 0], [3, 0], [5, 0],
        [0, 1], [1, 1], [2, 1],         [5, 1],
      ]
      break

    case 5:
      if (previousActiveId.value !== null && previousActiveId.value <= 5) {
        grid = [
          [0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
          [0, 1], [1, 1], [2, 1], [3, 1],
        ]
      } else {
        grid = [
                  [2, 0], [3, 0], [4, 0], [5, 0],
          [0, 0], [2, 1], [3, 1], [4, 1], [5, 1],
        ]
      }
      break

    case 6:
      grid = [
                [0, 0], [3, 0], [4, 0], [5, 0],
        [0, 1], [1, 0], [3, 1], [4, 1], [5, 1],
      ]
      break

    case 7:
      grid = [
        [0, 0],         [1, 0], [4, 0], [5, 0],
        [0, 1], [1, 1], [2, 0], [4, 1], [5, 1],
      ]
      break

    case 8:
      grid = [
        [0, 0], [1, 0],         [2, 0], [5, 0],
        [0, 1], [1, 1], [2, 1], [3, 0], [5, 1],
      ]
      break

    case 9:
      grid = [
        [0, 0], [1, 0], [2, 0], [3, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 0],
      ]
      break

    default:
      grid = [
        [0, 0], [2, 0], [3, 0], [4, 0], [5, 0],
                [2, 1], [3, 1], [4, 1], [5, 1],
      ]
  }

  // console.log('active item: ', activeItem.id, ' ', grid)

  for (let i = 0; i < items.value.length; i++) {
    const item = { ...items.value[i] }
    const isActive = item.active

    // Ширина и высота элемента
    const elementWidth = isActive ? elWidth.value.toFixed(1) * 2 : elWidth.value.toFixed(1)
    const elementHeight = isActive ? elWidth.value.toFixed(1) * 2 : elWidth.value.toFixed(1)

    let left = (grid[i][0] * elWidth.value).toFixed(1)
    let top = (grid[i][1] * elWidth.value).toFixed(1)

    console.log(`item: ${item.id}; left: ${left}; top: ${top}`)

    // Обновляем стили для элемента
    item.left = `${left}px`
    item.top = `${top}px`
    item.width = `${elementWidth - 6}px`
    item.height = `${elementHeight - 6}px`

    result.push(item)
  }

  return result
})

const handleClick = (id) => {
  // Сохраняем текущий активный элемент как предыдущий
  const currentActive = items.value.find(item => item.active)
  if (currentActive) {
    previousActiveId.value = currentActive.id
  }

  // Обновляем активный элемент
  items.value = items.value.map((item) => ({
    ...item,
    active: item.id === id,
  }))
}

onMounted(() => {
  updateElementWidth()
  window.addEventListener('resize', updateElementWidth)

  const initialActive = items.value.find(item => item.active)
  if (initialActive) {
    previousActiveId.value = initialActive.id
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateElementWidth)
})
</script>

<style scoped lang="scss">
.list {
  position: relative;
  width: 100%;
  height: 650px; // Высота для 3 рядов
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;

  &__item {
    display: grid;
    place-content: center;
    position: absolute;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 1.2em;
    font-weight: bold;
    border: 3px solid transparent;

    &_active {
      background-color: #4caf50;
      color: white;
      z-index: 10;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    &:not(.list__item_active) {
      background-color: #ffffff;
      color: #333;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
