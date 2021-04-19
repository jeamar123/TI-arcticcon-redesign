<template>
  <section class="talk-info"></section>
</template>

<script>
export default {
  name: "TalkInfo",
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.talk-info {
  padding-top: 106px;

  @media (min-width: $media-sm) {
    padding-top: 16px;
  }
}
</style>
