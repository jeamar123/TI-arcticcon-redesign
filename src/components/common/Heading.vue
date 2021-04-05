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
  font-weight: bold;
  font-family: $sarabun;
  font-weight: $sarabunBold;
  letter-spacing: 0.05em;
  color: $black;
  text-decoration: underline;

  &--left {
    text-align: left;
  }

  &--center {
    text-align: center;
  }

  &--alter {
    text-align: center;
  }

  &--h1 {
    font-size: 2.25rem;
    line-height: 1.2;
  }

  &--h2 {
    font-size: 2rem;
    line-height: 1.5;
  }

  &--h3 {
    font-size: 1.3rem;
    line-height: 1.25;
  }

  @media (min-width: $media-sm) {
    &--h1 {
      font-size: 3.1rem;
    }

    &--h2 {
      font-size: 2.7rem;
      line-height: 1.2;
    }

    &--h3 {
      font-size: 2rem;
    }

    &--alter {
      text-align: left;
    }
  }

  @media (min-width: $media-lg) {
    &--h1 {
      font-size: 4.75rem;
      line-height: 1.1;
    }

    &--h2 {
      font-size: 3.6rem;
      line-height: 1.1;
    }

    &--h3 {
      font-size: 3rem;
      line-height: 1.4;
    }
  }
}
</style>
