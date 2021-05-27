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
      <div class="volunteering__body">
        <transition name="fade">
          <FormSuccess v-if="isFormSent">
            Thank you for apply! We will contact you as soon as possible!
          </FormSuccess>
        </transition>
        <transition name="fade">
          <form
            v-if="!isFormSent"
            @submit.prevent="sendVolunteeringForm"
            class="volunteering__form"
          >
            <Input
              v-model="form.email.value"
              :error="form.email.error"
              name="volunt-email"
              label="Email"
              type="text"
              @input="clearError('email', form)"
              @blur="validateField('email', form)"
            />
            <Button class="volunteering__button mt-4 mb-2"> submit </Button>
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
  name: "Volunteering",
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
      email: {
        value: "",
        error: "",
        rules: ["required", "email"],
      },
    });

    const { isFormSent, hasError, sendForm } = useSqsFormSend();

    const sendVolunteeringForm = () => {
      sendForm(form, "volinteering");
    };

    return {
      form,
      isFormSent,
      hasError,
      sendVolunteeringForm,
      validateField,
      clearError,
    };
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
    &__body {
      width: 100%;
      max-width: 374px;
      flex-grow: 1;
    }
  }

  @media (min-width: $media-md) {
    &__body {
      max-width: 462px;
    }
  }
}
</style>
