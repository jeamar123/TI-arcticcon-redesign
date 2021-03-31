<template>
  <button class="button" :class="{ 'button--empty': isEmpty }">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    isEmpty: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.button {
  display: block;
  padding: 0;
  border: 4px solid $black;
  background-color: $black;
  color: $white;
  font-family: $sarabun;
  font-weight: $sarabunSemibold;
  font-size: 1.3rem;
  line-height: 1;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  height: 56px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, opacity 0.3s;

  &:hover {
    background-color: $white;
    color: $black;
  }

  &:active {
    opacity: 0.6;
  }

  &--empty {
    height: 40px;
    background-color: transparent;
    color: $black;
    border: 2px solid $black;
    font-size: 1rem;
    line-height: 1.3;

    &:hover {
      background-color: $black;
      color: $white;
    }
  }

  @media (min-width: $media-sm) {
    &--empty {
      height: 56px;
    }
  }
}
</style>
