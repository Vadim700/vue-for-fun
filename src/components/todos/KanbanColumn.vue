<template>
  <div class="kanban-column">
    <div class="column-header" :style="{ borderColor: color }">
      <div class="header-content">
        <h3 class="column-title">{{ title }}</h3>
        <span class="task-count">{{ tasks.length }}</span>
      </div>
      <button class="add-btn" @click="emit('addTask', status)" title="Add task">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4V16M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <div
      class="column-content"
      :class="{ 'drag-over': isDragOver }"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <Motion
        v-for="task in sortedTasks"
        :key="task.id"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 0.8 }"
        :transition="{ duration: 0.3 }"
      >
        <KanbanCard :task="task" @delete="emit('delete', $event)" />
      </Motion>

      <div v-if="tasks.length === 0" class="empty-state">No tasks yet</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Motion } from 'motion-v'
import KanbanCard from './KanbanCard.vue'

interface Task {
  id: string
  title: string
  status: 'todo' | 'in_progress' | 'completed' | 'stop'
  position: number
}

const props = defineProps<{
  title: string
  status: 'todo' | 'in_progress' | 'completed' | 'stop'
  tasks: Task[]
  color: string
}>()

const emit = defineEmits<{
  drop: [taskId: string, fromStatus: string, toStatus: string]
  delete: [id: string]
  addTask: [status: string]
}>()

const isDragOver = ref(false)

const sortedTasks = computed(() => {
  return [...props.tasks].sort((a, b) => a.position - b.position)
})

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  e.dataTransfer!.dropEffect = 'move'
  isDragOver.value = true
}

const handleDragLeave = () => {
  isDragOver.value = false
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  isDragOver.value = false

  const taskId = e.dataTransfer!.getData('taskId')
  const fromStatus = e.dataTransfer!.getData('fromStatus')

  if (taskId && fromStatus !== props.status) {
    emit('drop', taskId, fromStatus, props.status)
  }
}
</script>

<style scoped>
.kanban-column {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  min-width: 320px;
  max-width: 380px;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: calc(100vh - 200px);
}

.column-header {
  border-left: 4px solid;
  padding-left: 12px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.column-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
}

.task-count {
  background: rgba(0, 0, 0, 0.06);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
  color: #666;
}

.add-btn {
  background: white;
  border: 1px solid #e0e0e0;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.2s;
}

.add-btn:hover {
  background: #f0f0f0;
  border-color: #999;
  color: #333;
  transform: scale(1.05);
}

.column-content {
  flex: 1;
  overflow-y: auto;
  padding: 4px;
  min-height: 200px;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.column-content.drag-over {
  background: rgba(0, 123, 255, 0.05);
  outline: 2px dashed #007bff;
  outline-offset: -4px;
}

.empty-state {
  text-align: center;
  color: #999;
  font-size: 14px;
  padding: 32px 16px;
}

.column-content::-webkit-scrollbar {
  width: 6px;
}

.column-content::-webkit-scrollbar-track {
  background: transparent;
}

.column-content::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.column-content::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
