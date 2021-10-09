<template>
  <div>
    <!-- Hero -->
    <div class="hero hero--small">
      <div class="container">
        <div class="hero-title">Blog</div>

        <div class="hero-description">
          All shared opinions are my own and not the views of my employer.
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="section section--overlap--small container">
      <div class="row">
        <blog-card
          v-for="(post, index) of posts"
          :key="index"
          :post="post"
          :width="post.layout.width"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useMeta,
  useStatic,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const { $content } = useContext();

    /**
     * Blog posts to display.
     */
    const posts = useStatic(
      async () => {
        return await $content("blog").sortBy("createdAt").fetch();
      },
      undefined,
      "posts"
    );

    /**
     * SEO
     */
    useMeta({
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Blog - Maarten Van Neyghem",
        },
        // Google
        {
          hid: "schema-name",
          itemprop: "name",
          content: "Blog - Maarten Van Neygheù",
        },
        // Facebook
        {
          hid: "og:title",
          property: "og:title",
          content: "Blog - Maarten Van Neyghem",
        },

        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Blog - Maarten Van Neyghem",
        },
      ],
    });

    return {
      posts,
    };
  },
  head: {},
});
</script>
