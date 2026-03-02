<template>
  <div class="grid grid-rows-[auto_1fr]">
    <h2 class="text-3xl mb-4 text-center">Avatar</h2>

    <Avatar class="m-auto"/>
  </div>

  <VTabs :html :css />
</template>

<script setup lang="ts">
import Avatar from '@/components/shared/Avatar.vue'
import VTabs from '@/components/shared/vTabs.vue'

const html = `
<div class="avatar">
	<img class="avatar__img" src="path/to/image" alt="Аватар">
</div>
`

const css = `
.avatar {
	display: inline-block;
	border-radius: 50%;
	overflow: hidden;
	width: 102px;
	height: 102px;
}

.avatar__img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`
</script>
