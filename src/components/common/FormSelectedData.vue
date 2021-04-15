<template>
  <div class="selected-data">
    <transition-group name="fade">
      <section
        v-for="item in data"
        :key="item.title"
        class="selected-data__section"
      >
        <template v-for="(field, name) in item" :key="name">
          <h4 v-if="name === 'title'" class="selected-data__heading">
            {{ field }}
          </h4>
          <Link
            v-else-if="String(field).includes('http')"
            :link="field"
            class="selected-data__link"
          >
            {{ field.split("://")[1] }}
          </Link>
          <p v-else-if="name === 'price'" class="selected-data__price">
            $&nbsp;{{ field }}
          </p>
          <p v-else>
            {{ field }}
          </p>
        </template>
      </section>
      <div v-if="$slots.policy" key="policy" class="selected-data__section">
        <slot name="policy" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Link from "@/components/common/Link";

export default {
  name: "FormSelectedData",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Link,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["currentPageHeight"]),
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.selected-data {
  padding: 106px 24px 0 40px;
  background-color: $light-gray;

  &__section {
    padding-bottom: 32px;
  }

  &__heading {
    color: $black;
    font-weight: $sansBold;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 8px;
      left: -16px;
      width: 2px;
      height: 56px;
      background-color: $black;
    }
  }

  &__link {
    color: inherit;
  }

  &__price {
    font-family: $sarabun;
    font-size: 1.3rem;
    line-height: 1.5;
    color: $black;
  }

  @media (min-width: $media-sm) {
    position: absolute;
    top: 0;
    left: 0;
    width: 232px;
    padding-top: 146px;
    background-color: transparent;

    &::before {
      content: "";
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      width: 232px;
      height: 100vh;
      background-color: $light-gray;
    }

    &__section {
      padding-bottom: 50px;
    }

    &__heading {
      &::before {
        height: 88px;
      }
    }
  }

  @media (min-width: $media-md) {
    width: 320px;

    &::before {
      width: 320px;
    }

    &__heading {
      &::before {
        height: 56px;
      }
    }
  }

  @media (min-width: $media-lg) {
    width: calc(15vw + 308px);
    padding-top: 167px;
    padding-left: calc(15vw + 40px);

    &::before {
      width: calc(15vw + 308px);
    }
  }

  @media (min-width: $media-xl) {
    width: calc(20vw + 308px);
    padding-left: calc(20vw + 40px);

    &::before {
      width: calc(20vw + 308px);
    }
  }
}
</style>
