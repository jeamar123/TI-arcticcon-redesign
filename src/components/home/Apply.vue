<template>
  <SectionWithBg heading-position="right" class="apply">
    <template #heading>
      Want to share your
      <br />
      experience?
    </template>
    <template #body>
      <p class="apply__text">
        If you’re an expert in your IT field, ArcticCon is a great platform to
        get your message out. Show off your research, an attack or even a
        solution you implemented that others should see. Well, you are in luck!
        Call For Papers is now open. Click below to apply!
      </p>
      <Button
        class="apply__button"
        @click="$router.push(`/${$route.params.id}/cfp`)"
      >
        apply
      </Button>
    </template>
  </SectionWithBg>
</template>

<script>
import SectionWithBg from "@/components/common/SectionWithBg";
import Button from "@/components/common/Button";

export default {
  name: "Apply",
  props: {},
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

.apply {
  &__text {
    margin-bottom: 24px;
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-xs) {
    &__button {
      width: 50%;
      margin: 0 auto;
    }
  }

  @media (min-width: $media-sm) {
    &__text {
      margin-bottom: 32px;
    }

    &__button {
      width: 100%;
    }
  }

  @media (min-width: $media-md) {
    &__button {
      width: 80%;
      margin: 0;
    }
  }
}
</style>
