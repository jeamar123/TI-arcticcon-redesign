<template>
  <section class="tickets padding-x">
    <Heading type="h2" text-align="center" class="tickets__title">
      Tickets
    </Heading>
    <div
      class="tickets__list"
      :class="{ 'tickets__list--odd': tickets.length % 2 }"
    >
      <Ticket
        v-for="(ticket, index) in tickets"
        :key="ticket.type"
        :ticket="ticket"
        :is-active="index === 0"
        class="tickets__ticket"
      />
    </div>
  </section>
</template>

<script>
import Heading from "@/components/common/Heading";
import Ticket from "./TicketCard";

export default {
  name: "Tickets",
  props: {},
  components: {
    Heading,
    Ticket,
  },
  data: () => ({
    tickets: [
      {
        type: "free",
        price: 0,
        features: ["Access to live conference", "Access to record of talks"],
      },
      {
        type: "free",
        price: 0,
        features: ["Access to live conference", "Access to record of talks"],
      },
      {
        type: "free",
        price: 0,
        features: ["Access to live conference", "Access to record of talks"],
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.tickets {
  $self: &;

  padding-top: 32px;

  &__title {
    margin-bottom: 52px;
  }

  &__list {
    display: grid;
    grid-gap: 64px 0;
  }

  @media (min-width: $media-xs) {
    &__list {
      grid-gap: 50px 16px;
      grid-template-columns: repeat(2, 1fr);

      &--odd {
        #{$self}__ticket:first-child {
          grid-column: span 2;
        }
      }
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 122px;

    &__title {
      margin-bottom: 96px;
    }

    &__list {
      grid-gap: 50px 24px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      &--odd {
        #{$self}__ticket:first-child {
          grid-column: auto;
        }
      }
    }
  }

  @media (min-width: $media-lg) {
    &__title {
      margin-bottom: 142px;
    }
  }
}
</style>
