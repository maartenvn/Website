<template>
    <component
        :is="to ? 'nuxt-link' : 'a'"
        :class="classes"
        :style="styles"
        :to="to"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";
import { colorToTextColor, stringToColor } from "@/utils";

export default defineComponent({
    props: {
        /**
         * Location to go to
         */
        to: {
            type: String as PropType<string>,
            default: ""
        },

        /**
         * Color of the button
         */
        color: {
            type: String as PropType<string>,
            default: "primary"
        },

        /**
         * Stretch entire width
         */
        block: {
            type: Boolean as PropType<boolean>
        },

        /**
         * Type: text
         */
        text: {
            type: Boolean as PropType<boolean>
        },

        /**
         * Type: fill
         */
        fill: {
            type: Boolean as PropType<boolean>
        },

        /**
         * Type: outline
         */
        outline: {
            type: Boolean as PropType<boolean>
        },

        /**
         * Type: soft
         */
        soft: {
            type: Boolean as PropType<boolean>
        },

        /**
         * Size: extra small
         */
        xSmall: {
            type: Boolean as PropType<boolean>
        },

        /**
         * Size: small
         */
        small: {
            type: Boolean as PropType<boolean>
        },

        /**
         * Size: large
         */
        large: {
            type: Boolean as PropType<boolean>
        },

        /**
         * If button is disabled
         */
        disabled: {
            type: Boolean as PropType<boolean>
        }
    },

    setup(props) {
        /**
         * Applicable classes for the button.
         */
        const classes = computed(() => {
            const cls = [];

            // Default
            cls.push("v-btn");

            // Block
            if (props.block) {
                cls.push("v-btn-block");
            }

            // Types
            if (props.text) {
                cls.push("v-btn-type--text");
            } else if (props.outline) {
                cls.push("v-btn-type--outline");
            } else if (props.soft) {
                cls.push("v-btn-type--soft");
            } else {
                cls.push("v-btn-type--fill");
            }

            // Sizes
            if (props.xSmall) {
                cls.push("v-btn-size--x-small");
            } else if (props.small) {
                cls.push("v-btn-size--small");
            } else if (props.large) {
                cls.push("v-btn-size--large");
            }

            return cls.join(" ");
        });

        /**
         * Applicable styles for the button.
         */
        const styles = computed(() => {
            const style = [];

            // Color
            style.push(
                `--v-btn-background-color: ${stringToColor(props.color)}`
            );
            style.push(`--v-btn-text-color: ${colorToTextColor(props.color)}`);

            return style.join("; ");
        });

        return {
            classes,
            styles
        };
    }
});
</script>

<style lang="scss" scoped>
.v-btn {
    --v-btn-background-color: black;
    --v-btn-text-color: black;
    --v-btn-height: 40px;
    --v-btn-padding: 0 16px;
    --v-btn-font-size: 1rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    height: var(--v-btn-height);
    padding: var(--v-btn-padding);

    font-size: var(--v-btn-font-size);
    font-weight: 500;

    border-radius: 10px;
    transition: color 200ms ease;
    transition-property: background-color, color, opacity;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: inherit;

        transition: all 200ms ease;
    }

    &:hover {
        cursor: pointer;
    }
}

.v-btn-block {
    display: flex;
}

.v-btn-type {
    &--text {
        color: var(--v-btn-background-color);

        &:hover,
        &:focus {
            &:before {
                background-color: var(--v-btn-background-color);
                opacity: 0.15;
            }
        }
    }

    &--fill {
        background-color: var(--v-btn-background-color);
        color: var(--v-btn-text-color);

        &:hover,
        &:focus {
            &:before {
                background-color: var(--v-btn-background-color);
                filter: brightness(110%);
            }
        }
    }

    &--outline {
        color: var(--v-btn-background-color);
        border: 1px solid var(--v-btn-background-color);

        &:hover,
        &:focus {
            &:before {
                background-color: var(--v-btn-background-color);
                opacity: 0.15;
            }
        }
    }

    &--soft {
        color: var(--v-btn-background-color);

        &:before {
            background-color: var(--v-btn-background-color);
            opacity: 0.25;
            filter: brightness(120%);
        }

        &:hover,
        &:focus {
            color: var(--v-btn-text-color);

            &:before {
                background-color: var(--v-btn-background-color);

                opacity: 1;
                filter: none;
            }
        }
    }
}

.v-btn-size {
    &--x-small {
        --v-btn-height: 20px;
        --v-btn-padding: 0 16px;
        --v-btn-font-size: 0.7rem;
    }

    &--small {
        --v-btn-height: 30px;
        --v-btn-padding: 0 16px;
        --v-btn-font-size: 0.8rem;
    }

    &--large {
        --v-btn-height: 50px;
        --v-btn-padding: 0 16px;
        --v-btn-font-size: 1.1rem;
    }
}
</style>
