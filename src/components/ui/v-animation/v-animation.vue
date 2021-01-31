<template>
    <div :class="classes" :style="styles">
        <slot />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";
export default defineComponent({
    props: {
        /**
         * Name of the animation
         */
        name: {
            type: String as PropType<string>,
            default: ""
        },

        /**
         * Delay of the animation
         */
        delay: {
            type: String as PropType<string>,
            default: ""
        },

        /**
         * How many "delay"-timesteps must be the total delay
         */
        delayMultiply: {
            type: Number as PropType<number>,
            default: 1
        },

        /**
         * Duration of the animation
         */
        duration: {
            type: String as PropType<string>,
            default: ""
        }
    },

    setup(props) {
        /**
         * Applicable classes for the button.
         */
        const classes = computed(() => {
            const cls = [];

            // Default
            cls.push("v-animation");

            return cls.join(" ");
        });

        /**
         * Applicable styles for the button.
         */
        const styles = computed(() => {
            const style = [];

            // Name
            style.push(`animation-name: ${props.name}`);

            // Delay
            style.push(
                `animation-delay: calc(${props.delayMultiply} * ${props.delay})`
            );

            // Duration
            style.push(`animation-duration: ${props.duration}`);

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
.v-animation {
    height: 100%;
    animation-fill-mode: both;
}
</style>
