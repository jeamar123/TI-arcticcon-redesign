<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {},
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
    opacity: 0.6s;
  }
}
</style>
