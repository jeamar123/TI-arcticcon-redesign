<template>
  <div class="error">
    <p class="error__heading">
      <slot name="heading" />
    </p>
    <p class="error__text">
      <slot name="body" />
    </p>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.error {
  font-size: 0.9rem;
  line-height: 1.4;
  letter-spacing: 0.05rem;
  padding: 8px 0;

  &__heading {
    font-weight: $sansBold;
    color: $error-red;
  }
}
</style>
