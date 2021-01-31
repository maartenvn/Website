<template>
    <div>
        <!-- Header -->
        <navigation-header :sidebar.sync="sidebar" :entries="entries" />

        <!-- Sidebar -->
        <transition name="fade">
            <navigation-sidebar
                v-if="sidebar"
                :sidebar.sync="sidebar"
                :entries="entries"
            />
        </transition>
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    shallowRef,
    watch
} from "@nuxtjs/composition-api";
import { NavigationEntry } from "./NavigationEntry";

export default defineComponent({
    setup() {
        /**
         * If the sidebar is visible.
         */
        const sidebar = shallowRef<boolean>(false);

        /**
         * Enable/disable body scroll when sidebar is open/closed.
         */
        watch(
            () => sidebar.value,
            () => {
                const body = document.getElementsByTagName("body")[0];

                if (sidebar.value) {
                    body.classList.add("no-scroll");
                } else {
                    body.classList.remove("no-scroll");
                }
            }
        );

        /**
         * Navigation Entries
         */
        const entries = computed<NavigationEntry[]>(() => [
            {
                text: "About",
                to: "/"
            },

            {
                text: "Projects",
                to: "/projects"
            },

            {
                text: "Blog",
                to: "/blog"
            },

            {
                text: "CV",
                to: "/cv"
            }
        ]);

        return {
            sidebar,
            entries
        };
    }
});
</script>
