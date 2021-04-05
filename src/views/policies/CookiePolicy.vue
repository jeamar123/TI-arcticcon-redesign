<template>
  <PolicyPage title="Cookie Policy" :data="data" />
</template>

<script>
import data from "../../../public/policies/cookie-policy";
import PolicyPage from "@/components/policies/PolicyPage";

export default {
  name: "CookiePolicy",
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
