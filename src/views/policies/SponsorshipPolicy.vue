<template>
  <PolicyPage title="Sponsorship Terms and Conditions" :data="data" />
</template>

<script>
import data from "../../../public/policies/sponsorship-policy";
import PolicyPage from "@/components/policies/PolicyPage";

export default {
  name: "SponsorshipPolicy",
  props: {},
  components: {
    PolicyPage,
  },
  data: () => ({
    data,
  }),
  computed: {},
  methods: {},
};
</script>
