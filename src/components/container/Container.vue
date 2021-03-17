<template>
  <div class="container">
    <Nav />
    <slot />
    <Footer class="container__footer" />
  </div>
</template>

<script>
import Nav from "./Nav";
import Footer from "./Footer";

export default {
  name: "Container",
  props: {},
  components: {
    Nav,
    Footer,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.container {
  min-height: 100vh;
  display: flex;
  flex-flow: column;

  &__footer {
    margin-top: auto;
  }
}
</style>
