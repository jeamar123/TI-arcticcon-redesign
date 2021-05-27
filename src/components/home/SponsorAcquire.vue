<template>
  <SectionWithBg growing-body heading-position="left" class="sponsor-acquire">
    <template #heading>
      <div class="sponsor-acquire__title">Do you want to join us?</div>
    </template>
    <template #body>
      <form
        @submit.prevent="submitSponsorAcquiring"
        class="sponsor-acquire__form"
      >
        <div
          v-for="(field, name) in form"
          :key="name"
          class="sponsor-acquire__input-container"
        >
          <Input
            v-model="field.value"
            :error="field.error"
            :name="`sponsor-acquire-${name}`"
            :label="field.label"
            type="text"
            @input="clearError(name, form)"
            @blur="validateField(name, form)"
          />
          <div
            v-if="!field.rules.includes('required')"
            class="sponsor-acquire__optional"
          >
            Optional
          </div>
        </div>
        <Button class="sponsor-acquire__button"> submit </Button>
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
  name: "SponsorAcquire",
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
      company: {
        value: "",
        error: "",
        rules: [],
        label: "Company",
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
    submitSponsorAcquiring() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.sponsor-acquire {
  &__input-container {
    position: relative;
  }

  &__optional {
    position: absolute;
    right: 0;
    bottom: -4px;
    font-size: 0.9rem;
    color: $gray;
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-sm) {
    &__title {
      max-width: 320px;
    }
    &__form {
      min-width: 380px;
    }
  }

  @media (min-width: $media-md) {
    &__form {
      min-width: 480px;
    }
  }
}
</style>
