<template>
  <component
    :is="type"
    :class="[`heading--${type}`, `heading--${textAlign}`]"
    class="heading"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "Heading",
  props: {
    type: {
      type: String,
      default: "h2",
    },
    textAlign: {
      type: String,
      default: "left", // could also be 'center' and 'alter'
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

.heading {
  // $self: &;
  font-weight: bold;
  font-family: $sarabun;
  font-weight: $sarabunBold;
  letter-spacing: 0.05em;
  // font-size: 32px;
  // line-height: 44px;
  // letter-spacing: 0.02em;
  color: $black;
  text-decoration: underline;

  &--left {
    text-align: left;
  }

  &--h1 {
    font-size: 2.2rem;
    line-height: 1.2;
  }

  // &--h3 {
  //   font-size: 24px;
  //   line-height: 33px;
  // }

  // &--h4 {
  //   font-size: 18px;
  //   line-height: 25px;
  // }

  // @media (min-width: $media-sm) {
  //   font-size: 56px;
  //   line-height: 76px;

  //   &--h3 {
  //     font-size: 32px;
  //     line-height: 44px;
  //   }

  //   &--h4 {
  //     font-size: 24px;
  //     line-height: 33px;
  //   }
  // }

  @media (min-width: $media-sm) {
    font-size: 3.1rem;
  }

  @media (min-width: $media-lg) {
    font-size: 4.75rem;
    line-height: 1.1;
  }
}
</style>
