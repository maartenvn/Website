<template>
    <div class="container error">
        <!-- Image -->
        <img class="error-image" src="/img/error.png" alt="error" />

        <!-- Title -->
        <div class="error-title">
            {{ errorDisplay.title }}
        </div>

        <!-- Description -->
        <div class="error-description">
            {{ errorDisplay.description }}
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
    layout: "error",
    props: {
        /**
         * Error to display.
         */
        error: {
            type: Object, // TODO: proptype
            required: true
        }
    },

    setup(props) {
        /**
         * Get the message & description for a given status code.
         */
        const errorDisplay = computed(() => {
            switch (props.error.statusCode) {
                case "404": {
                    return {
                        title: "Page not found",
                        description:
                            "The page you are looking for doesn't exist or was removed. Try again later."
                    };
                }

                default: {
                    return {
                        title: "An unknown error has occured",
                        description:
                            "Something went really wrong here. Please try again later!"
                    };
                }
            }
        });

        return {
            errorDisplay
        };
    }
});
</script>

<style lang="scss" scoped>
.error {
    margin-top: 10rem;
    text-align: center;

    &-image {
        width: 200px;
        margin-bottom: 2rem;
    }

    &-title {
        font-size: 1.8rem;
        font-weight: 500;

        margin-bottom: 1rem;
    }

    &-description {
        font-size: 1.1rem;
        color: var(--color-text-secondary);
    }
}
</style>
