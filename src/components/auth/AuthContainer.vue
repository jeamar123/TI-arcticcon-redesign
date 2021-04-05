<template>
  <div class="auth-container">
    <SectionWithBg
      single-line-heading
      heading-top
      no-shrink-heading
      heading-position="left"
      class="auth-container__section"
    >
      <template #heading> {{ title }} </template>
      <template #body>
        <div class="auth-container__form-wrapper">
          <form
            @submit.prevent="$emit('submit-form')"
            class="auth-container__form"
          >
            <slot name="inputs" />
            <Button class="auth-container__button"> submit </Button>
            <transition name="fade">
              <div v-if="hasError" class="auth-container__error">
                <slot name="error" />
              </div>
            </transition>
          </form>
          <p class="auth-container__text">
            <slot name="text" />
          </p>
        </div>
      </template>
    </SectionWithBg>
  </div>
</template>

<script>
import SectionWithBg from "@/components/common/SectionWithBg";
import Button from "@/components/common/Button";

export default {
  name: "Login",
  props: {
    title: {
      type: String,
      default: "",
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["submit-form"],
  components: {
    SectionWithBg,
    Button,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.auth-container {
  padding-top: 106px;
  padding-bottom: 40px;

  &__section {
    padding-top: 0;
  }

  &__button {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;
  }

  &__error {
    margin-top: -30px;
  }

  @media (min-width: $media-sm) {
    padding-top: 152px;
    padding-bottom: 0;

    &__form-wrapper {
      padding-left: 88px;
    }
  }

  @media (min-width: $media-md) {
    &__form-wrapper {
      padding-left: 52px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    &__form {
      min-width: 374px;
    }

    &__text {
      margin-right: 32px;
    }
  }
}
</style>
