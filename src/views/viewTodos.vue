<template>
  <h1 class="text-4xl text-white font-bold uppercase text-center mb-8">Todos</h1>

  <KanbanBoard />
</template>

<script setup>
import KanbanBoard from '@/components/todos/KanbanBoard.vue'
import TodoList from '@/components/todos/TodoList.vue'
</script>

<style lang="less" scoped></style>
