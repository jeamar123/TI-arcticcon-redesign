<template>
  <AuthContainer title="Login" :has-error="hasError" @submit-form="submitLogin">
    <template #inputs>
      <Input
        v-for="(field, name) in form"
        :key="name"
        v-model="field.value"
        :error="field.error"
        :disabled="isFormSending"
        :name="name"
        :label="field.label"
        :type="name === 'password' ? 'password' : 'text'"
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
      If you haven’t account, you can
      <Link link="/sign-in">create it</Link>.
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
      password: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Password",
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

    submitLogin() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;
    },
  },
};
</script>
