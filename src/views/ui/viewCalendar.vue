<template>
  <div class="items-center grid place-content-center">
    <h2 class="text-3xl mb-4">Custom form elements</h2>
    <div class="m-auto">
      <Calendar :preview="true"/>
    </div>
  </div>

  <Tabs :html :css />
</template>

<script setup>
import Tabs from '@/components/shared/vTabs.vue';
import Calendar from '@/components/ui/Calendar.vue';

const html = `
<div class="calendar ">
	<div class="calendar__header">October 2019</div>
	<div class="calendar__wrapper">
		<div class="calendar__inner">
			<span class="calendar__item calendar__item_day">Mon</span>
			<span class="calendar__item calendar__item_day">Tue</span>
			<span class="calendar__item calendar__item_day">Wed</span>
			<span class="calendar__item calendar__item_day">Thu</span>
			<span class="calendar__item calendar__item_day">Fri</span>
			<span class="calendar__item calendar__item_day">Sat</span>
			<span class="calendar__item calendar__item_day">Sun</span>
			<span class="calendar__item"></span>
			<span class="calendar__item"></span>
			<span class="calendar__item"></span>
			<span class="calendar__item"></span>
			<span class="calendar__item">1</span>
			<span class="calendar__item">2</span>
			<span class="calendar__item">3</span>
			<span class="calendar__item">4</span>
			<span class="calendar__item">5</span>
			<span class="calendar__item">6</span>
			<span class="calendar__item">7</span>
			<span class="calendar__item">8</span>
			<span class="calendar__item">9</span>
			<span class="calendar__item">10</span>
			<span class="calendar__item">11</span>
			<span class="calendar__item">12</span>
			<span class="calendar__item">13</span>
			<span class="calendar__item">14</span>
			<span class="calendar__item">15</span>
			<span class="calendar__item">16</span>
			<span class="calendar__item">17</span>
			<span class="calendar__item calendar__item_active">18</span>
			<span class="calendar__item calendar__item_between-active">19</span>
			<span class="calendar__item calendar__item_between-active">20</span>
			<span class="calendar__item calendar__item_between-active">21</span>
			<span class="calendar__item calendar__item_between-active">22</span>
			<span class="calendar__item calendar__item_active">23</span>
			<span class="calendar__item">24</span>
			<span class="calendar__item">25</span>
			<span class="calendar__item">26</span>
			<span class="calendar__item">27</span>
			<span class="calendar__item">28</span>
			<span class="calendar__item">29</span>
			<span class="calendar__item">30</span>
			<span class="calendar__item">31</span>
		</div>
	</div>
</div>

`

const css = `
.calendar {
	width: 300;
	padding: 28px 30px;
	background: var(--white);
	border-radius: 8px;
	border: 1px solid var(--grey-3);
	font-family: 'Inter';
	font-style: normal;
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
	background: var(--white);
}
.calendar__wrapper {
	padding-bottom: 100%;
	position: relative;
}
.calendar__inner {
	position: absolute;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	display: grid;
	grid-template: repeat(7, 1fr)/repeat(7, 1fr);
}
.calendar__item {
	background: var(--white);
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
	color: var(--white)
}
.calendar__item_between-active {
	background: var(--calenar-between-bg);
}
.calendar_preview {
	width: 200px;
	font-size: 12px;
	padding: 15px;
}
.calendar_preview .calendar__header {
	font-size: 14px;
	margin-bottom: 8px;
}
.calendar_preview .calendar__item {
	font-size: 12px;
}
.calendar_preview .calendar__item_day {
	font-size: 10px;
}
.calendar_preview .calendar__inner {
	grid-template: repeat(6, 1fr)/repeat(7, 1fr);
}
`
</script>

<style scoped lang="scss"></style>
