<template>
  <div class="contact-us">
    <SectionWithBg growing-body single-line-heading heading-position="left">
      <template #heading> Contact us </template>
      <template #body>
        <div class="contact-us__body">
          <transition name="fade">
            <FormSuccess v-if="isFormSent">
              Thank you for contacting us! We will respond you as soon as
              possible!
            </FormSuccess>
          </transition>
          <transition name="fade">
            <form
              v-if="!isFormSent"
              @submit.prevent="sendContactForm"
              class="contact-us__form"
            >
              <Input
                v-for="(field, name) in form"
                :key="name"
                v-model="field.value"
                :error="field.error"
                :name="name"
                :label="field.label"
                :is-multiline="field.isMultiline"
                :rows="3"
                type="text"
                @input="clearError(name, form)"
                @blur="validateField(name, form)"
              />
              <Button class="contact-us__button mt-4 mb-2"> submit </Button>
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
  </div>
</template>

<script>
import { reactive } from "vue";
import { validateField, clearError } from "@/assets/js/validation";
import useSqsFormSend from "@/assets/js/composables/sqsFormSend";
import SectionWithBg from "@/components/common/SectionWithBg";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import FormSuccess from "@/components/common/FormSuccess";
import Error from "@/components/common/Error";

export default {
  name: "ContactUs",
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
    });

    const { isFormSent, hasError, sendForm } = useSqsFormSend();

    const sendContactForm = () => {
      sendForm(form, "contact");
    };

    return {
      form,
      isFormSent,
      hasError,
      sendContactForm,
      validateField,
      clearError,
    };
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
    padding-top: 0;

    &__body {
      width: 100%;
      max-width: 382px;
    }
  }

  @media (min-width: $media-md) {
    &__body {
      max-width: 462px;
    }
  }
}
</style>
