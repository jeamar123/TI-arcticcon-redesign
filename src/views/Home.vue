<template>
  <div class="home-page">
    <Hero id="home" />
    <About id="about" />
    <Apply id="apply" />
    <Schedule id="schedule" />
    <Villages id="villages" />
    <Volunteering id="volunteering" />
    <Sponsors id="sponsors" />
    <Tickets id="tickets" />
    <Blog />
    <ContactUs id="contacts" />
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Apply from "@/components/home/Apply";
import Schedule from "@/components/home/Schedule/Schedule";
import Villages from "@/components/home/Villages";
import Volunteering from "@/components/home/Volunteering";
import Sponsors from "@/components/home/Sponsors";
import Tickets from "@/components/home/Tickets";
import Blog from "@/components/home/Blog";
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
    Tickets,
    Blog,
    ContactUs,
  },
};
</script>
