<template>
  <div class="hero padding-x">
    <div class="hero__wrapper">
      <Heading type="h1" class="mt-2 hero__heading">
        ArcticCon Virtual 2020
      </Heading>
      <p class="hero__text">Alaska's Information Security Conference</p>
      <div class="hero__box-wrapper">
        <div class="hero__box">
          <h5 class="hero__box-heading">When</h5>
          <p class="hero__box-text">09:00 AM - 05:00 PM,OCT 29, 2020</p>
        </div>
        <div class="hero__box">
          <h5 class="hero__box-heading">Where</h5>
          <p class="hero__box-text">ArcticCon Virtual Conference Platform</p>
        </div>
        <Button @click="test" type="text" class="hero__button">
          register
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default {
  name: "Hero",
  props: {},
  components: {
    Heading,
    Button,
  },
  data: () => ({}),
  computed: {},
  methods: {
    test() {
      alert("test");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.hero {
  $self: &;

  position: relative;
  padding-top: 260px;
  padding-bottom: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 260px;
    background-image: url("../../assets/img/ac-home-bg.jpg");
    background-position: 80% center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__heading {
    margin-bottom: 8px;
  }

  &__text {
    margin-bottom: 24px;
  }

  &__box {
    height: 56px;
    background-color: $light-gray;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 32px;
    margin-bottom: 32px;

    &:first-of-type {
      #{$self}__box-text {
        text-transform: uppercase;
      }
    }
  }

  &__box-heading {
    position: absolute;
    top: -11px;
    left: 56px;
    z-index: 1;
    font-family: $sarabun;
    font-weight: $sarabunSemibold;
    font-size: 0.9rem;
    line-height: 1.3;
    text-transform: uppercase;
    color: $black;
    letter-spacing: 0.1rem;
  }

  &__box-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-xs) {
    padding-top: 160px;

    &::before {
      height: 160px;
    }
  }

  @media (min-width: $media-sm) {
    min-height: 100vh;
    height: 100%;
    padding-top: 140px;
    padding-bottom: 40px;

    &::before {
      right: 0;
      left: unset;
      width: 50%;
      min-height: 100vh;
      height: 100%;
    }

    &__wrapper {
      width: 50%;
      padding-right: 24px;
      min-height: calc(100vh - 140px - 40px);
      display: flex;
      flex-flow: column;
    }

    &__heading {
      margin-bottom: 16px;
    }

    &__box-wrapper {
      margin-top: auto;
    }

    &__box {
      height: 112px;

      &:first-of-type {
        margin-bottom: 40px;
      }

      &:last-of-type {
        margin-bottom: 48px;
      }
    }

    &__box-text {
      white-space: unset;
      overflow: unset;
    }
  }

  @media (min-width: $media-md) {
    padding-bottom: 8px;

    &::before {
      width: 57%;
    }

    &__wrapper {
      width: 43%;
    }

    &__box {
      height: 80px;

      &:first-of-type {
        margin-bottom: 56px;
      }
    }

    &__box-text {
      white-space: nowrap;
      overflow: hidden;
    }
  }

  @media (min-width: $media-lg) {
    padding-bottom: 80px;

    &::before {
      width: 50%;
    }

    &__wrapper {
      width: 50%;
    }

    &__heading {
      margin-bottom: 24px;
    }

    &__text {
      margin-bottom: 72px;
    }

    &__box {
      &:first-of-type {
        margin-bottom: 52px;
      }

      &:last-of-type {
        margin-bottom: 42px;
      }
    }
  }
}
</style>
