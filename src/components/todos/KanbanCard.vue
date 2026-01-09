<template>
  <div
    class="kanban-card"
    :class="{ 'is-dragging': isDragging }"
    draggable="true"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
  >
    <div class="card-content">
      <p class="card-title">{{ task.title }}</p>
      <button class="delete-btn" @click="emit('delete', task.id)" title="Delete task">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Task {
  id: string
  title: string
  status: 'todo' | 'in_progress' | 'completed' | 'stop'
  position: number
}

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  delete: [id: string]
}>()

const isDragging = ref(false)

const handleDragStart = (e: DragEvent) => {
  isDragging.value = true
  e.dataTransfer!.effectAllowed = 'move'
  e.dataTransfer!.setData('taskId', props.task.id)
  e.dataTransfer!.setData('fromStatus', props.task.status)
}

const handleDragEnd = () => {
  isDragging.value = false
}
</script>

<style scoped>
.kanban-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: grab;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    opacity 0.2s;
  user-select: none;
}

.kanban-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.kanban-card:active {
  cursor: grabbing;
}

.kanban-card.is-dragging {
  opacity: 0.5;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.card-title {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #1a1a1a;
  flex: 1;
  word-break: break-word;
}

.delete-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.delete-btn:hover {
  background: #fee;
  color: #e53e3e;
}

.delete-btn:focus {
  outline: 2px solid #e53e3e;
  outline-offset: 2px;
}
</style>
