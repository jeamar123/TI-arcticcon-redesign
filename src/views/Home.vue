<template>
  <div class="home-page">
    <Hero />
    <About />
    <Apply />
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Apply from "@/components/home/Apply";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Apply,
  },
};
</script>
