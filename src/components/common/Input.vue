<template>
  <div
    ref="inputContainerRef"
    :class="[
      'input',
      {
        'input--error': error,
        'input--non-empty': !isInputEmpty,
      },
    ]"
  >
    <div class="input__wrapper">
      <component
        :is="isMultiline ? 'textarea' : 'input'"
        :value.prop="modelValue"
        :placeholder="label"
        :id="name"
        :rows="isMultiline ? rows : null"
        ref="inputRef"
        class="input__control"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label :for="name" class="input__label">
        {{ label }}
      </label>
    </div>
    <transition name="fade">
      <div v-if="error" class="input__error">
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CInput",

  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    isMultiline: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    rows: {
      type: [String, Number],
      default: 1,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    isInputEmpty() {
      return !this.modelValue.length;
    },
  },
  watch: {
    modelValue() {
      this.autoResize();
    },
  },
  methods: {
    autoResize() {
      if (this.isMultiline) {
        const elem = document.getElementById(this.name);
        const offset = elem.offsetHeight - elem.clientHeight;

        elem.style.height = this.modelValue
          ? elem.scrollHeight + offset + "px"
          : "56px";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.input {
  $self: &;

  width: 100%;
  padding-bottom: 24px;
  position: relative;

  &__wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  &__control {
    border: none;
    min-height: 56px;
    min-width: 100px;
    width: 100%;
    padding: 16px 16px 16px 32px;
    background-color: transparent;
    border-bottom: 1px solid $black;
    color: $black;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.3;
    resize: none;
    font-family: $sarabun;

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
        transition: color 0.2s;
      }
    }

    &:disabled {
      opacity: 0.5;
    }

    &::placeholder {
      color: $black;
      opacity: 1;
    }
  }

  &__error {
    padding: 2px 16px 0 32px;
    font-size: 14px;
    line-height: 1.2;
    color: $error-red;
    text-align: left;
  }

  &__label {
    position: absolute;
    left: 27px;
    font-size: 0.85rem;
    font-family: $sarabun;
    font-weight: $sarabunSemibold;
    line-height: 1.2;
    padding: 0 5px;
    opacity: 0;
    top: 20px;
    color: $black;
    transition: top 0.2s, opacity 0.2s 0.1s, background-color 0.2s;
  }

  &--error {
    #{$self}__label {
      top: -10px;
      opacity: 1;
      color: $error-red;
    }

    #{$self}__control {
      border-color: $error-red;
    }
  }

  &--non-empty #{$self}__label,
  &__control:focus ~ #{$self}__label {
    top: -10px;
    opacity: 1;
    transition: top 0.2s 0.1s, opacity 0.3s, background-color 0.2s 0.1s;
  }
}
</style>
