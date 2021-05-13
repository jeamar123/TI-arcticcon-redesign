<template>
  <article class="blog-post-full padding-x">
    <div class="blog-post-full__main">
      <Heading type="h2" text-align="left" class="blog-post-full__heading">
        Apple's Head of Security Charged in Bribery Case: Here's How It Happened
      </Heading>
      <span class="blog-post-full__author"> Shail Patel </span>
      <img
        src="../../assets/img/village-sample.jpg"
        alt="Blog image"
        class="blog-post-full__image"
      />
      <p class="blog-post-full__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor
        pretium viverra suspendisse. Senectus et netus et malesuada fames.
        Nullam eget felis eget nunc lobortis mattis aliquam. Faucibus nisl
        tincidunt eget nullam. Lobortis scelerisque fermentum dui faucibus in
        ornare. Facilisis sed odio morbi quis commodo odio. Nisl tincidunt eget
        nullam non nisi est sit. Quisque sagittis purus sit amet. Non nisi est
        sit amet facilisis magna etiam. Orci porta non pulvinar neque.
        Scelerisque mauris pellentesque pulvinar pellentesque. Tempor nec
        feugiat nisl pretium fusce id velit. Pulvinar etiam non quam lacus
        suspendisse faucibus interdum posuere. Vestibulum lectus mauris ultrices
        eros in cursus turpis massa tincidunt. Semper auctor neque vitae tempus
        quam pellentesque. Sed sed risus pretium quam vulputate dignissim.
        Gravida arcu ac tortor dignissim. Id consectetur purus ut faucibus
        pulvinar elementum integer enim neque. Rutrum tellus pellentesque eu
        tincidunt tortor. Enim blandit volutpat maecenas volutpat blandit. At
        tellus at urna condimentum mattis. Sapien pellentesque habitant morbi
        tristique senectus et. Tristique sollicitudin nibh sit amet commodo
        nulla facilisi nullam vehicula. Ac turpis egestas integer eget. Egestas
        sed sed risus pretium quam vulputate dignissim. Faucibus et molestie ac
        feugiat sed lectus vestibulum mattis ullamcorper. Nisl purus in mollis
        nunc sed id semper. Viverra mauris in aliquam sem fringilla. Aliquam ut
        porttitor leo a diam sollicitudin tempor id eu. Tincidunt praesent
        semper feugiat nibh sed pulvinar proin gravida. Nisi lacus sed viverra
        tellus. Hac habitasse platea dictumst quisque. Urna nunc id cursus metus
        aliquam eleifend. Nisi vitae suscipit tellus mauris a. Amet est placerat
        in egestas erat imperdiet. Morbi blandit cursus risus at ultrices. Non
        odio euismod lacinia at quis risus sed vulputate. Mattis rhoncus urna
        neque viverra justo nec. Scelerisque mauris pellentesque pulvinar
        pellentesque habitant morbi tristique senectus. Purus sit amet luctus
        venenatis lectus. Vel facilisis volutpat est velit egestas. Sagittis id
        consectetur purus ut. Mi ipsum faucibus vitae aliquet. Massa eget
        egestas purus viverra accumsan in nisl nisi scelerisque. Est
        pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
        Egestas integer eget aliquet nibh. Faucibus pulvinar elementum integer
        enim neque volutpat ac tincidunt. Risus nullam eget felis eget nunc
        lobortis mattis aliquam faucibus. Tristique et egestas quis ipsum. Fusce
        ut placerat orci nulla. Tellus mauris a diam maecenas sed enim ut sem.
        Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Aliquam
        etiam erat velit scelerisque in dictum. Ac tortor dignissim convallis
        aenean et tortor at risus viverra. Egestas fringilla phasellus faucibus
        scelerisque eleifend. In aliquam sem fringilla ut morbi tincidunt.
        Dapibus ultrices in iaculis nunc sed. Phasellus egestas tellus rutrum
        tellus pellentesque eu tincidunt tortor. Eget mauris pharetra et
        ultrices. Massa ultricies mi quis hendrerit dolor magna eget est lorem.
        At imperdiet dui accumsan sit. Amet consectetur adipiscing elit
        pellentesque habitant morbi. Vitae tortor condimentum lacinia quis vel
        eros donec ac odio. Aliquet eget sit amet tellus cras adipiscing enim
        eu. Pellentesque massa placerat duis ultricies. Augue ut lectus arcu
        bibendum at varius vel pharetra vel. Quam lacus suspendisse faucibus
        interdum. Erat pellentesque adipiscing commodo elit. Leo urna molestie
        at elementum eu facilisis. Mauris augue neque gravida in fermentum et
        sollicitudin ac. Ipsum dolor sit amet consectetur adipiscing elit ut. Eu
        facilisis sed odio morbi quis commodo odio aenean sed. Nulla aliquet
        porttitor lacus luctus accumsan tortor posuere. Elit at imperdiet dui
        accumsan. Ac feugiat sed lectus vestibulum. Faucibus interdum posuere
        lorem ipsum dolor sit amet consectetur. Eget est lorem ipsum dolor sit.
        Tellus molestie nunc non blandit massa enim nec. Dui sapien eget mi
        proin sed libero. Turpis egestas sed tempus urna. Commodo nulla facilisi
        nullam vehicula ipsum. Semper eget duis at tellus at urna condimentum
        mattis pellentesque. Porta lorem mollis aliquam ut porttitor leo a diam.
        Non curabitur gravida arcu ac tortor. Eu turpis egestas pretium aenean
        pharetra magna ac. Imperdiet dui accumsan sit amet nulla facilisi morbi
        tempus. Nec ullamcorper sit amet risus. Pellentesque elit eget gravida
        cum sociis.
      </p>
    </div>
    <div class="blog-post-full__list">
      <BlogPostCard
        v-for="post in blogPosts"
        :key="post.name"
        :data="post"
        class="blog-post-full__post"
      />
    </div>
  </article>
</template>

<script>
import Heading from "@/components/common/Heading";
import BlogPostCard from "@/components/common/CommonCard";

export default {
  name: "Blog",
  props: {},
  components: {
    Heading,
    BlogPostCard,
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

.blog-post-full {
  padding-top: 108px;

  &__author {
    display: block;
    font-weight: $sansBold;
    color: $black;
    margin-bottom: 8px;
  }

  &__image {
    width: 100%;
    height: 210px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 8px;
  }

  &__text {
    text-align: justify;
    margin-bottom: 44px;
  }

  &__post {
    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }

  @media (min-width: $media-xs) {
    &__heading {
      margin-bottom: 4px;
    }

    &__author {
      margin-bottom: 20px;
    }

    &__image {
      height: 328px;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
    }

    &__post {
      &:nth-child(2) {
        display: block;
      }
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 146px;

    &__heading {
      margin-bottom: 16px;
    }

    &__author {
      margin-bottom: 44px;
    }

    &__image {
      height: 494px;
      margin-bottom: 24px;
    }

    &__text {
      margin-bottom: 120px;
    }

    &__list {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 24px;
    }

    &__post {
      &:nth-child(3) {
        display: block;
      }
    }
  }

  @media (min-width: $media-md) {
    display: flex;
    align-items: flex-start;

    &__main {
      margin-right: 94px;
    }

    &__text {
      margin-bottom: 0;
    }

    &__list {
      width: 216px;
      flex-shrink: 0;
      display: grid;
      grid-template-columns: unset;
      grid-gap: 32px;
    }

    &__post {
      .village-card__image {
        height: 306px;
      }
    }
  }

  @media (min-width: $media-xl) {
    &__main {
      margin-right: 122px;
    }

    &__list {
      width: 270px;
    }

    &__post {
      .village-card__image {
        height: 370px;
      }
    }
  }
}
</style>
