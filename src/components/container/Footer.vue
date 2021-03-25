<template>
  <footer class="footer padding-x pb-12">
    <div class="footer__breef-wrapper">
      <section class="footer__breef mb-3">
        <img
          src="@/assets/img/ac-logo.png"
          alt="ArcticCon logo"
          class="footer__logo"
        />
        <p class="footer__name">
          Alaska's Information
          <br />
          Security Conference
        </p>
      </section>
      <!-- <div class="footer__contact-wrapper"> -->
      <section class="footer__contact mb-3">
        <h3 class="footer__heading smaller-lh">Contact us</h3>
        <span class="footer__contact-info smaller-lh"> (907) 290-7660 </span>
        <span class="footer__contact-info smaller-lh">
          info@exploitcon.com
        </span>
      </section>
      <ul class="footer__social">
        <li
          v-for="item in socialMedia"
          :key="item.name"
          class="footer__social-item"
        >
          <a :href="item.link" target="_blank" class="footer__social-link">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.51898 18V9.55388H0.285645V6.51287H2.51898V3.91545C2.51898 1.87438 3.83821 0 6.87802 0C8.10879 0 9.01888 0.11799 9.01888 0.11799L8.94717 2.95778C8.94717 2.95778 8.01902 2.94874 7.00618 2.94874C5.90998 2.94874 5.73435 3.45391 5.73435 4.29237V6.51287H9.03431L8.89072 9.55388H5.73435V18H2.51898Z"
                fill="#515151"
              />
            </svg>
          </a>
        </li>
      </ul>
      <!-- </div> -->
    </div>
    <div class="footer__copy-wrapper">
      <section class="footer__policies">
        <Link is-smaller class="footer__policy-link"> Privacy Policy </Link>
        <Link is-smaller class="footer__policy-link"> Terms of service </Link>
        <Link is-smaller class="footer__policy-link"> Cookie Policy </Link>
      </section>
      <p class="footer__copy smaller-lh">Copyright ©2020 All rights reserved</p>
    </div>
  </footer>
</template>

<script>
import Link from "@/components/common/Link";

export default {
  name: "Footer",
  props: {},
  components: {
    Link,
  },
  data() {
    return {
      socialMedia: [
        {
          name: "facebook",
          link: "https://www.facebook.com/ArcticConAK",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.footer {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 24px;
    width: 100%;
    background-color: $yellow;
  }

  &__logo {
    width: 96px;
  }

  &__heading {
    font-size: 1rem;
    color: $black;
  }

  &__contact-info {
    display: block;
  }

  &__social {
    padding-left: 0;
    display: grid;
    grid-gap: 8px 48px;
    grid-template-columns: repeat(auto-fit, minmax(9px, 1fr));
  }

  &__social-item {
    list-style-type: none;
  }

  &__copy {
    font-size: 0.9rem;
  }

  &__policies {
    display: flex;
    flex-flow: column;
  }

  &__policy-link {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: $media-xs) {
    &__breef {
      display: flex;
    }

    &__logo {
      width: 100px;
      margin-right: 16px;
    }

    &__contact,
    &__social {
      padding-left: 112px;
    }

    &__copy-wrapper {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-top: 42px;
      margin-bottom: 50px;
    }

    &__policies {
      text-align: right;
      flex-shrink: 0;
      margin-bottom: 0;
    }

    &__copy {
      text-align: left;
      margin-right: 96px;
    }
  }

  @media (min-width: $media-sm) {
    &__breef-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    &__breef,
    &__contact {
      width: 50%;
    }

    &__social {
      width: 100%;
    }

    &__breef {
      flex-shrink: 0;
    }

    &__logo {
      width: 108px;
      margin-right: 28px;
    }

    &__contact {
      text-align: right;
    }

    &__social {
      justify-items: end;
    }

    &__copy-wrapper {
      margin-top: 28px;
      margin-bottom: 60px;
    }

    &__contact,
    &__social {
      padding-left: 0;
    }

    &__policies {
      flex-flow: row;
      justify-content: flex-end;
    }

    &__policy-link {
      margin-right: 32px;
      margin-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media (min-width: $media-md) {
    &__breef-wrapper {
      flex-wrap: nowrap;
    }

    &__breef,
    &__contact,
    &__social {
      width: unset;
    }

    &__contact {
      order: 3;
    }

    &__social {
      justify-items: center;
      order: 2;
      align-self: flex-end;
      padding-bottom: 8px;
    }

    &__copy-wrapper {
      margin-top: 42px;
      margin-bottom: 88px;
    }
  }
}
</style>
