<template>
  <section class="villages padding-x">
    <Heading type="h2" text-align="center" class="villages__heading">
      Villages
    </Heading>
    <Carousel
      wrap-around
      :settings="carouselSettings"
      :breakpoints="carouselBreakpoints"
    >
      <Slide v-for="village in villages" :key="village.name">
        <VillageCard :village="village" class="villages__item" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Heading from "@/components/common/Heading";
import VillageCard from "./VillageCard";

export default {
  name: "Villages",
  props: {},
  components: {
    Heading,
    VillageCard,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    carouselSettings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselBreakpoints: {
      480: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      720: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
    villages: [
      {
        name: "Dark web village1",
        description:
          "Explore Dark Web sites in this village with an updated catalog of interesting sites.",
      },
      {
        name: "Dark web village2",
        description:
          "Explore Dark Web sites in this village with an updated catalog of interesting sites.",
      },
      {
        name: "Dark web village3",
        description:
          "Explore Dark Web sites in this village with an updated catalog of interesting sites.",
      },
      {
        name: "Dark web village4",
        description:
          "Explore Dark Web sites in this village with an updated catalog of interesting sites.",
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.villages {
  padding-top: 32px;
  padding-bottom: 62px;

  &__heading {
    margin-bottom: 16px;
  }

  @media (min-width: $media-xs) {
    &__item {
      padding: 0 8px;
    }
  }

  @media (min-width: $media-sm) {
    &__heading {
      margin-bottom: 52px;
    }
  }

  @media (min-width: $media-lg) {
    &__heading {
      margin-bottom: 82px;
    }
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
    background-image: url("../../../assets/img/icons/arrow-next.svg");

    &::before {
      content: "Next";
      color: $gray;
      font-size: 0.9rem;
    }
  }

  .carousel__prev {
    padding-left: 24px;
    background-position: center left;
    background-image: url("../../../assets/img/icons/arrow-prev.svg");

    &::after {
      content: "Previous";
      color: $gray;
      font-size: 0.9rem;
    }
  }
}
</style>
