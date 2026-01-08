<template>
  <div class="kanban-board">
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
  <vModal :open="openModal" @close="openModal = false">
    <template #header>Add task</template>
    <form @submit.prevent="onSubmit">
      <input
        class="todo-input mb-8"
        type="text"
        v-model="taskTitle"
        :style="{ borderColor: inputColor }"
      />
      <button :disabled="!taskTitle.trim().length" type="submit" class="submit-btn">
        Add task
      </button>
    </form>
  </vModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KanbanColumn from './KanbanColumn.vue'
import vModal from '../modals/vModal.vue'

type TaskStatus = 'todo' | 'in_progress' | 'completed' | 'stop'
type TaskColor = '#3b82f6' | '#f59e0b' | '#10b981' | '#cc0000'

interface Task {
  id: string
  title: string
  status: TaskStatus
  position: number
}

const taskTitle = ref<String>('')
const openModal = ref(false)
const tasks = ref<Task[]>([])
const nextId = ref(1)
let inputColor = ref<TaskColor>('#3b82f6')
let taskStatus = ref('')

const columns = [
  { title: 'To Do', status: 'todo' as const, color: '#3b82f6' },
  { title: 'In Progress', status: 'in_progress' as const, color: '#f59e0b' },
  { title: 'Completed', status: 'completed' as const, color: '#10b981' },
  { title: 'On Stop', status: 'stop' as const, color: '#cc0000' },
]

const getTasksByStatus = (status: string) => {
  return tasks.value.filter((task) => task.status === status)
}

const addTask = (status: string) => {
  taskStatus.value = status
  inputColor.value = columns.find((col) => col.status === taskStatus.value)?.color as TaskColor
  openModal.value = true
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

const resetForm = () => {
  openModal.value = false
  taskTitle.value = ''
  taskStatus.value = ''
}

const onSubmit = (e) => {
  const title = e.target.elements[0].value.trim()

  if (title) {
    if (!title || !title.trim()) return

    const columnTasks = getTasksByStatus(taskStatus.value)
    const maxPosition =
      columnTasks.length > 0 ? Math.max(...columnTasks.map((t) => t.position)) : -1

    const newTask: Task = {
      id: `task-${nextId.value++}`,
      title: title.trim(),
      status: taskStatus.value as TaskStatus,
      position: maxPosition + 1,
    }

    tasks.value.push(newTask)

    resetForm()
  }

  return false
}
</script>

<style scoped lang="scss">
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
  padding: 25px 0 16px;
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

.todo-input {
  display: block;
  width: 100%;
  padding: 4px 8px;

  font-size: 16px;
  border: 1px solid;
  outline: none;
  border-radius: 6px;
}

.submit-btn {
  display: grid;
  place-content: center;

  background: linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%);
  border-radius: 6px;
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 16px;

  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease;

  background-size: 200% 200%;
  background-position: left top;

  &:hover {
    background-position: right bottom;
    animation: gradientShift 0.5s ease forwards;
  }

  &:disabled {
    background: #ccc;
    user-select: none;
    pointer-events: none;
  }
}

@keyframes gradientShift {
  0% {
    background-position: left top;
  }
  100% {
    background-position: right bottom;
  }
}

@media (max-width: 1480px) {
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
