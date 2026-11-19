<template>
  <article
    class="kanban-card"
    :class="{ 'is-dragging': isDragging }"
    draggable="true"
    :style="{ '--accent': color }"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
  >
    <p class="card-title">{{ task.title }}</p>

    <button
      type="button"
      class="delete-btn"
      title="Delete task"
      aria-label="Delete task"
      @click="emit('delete', task.id)"
    >
      <X :size="14" />
    </button>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    default: '#3b82f6',
  },
})

const emit = defineEmits(['delete'])

const isDragging = ref(false)

const handleDragStart = (event) => {
  isDragging.value = true
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('taskId', props.task.id)
  event.dataTransfer.setData('fromStatus', props.task.status)
}

const handleDragEnd = () => {
  isDragging.value = false
}
</script>

<style scoped>
.kanban-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
  padding: 10px 10px 10px 14px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 2px rgb(33 36 41 / 0.08);
  cursor: grab;
  user-select: none;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    opacity 0.15s ease;
}

.kanban-card::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 6px;
  width: 3px;
  border-radius: 9999px;
  background: var(--accent);
}

.kanban-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px -12px rgb(33 36 41 / 0.45);
}

.kanban-card:active {
  cursor: grabbing;
}

.kanban-card.is-dragging {
  opacity: 0.45;
}

.card-title {
  flex: 1;
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 600;
  color: #212429;
  overflow-wrap: anywhere;
}

.delete-btn {
  display: grid;
  flex-shrink: 0;
  place-content: center;
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #90a0b7;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.delete-btn:hover {
  background: #fee2e2;
  color: #dc2626;
}

.delete-btn:focus-visible {
  outline: 2px solid #f0b100;
  outline-offset: 1px;
}
</style>
