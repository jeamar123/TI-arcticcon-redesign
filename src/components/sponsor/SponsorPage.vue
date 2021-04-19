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
            By clicking APPLY, you are indicating that you have read and
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
          class="sponsor-page__packages"
        />
      </transition>
      <transition name="fade">
        <SpecialtyPackages
          v-if="isFormFilled && isPackageSelected"
          key="specialty-packages"
          :packages="specialties"
          :has-error="hasApplicationError"
          @toggle-specialty="toggleSpecialty"
          @apply="applyForSponsorship"
          class="sponsor-page__specialties"
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
import { isEmpty } from "@/assets/js/utils";
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
  data() {
    return {
      sponsorPkgs: {},
      packages: [],
      specialties: [],
      selectedData: [],
      isFormFilled: false,
      isPackageSelected: false,
      isApplied: false,
      hasApplicationError: false,
      applicationData: {
        parent: this.$route.params.id,
        name: "",
        website: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        level: "",
        selected_packages: [],
      },
    };
  },
  computed: {},
  async created() {
    this.sponsorPkgs = await this.getSponsorData();
    this.packages = this.sponsorPkgs.filter(
      (item) => !this.isEmpty(item.features)
    );
    this.specialties = this.sponsorPkgs.filter((item) =>
      this.isEmpty(item.features)
    );
  },
  methods: {
    isEmpty,
    ...mapActions(["GET", "POST"]),
    getSponsorData() {
      return this.GET({
        route: `/public/event/${this.$route.params.id}/sponsorship_package`,
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
          title: "Sponsor information",
          ...formData,
        },
      ];
      this.applicationData = {
        ...this.applicationData,
        ...formData,
      };
    },
    selectPackage(pkg) {
      const packageToShow = { ...pkg };
      delete packageToShow.id;

      this.isPackageSelected = true;
      this.selectedData = [
        ...this.selectedData,
        { ...packageToShow },
        { title: "Total", price: packageToShow.price },
      ];

      this.applicationData.selected_packages = [
        ...this.applicationData.selected_packages,
        pkg.id,
      ];
      this.applicationData.level = pkg.id;
    },
    toggleSpecialty(pkg) {
      const hasPkg = this.selectedData.some(
        (item) => item.title === pkg.friendly_name
      );
      const selectedDataNoTotal = this.selectedData.filter(
        (item) => item.title !== "Total"
      );

      if (hasPkg) {
        const newSelectedData = selectedDataNoTotal.filter(
          (item) => item.title !== pkg.friendly_name
        );
        this.selectedData = [
          ...newSelectedData,
          { title: "Total", price: this.calculateTotal(newSelectedData) },
        ];

        this.applicationData.selected_packages = this.applicationData.selected_packages.filter(
          (item) => item !== pkg.id
        );
      } else {
        const newSelectedData = [
          ...selectedDataNoTotal,
          { title: pkg.friendly_name, price: pkg.price },
        ];
        this.selectedData = [
          ...newSelectedData,
          { title: "Total", price: this.calculateTotal(newSelectedData) },
        ];

        this.applicationData.selected_packages = [
          ...this.applicationData.selected_packages,
          pkg.id,
        ];
      }
    },
    calculateTotal(selectedData) {
      return selectedData.reduce((acc, cur) => {
        if (cur.price) return acc + cur.price;

        return acc;
      }, 0);
    },
    applyForSponsorship() {
      this.POST({
        route: `/public/event/${this.$route.params.id}/sponsorship`,
        data: this.applicationData,
      })
        .then(() => {
          this.isApplied = true;
        })
        .catch(() => {
          this.hasApplicationError = true;
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
</style>
