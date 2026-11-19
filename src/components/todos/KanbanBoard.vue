<template>
  <div>
    <div class="mb-4 flex flex-wrap items-center gap-2">
      <span class="chip">{{ tasks.length }} tasks</span>
      <span class="chip">{{ completedCount }} done</span>
      <span class="text-ink-soft ml-auto hidden text-xs font-semibold sm:block">
        Drag a card to another column
      </span>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <KanbanColumn
        v-for="column in columns"
        :key="column.status"
        :title="column.title"
        :status="column.status"
        :tasks="tasksByStatus[column.status]"
        :color="column.color"
        @drop="handleDrop"
        @delete="confirmDelete"
        @add-task="addTask"
      />
    </div>

    <vModal :open="openPrompt" aria-label="Add task" @close="closePrompt">
      <template #header>New task</template>

      <form class="space-y-5" @submit.prevent="onSubmit">
        <label class="block">
          <span class="text-ink-soft mb-1.5 block text-xs font-extrabold tracking-wide uppercase">
            Title
          </span>
          <input
            v-model="taskTitle"
            type="text"
            maxlength="120"
            placeholder="e.g. check the production build"
            class="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-amber-500"
            :style="{ borderColor: inputColor }"
          />
        </label>

        <p class="text-ink-soft text-xs">
          Column:
          <span class="text-ink font-bold">{{ statusLabel }}</span>
        </p>

        <div class="flex justify-end gap-3 pt-1">
          <button type="button" class="btn btn-ghost" @click="closePrompt">Cancel</button>
          <button
            type="submit"
            class="btn btn-primary disabled:pointer-events-none disabled:opacity-50"
            :disabled="!taskTitle.trim()"
          >
            Add task
          </button>
        </div>
      </form>
    </vModal>

    <vModal :open="openConfirm" aria-label="Delete task" @close="openConfirm = false">
      <template #header>Delete task?</template>

      <p class="text-ink-soft">"{{ deletedTask?.title }}" will be permanently deleted.</p>

      <div class="mt-6 flex justify-end gap-3">
        <button type="button" class="btn btn-ghost" @click="openConfirm = false">Cancel</button>
        <button
          type="button"
          class="btn bg-red-600 text-white hover:bg-red-700"
          @click="deleteTask"
        >
          Delete
        </button>
      </div>
    </vModal>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import KanbanColumn from './KanbanColumn.vue'
import vModal from '../modals/vModal.vue'

const STORAGE_KEY = 'vue-for-fun:kanban:v2'

const columns = [
  { title: 'To Do', status: 'todo', color: '#3b82f6' },
  { title: 'In Progress', status: 'in_progress', color: '#f59e0b' },
  { title: 'Completed', status: 'completed', color: '#10b981' },
  { title: 'On Stop', status: 'stop', color: '#cc0000' },
]

const createId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `task-${Date.now()}-${Math.random().toString(16).slice(2)}`

const seedTasks = () => [
  {
    id: createId(),
    title: 'See how the post grid reflows',
    status: 'todo',
    position: 0,
  },
  { id: createId(), title: 'Add a couple more CSS backgrounds', status: 'todo', position: 1 },
  {
    id: createId(),
    title: 'Collect UI components in one section',
    status: 'in_progress',
    position: 0,
  },
  { id: createId(), title: 'Test the modal on mobile', status: 'in_progress', position: 1 },
  { id: createId(), title: 'Move the router to lazy imports', status: 'completed', position: 0 },
  {
    id: createId(),
    title: 'Remove heavy highlight.js from the initial bundle',
    status: 'completed',
    position: 1,
  },
  {
    id: createId(),
    title: 'Decide what to do with the Gallery section',
    status: 'stop',
    position: 0,
  },
]

const loadTasks = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed
    }
  } catch (error) {
    console.warn('Failed to read tasks from localStorage', error)
  }

  return seedTasks()
}

const tasks = ref(loadTasks())
const taskTitle = ref('')
const taskStatus = ref('')
const openPrompt = ref(false)
const openConfirm = ref(false)
const deletedTaskId = ref(null)

watch(
  tasks,
  (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch (error) {
      console.warn('Failed to save tasks to localStorage', error)
    }
  },
  { deep: true },
)

// One pass over the tasks instead of four filter() calls per render
const tasksByStatus = computed(() => {
  const map = Object.fromEntries(columns.map((column) => [column.status, []]))

  for (const task of tasks.value) {
    if (map[task.status]) map[task.status].push(task)
  }

  for (const list of Object.values(map)) {
    list.sort((a, b) => a.position - b.position)
  }

  return map
})

const completedCount = computed(() => tasksByStatus.value.completed.length)

const statusLabel = computed(
  () => columns.find((column) => column.status === taskStatus.value)?.title ?? '',
)

const inputColor = computed(
  () => columns.find((column) => column.status === taskStatus.value)?.color ?? '#3b82f6',
)

const deletedTask = computed(() => tasks.value.find((task) => task.id === deletedTaskId.value))

const addTask = (status) => {
  taskStatus.value = status
  taskTitle.value = ''
  openPrompt.value = true
}

const closePrompt = () => {
  openPrompt.value = false
  taskTitle.value = ''
}

const deleteTask = () => {
  if (!deletedTaskId.value) return

  tasks.value = tasks.value.filter((task) => task.id !== deletedTaskId.value)
  deletedTaskId.value = null
  openConfirm.value = false
}

const confirmDelete = (id) => {
  deletedTaskId.value = id
  openConfirm.value = true
}

const handleDrop = (taskId, _fromStatus, toStatus) => {
  const task = tasks.value.find((item) => item.id === taskId)
  if (!task || task.status === toStatus) return

  const target = tasks.value.filter((item) => item.status === toStatus)
  const maxPosition = target.length ? Math.max(...target.map((item) => item.position)) : -1

  task.status = toStatus
  task.position = maxPosition + 1
}

const onSubmit = () => {
  const title = taskTitle.value.trim()
  if (!title || !taskStatus.value) return

  const columnTasks = tasks.value.filter((task) => task.status === taskStatus.value)
  const maxPosition = columnTasks.length
    ? Math.max(...columnTasks.map((task) => task.position))
    : -1

  tasks.value.push({
    id: createId(),
    title,
    status: taskStatus.value,
    position: maxPosition + 1,
  })

  closePrompt()
}
</script>
