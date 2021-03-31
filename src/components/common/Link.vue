<template>
  <router-link :to="link" class="link" :class="{ 'link--smaller': isSmaller }">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    link: {
      type: String,
      default: "",
    },
    isSmaller: {
      type: Boolean,
      default: false,
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

.link {
  color: black;
  transition: text-decoration 0.3s, opacity 0.3s;

  &:hover {
    text-decoration: none;
  }

  &:active {
    opacity: 0.6;
  }

  &--smaller {
    font-size: 0.9rem;
    line-height: 1.4;
  }
}
</style>
