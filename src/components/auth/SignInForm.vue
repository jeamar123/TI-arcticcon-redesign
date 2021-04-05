<template>
  <AuthContainer
    title="Sign in"
    :has-error="hasError"
    @submit-form="submitSignIn"
  >
    <template #inputs>
      <Input
        v-for="(field, name) in form"
        :key="name"
        v-model="field.value"
        :error="field.error"
        :disabled="isFormSending"
        :name="name"
        :label="field.label"
        :type="name.toLowerCase().includes('password') ? 'password' : 'text'"
        @input="clearError(name, form)"
        @blur="validateField(name, form)"
      />
    </template>
    <template #error>
      <Error>
        <template #heading> Incorrect username or password </template>
        <template #body>
          Double-check your username and password. You may have used social
          media to login.
        </template>
      </Error>
    </template>
    <template #text>
      If you have an account, you can
      <Link link="/login">log in</Link>.
      <br />
      By clicking Sign Up, you are indicating that you have read and acknowledge
      the
      <Link link="/terms-of-service" target="_blank">Terms of Service</Link> and
      <Link link="/privacy-policy" target="_blank">Privacy Notice</Link>.
      <!-- Also you can use social media for sign up to conference -->
    </template>
  </AuthContainer>
</template>

<script>
import { transformForm } from "@/assets/js/utils";
import {
  validateField,
  validateForm,
  clearError,
} from "@/assets/js/validation";
import AuthContainer from "./AuthContainer";
import Input from "@/components/common/Input";
import Link from "@/components/common/Link";
import Error from "@/components/common/Error";

export default {
  name: "LoginForm",
  props: {},
  components: {
    AuthContainer,
    Input,
    Link,
    Error,
  },
  data: () => ({
    form: {
      username: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Login",
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
    hasError: false,
    isFormSending: false,
  }),
  computed: {},
  methods: {
    transformForm,
    validateField,
    validateForm,
    clearError,

    submitSignIn() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;
    },
  },
};
</script>
