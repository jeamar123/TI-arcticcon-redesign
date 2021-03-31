<template>
  <div class="login">
    <SectionWithBg
      single-line-heading
      heading-position="left"
      class="login__section"
    >
      <template #heading> Login </template>
      <template #body>
        <Input
          v-model="form.username.value"
          :error="form.username.error"
          :disabled="isFormSending"
          name="login"
          label="Login"
          type="text"
        />
        <Input
          v-model="form.password.value"
          :error="form.password.error"
          :disabled="isFormSending"
          name="pass"
          label="Password"
          type="password"
        />
        <Button class="login__button"> submit </Button>
        <p class="login__text">
          If you haven’t account, you can
          <Link link="/sign-in">create it</Link>. Also you can use social media
          for sign up to conference
        </p>
      </template>
    </SectionWithBg>
  </div>
</template>

<script>
import SectionWithBg from "@/components/common/SectionWithBg";
import Link from "@/components/common/Link";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default {
  name: "Login",
  props: {},
  components: {
    SectionWithBg,
    Link,
    Input,
    Button,
  },
  data: () => ({
    form: {
      username: {
        value: "",
        error: "",
      },
      password: {
        value: "abs",
        error: "error error error error error",
      },
    },
    isFormSending: false,
  }),
  computed: {},
  methods: {},
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
    margin-top: 46px;
    margin-bottom: 32px;
  }
}
</style>
