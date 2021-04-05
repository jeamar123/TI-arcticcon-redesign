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
        <template #heading> {{ errorHeader }} </template>
        <template #body>
          <template v-if="isWrongPass">
            Double-check your username and password. You may have used social
            media to login
          </template>
          <template v-else-if="isUnconfirmed">
            Check your email for verification link.
            <button class="error__link" @click="resendVerification">
              Click here</button
            >, if you haven’t verification link.
          </template>
          <template v-else-if="isUnknownErr || isEmailError">
            Please try again or contact us at
            <a href="mailto:mailto:info@arctic-con.com" class="error__link">
              mailto:info@arctic-con.com
            </a>
          </template>
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
import { mapGetters, mapActions } from "vuex";
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
    isFormSending: false,
    hasError: false,
    isWrongPass: false,
    isUnconfirmed: false,
    isUnknownErr: false,
    isEmailError: false,
  }),
  computed: {
    ...mapGetters(["currentBackPath"]),
    errorHeader() {
      let text = "Seems there was an issue";

      if (this.isWrongPass) text = "Incorrect username or password";
      if (this.isUnconfirmed) text = "Account hasn’t been confirmed";
      if (this.isEmailError)
        text = "Seems there was an issue resending verification link";

      return text;
    },
  },
  methods: {
    ...mapActions(["signIn", "resendSignUp"]),
    transformForm,
    validateField,
    validateForm,
    clearError,

    submitLogin() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      this.isFormSending = true;
      this.signIn(this.transformForm(this.form))
        .then(() => {
          this.clearErrors();
          this.$router.push(this.currentBackPath);
        })
        .catch((err) => {
          if (err.code) {
            if (err.code === "NotAuthorizedException") this.isWrongPass = true;
            else if (err.code === "UserNotConfirmedException")
              this.isUnconfirmed = true;
          } else {
            this.isUnknownErr = true;
          }

          this.hasError = true;
        })
        .finally(() => {
          this.isFormSending = false;
        });
    },
    clearErrors() {
      if (this.hasError) {
        this.hasError = false;

        if (this.isWrongPass) this.isWrongPass = false;
        if (this.isUnconfirmed) this.isUnconfirmed = false;
        if (this.isUnknownErr) this.isUnknownErr = false;
        if (this.isEmailError) this.isEmailError = false;
      }
    },
    resendVerification() {
      this.clearErrors();
      this.resendSignUp().catch(() => {
        this.hasError = true;
        this.isEmailError = true;
      });
    },
  },
};
</script>
