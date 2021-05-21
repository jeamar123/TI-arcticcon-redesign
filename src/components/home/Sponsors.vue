<template>
  <div>
    <section class="sponsors padding-x">
      <Heading type="h2" text-align="center" class="sponsors__heading">
        Gold Sponsors
      </Heading>
      <ul class="sponsors__list">
        <li
          v-for="sponsor in sponsors.gold"
          :key="sponsor.vueKey"
          class="sponsors__item"
        >
          <a href="#" class="sponsors__link">
            <img
              src="@/assets/img/sponsor-sample.png"
              alt="sponsor logo"
              class="sponsors__img"
            />
          </a>
        </li>
      </ul>
    </section>
    <section class="sponsors padding-x">
      <Heading type="h2" text-align="center" class="sponsors__heading">
        Silver Sponsors
      </Heading>
      <ul class="sponsors__list">
        <li
          v-for="sponsor in sponsors.silver"
          :key="sponsor.vueKey"
          class="sponsors__item"
        >
          <a href="#" class="sponsors__link">
            <img
              src="@/assets/img/sponsor-sample.png"
              alt="sponsor logo"
              class="sponsors__img"
            />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Heading from "@/components/common/Heading";

export default {
  name: "Sponsors",
  props: {},
  components: {
    Heading,
  },
  data: () => ({
    sponsors: {
      gold: [1, 2, 3, 4],
      silver: [1, 2, 3, 4],
    },
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.sponsors {
  $self: &;

  padding-top: 36px;

  &__heading {
    margin-bottom: 20px;
  }

  &__list {
    padding-left: 0;
    list-style-type: none;
    display: grid;
    justify-content: center;
    grid-gap: 16px;
  }

  &__item {
    width: 280px;
    height: 280px;
    position: relative;
    border: 1px solid $gray;
  }

  &__link {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:hover #{$self}__img {
      transform: scale(1.1);
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s;
  }

  @media (min-width: $media-xs) {
    &__list {
      grid-template-columns: repeat(2, 215px);
    }

    &__item {
      width: 215px;
      height: 215px;
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 120px;

    &__heading {
      margin-bottom: 56px;
    }

    &__list {
      grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
      grid-gap: 24px;
    }

    &__item {
      width: 100%;
      height: unset;
      padding-top: 100%;
    }
  }

  @media (min-width: $media-lg) {
    &__heading {
      margin-bottom: 88px;
    }
  }
}
</style>
