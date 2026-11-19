<template>
  <section>
    <header class="mb-8">
      <p class="eyebrow">UI · Container</p>
      <h2 class="page-title mt-1 text-2xl sm:text-3xl">Tooltip</h2>
      <p class="page-subtitle">
        A CSS-only tooltip: it appears above the icon on hover and needs no JS positioning.
      </p>
    </header>

    <div class="card grid place-items-center gap-10 px-6 py-12">
      <Tooltip title="Helper text" />
      <p class="text-ink-soft text-sm">Hover the icon</p>
    </div>

    <Tabs :html :css />
  </section>
</template>

<script setup>
import Tabs from '@/components/shared/vTabs.vue'
import Tooltip from '@/components/ui/Tooltip.vue'

const html = `
<div class="tooltip">
	<div class="tooltip__trigger">
		<svg class="tooltip__icon">
			<use href="/assets/images/sprite.svg#help"></use>
		</svg>
	</div>
	<div class="tooltip__bubble">Helper Text</div>
</div>
`

const css = `
.tooltip {
	position: relative;
	display: inline-block;
}

.tooltip__bubble {
	position: absolute;
	bottom: calc(100% + 13px);
	left: 50%;
	transform: translateX(-50%);
	padding: 13px 21px 8px;
	display: none;
	font-family: 'Inter';
	font-size: 16px;
	line-height: 1.5;
	text-align: center;
	white-space: nowrap;
	color: var(--grey-2);
	background: var(--blue);
	box-shadow: 0px 2px 4px rgba(33, 36, 41, 0.05);
	border-radius: 10px;
}

.tooltip__icon {
	width: 22px;
	height: 22px;
}

.tooltip__bubble::after {
	content: '';
	border: 10px solid transparent;
	border-top: 10px solid var(--blue);
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
}

.tooltip__trigger:hover ~ .tooltip__bubble {
	display: block;
}
`
</script>
