<template>
  <section class="kanban-column">
    <header class="column-header" :style="{ '--accent': color }">
      <div class="header-content">
        <span class="status-dot" aria-hidden="true"></span>
        <h3 class="column-title">{{ title }}</h3>
        <span class="task-count">{{ tasks.length }}</span>
      </div>

      <button type="button" class="add-btn" title="Add task" @click="emit('add-task', status)">
        <Plus :size="16" />
      </button>
    </header>

    <div
      class="column-content"
      :class="{ 'drag-over': isDragOver }"
      @dragover.prevent="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <KanbanCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :color="color"
        @delete="emit('delete', $event)"
      />

      <button
        v-if="tasks.length === 0"
        type="button"
        class="empty-state"
        @click="emit('add-task', status)"
      >
        <Plus :size="16" />
        Add task
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import KanbanCard from './KanbanCard.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  tasks: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String,
    default: '#3b82f6',
  },
})

const emit = defineEmits(['drop', 'delete', 'add-task'])

const isDragOver = ref(false)

const handleDragOver = (event) => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
  isDragOver.value = true
}

const handleDragLeave = (event) => {
  // Keep the highlight when the pointer moves onto a child card
  if (event.currentTarget.contains(event.relatedTarget)) return
  isDragOver.value = false
}

const handleDrop = (event) => {
  event.preventDefault()
  isDragOver.value = false

  const taskId = event.dataTransfer.getData('taskId')
  const fromStatus = event.dataTransfer.getData('fromStatus')

  if (taskId && fromStatus !== props.status) {
    emit('drop', taskId, fromStatus, props.status)
  }
}
</script>

<style scoped>
.kanban-column {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 12px;
  border: 1px solid rgb(33 36 41 / 0.06);
  border-radius: 16px;
  background: rgb(255 255 255 / 0.72);
  backdrop-filter: blur(6px);
}

.column-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
  padding: 6px 4px 10px;
  border-bottom: 1px solid rgb(33 36 41 / 0.08);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.status-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent);
}

.column-title {
  margin: 0;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #212429;
  white-space: nowrap;
}

.task-count {
  padding: 1px 7px;
  border-radius: 9999px;
  background: rgb(33 36 41 / 0.07);
  font-size: 11px;
  font-weight: 800;
  color: #495057;
}

.add-btn {
  display: grid;
  flex-shrink: 0;
  place-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgb(33 36 41 / 0.1);
  border-radius: 10px;
  background: #fff;
  color: #495057;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease;
}

.add-btn:hover {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, white);
  color: var(--accent);
}

.column-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 180px;
  padding: 6px;
  border-radius: 12px;
  transition: background-color 0.15s ease;
}

.column-content.drag-over {
  background: rgb(240 177 0 / 0.12);
  outline: 2px dashed rgb(240 177 0 / 0.7);
  outline-offset: -4px;
}

.empty-state {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 140px;
  border: 1px dashed rgb(33 36 41 / 0.15);
  border-radius: 12px;
  background: transparent;
  font-size: 13px;
  font-weight: 700;
  color: #90a0b7;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.empty-state:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
