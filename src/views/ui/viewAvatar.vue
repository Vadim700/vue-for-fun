<template>
  <section>
    <header class="mb-8">
      <p class="eyebrow">UI · Element</p>
      <h2 class="page-title mt-1 text-2xl sm:text-3xl">Avatar</h2>
      <p class="page-subtitle">
        A round avatar with object-fit: cover — the image never distorts, whatever its source size.
      </p>
    </header>

    <div class="card grid place-items-center px-6 py-14">
      <Avatar class="scale-125" />
    </div>

    <Tabs :html :css />
  </section>
</template>

<script setup>
import Avatar from '@/components/shared/Avatar.vue'
import Tabs from '@/components/shared/vTabs.vue'

const html = `
<div class="avatar">
	<img class="avatar__img" src="path/to/image" alt="Avatar">
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
