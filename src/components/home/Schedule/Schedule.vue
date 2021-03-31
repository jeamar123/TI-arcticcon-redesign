<template>
  <section :class="['schedule', 'padding-x', `schedule--tab${currentTabNum}`]">
    <Heading type="h2" text-align="center" class="schedule__heading">
      Schedule
    </Heading>
    <div class="schedule__select-wrapper mb-8">
      <span
        class="schedule__select-arrow"
        :class="{ 'schedule__select-arrow--opened': isSelectOpened }"
      />
      <select
        v-model="currentTrack"
        class="schedule__select edge-to-edge"
        @click="isSelectOpened = !isSelectOpened"
      >
        <option v-for="item in tracks" :key="item.name" :value="item.name">
          {{ item.displayName }}
        </option>
      </select>
    </div>
    <div class="schedule__tabs edge-to-edge">
      <button
        v-for="track in tracks"
        :key="track.name"
        class="schedule__tab-btn"
        @click="currentTrack = track.name"
      >
        {{ track.displayName }}
      </button>
    </div>
    <ul class="schedule__list">
      <li v-for="talk in talks[currentTrack]" :key="talk.name">
        <Talk :talk="talk" />
      </li>
    </ul>
  </section>
</template>

<script>
import Heading from "@/components/common/Heading";
import Talk from "./Talk";

export default {
  name: "Schedule",
  props: {},
  components: {
    Heading,
    Talk,
  },
  data: () => ({
    tracks: [
      {
        name: "breakIt",
        displayName: "Break It!",
      },
      {
        name: "buildIt",
        displayName: "Build It!",
      },
      {
        name: "showIt",
        displayName: "Show It!",
      },
    ],
    currentTrack: null,
    isSelectOpened: false,
    talks: {
      breakIt: [
        {
          author: "Shail Patel",
          startTime: "10:00 am",
          endTime: "10:45 am",
          title: "Uncovering and Visualizing Malicious Infrastructure",
          body: `This talk will focus on many common as well as very unique
                  open-source tool set used for reconnaissance in bug hunting methodology.
                  I will be talking in depth about maintaining these tools,
                  what to expect and what not to expect while looking for bugs while doing...`,
        },
        {
          author: "Shail Patel",
          startTime: "10:00 am",
          endTime: "10:45 am",
          title: "Uncovering and Visualizing Malicious Infrastructure",
          body: `This talk will focus on many common as well as very unique
                  open-source tool set used for reconnaissance in bug hunting methodology.
                  I will be talking in depth about maintaining these tools,
                  what to expect and what not to expect while looking for bugs while doing...`,
        },
      ],
    },
  }),
  computed: {
    currentTabNum() {
      return (
        this.tracks.findIndex((track) => track.name === this.currentTrack) + 1
      );
    },
  },
  created() {
    this.currentTrack = this.tracks[0].name;
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.schedule {
  padding: 32px;
  position: relative;

  &__heading {
    margin-bottom: 30px;
  }

  &__select-wrapper {
    position: relative;
  }

  &__select-arrow {
    position: absolute;
    top: 34px;
    right: 16px;
    width: 10px;
    height: 10px;
    border-top: 1px solid $black;
    border-right: 1px solid $black;
    transform: rotate(135deg);
    transition: transform 0.3s;

    &--opened {
      transform: rotate(-45deg);
    }
  }

  &__select {
    appearance: none;
    border: none;
    width: calc(100% + 32px);
    height: 80px;
    border-top: 1px solid $black;
    border-bottom: 1px solid $black;
    font-family: $sarabun;
    font-weight: $sarabunSemibold;
    font-size: 1.3rem;
    line-height: 1;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &__tabs {
    display: none;
  }

  &__list {
    padding-left: 0;
    list-style-type: none;
    display: grid;
    grid-gap: 32px;
  }

  @media (min-width: $media-sm) {
    padding: 120px;

    &::before {
      content: "";
      position: absolute;
      top: 266px;
      width: 116px;
      height: calc(100% - 120px - 88px - 58px);
      background-color: $light-gray;
      z-index: -1;
    }

    &--tab1 {
      &::before {
        left: 0;
        transform: none;
        right: unset;
      }
    }

    &--tab2 {
      &::before {
        left: 50%;
        transform: translateX(-50%);
        right: unset;
      }
    }

    &--tab3 {
      &::before {
        left: unset;
        right: 0;
        transform: none;
      }
    }

    &__heading {
      margin-bottom: 56px;
    }

    &__select-wrapper {
      display: none;
    }

    &__tabs {
      display: block;
      margin-bottom: 50px;
      border-top: 1px solid $black;
      border-bottom: 1px solid $black;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__tab-btn {
      border: none;
      background: transparent;
      padding: 0;
      font-family: $sarabun;
      font-weight: $sarabunSemibold;
      font-size: 1.3rem;
      line-height: 1;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: $black;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  @media (min-width: $media-sm) {
    &__heading {
      margin-bottom: 88px;
    }
  }

  @media (min-width: $media-md) {
    &::before {
      width: 160px;
    }
  }

  @media (min-width: $media-lg) {
    &::before {
      width: calc(15vw + 150px);
    }
  }

  @media (min-width: $media-xl) {
    &::before {
      width: calc(20vw + 150px);
    }
  }
}
</style>
