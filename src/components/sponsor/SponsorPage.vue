<template>
  <div class="sponsor-page">
    <template v-if="!isApplied">
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
            acknowledge the
            <Link link="/sponsorship-terms-and-conditions" target="_blank">
              Sponsorship Terms and Conditions </Link
            >.
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
          @toggle-specialty="toggleSpecialty"
        />
      </transition>
    </template>
    <ThankYou
      v-else
      title="Thank you for your apply!"
      text="We send sponsor prospectus to your email."
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FormSelectedData from "@/components/common/FormSelectedData";
import SponsorForm from "./SponsorForm";
import SponsorPackages from "./SponsorPackages";
import SpecialtyPackages from "./SpecialtyPackages";
import Link from "@/components/common/Link";
import ThankYou from "@/components/common/ThankYou";

export default {
  name: "SponsorComponent",
  props: {},
  components: {
    FormSelectedData,
    SponsorForm,
    SponsorPackages,
    SpecialtyPackages,
    Link,
    ThankYou,
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
    isApplied: true,
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
      this.selectedData = [
        ...this.selectedData,
        { ...pkg },
        { title: "Total", price: pkg.price },
      ];
    },
    toggleSpecialty(pkg) {
      const hasPkg = this.selectedData.some((item) => item.title === pkg.name);
      const selecdedDataNoTotal = this.selectedData.filter(
        (item) => item.title !== "Total"
      );

      if (hasPkg) {
        const newSelectedData = selecdedDataNoTotal.filter(
          (item) => item.title !== pkg.name
        );
        this.selectedData = [
          ...newSelectedData,
          { title: "Total", price: this.calculateTotal(newSelectedData) },
        ];
      } else {
        const newSelectedData = [
          ...selecdedDataNoTotal,
          { title: pkg.name, price: pkg.price },
        ];
        this.selectedData = [
          ...newSelectedData,
          { title: "Total", price: this.calculateTotal(newSelectedData) },
        ];
      }
    },
    calculateTotal(selectedData) {
      return selectedData.reduce((acc, cur) => {
        if (cur.price) return acc + cur.price;

        return acc;
      }, 0);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
