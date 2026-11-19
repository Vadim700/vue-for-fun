<template>
  <section>
    <header class="mb-8">
      <p class="eyebrow">UI · Element</p>
      <h2 class="page-title mt-1 text-2xl sm:text-3xl">Form elements</h2>
      <p class="page-subtitle">
        Custom radios, checkboxes and switches: native inputs inside labels, all state handled by
        CSS.
      </p>
    </header>

    <div class="card grid gap-8 px-6 py-8 sm:grid-cols-3">
      <div>
        <h3 class="text-ink-soft mb-4 text-xs font-extrabold tracking-widest uppercase">Radio</h3>
        <div class="grid gap-4">
          <Radio title="Default" />
          <Radio title="Selected" :checked="true" />
          <Radio title="Disabled" :disabled="true" />
        </div>
      </div>

      <div>
        <h3 class="text-ink-soft mb-4 text-xs font-extrabold tracking-widest uppercase">
          Checkbox
        </h3>
        <div class="grid gap-4">
          <Checkbox title="Default" />
          <Checkbox title="Checked" :checked="true" />
          <Checkbox title="Disabled" :disabled="true" :checked="true" />
        </div>
      </div>

      <div>
        <h3 class="text-ink-soft mb-4 text-xs font-extrabold tracking-widest uppercase">
          Switcher
        </h3>
        <div class="grid gap-4">
          <Switcher :size="48">
            <template #right>
              <span class="text-ink-soft ml-2 text-sm font-semibold">Off</span>
            </template>
          </Switcher>
          <Switcher :size="48" :checked="true">
            <template #right>
              <span class="text-ink-soft ml-2 text-sm font-semibold">On</span>
            </template>
          </Switcher>
          <Switcher :disabled="true">
            <template #right>
              <span class="text-ink-soft ml-2 text-sm font-semibold">Disabled</span>
            </template>
          </Switcher>
        </div>
      </div>
    </div>

    <Tabs :html :css />
  </section>
</template>

<script setup>
import Tabs from '@/components/shared/vTabs.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Radio from '@/components/ui/Radio.vue'
import Switcher from '@/components/ui/Switcher.vue'

const html = `
<label class="checkbox">
  <input type="checkbox" class="checkbox__input">
  <div class="checkbox__state">
    <div class="checkbox__control">
      <svg class="checkbox__icon">
        <use href="/assets/images/sprite.svg#check"></use>
      </svg>
    </div>
    <div class="checkbox__label">Default</div>
  </div>
</label>

<label class="radio">
  <input type="radio" class="radio__input" name="radio-name" checked>
  <div class="radio__state">
    <div class="radio__control"></div>
    <div class="radio__label">Selected</div>
  </div>
</label>

<label class="toggler">
  <input type="checkbox" class="toggler__input">
  <div class="toggler__state">
    <div class="toggler__control"></div>
    <div class="toggler__label">Off</div>
  </div>
</label>
`

const css = `
.checkbox {
	display: inline-block;
	position: relative;
}
.checkbox__input {
	position: absolute;
	clip: rect(0, 0, 0, 0);
}
.checkbox__state {
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
}
.checkbox__control {
	width: 28px;
	height: 28px;
	background: var(--white);
	border: 1px solid var(--grey-2);
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.checkbox__icon {
	width: 28px;
	height: 28px;
	color: var(--white);
	display: none;
}
.checkbox__label {
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	color: var(--grey-4);
	user-select: none;
}
.checkbox__input:checked ~ .checkbox__state .checkbox__icon {
	display: block;
}
.checkbox__input:checked ~ .checkbox__state .checkbox__control {
	background: var(--blue);
	border: 1px solid var(--blue);
}
.checkbox__input:focus ~ .checkbox__state .checkbox__label {
	text-decoration: underline;
}
.checkbox__input:disabled ~ .checkbox__state .checkbox__control {
	background: var(--grey-2);
}
.checkbox__input:disabled ~ .checkbox__state .checkbox__label {
	color: var(--grey-2);
}
.checkbox__input:disabled ~ .checkbox__state {
	cursor: default;
}
`
</script>
