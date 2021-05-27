<template>
  <SectionWithBg heading-position="left" class="sponsor-acquire">
    <template #heading>
      <div class="sponsor-acquire__title">Do you want to join us?</div>
    </template>
    <template #body>
      <div class="sponsor-acquire__body">
        <transition name="fade">
          <FormSuccess v-if="isFormSent">
            Thank you for aply! We will contact you as soon as possible!
          </FormSuccess>
        </transition>
        <transition name="fade">
          <form
            v-if="!isFormSent"
            @submit.prevent="sendSponsorshipForm"
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
            <Button class="sponsor-acquire__button mb-2"> submit </Button>
            <transition name="fade">
              <Error v-if="hasError">
                <template #heading> Something went wrong </template>
                <template #body>
                  Please try again or contact us at
                  <a
                    href="mailto:mailto:info@arctic-con.com"
                    class="error__link"
                  >
                    mailto:info@arctic-con.com
                  </a>
                </template>
              </Error>
            </transition>
          </form>
        </transition>
      </div>
    </template>
  </SectionWithBg>
</template>

<script>
import { validateField, clearError } from "@/assets/js/validation";
import SectionWithBg from "@/components/common/SectionWithBg";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import FormSuccess from "@/components/common/FormSuccess";
import Error from "@/components/common/Error";
import { reactive } from "vue";
import useSqsFormSend from "@/assets/js/composables/sqsFormSend";

export default {
  name: "SponsorAcquire",
  props: {},
  components: {
    SectionWithBg,
    Input,
    Button,
    FormSuccess,
    Error,
  },

  setup() {
    const form = reactive({
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
    });

    const { isFormSent, hasError, sendForm } = useSqsFormSend();

    const sendSponsorshipForm = () => {
      sendForm(form, "sponsorship");
    };

    return {
      form,
      isFormSent,
      hasError,
      sendSponsorshipForm,
      validateField,
      clearError,
    };
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

    &__body {
      min-width: 380px;
      max-width: 380px;
    }
  }

  @media (min-width: $media-md) {
    &__body {
      min-width: 480px;
      max-width: 480px;
    }
  }
}
</style>
