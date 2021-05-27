<template>
  <div class="home-page">
    <Hero :event="event" id="home" />
    <About id="about" />
    <SponsorAcquire />
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
import { mapActions, mapState } from "vuex";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import SponsorAcquire from "@/components/home/SponsorAcquire";
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
    SponsorAcquire,
    Apply,
    Schedule,
    Villages,
    Volunteering,
    Sponsors,
    Tickets,
    Blog,
    ContactUs,
  },
  data() {
    return {
      event: {},
    };
  },
  computed: {
    ...mapState(["currentEventID"]),
  },
  mounted() {
    this.getCurrentEvent();
  },
  methods: {
    ...mapActions(["GET"]),
    getCurrentEvent() {
      return this.GET({ route: `/public/event/${this.currentEventID}` })
        .then((resp) => {
          this.event = resp.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
