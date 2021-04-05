<template>
  <div class="policy">
    <Heading type="h2" class="policy__title">
      {{ title }}
    </Heading>
    <div v-if="$slots['heading-follower']" class="policy__title-follower">
      <slot name="heading-follower" />
    </div>
    <main>
      <template v-for="(section, name) in data" :key="name">
        <section v-if="checkName(name, 'section')" class="policy__section">
          <template v-for="(elem, name) in section">
            <Heading
              :key="name"
              v-if="checkName(name, 'heading1')"
              type="h3"
              class="policy__heading1"
            >
              {{ elem }}
            </Heading>
            <h4
              :key="name"
              v-if="checkName(name, 'heading2')"
              type="h4"
              class="policy__heading2"
            >
              {{ elem }}
            </h4>
            <template v-if="checkName(name, 'paragraph')">
              <p v-for="item in elem" :key="item" class="policy__paragraph">
                {{ item }}
              </p>
            </template>
            <p
              :key="name"
              v-if="checkName(name, 'headline')"
              class="policy__headline"
            >
              {{ elem }}
            </p>
            <p
              :key="name"
              v-if="checkName(name, 'definition')"
              class="policy__prelist"
            >
              {{ elem }}
            </p>
            <ul :key="name" v-if="checkName(name, 'list')" class="policy__list">
              <li v-for="item in elem" :key="item" class="policy__list-item">
                <template v-if="item.tag && item.text">
                  <span class="policy__tag">
                    {{ item.tag }}
                  </span>
                  <span class="policy__explanation">
                    {{ item.text }}
                  </span>
                </template>
                <template v-else>
                  {{ item }}
                </template>
              </li>
            </ul>
          </template>
        </section>
        <div
          v-if="checkName(name, 'contacts')"
          class="policy__contacts-wrapper"
        >
          <section
            v-for="(item, name) in section"
            :key="name"
            class="policy__section"
          >
            <p
              v-for="contact in item"
              :key="contact.item"
              class="policy__contacts"
            >
              <span class="policy__contacts-item">
                {{ contact.item }}
              </span>
              <span>
                {{ contact.description }}
              </span>
            </p>
          </section>
        </div>
      </template>
    </main>
  </div>
</template>

<script>
import Heading from "@/components/common/Heading";

export default {
  name: "PolicyPage",
  props: {
    title: {
      type: String,
      default: "",
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {
    checkName(name, elem) {
      if (elem) {
        return !Number.isInteger(name) && name.includes(elem);
      } else {
        return Number.isInteger(name);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.policy {
  padding: 108px 16px 0 16px;
  text-align: justify;

  &__title,
  &__heading1 {
    margin-bottom: 32px;
  }

  &__section {
    padding-top: 16px;
  }

  &__heading2 {
    margin-bottom: 20px;
    font-weight: $sansBold;
    font-size: 0.9rem;
    line-height: 1.4;
    color: $black;
  }

  &__paragraph,
  &__headline,
  &__list {
    margin-bottom: 22px;
  }

  &__list {
    padding-left: 0;
  }

  &__list-item {
    list-style-type: none;

    &::before {
      content: "\2013";
      color: $black;
      font-weight: $sansBold;
      margin-right: 8px;
    }
  }

  &__headline,
  &__tag {
    color: $black;
  }

  &__tag {
    margin-right: 8px;
  }

  &__contacts {
    &:last-child {
      margin-bottom: 16px;
    }
  }

  &__contacts-item {
    margin-right: 8px;
  }

  @media (min-width: $media-sm) {
    padding: 138px 24px 0 24px;

    &__title {
      margin-bottom: 40px;
    }

    &__section {
      padding-top: 56px;
    }

    &__contacts-wrapper {
      display: flex;
      padding-top: 30px;
      text-align: left;
      justify-content: space-between;

      section {
        flex: 50% 0 0;
      }
    }
  }

  @media (min-width: $media-md) {
    padding: 145px 35% 0 24px;
  }

  @media (min-width: $media-lg) {
    padding: 145px 35% 0 15%;

    &__title-follower {
      margin-bottom: 16px;
    }
  }

  @media (min-width: $media-lg) {
    padding: 145px 40% 0 20%;
  }
}
</style>
