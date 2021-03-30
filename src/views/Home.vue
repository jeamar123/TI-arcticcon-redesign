<template>
  <div class="home-page">
    <Hero />
    <About />
    <Apply />
    <Sponsors />
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Apply from "@/components/home/Apply";
import Sponsors from "@/components/home/Sponsors";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Apply,
    Sponsors,
  },
};
</script>
