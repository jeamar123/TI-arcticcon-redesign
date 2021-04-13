<template>
  <div class="sponsor-pkgs padding-x">
    <Heading type="h3" text-align="alter" class="sponsor-pkgs__title">
      Select preferred package
    </Heading>
    <Carousel
      v-if="isPackageFull"
      wrap-around
      :settings="carouselSettings"
      :breakpoints="carouselBreakpoints"
      :current-slide="selectedPackage"
    >
      <Slide v-for="pkg in packages" :key="pkg.name">
        <SponsorCardFull :pkg="pkg" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <Carousel
      v-else
      :settings="carouselSettings"
      :breakpoints="carouselBreakpoints"
      :current-slide="selectedPackage"
    >
      <Slide v-for="(pkg, index) in packages" :key="pkg.name">
        <SponsorCardBreef :pkg="pkg" @click="showFullPackage(index)" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
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
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    isPackageFull: false,
    selectedPackage: 0,
    carouselSettings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
  }),
  computed: {
    carouselBreakpoints() {
      return {
        480: {
          itemsToShow: this.isPackageFull ? 1 : 2,
          snapAlign: "center",
        },
      };
    },
  },
  methods: {
    showFullPackage(index) {
      if (!this.isPackageFull) {
        this.isPackageFull = true;
        this.selectedPackage = Number(index);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.sponsor-pkgs {
  padding-top: 35px;

  &__title {
    margin-bottom: 24px;
  }

  @media (min-width: $media-sm) {
    padding-left: 256px !important;
    padding-top: 123px;

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

  .carousel__prev,
  .carousel__next {
    min-width: 100px;
    height: 32px;
    background-color: transparent;
    background-repeat: no-repeat;
    transform: translate(0, 0);
    top: 105%;
    z-index: 10;

    svg {
      display: none;
    }
  }

  .carousel__next {
    background-position: center right;
    background-image: url("../../assets/img/icons/arrow-next.svg");

    &::before {
      content: "Next";
      color: $gray;
      font-size: 0.9rem;
    }
  }

  .carousel__prev {
    padding-left: 24px;
    background-position: center left;
    background-image: url("../../assets/img/icons/arrow-prev.svg");

    &::after {
      content: "Previous";
      color: $gray;
      font-size: 0.9rem;
    }
  }
}
</style>
