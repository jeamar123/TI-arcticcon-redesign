<template>
  <div class="cfp-component">
    <SpeakerInfo
      v-if="!isSpeakerInfoFilled && !isTalkInfoFilled"
      @submit-speaker-data="goToTalk"
    />
    <transition name="fade">
      <WithFormSelectedData
        v-if="isSpeakerInfoFilled || isTalkInfoFilled"
        :selected-data="cfpDisplayData"
      >
        <template #body>
          <transition name="fade">
            <TalkInfo
              v-if="isSpeakerInfoFilled && !isTalkInfoFilled"
              @submit-talk-data="goToContact"
            />
          </transition>
          <transition name="fade">
            <ContactInfo
              v-if="isSpeakerInfoFilled && isTalkInfoFilled"
              @submit-contact-data="goToSubmit"
            />
          </transition>
        </template>
      </WithFormSelectedData>
    </transition>
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
    isSpeakerInfoFilled: false,
    isTalkInfoFilled: false,
    cfpDisplayData: [],
    cfpForm: {},
  }),
  computed: {},
  methods: {
    goToTalk(speakerInfo) {
      this.isSpeakerInfoFilled = true;
      this.cfpForm = { ...this.cfpForm, ...speakerInfo };
      this.cfpDisplayData = [
        ...this.cfpDisplayData,
        { title: "General information", ...speakerInfo },
      ];
    },
    goToContact(talkInfo) {
      const [talkData, talkDisplayData] = talkInfo;

      this.isTalkInfoFilled = true;
      this.cfpForm = { ...this.cfpForm, ...talkData };
      this.cfpDisplayData = [
        ...this.cfpDisplayData,
        { title: "Talk information", ...talkDisplayData },
      ];
    },
    goToSubmit(contactData) {
      this.cfpForm = { ...this.cfpForm, ...contactData };

      this.submitCFP();
    },
    submitCFP() {},
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
