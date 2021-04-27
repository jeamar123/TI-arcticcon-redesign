<template>
  <ForgotPassword v-if="!isCodeSent" @reset-code-sent="isCodeSent = true" />
  <NewPassword v-else />
</template>

<script>
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";

export default {
  name: "ForgotPasswordForm",
  props: {},
  components: {
    ForgotPassword,
    NewPassword,
  },
  data: () => ({
    isCodeSent: false,
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
