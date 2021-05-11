<template>
  <div class="checkout padding-x">
    <div class="checkout__tickets">
      <TicketCard
        v-for="(ticket, index) in tickets"
        :key="ticket.type"
        :ticket="ticket"
        :is-active="index === 0"
        is-checkout
        @change-quantity="ticketsQuantity[ticket.type].quantity = $event"
      />
    </div>
    <CheckoutForm
      v-if="hasTicketsSelected"
      :tickets-quantity="ticketsQuantity"
    />
  </div>
</template>

<script>
import TicketCard from "@/components/common/TicketCard";
import CheckoutForm from "./CheckoutForm";

export default {
  name: "Checkout",
  props: {},
  components: {
    TicketCard,
    CheckoutForm,
  },
  data: () => ({
    tickets: [
      {
        type: "free",
        price: 0,
        features: ["Access to live conference", "Access to record of talks"],
      },
      {
        type: "basic",
        price: 20,
        features: ["Access to live conference", "Access to record of talks"],
      },
      {
        type: "premium",
        price: 80,
        features: ["Access to live conference", "Access to record of talks"],
      },
    ],
    ticketsQuantity: {
      free: {
        price: 0,
        quantity: "1",
      },
      basic: {
        price: 20,
        quantity: "1",
      },
      premium: {
        price: 80,
        quantity: "1",
      },
    },
  }),
  computed: {
    hasTicketsSelected() {
      return Boolean(
        Object.values(this.ticketsQuantity).reduce((acc, cur) => {
          return acc + Number(cur.quantity);
        }, 0)
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.checkout {
  padding-top: 108px;

  &__tickets {
    padding-top: 60px;
    margin-bottom: 50px;
    display: grid;
    grid-gap: 60px 0;
  }

  @media (min-width: $media-sm) {
    padding-top: 140px;

    &__tickets {
      margin-bottom: 136px;
      grid-gap: 60px 24px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
