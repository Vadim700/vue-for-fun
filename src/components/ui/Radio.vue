<template>
  <label :for="uniqId" class="radio" :class="{ radio_disabled: disabled }">
    <input
      type="radio"
      name="radio-name"
      :id="uniqId"
      :checked="checked"
      :disabled="disabled"
      class="radio__input"
    />
    <span class="radio__blur"></span>
    {{ title }}
  </label>
</template>

<script setup>
import { computed } from 'vue'

const uniqId = computed(() => crypto.randomUUID())

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.radio {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  &_disabled {
    pointer-events: none;

    & .radio__blur {
      background-color: var(--grey-2);
      opacity: 0.6;
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

    &:checked + span {
      border-color: var(--blue);

      &::after {
        content: '';
        background-color: var(--blue);
      }
    }
  }

  &__blur {
    position: relative;

    display: inline-block;
    width: 26px;
    height: 26px;
    border: 1px solid var(--grey-2);
    border-radius: 50%;

    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      border-radius: 50%;
    }
  }
}
</style>
