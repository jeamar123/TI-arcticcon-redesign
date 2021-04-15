<template>
  <div class="specialties padding-x">
    <Heading type="h3" text-align="alter" class="specialties__title">
      Do you want speciality pakages?
    </Heading>
    <div class="specialties__list">
      <SpecialtyCard
        v-for="pkg in packages"
        :key="pkg.name"
        :specialty="pkg"
        @click="$emit('toggle-specialty', pkg)"
      />
    </div>
    <Button class="specialties__button" @click="$emit('apply')"> apply </Button>
    <transition name="fade">
      <Error v-if="hasError" class="mt-4">
        <template #heading>
          Seems there was an issue with sponsorship application
        </template>
        <template #body>
          Please try again or contact us at
          <a href="mailto:mailto:info@arctic-con.com" class="error__link">
            mailto:info@arctic-con.com
          </a>
        </template>
      </Error>
    </transition>
  </div>
</template>

<script>
import Heading from "@/components/common/Heading";
import SpecialtyCard from "./SpecialtyCard";
import Button from "@/components/common/Button";
import Error from "@/components/common/Error";

export default {
  name: "SpecialtyPackages",
  props: {
    packages: {
      type: Array,
      default: () => [],
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["toggle-specialty", "apply"],
  components: {
    Heading,
    SpecialtyCard,
    Button,
    Error,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
.specialties {
  padding-top: 35px;

  &__title {
    margin-bottom: 24px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 24px 16px;
    margin-bottom: 16px;
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-xs) {
    &__button {
      width: 216px;
      margin: 0 auto;
    }
  }

  @media (min-width: $media-sm) {
    padding-left: 256px !important;
    padding-top: 123px;

    &__title {
      margin-bottom: 86px;
    }

    &__list {
      grid-gap: 24px;
      margin-bottom: 32px;
    }

    &__button {
      width: 324px;
    }
  }

  @media (min-width: $media-md) {
    padding-left: 344px !important;
  }

  @media (min-width: $media-lg) {
    padding-left: calc(15vw + 308px + 24px) !important;
    padding-top: 145px;

    &__button {
      width: 368px;
    }
  }

  @media (min-width: $media-xl) {
    padding-left: calc(20vw + 308px + 24px) !important;
  }
}
</style>
