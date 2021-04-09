<template>
  <div class="sponsor-pkgs padding-x">
    <Heading type="h3" text-align="alter" class="sponsor-pkgs__title">
      Select preferred package
    </Heading>
    <div class="sponsor-pkgs__wrapper">
      <SponsorCardBreef
        v-for="pkg in packages"
        :key="pkg.name"
        :pkg="pkg"
        class="sponsor-pkgs__package"
      />
    </div>

    <SponsorCardFull
      v-for="pkg in packages"
      :key="pkg.name"
      :pkg="pkg"
      class="sponsor-pkgs__package-full"
    />
  </div>
</template>

<script>
import Heading from "@/components/common/Heading";
import SponsorCardBreef from "./SponsorCardBreef";
import SponsorCardFull from "./SponsorCardFull";

export default {
  name: "SponsorPackages",
  props: {
    packages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Heading,
    SponsorCardBreef,
    SponsorCardFull,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.sponsor-pkgs {
  padding-top: 35px;

  &__title {
    margin-bottom: 24px;
  }

  @media (min-width: $media-xs) {
    &__wrapper {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media (min-width: $media-sm) {
    padding-left: 256px !important;
    padding-top: 123px;

    &__wrapper {
      grid-gap: 24px;
    }

    &__title {
      margin-bottom: 88px;
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
