<template>
  <div class="login">
    <SectionWithBg
      single-line-heading
      heading-top
      heading-position="left"
      class="login__section"
    >
      <template #heading> Login </template>
      <template #body>
        <div class="login__form-wrapper">
          <form @submit.prevent="submitLogin" class="login__form">
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
            <Button class="login__button"> submit </Button>
            <transition name="fade">
              <Error v-if="!isEmpty(error)" class="login__error">
                <template #heading>
                  {{ error.heading }}
                </template>
                <template #body>
                  {{ error.body }}
                </template>
              </Error>
            </transition>
          </form>
          <p class="login__text">
            If you haven’t account, you can
            <Link link="/sign-in">create it</Link>. Also you can use social
            media for sign up to conference
          </p>
        </div>
      </template>
    </SectionWithBg>
  </div>
</template>

<script>
import { isEmpty, transformForm } from "@/assets/js/utils";
import {
  validateField,
  validateForm,
  clearError,
} from "@/assets/js/validation";
import SectionWithBg from "@/components/common/SectionWithBg";
import Link from "@/components/common/Link";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Error from "@/components/common/Error";

export default {
  name: "Login",
  props: {},
  components: {
    SectionWithBg,
    Link,
    Input,
    Button,
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
    error: {
      title: "",
      body: "",
    },
    isFormSending: false,
  }),
  computed: {},
  methods: {
    isEmpty,
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

<style lang="scss">
@import "@/assets/scss/_variables";

.login {
  padding-top: 106px;
  padding-bottom: 40px;

  &__section {
    padding-top: 0;
  }

  &__button {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;
  }

  &__error {
    margin-top: -30px;
  }

  @media (min-width: $media-sm) {
    padding-top: 152px;
    padding-bottom: 0;

    &__form-wrapper {
      padding-left: 88px;
    }
  }

  @media (min-width: $media-md) {
    &__form-wrapper {
      padding-left: 52px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    &__form {
      min-width: 374px;
    }

    &__button {
      margin-bottom: 0;
    }

    &__text {
      margin-right: 32px;
    }
  }
}
</style>
