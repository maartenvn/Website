<template>
    <div class="project-card card card--stretch">
        <!-- Image -->
        <v-img :src="project.image || ''" :alt="project.title">
            <!-- Placeholder -->
            <template #placeholder>
                <div class="v-img v-img-placeholder">
                    {{ project.title }}
                </div>
            </template>
        </v-img>

        <!-- Title -->
        <div class="card-title">
            {{ project.title }}
        </div>

        <!-- Description -->
        <div class="card-content">
            {{ project.description }}
        </div>

        <!-- Links -->
        <div class="card-actions">
            <!-- Website -->
            <template v-if="project.links.website">
                <v-btn
                    :href="project.links.website"
                    target="_blank"
                    color="primary"
                    text
                >
                    <v-icon :icon="icons.mdiLink" left />

                    Website
                </v-btn>
            </template>

            <!-- Github -->
            <template v-if="project.links.github">
                <v-btn
                    :href="project.links.github"
                    target="_blank"
                    color="primary"
                    text
                >
                    <v-icon :icon="icons.mdiGithub" left />

                    Github
                </v-btn>
            </template>

            <!-- Docs -->
            <template v-if="project.links.docs">
                <v-btn
                    :href="project.links.docs"
                    target="_blank"
                    color="primary"
                    text
                >
                    <v-icon :icon="icons.mdiBookOpen" left />

                    Docs
                </v-btn>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { mdiLink, mdiGithub, mdiBookOpen } from "@mdi/js";

export default defineComponent({
    props: {
        /**
         * Project to display
         */
        project: {
            type: Object as any, // TODO: proptype
            required: true
        }
    },

    setup() {
        return {
            icons: {
                mdiLink,
                mdiGithub,
                mdiBookOpen
            }
        };
    }
});
</script>

<style lang="scss" scoped>
.project-card {
    ::v-deep.v-img {
        height: 300px;
        min-width: 100%;
    }

    ::v-deep.v-img-placeholder {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #353b48;
        color: white;

        font-size: 3rem;
        font-weight: 500;
    }
}
</style>
