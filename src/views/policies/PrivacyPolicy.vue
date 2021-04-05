<template>
  <PolicyPage title="Privacy Policy" :data="data">
    <template #heading-follower>
      Your privacy is important to us. It is ArcticCon's policy to respect your
      privacy regarding any information we may collect from you across our
      website,
      <Link link="https://arctic-con.com/" target="_blank">arctic-con.com</Link
      >, and other sites we own and operate.
    </template>
  </PolicyPage>
</template>

<script>
import data from "../../../public/policies/privacy-policy";
import PolicyPage from "@/components/policies/PolicyPage";
import Link from "@/components/common/Link";

export default {
  name: "PrivacyPolicy",
  props: {},
  components: {
    PolicyPage,
    Link,
  },
  data: () => ({
    data,
  }),
  computed: {},
  methods: {},
};
</script>
