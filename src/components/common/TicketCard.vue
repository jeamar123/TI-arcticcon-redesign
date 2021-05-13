<template>
  <article class="ticket" :class="{ 'ticket--active': isActive }">
    <span class="ticket__price"> ${{ ticket.price }} </span>
    <dl :class="!isCheckout ? 'mb-4' : 'mb-8'">
      <dt>This pass includes access to:</dt>
      <dd
        v-for="feature in ticket.features"
        :key="feature"
        class="ticket__feature"
      >
        {{ feature }}
      </dd>
    </dl>
    <Button
      v-if="!isCheckout"
      is-empty
      class="ticket__button"
      @click="$router.push(`/${$route.params.id}/checkout`)"
    >
      get ticket
    </Button>
    <Input
      v-else
      v-model="quantity"
      type="text"
      :name="`${ticket.type}-quantity`"
      label="Quantity"
      @input="$emit('change-quantity', quantity)"
    />
  </article>
</template>

<script>
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default {
  name: "Ticket",
  emits: ["change-quantity"],
  props: {
    ticket: {
      type: Object,
      default: () => ({}),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isCheckout: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
    Input,
  },
  data: () => ({
    quantity: "1",
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.ticket {
  $self: &;

  padding: 24px;
  padding-top: 74px;
  background-color: $light-gray;
  position: relative;
  cursor: pointer;

  &--active,
  &:hover {
    #{$self}__button {
      background-color: $black;
      color: $white;
    }
  }

  &__price {
    color: $black;
    font-family: $sarabun;
    font-weight: $sarabunBold;
    font-size: 4.5rem;
    line-height: 1.3;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -58px;
  }

  &__feature {
    margin: 0;
    padding-left: 16px;
    position: relative;

    &::before {
      content: "\2013";
      position: absolute;
      left: 0;
    }
  }

  &__button {
    width: 100%;
  }

  @media (min-width: $media-sm) {
    &--active {
      #{$self}__price {
        font-size: 6.5rem;
        top: -80px;
      }
    }

    &__price {
      top: -50px;
      transition: font-size 0.3s;
    }
  }
}
</style>
