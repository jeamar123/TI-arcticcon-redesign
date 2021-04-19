<template>
  <section class="talk-info padding-x">
    <Heading type="h3" text-align="alter" class="talk-info__title">
      Talk information
    </Heading>
    <form @submit.prevent="goToContact" class="talk-info__form">
      <Input
        v-model="form.title.value"
        :error="form.title.error"
        name="talk_name"
        label="Talk Name"
        type="text"
        @input="clearError('title', form)"
        @blur="validateField('title', form)"
      />
      <div class="talk-info__tracks-wrapper mb-6">
        <ul class="talk-info__tracks">
          <li
            v-for="track in tracks"
            :key="track.value"
            class="talk-info__track"
            :class="{
              'talk-info__track--selected':
                track.value === form.talk_type.value,
            }"
            @click="form.talk_type.value = track.value"
          >
            <img
              :src="getTrackIcon(track.value)"
              :alt="`${track.displayValue} icon`"
              class="talk-info__track-icon"
            />
            {{ track.displayValue }}
          </li>
        </ul>
        <div v-if="form.talk_type.error" class="talk-info__track-error">
          {{ form.talk_type.error }}
        </div>
      </div>
      <Input
        v-model="form.description.value"
        :error="form.description.error"
        is-multiline
        name="talk_description"
        label="Talk Description"
        @input="clearError('description', form)"
        @blur="validateField('description', form)"
      />
      <Button class="talk-info__button mt-6"> next </Button>
    </form>
  </section>
</template>

<script>
import {
  validateField,
  validateForm,
  clearError,
} from "@/assets/js/validation";
import Heading from "@/components/common/Heading";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default {
  name: "TalkInfo",
  props: {},
  components: {
    Heading,
    Input,
    Button,
  },
  data: () => ({
    form: {
      title: {
        value: "",
        error: "",
        rules: ["required"],
      },
      description: {
        value: "",
        error: "",
        rules: ["required"],
      },
      talk_type: {
        value: "",
        error: "",
        rules: ["required"],
      },
    },
    tracks: [
      {
        value: "break_it",
        displayValue: "Break it!",
      },
      {
        value: "build_it",
        displayValue: "Build it!",
      },
      {
        value: "show_it",
        displayValue: "Show it!",
      },
    ],
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    getTrackIcon(track) {
      return require(`../../assets/img/icons/${track}.svg`);
    },
    goToContact() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.talk-info {
  padding-top: 35px;

  &__title {
    margin-bottom: 54px;
  }

  &__button {
    width: 100%;
  }

  &__tracks-wrapper {
    padding-left: 40px;
  }

  &__tracks {
    padding: 0;
    list-style-type: none;
  }

  &__track {
    height: 60px;
    padding-left: 28px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid $black;
    color: $black;
    font-family: $sarabun;
    font-size: 0.9rem;
    line-height: 1.3;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      height: 40px;
      width: 100vw;
      position: absolute;
      z-index: -1;
      top: 50%;
      transform: translateY(-50%);
      left: 14px;
      background-color: transparent;
      transition: background-color 0.3s;
    }

    &:hover::after {
      background-color: $light-gray;
    }

    &--selected {
      &::after {
        background-color: $light-gray;
      }
    }
  }

  &__track-icon {
    width: 20px;
    height: 16px;
    object-fit: contain;
    object-position: left;
    margin-right: 28px;
  }

  @media (min-width: $media-sm) {
    padding-top: 124px;
    padding-left: calc(232px + 24px) !important;

    &__title {
      margin-bottom: 116px;
    }

    &__form {
      padding-left: 58px;
    }

    &__tracks-wrapper {
      padding-left: 58px;
    }

    &__track {
      padding-left: 58px;

      &::after {
        left: 44px;
      }
    }
  }

  @media (min-width: $media-md) {
    padding-left: calc(320px + 24px) !important;

    &__form {
      padding-left: 78px;
    }

    &__tracks-wrapper {
      padding-left: 78px;
    }
  }

  @media (min-width: $media-lg) {
    padding-top: 144px;
    padding-left: calc(15vw + 308px + 24px) !important;

    &__title {
      margin-bottom: 94px;
    }

    &__form {
      padding-left: 98px;
    }

    &__tracks-wrapper {
      padding-left: 98px;
    }
  }

  @media (min-width: $media-xl) {
    padding-left: calc(20vw + 308px + 24px) !important;
  }
}
</style>
