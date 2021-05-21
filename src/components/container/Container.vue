<template>
  <div class="container" id="container">
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
  computed: {
    hash() {
      return this.$route.hash.split("#")[1];
    },
  },
  mounted() {
    this.scrollToSection(this.hash);
  },
  watch: {
    hash(val) {
      this.scrollToSection(val);
    },
  },
  methods: {
    scrollToSection(hash) {
      if (hash) {
        const elem = document.getElementById(hash);
        elem.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
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
