<template>
  <PolicyPage title="Terms of Service" :data="data" />
</template>

<script>
import data from "../../../public/policies/terms-of-service";
import PolicyPage from "@/components/policies/PolicyPage";

export default {
  name: "TermsOfService",
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
