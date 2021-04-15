<template>
  <article class="sponsor-breef">
    <img
      :src="pkg.primary_image"
      :alt="`${pkg.name} sponsorship level`"
      class="sponsor-breef__image"
    />
    <div class="sponsor-breef__info">
      <h4 class="sponsor-breef__title">{{ pkg.friendly_name }}</h4>
      <p>
        &ndash; $ {{ pkg.price }}
        <br />
        &ndash; {{ pkgsAvailable }} available
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
  computed: {
    pkgsAvailable() {
      return this.pkg.quantity - this.pkg.purchased;
    },
  },
  methods: {},
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
    text-align: left;
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
