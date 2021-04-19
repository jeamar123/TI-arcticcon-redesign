<template>
  <section class="talk-info padding-x">
    <Heading type="h3" text-align="alter" class="talk-info__title">
      How can we contact you?
    </Heading>
    <form @submit.prevent="submitCfp" class="talk-info__form">
      <Input
        v-for="(field, name) in form"
        :key="name"
        v-model="field.value"
        :error="field.error"
        :name="name"
        :label="field.label"
        type="text"
        @input="clearError(name, form)"
        @blur="validateField(name, form)"
      />
      <Button class="talk-info__button mt-6"> next </Button>
    </form>
  </section>
</template>

<script>
import {
  validateField,
  validateForm,
  clearError,
} from "@/assets/js/validation";
import Heading from "@/components/common/Heading";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default {
  name: "TalkInfo",
  props: {},
  components: {
    Heading,
    Input,
    Button,
  },
  data: () => ({
    form: {
      phone: {
        value: "",
        error: "",
        rules: ["required", "phone"],
        label: "Phone",
      },
      email: {
        value: "",
        error: "",
        rules: ["required", "email"],
        label: "Email",
      },
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    submitCfp() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.talk-info {
  padding-top: 35px;

  &__title {
    margin-bottom: 54px;
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-sm) {
    padding-top: 124px;
    padding-left: calc(232px + 24px) !important;

    &__title {
      margin-bottom: 116px;
    }

    &__form {
      padding-left: 58px;
    }
  }

  @media (min-width: $media-md) {
    padding-left: calc(320px + 24px) !important;

    &__form {
      padding-left: 78px;
    }
  }

  @media (min-width: $media-lg) {
    padding-top: 144px;
    padding-left: calc(15vw + 308px + 24px) !important;

    &__title {
      margin-bottom: 94px;
    }

    &__form {
      padding-left: 98px;
    }
  }

  @media (min-width: $media-xl) {
    padding-left: calc(20vw + 308px + 24px) !important;
  }
}
</style>
