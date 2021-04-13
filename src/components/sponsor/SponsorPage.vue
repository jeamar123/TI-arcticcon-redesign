<template>
  <div class="sponsor-page">
    <SponsorForm
      v-if="!isFormFilled && !isPackageSelected"
      @sponsor-form-filled="goToPackages"
    />
    <transition name="fade">
      <FormSelectedData
        v-if="isFormFilled || isPackageSelected"
        :data="selectedData"
      >
        <template #policy v-if="isFormFilled && isPackageSelected">
          By clicking Next, you are indicating that you have read and
          acknowledge the Terms of Service and Privacy Notice.
        </template>
      </FormSelectedData>
    </transition>
    <transition name="fade">
      <SponsorPackages
        v-if="isFormFilled && !isPackageSelected"
        :packages="packages"
        @select-package="selectPackage"
      />
    </transition>
    <transition name="fade">
      <SpecialtyPackages
        v-if="isFormFilled && isPackageSelected"
        :packages="specialties"
      />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FormSelectedData from "@/components/common/FormSelectedData";
import SponsorForm from "./SponsorForm";
import SponsorPackages from "./SponsorPackages";
import SpecialtyPackages from "./SpecialtyPackages";

export default {
  name: "SponsorComponent",
  props: {},
  components: {
    FormSelectedData,
    SponsorForm,
    SponsorPackages,
    SpecialtyPackages,
  },
  data: () => ({
    sponsorInfo: {},
    packages: [],
    specialties: [],
    selectedData: [
      {
        title: "Sponsor information",
        name: "Test",
        email: "test@email.com",
        phone: "1234567890",
        organization: "https://arctic-con.com/#/",
      },
    ],
    isFormFilled: true,
    isPackageSelected: false,
  }),
  computed: {},
  async created() {
    this.sponsorInfo = await this.getSponsorData();
    this.packages = this.sponsorInfo.packages.filter((item) => item.features);
    this.specialties = this.sponsorInfo.packages.filter(
      (item) => !item.features
    );
  },
  methods: {
    ...mapActions(["GET"]),
    getSponsorData() {
      return this.GET({
        route: `sponsor/sponsor_event/${this.$route.params.id}`,
      })
        .then((resp) => resp.data)
        .catch((err) => {
          console.log(err);
        });
    },
    goToPackages(formData) {
      this.isFormFilled = true;
      this.selectedData = [
        ...this.selectedData,
        {
          ...formData,
          title: "Sponsor information",
        },
      ];
    },
    selectPackage(pkg) {
      this.isPackageSelected = true;
      this.selectedData = [...this.selectedData, { ...pkg }];
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
