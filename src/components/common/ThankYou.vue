<template>
  <div class="thank-you padding-x">
    <div class="thank-you__wrapper">
      <Heading type="h2" text-align="alter" class="thank-you__title">
        {{ title }}
      </Heading>
      <p class="thank-you__text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/common/Heading";

export default {
  name: "ThankYou",
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
.thank-you {
  padding-top: 150px;

  &__title {
    margin-bottom: 16px;
  }

  &__text {
    text-align: center;
  }

  @media (min-width: $media-sm) {
    padding-top: 250px;

    &::after {
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      z-index: -1;
      width: 50%;
      height: 100vh;
      background-color: $light-gray;
    }

    &__wrapper {
      width: 50%;
      padding-right: 60px;
    }

    &__title {
      margin-bottom: 24px;
    }

    &__text {
      text-align: left;
    }
  }

  @media (min-width: $media-md) {
    padding-top: 175px;

    &__wrapper {
      padding-right: 125px;
    }

    &__title {
      margin-bottom: 16px;
    }
  }

  @media (min-width: $media-lg) {
    padding-top: 240px;

    &__wrapper {
      padding-right: 16px;
    }

    &__title {
      margin-bottom: 24px;
    }
  }
}
</style>
