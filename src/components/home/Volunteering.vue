<template>
  <SectionWithBg
    heading-position="left"
    single-line-heading
    bigger-title-margin
    growing-body
    class="volunteering"
  >
    <template #heading>
      Interested in <br />
      volunteering?
    </template>
    <template #body>
      <form @submit.prevent="submitVolunteering" class="volunteering__form">
        <Input
          v-model="form.email.value"
          :error="form.email.error"
          name="volunt-email"
          label="Email"
          type="text"
          @input="clearError('email', form)"
          @blur="validateField('email', form)"
        />
        <Button class="volunteering__button mt-4"> submit </Button>
      </form>
    </template>
  </SectionWithBg>
</template>

<script>
import {
  validateField,
  validateForm,
  clearError,
} from "@/assets/js/validation";
import SectionWithBg from "@/components/common/SectionWithBg";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default {
  name: "Volunteering",
  props: {},
  components: {
    SectionWithBg,
    Input,
    Button,
  },
  data: () => ({
    form: {
      email: {
        value: "",
        error: "",
      },
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    submitVolunteering() {
      // should be submitting form to CRM
      // in old multipart/form manner
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.volunteering {
  margin-top: 32px;

  &__button {
    width: 100%;
  }

  @media (min-width: $media-sm) {
    &__form {
      max-width: 374px;
      flex-grow: 1;
    }
  }

  @media (min-width: $media-md) {
    &__form {
      max-width: 462px;
    }
  }
}
</style>
