<template>
  <div class="form-success">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FormSuccess",
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.form-success {
  font-size: 1.5rem;
  line-height: 1.7;
  text-align: center;

  @media (min-width: $media-sm) {
    font-size: 1.7rem;
    text-align: left;
  }
}
</style>
