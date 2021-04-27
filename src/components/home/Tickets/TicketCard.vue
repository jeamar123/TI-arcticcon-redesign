<template>
  <article class="ticket" :class="{ 'ticket--active': isActive }">
    <span class="ticket__price"> ${{ ticket.price }} </span>
    <dl class="mb-4">
      <dt>This pass includes access to:</dt>
      <dd
        v-for="feature in ticket.features"
        :key="feature"
        class="ticket__feature"
      >
        {{ feature }}
      </dd>
    </dl>
    <Button is-empty class="ticket__button" @click="goToTicketPurchase">
      get ticket
    </Button>
  </article>
</template>

<script>
import Button from "@/components/common/Button";

export default {
  name: "Ticket",
  props: {
    ticket: {
      type: Object,
      default: () => ({}),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
  },
  data: () => ({}),
  computed: {},
  methods: {
    goToTicketPurchase() {},
  },
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
