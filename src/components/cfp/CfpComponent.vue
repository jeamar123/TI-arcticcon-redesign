<template>
  <div class="cfp-component">
    <SpeakerInfo v-if="!isSpeakerInfoFilled && !isTalkInfoFilled" />
    <WithFormSelectedData v-else :selected-data="cfpData">
      <template #body>
        <TalkInfo v-if="isSpeakerInfoFilled && !isTalkInfoFilled" />
        <ContactInfo v-if="isSpeakerInfoFilled && isTalkInfoFilled" />
      </template>
    </WithFormSelectedData>
  </div>
</template>

<script>
import WithFormSelectedData from "@/components/common/WithFormSelectedData";
import SpeakerInfo from "./SpeakerInfo";
import TalkInfo from "./TalkInfo";
import ContactInfo from "./ContactInfo";

export default {
  name: "CfpComponent",
  props: {},
  components: {
    WithFormSelectedData,
    SpeakerInfo,
    TalkInfo,
    ContactInfo,
  },
  data: () => ({
    isSpeakerInfoFilled: true,
    isTalkInfoFilled: true,
    cfpData: [
      {
        title: "General information",
        name: "John",
        lastName: "Doe",
        organization: "Google",
        bio:
          "Casual polar bear who is passionate about creativity and illustration, Casual polar bear who is passionate about creativity and illustration. Casual polar bear who is passionate about creativity and illustration.",
      },
      {
        title: "General information",
        name: "John",
        lastName: "Doe",
        organization: "Google",
        bio:
          "Casual polar bear who is passionate about creativity and illustration, Casual polar bear who is passionate about creativity and illustration. Casual polar bear who is passionate about creativity and illustration.",
      },
      {
        title: "General information",
        name: "John",
        lastName: "Doe",
        organization: "Google",
        bio:
          "Casual polar bear who is passionate about creativity and illustration, Casual polar bear who is passionate about creativity and illustration. Casual polar bear who is passionate about creativity and illustration.",
      },
      {
        title: "General information",
        name: "John",
        lastName: "Doe",
        organization: "Google",
        bio:
          "Casual polar bear who is passionate about creativity and illustration, Casual polar bear who is passionate about creativity and illustration. Casual polar bear who is passionate about creativity and illustration.",
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
