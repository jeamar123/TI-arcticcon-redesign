<template>
  <article class="sponsor-full">
    <div class="sponsor-full__image-wrapper">
      <Carousel :items-to-show="1">
        <Slide v-for="slide in 10" :key="slide">
          <img
            :src="getImgPath(pkg.name)"
            :alt="`${pkg.name} sponsorship level`"
            class="sponsor-full__image"
          />
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <div class="sponsor-full__title-row">
        <div class="sponsor-full__heading-wrapper">
          <h4 class="sponsor-full__heading">{{ pkg.name }} package</h4>
          <p class="sponsor-full__price">$ {{ pkg.price }}</p>
        </div>
        <div class="sponsor-full__button-wrapper">
          <Button is-empty class="sponsor-full__button"> select </Button>
          <p class="sponsor-full__quantity">{{ pkg.sponsor }} available</p>
        </div>
      </div>
    </div>
    <dl class="sponsor-full__features">
      <dt class="sponsor-full__feature-title">Live Preferences</dt>
      <dd
        v-for="feature in pkg.features"
        :key="feature"
        class="sponsor-full__feature-text"
      >
        {{ feature }}
      </dd>
    </dl>
  </article>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Button from "@/components/common/Button";

export default {
  name: "SponsorCardFull",
  props: {
    pkg: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Button,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({}),
  computed: {},
  methods: {
    getImgPath(level) {
      return require(`../../assets/img/sponsor-${level.toLowerCase()}.jpg`);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.sponsor-full {
  &__image {
    display: block;
    width: 100%;
    height: 288px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 8px;
  }

  &__title-row {
    margin-bottom: 16px;
  }

  &__heading-wrapper {
    padding-left: 32px;
    margin-bottom: 16px;
    color: $black;
  }

  &__heading {
    font-weight: $sansBold;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -46px;
      left: -16px;
      height: 73px;
      width: 2px;
      background-color: $black;
    }
  }

  &__price {
    font-family: $sarabun;
    font-size: 0.9rem;
    line-height: 1.3;
  }

  &__button {
    width: 100%;
  }

  &__quantity {
    padding-left: 32px;
  }

  &__features {
    margin-bottom: 22px;
  }

  &__feature-title {
    color: $black;
    font-weight: $sansBold;
    font-size: 0.9rem;
    line-height: 1.3;
    margin-bottom: 20px;
  }

  &__feature-text {
    margin-left: 0;

    &::before {
      content: "\2013";
      color: $black;
      font-weight: $sansBold;
      margin-right: 16px;
    }
  }

  &__image-wrapper {
    .carousel__prev,
    .carousel__next {
      min-width: 32px !important;
      height: 32px !important;
      padding: 0 !important;
      background-color: rgba($light-gray, 0.4) !important;
      background-image: none !important;
      background-position: unset !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      transition: background-color 0.3s;
      z-index: 100;

      &::before,
      &::after {
        display: none;
      }

      svg {
        display: block !important;
        fill: $gray;
        transition: transform 0.3s;
      }

      &:hover {
        background-color: rgba($light-gray, 0.7) !important;

        svg {
          transform: scale(1.2);
        }
      }
    }

    .carousel__pagination {
      padding-left: 0;
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translateX(-50%);
    }

    .carousel__pagination-button {
      width: 8px;
      height: 8px;
      padding: 0;
      border-radius: 100%;
      background-color: rgba(255, 255, 255, 0.6);

      &--active {
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }

  @media (min-width: $media-xs) {
    &__image {
      height: 448px;
    }

    &__title-row {
      display: flex;
      justify-content: space-between;
    }

    &__heading-wrapper {
      margin-bottom: 0;
    }

    &__button-wrapper {
      width: 50%;
      flex-shrink: 0;
    }

    &__button {
      margin-top: 12px;
    }

    &__quantity {
      padding-left: 0;
      text-align: right;
    }
  }

  @media (min-width: $media-sm) {
    &__title-row {
      margin-bottom: 24px;
    }

    &__heading {
      margin-bottom: 8px;
    }

    &__price {
      font-size: 1.3rem;
      line-height: 1;
    }

    &__button-wrapper {
      width: 35%;
    }
  }

  @media (min-width: $media-md) {
    &__image-wrapper {
      display: flex;
      align-items: flex-end;
      margin-bottom: 32px;
    }

    &__image {
      height: 328px;
      width: 444px;
      margin-right: 16px;
      margin-bottom: 0;
      flex-shrink: 0;
    }

    &__title-row {
      flex-flow: column;
      margin-bottom: 0;
    }

    &__button-wrapper {
      width: 135px;
    }

    &__quantity {
      line-height: 0.8;
      padding-top: 16px;
      text-align: left;
    }

    &__heading-wrapper {
      margin-bottom: 95px;
      padding-left: 0;
    }

    &__heading {
      margin-bottom: 16px;

      &::before {
        top: 90px;
        left: 0;
      }
    }
  }
}
</style>
