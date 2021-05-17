<template>
  <div class="menu">
    <ul class="menu__list">
      <li v-for="item in menu" :key="item.name" class="menu__item">
        <router-link :to="item.path" class="menu__link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    menu: {
      type: Array,
      default: () => [],
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

.menu {
  position: fixed;
  // z-index: 10;
  background-color: $light-gray;
  min-height: calc(100vh - 72px);
  top: 72px;
  right: 0;
  width: 100%;
  padding-bottom: 100px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 24px;
    width: 100%;
    background-color: $blue;
  }

  &__list {
    padding-left: 0;
    margin-top: 16px;
    list-style-type: none;
    text-align: right;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 1px;
      background-color: $black;
    }
  }

  &__item {
    padding: 15px 0;
    padding-right: 16px;
  }

  &__link {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.3rem;
    line-height: 1;
    color: $black;
    position: relative;
    transition: opacity 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 1px;
      width: 0%;
      background-color: $black;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 80%;
    }

    &:active {
      opacity: 0.6;
    }
  }

  @media (min-width: $media-sm) {
    width: 320px;
    top: 108px;
    min-height: calc(100vh - 108px);

    &::before {
      content: "";
      position: absolute;
      min-height: 100vh;
      width: 100%;
      top: -108px;
      right: 0;
      background-color: $light-gray;
      box-shadow: -1px 0 5px 0 rgba($black, 30%);
    }

    &__item {
      padding-right: 24px;
    }
  }

  @media (min-width: $media-lg) {
    width: calc(15vw + 220px + 42px);

    &::before {
      height: 124px;
    }

    &__item {
      padding-right: 15vw;
    }

    &__list {
      &::before {
        width: calc(15vw + 50px);
      }
    }
  }

  @media (min-width: $media-xl) {
    width: calc(20vw + 220px + 42px);

    &__item {
      padding-right: 20vw;
    }

    &__list {
      &::before {
        width: calc(20vw + 50px);
      }
    }
  }
}
</style>
