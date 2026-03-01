<template>
  <div class="items-center grid place-content-center">
    <h2 class="text-3xl mb-20">Custom form elements</h2>
    <div class="grid grid-rows-3 grid-cols-2 grid-flow-col gap-x-8 gap-y-4">
      <Radio :title="'Default'" />
      <Radio :title="'Selected'" :checked="true"/>
      <Radio :title="'Desabled'" :disabled="true" />
      <Checkbox :title="'Default'" />
      <Checkbox :title="'Checked'" :checked="true" />
      <Checkbox :title="'Disabled'" :disabled="true" :checked="true" />
      <Switcher :size="52" :checked="false">
        <template #right>
          <span class="ml-2 hover:underline cursor-pointer">Off</span>
        </template>
      </Switcher>

      <Switcher :size="52" :checked="true">
        <template #right>
          <span class="ml-2 hover:underline cursor-pointer">On</span>
        </template>
      </Switcher>

      <Switcher :disabled="true">
        <template #right>
          <span class="ml-2">Disabled</span>
        </template>
      </Switcher>
    </div>
  </div>

  <Tabs :html :css />
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
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	color: var(--grey-4);
	user-select: none;
}
.checkbox__input:checked~.checkbox__state .checkbox__icon {
	display: block;
}
.checkbox__input:checked~.checkbox__state .checkbox__control {
	background: var(--blue);
	border: 1px solid var(--blue);
}
.checkbox__input:focus~.checkbox__state .checkbox__label {
	text-decoration: underline;
}
.checkbox__input:disabled~.checkbox__state .checkbox__control {
	background: var(--grey-2);
}
.checkbox__input:disabled~.checkbox__state .checkbox__label {
	color: var(--grey-2);
}
.checkbox__input:disabled~.checkbox__state {
	cursor: default;
}
`
</script>

<style scoped lang="scss"></style>
