<template>
  <div class="checkbox" :class="{ checkbox_disabled: disabled }">
    <label :for="uniqId" class="checkbox__label hover:underline cursor-pointer">
      <input
        :id="uniqId"
        :checked="checked"
        :disabled="disabled"
        type="checkbox"
        class="checkbox__input"
      />
      <span class="checkbox__blur"></span>
      {{ title }}
    </label>
  </div>
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
.checkbox {
  position: relative;

  &_disabled {
    pointer-events: none;

    & .checkbox__blur {
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
      background-color: var(--blue);
      border: 1px solid var(--blue);

      &::after {
        content: url('../../assets/icons/check.svg');
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        text-align: center;
      }
    }

    &:disabled + span {
      background-color: var(--grey-2);
      border-color: var(--grey-2);

      &::after {
        content: none;
      }
    }
  }

  &__blur {
    display: inline-block;
    width: 26px;
    height: 26px;

    border: 1px solid var(--grey-2);
    border-radius: 3px;
    position: relative;

    &::before {
    }
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
