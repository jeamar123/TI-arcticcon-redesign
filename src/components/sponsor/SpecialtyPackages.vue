<template>
  <div class="specialties padding-x">
    <Heading type="h3" text-align="alter" class="specialties__title">
      Do you want speciality pakages?
    </Heading>
    <div class="specialties__list">
      <SpecialtyCard v-for="pkg in packages" :key="pkg.name" :specialty="pkg" />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/common/Heading";
import SpecialtyCard from "./SpecialtyCard";

export default {
  name: "SpecialtyPackages",
  props: {
    packages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Heading,
    SpecialtyCard,
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
  }

  @media (min-width: $media-sm) {
    padding-left: 256px !important;
    padding-top: 123px;

    &__title {
      margin-bottom: 86px;
    }

    &__list {
      grid-gap: 24px;
    }
  }

  @media (min-width: $media-md) {
    padding-left: 344px !important;
  }

  @media (min-width: $media-lg) {
    padding-left: calc(15vw + 308px + 24px) !important;
    padding-top: 145px;
  }

  @media (min-width: $media-xl) {
    padding-left: calc(20vw + 308px + 24px) !important;
  }
}
</style>
