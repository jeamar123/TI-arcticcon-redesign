<template>
  <div class="join">
    <SectionWithBg
      single-line-heading
      heading-top
      growing-body
      min-width-heading
      heading-position="left"
    >
      <template #heading> Join to ArcticCone 2021 </template>
      <template #body>
        <div class="join__wrapper">
          <form @submit.prevent="submitTicketCode" class="join__form">
            <Input
              v-model="form.code.value"
              :error="form.code.error"
              type="text"
              name="join-code"
              label="Ticket code"
            />
            <Button class="join__button"> join to conference </Button>
          </form>
          <p class="join__text">
            If you don't have the code you can
            <Link link="/"> buy them now </Link>
          </p>
        </div>
      </template>
    </SectionWithBg>
  </div>
</template>

<script>
import { validateForm } from "@/assets/js/validation";
import SectionWithBg from "@/components/common/SectionWithBg";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "@/components/common/Link";

export default {
  name: "Join",
  props: {},
  components: {
    SectionWithBg,
    Input,
    Button,
    Link,
  },
  data: () => ({
    form: {
      code: {
        value: "",
        error: "",
        rules: ["required"],
      },
    },
  }),
  computed: {},
  methods: {
    validateForm,
    submitTicketCode() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.join {
  padding-top: 106px;

  &__button {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  @media (min-width: $media-sm) {
    &__wrapper {
      max-width: 374px;
    }
  }

  @media (min-width: $media-sm) {
    &__wrapper {
      max-width: 462px;
    }
  }
}
</style>
