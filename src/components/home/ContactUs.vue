<template>
  <div class="contact-us">
    <SectionWithBg growing-body single-line-heading heading-position="left">
      <template #heading> Contact us </template>
      <template #body>
        <form @submit.prevent="submitContactUs" class="contact-us__form">
          <Input
            v-for="(field, name) in form"
            :key="name"
            v-model="field.value"
            :error="field.error"
            :name="name"
            :label="field.label"
            :is-multiline="field.isMultiline"
            type="text"
            @input="clearError(name, form)"
            @blur="validateField(name, form)"
          />
          <Button class="contact-us__button mt-4"> submit </Button>
        </form>
      </template>
    </SectionWithBg>
  </div>
</template>

<script>
import { transformForm } from "@/assets/js/utils";
import {
  validateField,
  validateForm,
  clearError,
} from "@/assets/js/validation";
import SectionWithBg from "@/components/common/SectionWithBg";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default {
  name: "ContactUs",
  props: {},
  components: {
    SectionWithBg,
    Input,
    Button,
  },
  data: () => ({
    form: {
      name: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Name",
      },
      email: {
        value: "",
        error: "",
        rules: ["required", "email"],
        label: "Email",
      },
      message: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Message",
        isMultiline: true,
      },
    },
  }),
  computed: {},
  methods: {
    transformForm,
    validateField,
    validateForm,
    clearError,
    submitContactUs() {
      // should probably be submitting form to CRM
      // in old multipart/form manner
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.contact-us {
  padding-top: 32px;

  &__button {
    width: 100%;
  }

  @media (min-width: $media-sm) {
    &__form {
      width: 100%;
      max-width: 382px;
    }
  }

  @media (min-width: $media-md) {
    &__form {
      max-width: 462px;
    }
  }
}
</style>
