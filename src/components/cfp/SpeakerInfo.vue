<template>
  <div class="speaker-info">
    <SectionWithBg heading-position="left" heading-top single-line-heading>
      <template #heading>
        Let's get
        <br class="speaker-info__line-break" />
        introduced
      </template>
      <template #body>
        <form @submit.prevent="submitSpeakerInfo" class="speaker-info__form">
          <Input
            v-for="(field, name) in form"
            :key="name"
            v-model="field.value"
            :error="field.error"
            :name="name"
            :label="field.label"
            :is-multiline="field.isMultiline"
            :rows="field.rows"
            type="text"
            @input="clearError(name, form)"
            @blur="validateField(name, form)"
          />
          <Button class="speaker-info__button"> next </Button>
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
  name: "SpeakerInfo",
  props: {},
  emits: ["submit-speaker-data"],
  components: {
    SectionWithBg,
    Input,
    Button,
  },
  data: () => ({
    form: {
      first_name: {
        value: "",
        error: "",
        rules: ["required"],
        label: "First Name",
      },
      last_name: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Last Name",
      },
      organization: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Organization",
      },
      position: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Position",
      },
      bio: {
        value: "",
        error: "",
        rules: ["required"],
        label: "Bio",
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
    submitSpeakerInfo() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      const speakerData = this.transformForm(this.form);
      this.$emit("submit-speaker-data", speakerData);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.speaker-info {
  padding-top: 106px;

  &__button {
    width: 100%;
    margin-top: 24px;
  }

  &__line-break {
    display: none;
  }

  @media (min-width: $media-sm) {
    padding-top: 16px;

    &__form {
      min-width: 340px;
    }

    &__line-break {
      display: block;
    }
  }

  @media (min-width: $media-md) {
    &__form {
      min-width: 462px;
    }
  }

  @media (min-width: $media-lg) {
    &__form {
      min-width: 400px;
    }
  }
}
</style>
