<template>
  <section>
    <header class="mb-8">
      <p class="eyebrow">UI · Container</p>
      <h2 class="page-title mt-1 text-2xl sm:text-3xl">Histogram</h2>
      <p class="page-subtitle">
        A bar chart built on flexbox: heights are inline styles, so it is easy to wire up to real
        data.
      </p>
    </header>

    <div class="card px-6 py-8">
      <Histogram />
    </div>

    <Tabs :html :css />
  </section>
</template>

<script setup>
import Histogram from '@/components/shared/Histogram.vue'
import Tabs from '@/components/shared/vTabs.vue'

const html = `
<div class="histogram">
	<div class="histogram__header">
		<div class="histogram__orders">
			<div class="histogram__title">Total orders</div>
			<b class="histogram__numbers">50254</b>
		</div>
		<a href="#" class="histogram__link">View all</a>
	</div>
	<div class="histogram__body">
		<div class="histogram__element" style="height: 100%;"></div>
		<div class="histogram__element" style="height: 70%;"></div>
		<div class="histogram__element" style="height: 44%;"></div>
	</div>
</div>
`

const css = `
.histogram {
	padding: 16px 24px 24px;
	border-radius: 8px;
	background: var(--white);
	border: 1px solid var(--grey-3);
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
	color: var(--black);
}

.histogram__header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 39px;
}

.histogram__orders {
	text-align: left;
}

.histogram__title {
	margin-bottom: 6px;
}

.histogram__numbers {
	font-size: 20px;
	line-height: 1.3;
}

.histogram__link {
	color: var(--blue);
	padding-top: 3px;
	text-decoration: none;
}

.histogram__body {
	display: flex;
	align-items: flex-end;
	height: 50px;
	column-gap: 1px;
}

.histogram__element {
	background-color: var(--blue);
	flex: auto;
}
`
</script>
