<template>
  <div class="cfp-component">
    <FormSelectedData :data="cfpData" />
    <!-- <SpeakerInfo /> -->
    <TalkInfo />
  </div>
</template>

<script>
import FormSelectedData from "@/components/common/FormSelectedData";
// import SpeakerInfo from "./SpeakerInfo";
import TalkInfo from "./TalkInfo";

export default {
  name: "CfpComponent",
  props: {},
  components: {
    FormSelectedData,
    // SpeakerInfo,
    TalkInfo,
  },
  data: () => ({
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
    ],
  }),
  computed: {},
  methods: {},
};
</script>
