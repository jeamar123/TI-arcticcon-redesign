<template>
  <SectionWithBg heading-position="left" single-line-heading heading-top>
    <template #heading> Total: ${{ total }} </template>
    <template #body>
      <Button>
        {{ areTicketsFree ? "get tickets" : `pay $${total}` }}
      </Button>
    </template>
  </SectionWithBg>
</template>

<script>
import SectionWithBg from "@/components/common/SectionWithBg";
// import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default {
  name: "CheckoutForm",
  props: {
    ticketsQuantity: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    SectionWithBg,
    // Input,
    Button,
  },
  data: () => ({}),
  computed: {
    total() {
      return Object.values(this.ticketsQuantity).reduce((acc, cur) => {
        return acc + Number(cur.quantity) * Number(cur.price);
      }, 0);
    },
    areTicketsFree() {
      return this.total === 0;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
