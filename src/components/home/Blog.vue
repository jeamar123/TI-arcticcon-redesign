<template>
  <section class="blog padding-x">
    <Heading type="h2" text-align="center" class="blog__heading">
      Blog
    </Heading>
    <div class="blog__posts">
      <BlogCard
        v-for="post in blogPosts"
        :key="post.name"
        :data="post"
        class="blog__post"
      />
    </div>
  </section>
</template>

<script>
import Heading from "@/components/common/Heading";
import BlogCard from "@/components/common/CommonCard";

export default {
  name: "Blog",
  props: {},
  components: {
    Heading,
    BlogCard,
  },
  data: () => ({
    blogPosts: [
      {
        name:
          "Apple's Head of Security Charged in Bribery Case: Here's How It Happened",
      },
      {
        name:
          "Apple's Head of Security Charged in Bribery Case: Here's How It Happened",
      },
      {
        name:
          "Apple's Head of Security Charged in Bribery Case: Here's How It Happened",
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.blog {
  padding-top: 32px;

  &__heading {
    margin-bottom: 16px;
  }

  &__posts {
    display: grid;
    grid-gap: 24px;
  }

  @media (min-width: $media-xs) {
    &__posts {
      grid-gap: 16px;
      grid-template-columns: repeat(2, 1fr);
    }

    &__post:last-child {
      display: none;
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 120px;

    &__heading {
      margin-bottom: 52px;
    }

    &__posts {
      grid-gap: 24px;
      grid-template-columns: repeat(3, 1fr);
    }

    &__post:last-child {
      display: block;
    }
  }

  @media (min-width: $media-lg) {
    &__heading {
      margin-bottom: 82px;
    }
  }
}
</style>
