<template>
  <article class="talk">
    <img
      src="@/assets/img/speaker-sample.jpg"
      :alt="talk.author"
      class="talk__image"
    />
    <div>
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
      <p class="talk__body" :class="{ 'mb-4': !isTextFull }">
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

  &__button {
    width: 100%;
  }
}
</style>
