<template>
  <article class="talk">
    <img
      src="@/assets/img/speaker-sample.jpg"
      :alt="talk.author"
      class="talk__image"
    />
    <div class="talk__wrapper">
      <div class="talk__breef">
        <p class="talk__author">
          {{ talk.author }}
        </p>
        <p class="talk__time">
          <span>{{ talk.startTime }}</span>
          <span>{{ talk.endTime }}</span>
        </p>
      </div>
      <Heading type="h3" class="talk__title">
        {{ talk.title }}
      </Heading>
      <p class="talk__body" :class="{ 'talk__body--closed': !isTextFull }">
        {{ isTextFull ? talk.body : shortenText(talk.body, 150) }}
      </p>
      <Button
        v-show="!isTextFull"
        is-empty
        class="talk__button"
        @click="isTextFull = true"
      >
        read more
      </Button>
    </div>
  </article>
</template>

<script>
import { shortenText } from "@/assets/js/utils";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default {
  name: "Talk",
  props: {
    talk: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Heading,
    Button,
  },
  data: () => ({
    isTextFull: false,
  }),
  computed: {},
  methods: {
    shortenText,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.talk {
  position: relative;

  &__image {
    height: 210px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__breef {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $black;
  }

  &__author {
    font-weight: $sansBold;
  }

  &__time {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    position: relative;
    font-family: $sarabun;
    font-size: 0.9rem;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 136px;
      height: 2px;
      background-color: $black;
    }
  }

  &__title {
    margin-bottom: 8px;
  }

  &__body {
    &--closed {
      margin-bottom: 16px;
    }
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-xs) {
    &__image {
      height: 240px;
      width: 70%;
    }

    &__time {
      position: absolute;
      top: 88px;
      right: 0;
      width: 30%;
      align-items: flex-end;

      &::after {
        width: calc(100% + 30px);
      }
    }

    &__wrapper {
      display: flex;
      flex-flow: column;
    }

    &__title {
      order: 1;
      width: 70%;
    }

    &__breef {
      order: 2;
    }

    &__body {
      order: 3;
    }

    &__button {
      order: 4;
      width: 50%;
    }
  }

  @media (min-width: $media-sm) {
    display: flex;
    align-items: center;

    &__image {
      height: 288px;
      width: 208px;
      margin-right: 140px;
      flex-shrink: 0;
      flex-grow: 0;
    }

    &__title {
      width: 100%;
    }

    &__breef {
      position: relative;
      margin-bottom: 8px;
    }

    &__author {
      margin-left: 16px;
    }

    &__time {
      top: 50%;
      transform: translateY(-50%);
      left: -186px;
      width: 150px;

      &::after {
        width: 150px;
        right: -16px;
      }
    }

    &__button {
      width: 65%;
    }
  }

  @media (min-width: $media-md) {
    &__image {
      height: 408px;
      width: 296px;
      margin-right: 176px;
    }

    &__title {
      margin-bottom: 32px;
    }

    &__time {
      left: -246px;
      width: 240px;
      align-items: center;

      &::after {
        width: 240px;
        right: 0;
      }
    }

    &__body {
      &--closed {
        margin-bottom: 58px;
      }
    }

    &__button {
      width: 50%;
    }
  }

  @media (min-width: $media-lg) {
    &__image {
      height: 504px;
      width: 368px;
      margin-right: 196px;
    }

    &__breef {
      margin-bottom: 14px;
    }

    &__time {
      font-size: 1.3rem;
      line-height: 2.5;
    }

    &__body {
      &--closed {
        margin-bottom: 32px;
      }
    }

    &__button {
      width: 60%;
    }
  }
}
</style>
