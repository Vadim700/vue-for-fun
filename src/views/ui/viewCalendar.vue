<template>
  <section>
    <header class="mb-8">
      <p class="eyebrow">UI · Container</p>
      <h2 class="page-title mt-1 text-2xl sm:text-3xl">Calendar</h2>
      <p class="page-subtitle">
        A calendar grid built on CSS Grid: weekdays, a selected range and a compact preview mode.
      </p>
    </header>

    <div class="card grid place-items-center px-6 py-12">
      <Calendar />
    </div>

    <Tabs :html :css />
  </section>
</template>

<script setup>
import Tabs from '@/components/shared/vTabs.vue'
import Calendar from '@/components/shared/Calendar.vue'

const html = `
<div class="calendar">
	<div class="calendar__header">October 2019</div>
	<div class="calendar__wrapper">
		<div class="calendar__inner">
			<span class="calendar__item calendar__item_day">Mon</span>
			<!-- ... -->
			<span class="calendar__item calendar__item_active">18</span>
			<span class="calendar__item calendar__item_between-active">19</span>
			<!-- ... -->
		</div>
	</div>
</div>
`

const css = `
.calendar {
	width: 300px;
	padding: 28px 30px;
	background: var(--white);
	border-radius: 8px;
	border: 1px solid var(--grey-3);
	font-weight: 400;
	color: var(--calendar);
	font-size: 16px;
	box-sizing: border-box;
}
.calendar__header {
	margin-bottom: 24px;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	text-align: center;
}
.calendar__wrapper {
	padding-bottom: 100%;
	position: relative;
}
.calendar__inner {
	position: absolute;
	inset: 0;
	display: grid;
	grid-template: repeat(7, 1fr) / repeat(7, 1fr);
}
.calendar__item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.calendar__item_day {
	font-size: 14px;
	color: var(--calendar-day);
}
.calendar__item_active {
	background: var(--blue);
	color: var(--white);
}
.calendar__item_between-active {
	background: var(--calenar-between-bg);
}
`
</script>
