<template>
  <section>
    <header>
      <p class="eyebrow">Kanban</p>
      <h1 class="page-title mt-2">Todos</h1>
      <p class="page-subtitle">
        Four columns, drag &amp; drop and localStorage persistence — close the tab and come back to
        the same tasks.
      </p>
    </header>

    <KanbanBoard class="mt-6" />
  </section>
</template>

<script setup>
import KanbanBoard from '@/components/todos/KanbanBoard.vue'
</script>
