<template>
    <div :class="`${colClass} mb-4`">
        <nuxt-link :to="`/blog/${post.slug}`">
            <div
                :class="`blog-card blog-card--${width} card card--stretch card--hover`"
            >
                <!-- Image -->
                <v-img
                    :class="`card-image blog-card-image--${width}`"
                    :src="post.image"
                    :alt="post.title"
                >
                    <!-- Placeholder -->
                    <template #placeholder>
                        <img
                            class="v-img"
                            src="https://picsum.photos/536/354"
                            :alt="post.title"
                        />
                    </template>
                </v-img>

                <div class="blog-card-text">
                    <!-- Tags -->
                    <div class="blog-card-tags">
                        <v-btn
                            v-for="(tag, index) of post.tags"
                            :key="index"
                            x-small
                            soft
                            disabled
                        >
                            {{ tag }}
                        </v-btn>
                    </div>

                    <!-- Title -->
                    <div :class="`card-title blog-card-title--${width}`">
                        {{ post.title }}
                    </div>

                    <!-- Description -->
                    <div :class="`card-content blog-card-content--${width}`">
                        {{ post.description }}
                    </div>

                    <!-- Information -->
                    <div :class="`card-actions blog-card-info`">
                        <!-- Date -->
                        <div>{{ date }}</div>

                        <!-- Reading time -->
                        <div>{{ Math.ceil(post.readingTime) }} mins</div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
    props: {
        /**
         * Blog post to display.
         */
        post: {
            type: Object as any, // TODO: proptype
            required: true
        },

        /**
         * Width of the card.
         * Can be: full, half, trice
         */
        width: {
            type: String as PropType<string>,
            default: "full"
        }
    },

    setup(props) {
        /**
         * Col class to use, based on the width.
         */
        const colClass = computed(() => {
            switch (props.width) {
                case "full": {
                    return "col-12";
                }

                case "half": {
                    return "col-12 col-md-6";
                }

                case "trice": {
                    return "col-12 col-md-4";
                }
            }
        });

        /**
         * Date of the article.
         */
        const date = computed(() =>
            new Date(Date.parse(props.post.date)).toLocaleDateString()
        );

        return {
            colClass,
            date
        };
    }
});
</script>

<style lang="scss" scoped>
.blog-card {
    display: flex;

    &--full {
        @media (min-width: $breakpoint-md) {
            flex-direction: row;
        }
    }

    &--half,
    &--trice {
        flex-direction: column;
    }

    &-image {
        height: 400px !important;

        ::v-deep.v-img {
            object-fit: cover;
            height: 100%;
        }

        &--full {
            @media (min-width: $breakpoint-md) {
                height: 300px;
            }

            ::v-deep.v-img {
                @media (min-width: $breakpoint-md) {
                    height: 100%;

                    border-radius: 0px;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }
            }
        }
    }

    &-text {
        display: flex;
        flex-direction: column;
        transition: color 200ms ease;

        &:hover {
            .card-title {
                color: var(--color-primary);
            }

            .card-content {
                color: var(--color-primary);
            }
        }
    }

    &-tags {
        padding-top: var(--card-padding);
        padding-left: var(--card-padding);

        > * {
            margin-left: 8px;
        }
    }

    &-title {
        &--full {
            @media (min-width: $breakpoint-md) {
                font-size: 2.2rem;
            }
        }
    }

    &-content {
        &--full {
            @media (min-width: $breakpoint-md) {
                font-size: 1.2rem;
            }
        }
    }

    &-info {
        display: flex;
        justify-content: space-between;

        font-size: 0.9rem;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
    }
}
</style>
