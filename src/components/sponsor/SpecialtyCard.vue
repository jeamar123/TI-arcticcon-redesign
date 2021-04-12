<template>
  <article class="specialty-card">
    <div class="specialty-card__image-wrapper">
      <div class="specialty-card__image">
        <img src="../../assets/img/coffee-sample.jpg" :alt="specialty.name" />
      </div>
    </div>
    <h4 class="specialty-card__title">
      {{ specialty.name }}
    </h4>
    <!-- <p class="specialty-card__text">
      {num} available
    </p> -->
    <p class="specialty-card__text">$ {{ specialty.price }}</p>
    <p class="specialty-card__text">
      {{
        isDescriptionFull
          ? specialty.description
          : shortenText(specialty.description, 50)
      }}
    </p>
    <button
      v-if="!isDescriptionFull"
      @click="isDescriptionFull = true"
      class="specialty-card__read-more"
    >
      Read more
    </button>
  </article>
</template>

<script>
import { shortenText } from "@/assets/js/utils";

export default {
  name: "SpecialtyCard",
  props: {
    specialty: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {},
  data: () => ({
    isDescriptionFull: false,
  }),
  computed: {},
  methods: {
    shortenText,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.specialty-card {
  cursor: pointer;

  &:hover &__image img {
    transform: scale(1.1);
  }

  &__image-wrapper {
    width: 100%;
    padding-top: 100%;
    position: relative;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      transition: transform 0.3s;
    }
  }

  &__title {
    color: $black;
    font-weight: $sansBold;
  }

  &__text {
    &::before {
      content: "\2013";
      margin-right: 8px;
    }
  }

  &__read-more {
    border: none;
    background: transparent;
    padding: 0;
    color: $black;
    font-family: $sarabun;
    font-weight: $sarabunSemibold;
    text-decoration: underline;
    cursor: pointer;
    transition: text-decoration 0.3s, opacity 0.3s;

    &:hover {
      text-decoration: none;
    }

    &:active {
      opacity: 0.6;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
