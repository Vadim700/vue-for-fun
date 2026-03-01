<template>
  <label :for="uniqId" class="switcher__wrapper" :class="{ disabled: disabled }">
    <slot name="left"></slot>
    <div
      class="switcher__label border rounded-full cursor-pointer relative"
      :style="{ width: size + 'px', height: size / 2 + 'px' }"
    >
      <input
        type="checkbox"
        :id="uniqId"
        class="switcher__input"
        @change="handleChange"
        :checked="checked"
      />
      <span
        class="switcher__thumb"
        :style="{ width: size / 2 - 3 + 'px', height: size / 2 - 3 + 'px' }"
      ></span>
    </div>
    <slot name="right"></slot>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 52,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:checked'])
const handleChange = (e) => emit('update:checked', e.target.checked)

const uniqId = computed(() => `switcher-${crypto.randomUUID()}`)
</script>

<style scoped lang="scss">
.switcher {
  &__wrapper {
    display: inline-flex;
    align-items: center;

    &.disabled {
      pointer-events: none;

      & .switcher__label {
        opacity: 0.6;
      }
    }
  }

  &__label {
    display: inline-block;
    border-color: var(--grey-3);
    transition: all 0.2s;

    &:has(input:checked) {
      background-color: var(--blue);
      border-color: var(--blue);
    }

    &.disabled {
      opacity: 0.6;
      pointer-events: none;
    }
  }

  &__input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;

    &:checked {
      & + .switcher__thumb {
        left: calc(100% - v-bind('props.size / 2 - 3 + "px"'));
        background-color: var(--white);
      }
    }
  }

  &__thumb {
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    border-radius: 50%;

    background-color: var(--grey-3);
    transition: all 0.2s;
  }
}
</style>
