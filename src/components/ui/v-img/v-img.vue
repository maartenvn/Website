<template>
    <div class="inherit">
        <!-- Image -->
        <template v-if="displayImage">
            <img
                class="v-img"
                :src="src"
                :alt="alt"
                @load="handleSuccess"
                @error="handleError"
            />
        </template>

        <!-- Image Placeholder -->
        <template v-if="displayPlaceholder">
            <!-- SLOT: placeholder -->
            <slot name="placeholder" />
        </template>

        <!-- Image Loading -->
        <!--<template v-if="displayLoading">
            <div class="v-img v-img-loading">

        <slot name="loading" />
            </div>
        </template> -->
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    PropType,
    ref
} from "@nuxtjs/composition-api";
import { ImageStatus } from "./ImageStatus";

export default defineComponent({
    props: {
        /**
         * Image Source
         */
        src: {
            type: String as PropType<string>,
            required: true
        },

        /**
         * Image Alt
         */
        alt: {
            type: String as PropType<string>,
            required: true
        }
    },

    setup(props) {
        /**
         * Image Status
         */
        const status = ref<ImageStatus>(
            props.src ? ImageStatus.LOADING : ImageStatus.ERROR
        );

        /**
         * Should the image tag be rendered.
         */
        const displayImage = computed(() => status.value !== ImageStatus.ERROR);

        /**
         * Should the placeholder tag be rendered.
         */
        const displayPlaceholder = computed(
            () => status.value === ImageStatus.ERROR
        );

        /**
         * Should the loading tag be rendered.
         */
        const displayLoading = computed(
            () => status.value === ImageStatus.LOADING
        );

        /**
         * Handle successfull image loading
         */
        function handleSuccess() {
            status.value = ImageStatus.SUCCESS;
        }

        /**
         * Handle failed image loading
         */
        function handleError() {
            status.value = ImageStatus.ERROR;
        }

        return {
            status,
            displayImage,
            displayPlaceholder,
            displayLoading,
            handleSuccess,
            handleError
        };
    }
});
</script>

<style lang="scss" scoped>
.v-img {
}
</style>
