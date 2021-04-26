<template>
  <div class="home-page">
    <Hero />
    <About />
    <Apply />
    <Schedule />
    <Villages />
    <Volunteering />
    <Sponsors />
    <ContactUs />
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Apply from "@/components/home/Apply";
import Schedule from "@/components/home/Schedule/Schedule";
import Villages from "@/components/home/Villages/Villages";
import Volunteering from "@/components/home/Volunteering";
import Sponsors from "@/components/home/Sponsors";
import ContactUs from "@/components/home/ContactUs";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Apply,
    Schedule,
    Villages,
    Volunteering,
    Sponsors,
    ContactUs,
  },
};
</script>
