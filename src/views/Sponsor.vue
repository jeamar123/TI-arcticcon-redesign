<template>
  <SponsorPage />
</template>

<script>
import SponsorPage from "@/components/sponsor/SponsorPage";

export default {
  name: "Sponsor",
  props: {},
  components: {
    SponsorPage,
  },
  data: () => ({}),
  computed: {},
  mounted() {
    this.$emit("done");
  },
  methods: {},
};
</script>
