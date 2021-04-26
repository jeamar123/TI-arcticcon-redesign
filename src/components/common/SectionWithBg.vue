<template>
  <section
    class="bg-section padding-x"
    :class="[
      `bg-section--heading-${headingPosition}`,
      `bg-section--py-${paddingY}`,
      {
        'bg-section--single-line-heading': singleLineHeading,
        'bg-section--heading-top': headingTop,
        'bg-section--no-shrink-heading': noShrinkHeading,
        'bg-section--bigger-title-margin': biggerTitleMargin,
        'bg-section--growing-body': growingBody,
      },
    ]"
  >
    <Heading text-align="alter" class="bg-section__heading">
      <slot name="heading" />
    </Heading>
    <div class="bg-section__text">
      <slot name="body" />
    </div>
  </section>
</template>

<script>
import Heading from "@/components/common/Heading";

export default {
  name: "SectionWithBg",
  props: {
    headingPosition: {
      type: String,
      default: "right",
    },
    singleLineHeading: {
      type: Boolean,
      default: false,
    },
    headingTop: {
      type: Boolean,
      default: false,
    },
    noShrinkHeading: {
      type: Boolean,
      default: false,
    },
    biggerTitleMargin: {
      type: Boolean,
      default: false,
    },
    growingBody: {
      type: Boolean,
      default: false,
    },
    paddingY: {
      type: String,
      default: "md", // can be also sm and lg
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.bg-section {
  $self: &;

  padding-top: 32px;
  background-clip: content-box;
  background-image: linear-gradient(to bottom, $white 60px, $light-gray 60px);

  &__heading {
    margin-bottom: 24px;
  }

  &--py-md {
    #{$self}__text {
      padding: 0 24px 16px 24px;
    }
  }

  &--single-line-heading {
    padding-top: 0;
  }

  &--no-shrink-heading {
    #{$self}__heading {
      flex-shrink: 0;
    }
  }

  &--bigger-title-margin {
    #{$self}__heading {
      margin-bottom: 78px;
    }
  }

  @media (min-width: $media-sm) {
    padding-bottom: 0;
    padding-top: 136px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__heading {
      margin-bottom: 0;
    }

    &--growing-body {
      #{$self}__text {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
      }
    }

    &--py-md {
      #{$self}__text {
        padding-top: 88px;
        padding-bottom: 88px;
      }
    }

    &--heading-top {
      align-items: flex-start;

      #{$self}__heading {
        padding-top: 88px;
      }
    }

    &--heading-right {
      background-image: linear-gradient(
        to left,
        $white 135px,
        $light-gray 135px
      );

      #{$self}__heading {
        order: 2;
        margin-left: 24px;
      }

      #{$self}__text {
        order: 1;
        padding-left: 58px;
        padding-right: 0;
      }
    }

    &--heading-left {
      background-image: linear-gradient(
        to right,
        $white 135px,
        $light-gray 135px
      );

      #{$self}__heading {
        margin-right: 24px;
      }

      #{$self}__text {
        padding-right: 58px;
        padding-left: 0;
      }
    }
  }

  @media (min-width: $media-md) {
    &__text {
      padding-left: 80px;
      padding-right: 80px;
    }

    &--py-md {
      #{$self}__text {
        padding-top: 130px;
        padding-bottom: 142px;
      }
    }

    &--heading-right {
      background-image: linear-gradient(
        to left,
        $white 150px,
        $light-gray 150px
      );
    }

    &--heading-left {
      background-image: linear-gradient(
        to right,
        $white 150px,
        $light-gray 150px
      );
    }
  }

  @media (min-width: $media-lg) {
    &--heading-right {
      background-image: linear-gradient(
        to left,
        $white 330px,
        $light-gray 330px
      );
    }

    &--heading-left {
      background-image: linear-gradient(
        to right,
        $white 330px,
        $light-gray 330px
      );
    }
  }

  @media (min-width: $media-xl) {
    &__text {
      padding-left: 100px;
      padding-right: 100px;
    }

    &--heading-right {
      background-image: linear-gradient(
        to left,
        $white 430px,
        $light-gray 430px
      );
    }

    &--heading-left {
      background-image: linear-gradient(
        to right,
        $white 430px,
        $light-gray 430px
      );
    }
  }
}
</style>
