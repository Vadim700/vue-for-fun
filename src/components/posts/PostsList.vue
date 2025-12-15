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

  // debugger;

  const activeItem = items.value.find((item) => item.active)
  const activeIndex = items.value.findIndex((item) => item.active)
  const isActiveSecondRow = activeItem && activeIndex >= itemsPerRow - 1 // если активен элемент из второго ряда

  const result = []
  let currentRow = 0
  let currentCol = 0
  let activeElementProcessed = false

  for (let i = 0; i < items.value.length; i++) {
    const item = { ...items.value[i] }
    const isActive = item.active

    // Ширина и высота элемента
    const elementWidth = isActive ? elWidth.value.toFixed(1) * 2 : elWidth.value.toFixed(1)
    const elementHeight = isActive ? elWidth.value.toFixed(1) * 2 : elWidth.value.toFixed(1)

    // Проверяем, помещается ли элемент в текущий ряд
    if (currentCol + (isActive ? 2 : 1) > itemsPerRow) {
      // Если не помещается - переносим на следующую строку
      currentRow++
      currentCol = 0
    }

    // Проверяем, если активный элемент уже обработан на предыдущем шаге и текущий элемент должен его обтекать
    if (activeElementProcessed && currentCol === activeElementInfo.col) {
      currentCol += 2
    }

    // Если это активный элемент, запоминаем его позицию
    if (isActive) {
      activeElementProcessed = true
      activeElementInfo = {
        row: currentRow,
        col: currentCol,
        width: 2, // Занимает 2 колонки
      }
    }

    // Вычисляем позиции
    let left = (currentCol * elWidth.value).toFixed(1)
    let top = (currentRow * elWidth.value).toFixed(1)

    // Обновляем стили для элемента
    item.left = `${left}px`
    item.top = `${top}px`
    item.width = `${elementWidth - 6}px`
    item.height = `${elementHeight - 6}px`

    result.push(item)

    // Обновляем текущую колонку для следующего элемента
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

    // console.log(`item ${item.id}: col: ${currentCol}; row: ${currentRow}`)

  }
  if(isActiveSecondRow){
    console.log(result)
  }

  return result
})

// Вспомогательная переменная для отслеживания активного элемента
let activeElementInfo = {
  row: -1,
  col: -1,
  width: 0,
}

const handleClick = (id) => {
  // Сбрасываем позиции активного элемента
  activeElementInfo = { row: -1, col: -1, width: 0 }

  items.value = items.value.map((item) => ({
    ...item,
    active: item.id === id,
  }))

  // console.log(positionedItems.value)
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
