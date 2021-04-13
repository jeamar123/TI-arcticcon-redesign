<template>
  <article class="sponsor-breef">
    <img
      :src="getImgPath(pkg.name)"
      :alt="`${pkg.name} sponsorship level`"
      class="sponsor-breef__image"
    />
    <div class="sponsor-breef__info">
      <h4 class="sponsor-breef__title">{{ pkg.name }} package</h4>
      <p>
        &ndash; $ {{ pkg.price }}
        <br />
        &ndash; {{ pkg.sponsor }} available
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "SponsorCardBreef",
  props: {
    pkg: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {},
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

.sponsor-breef {
  cursor: pointer;
  padding: 0 8px;

  &__image {
    width: 100%;
    height: 395px;
    object-fit: cover;
    object-position: center;
  }

  &__info {
    padding: 0 32px;
  }

  &__title {
    color: $black;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -46px;
      left: -16px;
      height: 72px;
      width: 2px;
      background-color: $black;
    }
  }

  @media (min-width: $media-xs) {
    &__image {
      height: 300px;
    }
  }

  @media (min-width: $media-md) {
    &__image {
      height: 404px;
    }
  }
}
</style>
