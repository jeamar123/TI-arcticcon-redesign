<template>
  <SectionWithBg
    heading-top
    single-line-heading
    heading-position="left"
    class="sponsor-form"
  >
    <template #heading>
      Sponsor
      <br />
      application
    </template>
    <template #body>
      <form @submit.prevent="submitSponsorForm" class="sponsor-form__form">
        <Input
          v-for="(field, name) in form"
          :key="name"
          v-model="field.value"
          :error="field.error"
          :disabled="isFormSending"
          :name="name"
          :label="field.label"
          type="text"
          @input="clearError(name, form)"
          @blur="validateField(name, form)"
        />
        <Button class="sponsor-form__button"> next </Button>
      </form>
    </template>
  </SectionWithBg>
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
  name: "SponsorForm",
  props: {},
  emits: ["sponsor-form-filled"],
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
        label: "First Name, Last Name",
      },
      email: {
        value: "",
        error: "",
        rules: ["required", "email"],
        label: "Email",
      },
      phone: {
        value: "",
        error: "",
        rules: ["required", "phone"],
        label: "Phone",
      },
      organisation: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Organization",
      },
      website: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Website",
      },
    },
    isFormSending: false,
  }),
  computed: {},
  methods: {
    transformForm,
    validateField,
    validateForm,
    clearError,
    submitSponsorForm() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      const formData = this.transformForm(this.form);
      this.$emit("sponsor-form-filled", formData);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.sponsor-form {
  padding-top: 106px;

  br {
    display: none;
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-sm) {
    br {
      display: block;
    }

    &__form {
      min-width: 332px;
      width: 50%;
    }
  }

  @media (min-width: $media-md) {
    &__form {
      min-width: 462px;
      width: 50%;
    }
  }

  @media (min-width: $media-lg) {
    &__form {
      min-width: 402px;
      width: 50%;
    }
  }
}
</style>
