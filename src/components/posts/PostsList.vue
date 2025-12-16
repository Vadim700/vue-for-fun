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

const updateElementWidth = () => {
  if (listRef.value) {
    const { width } = listRef.value.getBoundingClientRect()
    elWidth.value = width / itemsPerRow
  }
}

// Вычисляем позиции всех элементов
const positionedItems = computed(() => {
  if (elWidth.value === 0) return items.value

  const activeItem = items.value.find((item) => item.active)
  const activeIndex = items.value.findIndex((item) => item.active)
  const isActiveInFirstRow = activeIndex < itemsPerRow
  const isActiveInSecondRow = activeItem && activeIndex >= itemsPerRow - 1

  let itemsToProcess = [...items.value]

  if (isActiveInSecondRow) {
    const [activeItem] = itemsToProcess.splice(activeIndex, 1)

    const insertPosition = Math.min(activeIndex % itemsPerRow, itemsPerRow - 2)

    itemsToProcess.splice(insertPosition, 0, activeItem)
  }

  const result = []
  let currentRow = 0
  let currentCol = 0
  let activeElementProcessed = false
  let activeElementInfo = { row: -1, col: -1, width: 0 }

  for (let i = 0; i < itemsToProcess.length; i++) {
    const item = { ...itemsToProcess[i] }
    const isActive = item.active
    const originalIndex = items.value.findIndex((it) => it.id === item.id)

    // Ширина и высота элемента
    const elementWidth = isActive ? elWidth.value.toFixed(1) * 2 : elWidth.value.toFixed(1)
    const elementHeight = isActive ? elWidth.value.toFixed(1) * 2 : elWidth.value.toFixed(1)

    if (currentCol + (isActive ? 2 : 1) > itemsPerRow) {
      currentRow++
      currentCol = 0

      if (isActive && currentRow === 0) {
        for (let shift = 1; shift <= currentCol; shift++) {
          if (currentCol - shift >= 0) {
            currentCol -= shift
            break
          }
        }
      }
    }

    if (activeElementProcessed && currentCol === activeElementInfo.col) {
      currentCol += 2

      if (currentCol >= itemsPerRow) {
        currentRow++
        currentCol = 0
      }
    }

    if (isActive) {
      activeElementProcessed = true
      activeElementInfo = {
        row: currentRow,
        col: currentCol,
        width: 2,
      }

      if (isActiveInSecondRow) {
        currentRow = 0
        if (currentCol > itemsPerRow - 2) {
          currentCol = itemsPerRow - 2 // Ставим в последние две колонки
        }
      }
    }

    let left = (currentCol * elWidth.value).toFixed(1)
    let top = (currentRow * elWidth.value).toFixed(1)

    // Обновляем стили для элемента
    item.left = `${left}px`
    item.top = `${top}px`
    item.width = `${elementWidth - 6}px`
    item.height = `${elementHeight - 6}px`

    result.push(item)

    if (isActive) {
      currentCol += 2 // Активный элемент занимает 2 колонки
    } else {
      currentCol += 1
    }

    // Если вышли за пределы ряда
    if (currentCol >= itemsPerRow) {
      currentRow++
      currentCol = 0
    }
  }

  // Сортируем результат по оригинальному порядку ID для правильного отображения
  return result.sort((a, b) => {
    const indexA = items.value.findIndex((item) => item.id === a.id)
    const indexB = items.value.findIndex((item) => item.id === b.id)
    return indexA - indexB
  })
})

const handleClick = (id) => {
  items.value = items.value.map((item) => ({
    ...item,
    active: item.id === id,
  }))
}

onMounted(() => {
  updateElementWidth()
  window.addEventListener('resize', updateElementWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateElementWidth)
})
</script>

<style scoped lang="scss">
.list {
  position: relative;
  width: 100%;
  height: calc(var(--el-width, 150px) * 3); // Высота для 3 рядов
  margin: 0 auto;
  background-color: #f0f0f0;
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
      border-color: #388e3c;
    }

    &:not(.list__item_active) {
      background-color: #ffffff;
      color: #333;
      border-color: #ddd;

      &:hover {
        background-color: #e8f5e9;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
