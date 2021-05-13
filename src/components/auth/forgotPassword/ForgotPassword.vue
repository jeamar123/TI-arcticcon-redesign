<template>
  <AuthContainer
    title="Forgot password"
    :no-shrink-heading="false"
    @submit-form="submitForgotPassword"
  >
    <template #inputs>
      <Input
        v-model="form.username.value"
        :error="form.username.error"
        name="username"
        label="Username"
        type="text"
        @input="clearError('username', form)"
        @blur="validateField('username', form)"
      />
    </template>
    <template #text> We will send you a password reset code </template>
  </AuthContainer>
</template>

<script>
import {
  validateField,
  validateForm,
  clearError,
} from "@/assets/js/validation";
import AuthContainer from "../AuthContainer";
import Input from "@/components/common/Input";

export default {
  name: "ForgotPassword",
  props: {},
  emits: ["reset-code-sent"],
  components: {
    AuthContainer,
    Input,
  },
  data: () => ({
    form: {
      username: {
        value: "",
        error: "",
        rules: ["required"],
      },
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    submitForgotPassword() {
      this.$emit("reset-code-sent");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
