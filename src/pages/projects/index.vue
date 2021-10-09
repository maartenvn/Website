<template>
  <div>
    <!-- Hero -->
    <div class="hero hero--small">
      <div class="container">
        <div class="hero-title">Projects</div>

        <div class="hero-description">
          I have been working on lots of projects over the years. I like to
          create my own and contribute to OSS.
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="section section--overlap--small container">
      <div class="row">
        <div
          v-for="(project, index) of projects"
          :key="index"
          class="col-12 col-md-6 col-lg-4 mb-4"
        >
          <project-card :project="project" />
        </div>
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
     * Projects
     */
    const projects = useStatic(
      async () => {
        return await $content("projects").sortBy("order").fetch();
      },
      undefined,
      "projects"
    );

    /**
     * SEO
     */
    useMeta({
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Projects - Maarten Van Neyghem",
        },
        // Google
        {
          hid: "schema-name",
          itemprop: "name",
          content: "Projects - Maarten Van Neygheù",
        },
        // Facebook
        {
          hid: "og:title",
          property: "og:title",
          content: "Projects - Maarten Van Neyghem",
        },

        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Projects - Maarten Van Neyghem",
        },
      ],
    });

    return {
      projects,
    };
  },
  head: {},
});
</script>
