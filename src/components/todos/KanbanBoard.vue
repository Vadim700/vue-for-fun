<template>
  <div class="kanban-board">
    <header class="board-header"></header>

    <div class="columns-container">
      <KanbanColumn
        v-for="column in columns"
        :key="column.status"
        :title="column.title"
        :status="column.status"
        :tasks="getTasksByStatus(column.status)"
        :color="column.color"
        @drop="handleDrop"
        @delete="deleteTask"
        @add-task="addTask"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KanbanColumn from './KanbanColumn.vue'

type TaskStatus = 'todo' | 'in_progress' | 'completed'

interface Task {
  id: string
  title: string
  status: TaskStatus
  position: number
}

const tasks = ref<Task[]>([])
const nextId = ref(1)

const columns = [
  { title: 'To Do', status: 'todo' as const, color: '#3b82f6' },
  { title: 'In Progress', status: 'in_progress' as const, color: '#f59e0b' },
  { title: 'Completed', status: 'completed' as const, color: '#10b981' },
]

const getTasksByStatus = (status: string) => {
  return tasks.value.filter((task) => task.status === status)
}

const addTask = (status: string) => {
  const title = prompt('Enter task title:')
  if (!title || !title.trim()) return

  const columnTasks = getTasksByStatus(status)
  const maxPosition = columnTasks.length > 0 ? Math.max(...columnTasks.map((t) => t.position)) : -1

  const newTask: Task = {
    id: `task-${nextId.value++}`,
    title: title.trim(),
    status: status as TaskStatus,
    position: maxPosition + 1,
  }

  tasks.value.push(newTask)
}

const deleteTask = (id: string) => {
  if (!confirm('Are you sure you want to delete this task?')) return
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

const handleDrop = (taskId: string, _fromStatus: string, toStatus: string) => {
  const task = tasks.value.find((t) => t.id === taskId)
  if (!task) return

  const targetColumnTasks = getTasksByStatus(toStatus)
  const newPosition =
    targetColumnTasks.length > 0 ? Math.max(...targetColumnTasks.map((t) => t.position)) + 1 : 0

  task.status = toStatus as TaskStatus
  task.position = newPosition
}
</script>

<style scoped>
.board-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;
}

.board-title {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.columns-container {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  overflow-x: auto;
  padding-bottom: 16px;
  justify-content: center;
}

.columns-container::-webkit-scrollbar {
  height: 8px;
}

.columns-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.columns-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.columns-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 1150px) {
  .columns-container {
    flex-wrap: wrap;
  }
}

@media (max-width: 1024px) {
  .kanban-board {
    padding: 16px;
  }

  .board-title {
    font-size: 24px;
  }

  .columns-container {
    gap: 16px;
  }
}
</style>
