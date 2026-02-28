<template>
  <div class="items-center grid place-content-center">
    <h2 class="text-3xl mb-20">Custom form elements</h2>
    <div class="component-description__top-content card__content_grid-preview">
      <label class="checkbox">
        <input type="checkbox" class="checkbox__input" />
        <div class="checkbox__state">
          <div class="checkbox__control">
            <svg class="checkbox__icon">
              <!-- <use href="/assets/images/sprite.svg#check"></use> -->
            </svg>
          </div>
          <div class="checkbox__label">Default</div>
        </div>
      </label>
      <label class="checkbox">
        <input type="checkbox" class="checkbox__input" />
        <div class="checkbox__state">
          <div class="checkbox__control">
            <svg class="checkbox__icon">
              <!-- <use href="/assets/images/sprite.svg#check"></use> -->
            </svg>
          </div>
          <div class="checkbox__label">Checked</div>
        </div>
      </label>
      <label class="checkbox">
        <input type="checkbox" class="checkbox__input" />
        <div class="checkbox__state">
          <div class="checkbox__control">
            <svg class="checkbox__icon">
              <!-- <use href="/assets/images/sprite.svg#check"></use> -->
            </svg>
          </div>
          <div class="checkbox__label">Disabled</div>
        </div>
      </label>

      <label class="radio">
        <input type="radio" class="radio__input" name="radio-name" />
        <div class="radio__state">
          <div class="radio__control"></div>
          <div class="radio__label">Default</div>
        </div>
      </label>
      <label class="radio">
        <input type="radio" class="radio__input" name="radio-name" />
        <div class="radio__state">
          <div class="radio__control"></div>
          <div class="radio__label">Selected</div>
        </div>
      </label>
      <label class="radio">
        <input type="radio" class="radio__input" name="radio-name" />
        <div class="radio__state">
          <div class="radio__control"></div>
          <div class="radio__label">Disabled</div>
        </div>
      </label>

      <label class="toggler">
        <input type="checkbox" class="toggler__input" />
        <div class="toggler__state">
          <div class="toggler__control"></div>
          <div class="toggler__label">Off</div>
        </div>
      </label>
      <label class="toggler">
        <input type="checkbox" class="toggler__input" />
        <div class="toggler__state">
          <div class="toggler__control"></div>
          <div class="toggler__label">On</div>
        </div>
      </label>
      <label class="toggler">
        <input type="checkbox" class="toggler__input" />
        <div class="toggler__state">
          <div class="toggler__control"></div>
          <div class="toggler__label">Disabled</div>
        </div>
      </label>
    </div>
  </div>

  <Tabs :html :css />
</template>

<script setup lang="ts">
import Tabs from '@/components/shared/vTabs.vue'

const html = `
<div class="tooltip">
	<div class="tolltip__trigger">
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
	font-style: normal;
	font-weight: 400;
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

.tolltip__trigger:hover~.tooltip__bubble {
	display: block;
}
`
</script>

<style scoped lang="scss"></style>
