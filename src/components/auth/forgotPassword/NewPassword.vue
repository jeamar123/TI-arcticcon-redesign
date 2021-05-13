<template>
  <AuthContainer
    title="Create new password"
    :no-shrink-heading="false"
    :has-error="hasError"
    @submit-form="createNewPassword"
  >
    <template #inputs>
      <Input
        v-for="(field, name) in form"
        :key="name"
        v-model="field.value"
        :error="field.error"
        :name="name"
        :label="field.label"
        :type="name.toLowerCase().includes('password') ? 'password' : 'text'"
        @input="clearError(name, form)"
        @blur="validateField(name, form)"
      />
    </template>
    <template #text>
      Password must be 8 characters long and contain an uppercase, lowercase,
      digit, and special character
    </template>
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
  name: "NewPassword",
  props: {},
  components: {
    AuthContainer,
    Input,
  },
  data: () => ({
    hasError: false,
    form: {
      code: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Code",
      },
      email: {
        value: "",
        error: "",
        rules: ["required", "email"],
        label: "Email",
      },
      password: {
        value: "",
        error: "",
        rules: ["required", "password"],
        label: "Password",
      },
      confirmPassword: {
        value: "",
        error: "",
        rules: ["required", "password"],
        label: "Confirm password",
      },
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    createNewPassword() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
