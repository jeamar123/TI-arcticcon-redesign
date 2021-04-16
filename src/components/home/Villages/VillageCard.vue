<template>
  <article class="village-card">
    <img
      src="../../../assets/img/village-sample.jpg"
      :alt="`${village.name} image`"
      class="village-card__image"
    />
    <div class="village-card__text">
      <h4 class="village-card__title">
        {{ village.name }}
      </h4>
      <p class="village-card__description">
        {{ village.description }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "VillageCard",
  props: {
    village: {
      type: Object,
      default: () => ({}),
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

.village-card {
  &__image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    display: block;
    margin-bottom: 8px;
  }

  &__text {
    padding-left: 32px;
    text-align: left;
  }

  &__title {
    color: $black;
    font-weight: $sansBold;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -48px;
      left: -16px;
      width: 2px;
      height: 73px;
      background-color: $black;
    }
  }

  @media (min-width: $media-xs) {
    &__image {
      height: 304px;
    }
  }

  @media (min-width: $media-sm) {
    &__image {
      height: 290px;
    }
  }

  @media (min-width: $media-md) {
    &__image {
      height: 416px;
      margin-bottom: 32px;
    }

    &__title {
      &::before {
        height: 129px;
        top: -103px;
      }
    }
  }

  @media (min-width: $media-lg) {
    &__image {
      height: 480px;
    }
  }
}
</style>
