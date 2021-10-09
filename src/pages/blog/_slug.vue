<template>
  <div>
    <!-- Data -->
    <template v-if="post">
      <!-- Image -->
      <v-img class="blog-post-image" :src="post.image" :alt="post.title">
        <!-- Placeholder -->
        <template #placeholder>
          <img
            class="v-img"
            src="https://picsum.photos/1000/500"
            :alt="post.title"
          />
        </template>
      </v-img>

      <!-- Content -->
      <div class="section section--overlap container">
        <div class="blog-post card">
          <div class="card-content">
            <!-- Title -->
            <div class="blog-post-title">
              {{ post.title }}
            </div>

            <!-- Information -->
            <div class="blog-post-info">
              <!-- Tags -->
              <div class="blog-post-tags">
                <v-btn
                  v-for="(tag, index) of post.tags"
                  :key="index"
                  small
                  soft
                  disabled
                >
                  {{ tag }}
                </v-btn>
              </div>

              <!-- Date -->
              <div class="blog-post-date">
                {{ date }}
              </div>
            </div>

            <hr />

            <!-- Content -->
            <div class="blog-post-content">
              <nuxt-content :document="post" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useContext,
  useMeta,
  useStatic,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const { params, $content, error } = useContext();

    /**
     * Blog post slug
     */
    const slug = computed(() => params.value.slug);

    /**
     * Blog post to display.
     */
    const post = useStatic(
      async (slug) => {
        try {
          return await $content("blog", slug).fetch();
        } catch (exception) {
          error({ statusCode: 404 });
        }
      },
      slug,
      "post"
    );

    /**
     * Date of the post.
     */
    const date = computed(() =>
      new Date(Date.parse(post.value?.date)).toLocaleDateString()
    );

    /**
     * SEO
     */
    useMeta(() => {
      if (!post.value) {
        return {};
      }

      return {
        meta: [
          {
            hid: "title",
            name: "title",
            content: post.value.title,
          },
          {
            hid: "decription",
            name: "description",
            content: post.value.description,
          },
          {
            hid: "image",
            name: "image",
            content: post.value.image,
          },
          // Google
          {
            hid: "schema-name",
            itemprop: "name",
            content: post.value.title,
          },
          {
            hid: "schema-description",
            itemprop: "description",
            content: post.value.description,
          },
          {
            hid: "schema-image",
            itemprop: "image",
            content: post.value.image,
          },
          // Facebook
          {
            hid: "og:type",
            property: "og:type",
            content: "article",
          },
          {
            hid: "og:title",
            property: "og:title",
            content: post.value.title,
          },
          {
            hid: "og:description",
            property: "og:description",
            content: post.value.description,
          },
          {
            hid: "og:image",
            property: "og:image",
            content: post.value.image,
          },
          {
            hid: "article:author",
            property: "article:author",
            content: "Maarten Van Neyghem",
          },
          {
            hid: "article:publish_time",
            property: "article:publish_time",
            content: String(post.value.date),
          },
          // Twitter
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: post.value.title,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: post.value.description,
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            content: post.value.image,
          },
        ],
      };
    });

    return {
      post,
      date,
    };
  },
  head: {},
});
</script>

<style lang="scss" scoped>
.blog-post {
  --card-padding: 40px;

  width: 100%;

  @media (max-width: $breakpoint-md) {
    --card-padding: 16px;
    --card-shadow: none;
    --card-radius: 0;

    /* Stretch card over the entire screen width */
    margin-left: calc(50% - 50vw);
    width: 100vw;
  }

  hr {
    margin: 2rem 0;

    @media (max-width: $breakpoint-md) {
      margin: 1.5rem 0;
    }
  }

  &-image {
    height: 500px;
    width: 80%;
    max-width: 1200px;

    object-fit: cover;

    margin: auto;
    margin-top: 32px;

    @media (max-width: $breakpoint-md) {
      height: 300px;
      width: 100%;
    }

    ::v-deep.v-img {
      height: 100%;
      width: calc(100% + 200px);

      margin-left: -100px;
      margin-right: -100px;

      object-fit: cover;

      border-radius: 10px;

      @media (max-width: $breakpoint-md) {
        border-radius: 0;
        margin: 0;
        width: 100%;
      }
    }
  }

  &-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 16px;

    color: var(--color-text-secondary);
  }

  &-tags {
    margin-bottom: 8px;

    > * {
      margin-left: 8px;
    }
  }

  &-title {
    font-size: 3rem;
    font-weight: 700;

    @media (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
  }

  &-content {
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.7);

    @media (max-width: $breakpoint-md) {
      font-size: 1rem;
    }

    ::v-deep.nuxt-content a {
      transition: color 200ms ease;
      color: var(--color-primary);

      &:hover {
        filter: brightness(80%);
      }
    }
  }
}
</style>
