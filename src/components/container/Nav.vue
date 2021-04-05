<template>
  <nav
    class="nav padding-x"
    :class="{
      'nav--opened': isMobNavOpened,
      'nav--not-home': !isMainPage,
    }"
  >
    <router-link to="/">
      <picture>
        <source media="(max-width: 719px)" :srcset="logoPath" />
        <source media="(min-width: 720px)" srcset="@/assets/img/ac-logo.png" />
        <img
          src="@/assets/img/ac-logo.png"
          alt="ArcticCon logo"
          class="nav__logo"
        />
      </picture>
    </router-link>
    <button
      class="nav__toggler"
      :class="{ active: isMobNavOpened }"
      @click="isMobNavOpened = !isMobNavOpened"
    >
      <span />
      <!-- for burger menu -->
    </button>
    <NavMenu v-show="isMobNavOpened" :menu="navLinks" />
  </nav>
</template>

<script>
import NavMenu from "./NavMenu";

export default {
  name: "Navigation",
  props: {},
  components: {
    NavMenu,
  },
  data: () => ({
    isMobNavOpened: false,
    navLinks: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About ArcticCon",
        path: "/#about",
      },
      {
        name: "Apply a talk",
        path: "/#apply",
      },
      {
        name: "Schedule",
        path: "/#schedule",
      },
      {
        name: "Villages",
        path: "/#villages",
      },
      {
        name: "Volunteering",
        path: "/#volunteering",
      },
      {
        name: "Sponsors",
        path: "/#sponsors",
      },
      {
        name: "Tickets",
        path: "/#tickets",
      },
      {
        name: "Login",
        path: "/login",
      },
    ],
  }),
  computed: {
    isMainPage() {
      return this.$route.fullPath === "/";
    },

    logoPath() {
      return this.isMobNavOpened || !this.isMainPage
        ? require("@/assets/img/ac-logo.png")
        : require("@/assets/img/ac-logo-white.png");
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.nav {
  $self: &;

  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--opened,
  &--not-home {
    #{$self}__toggler {
      &::before,
      &::after,
      span {
        background-color: $black;
      }
    }
  }

  &--opened {
    background-color: $light-gray;
  }

  &__logo {
    width: 60px;
    display: block;
  }

  &__toggler {
    border: none;
    background: none;
    padding: 0;
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 5;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::before,
    &::after {
      content: "";
    }

    &::before,
    &::after,
    span {
      position: absolute;
      left: 0;
      height: 2px;
      width: 24px;
      border-radius: 1px;
      background-color: $white;
      transition: 0.3s ease-in-out;
    }

    &::before {
      top: 3px;
    }

    span {
      top: 11px;
    }

    &::after {
      top: 19px;
    }

    &.active {
      &::before {
        transform: rotate(45deg);
        top: 9px;
        left: 0;
      }

      span {
        width: 0%;
        opacity: 0;
      }

      &::after {
        transform: rotate(-45deg);
        top: 9px;
        left: 0;
      }
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 24px;
    padding-bottom: 24px;

    &--opened {
      background-color: transparent;
    }

    &__toggler {
      &::before,
      &::after,
      span {
        background-color: $black;
      }
    }

    &__logo {
      width: 90px;
    }
  }

  @media (min-width: $media-lg) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
}
</style>
