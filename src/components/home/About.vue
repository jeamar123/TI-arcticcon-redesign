<template>
  <SectionWithBg heading-position="right">
    <template #heading>
      What is
      <br />
      ArcticCon?
    </template>
    <template #body>
      ArcticCon is an IT conference based in Anchorage, Alaska with its start in
      2017. ArcticCon’s mission is to provide technical information from
      industry experts to educate the IT community of Alaska about new
      advancements in Cyber Security and Information Technology. ArcticCon aims
      to make IT more accessible to the Last Frontier and bring together
      community members from all over the state to encourage a collaborative
      work environment.
    </template>
  </SectionWithBg>
</template>

<script>
import SectionWithBg from "@/components/common/SectionWithBg";

export default {
  name: "About",
  props: {},
  components: {
    SectionWithBg,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
