<template>
  <div class="with-fsd">
    <FormSelectedData :data="selectedData" class="with-fsd__selected-data">
      <template #policy>
        <slot name="selected-data-policy" />
      </template>
    </FormSelectedData>
    <div class="with-fsd__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
import FormSelectedData from "@/components/common/FormSelectedData";

export default {
  name: "WithFormSelectedData",
  props: {
    selectedData: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    FormSelectedData,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.with-fsd {
  &__body {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: $media-sm) {
    display: flex;
    justify-content: space-between;

    &__selected-data {
      flex-grow: 0;
      flex-shrink: 0;
    }

    &__body {
      padding-left: 24px;
      padding-right: 24px;
      flex-grow: 1;
    }

    &__form {
      padding-left: 58px;
      min-width: calc(382px + 58px);
    }
  }

  @media (min-width: $media-md) {
    &__form {
      padding-left: 78px;
      min-width: calc(532px + 78px);
    }
  }

  @media (min-width: $media-lg) {
    padding-right: 15vw;

    &__form {
      padding-left: 98px;
      min-width: 100%;
    }
  }

  @media (min-width: $media-xl) {
    padding-right: 20vw;
  }
}
</style>
