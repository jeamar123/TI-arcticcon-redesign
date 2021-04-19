<template>
  <SectionWithBg
    heading-position="left"
    single-line-heading
    class="volunteering"
  >
    <template #heading> Interested in volunteering? </template>
    <template #body>
      <form @submit.prevent="submitVolunteering">
        <!-- <Input
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
        /> -->
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
// import Input from "@/components/common/Input";
// import Button from "@/components/common/Button";

export default {
  name: "Volunteering",
  props: {},
  components: {
    SectionWithBg,
    // Input,
    // Button,
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
    submitVolunteering() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.volunteering {
  margin-top: 32px;
}
</style>
