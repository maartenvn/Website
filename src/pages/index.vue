<template>
    <div>
        <!-- Hero -->
        <div class="hero">
            <div class="container">
                <div class="hero-title">Maarten Van Neyghem</div>

                <div class="hero-description">
                    Computer Science Student at Ghent University. Passionate
                    front-end developer in various frameworks/languages.
                </div>
            </div>
        </div>

        <!-- Skills -->
        <div class="section section--overlap container">
            <div class="row justify-content-center">
                <div
                    v-for="(skill, index) of skills"
                    :key="index"
                    class="col-12 col-md-6 col-lg-4 mb-4"
                >
                    <v-animation
                        class="animation-disabled-md-and-down"
                        name="fadeInDown"
                        duration="0.8s"
                        delay="0.2s"
                        :delay-multiply="index"
                    >
                        <skill-card :skill="skill" />
                    </v-animation>
                </div>
            </div>
        </div>

        <!-- Recent Projects -->
        <div class="section container">
            <div class="section-title">Recent Projects</div>

            <div class="section-content">
                <div class="row">
                    <div
                        v-for="(project, index) of projects"
                        :key="index"
                        class="col-12 col-md-6 col-lg-4 mb-4"
                    >
                        <project-card :project="project" />
                    </div>
                </div>

                <!-- More -->
                <div class="mt-4">
                    <v-btn to="/projects" large text block>
                        View more
                        <v-icon :icon="icons.mdiArrowRight" right />
                    </v-btn>
                </div>
            </div>
        </div>

        <!-- Recent Blogposts -->
        <div class="section container">
            <div class="section-title">Recent Blogposts</div>

            <div class="section-content">
                <div class="row">
                    <blog-card
                        v-for="(post, index) of posts"
                        :key="index"
                        :post="post"
                        width="full"
                    />
                </div>

                <!-- More -->
                <div class="mt-4">
                    <v-btn to="/blog" large text block>
                        View more
                        <v-icon :icon="icons.mdiArrowRight" right />
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mdiArrowRight } from "@mdi/js";
import {
    defineComponent,
    shallowRef,
    useAsync,
    useContext
} from "@nuxtjs/composition-api";
import { Skill } from "../components/view/skill-card/Skill";

export default defineComponent({
    setup() {
        const { $content } = useContext();

        /**
         * Skills
         */
        const skills = shallowRef<Skill[]>([
            {
                title: "Front-end Developer",
                description:
                    "I am a very visual person and I like to create & build new web concepts & clean responsive design.",
                sections: [
                    {
                        title: "Languages",
                        content: "HTML, CSS, SCSS, Javascript, Typescript, PHP"
                    },

                    {
                        title: "Frameworks",
                        content: "Vue, React, Nuxt.JS, Next.JS, JQuery"
                    }
                ]
            },

            {
                title: "Back-end Developer",
                description:
                    "I love to write large & scalable back-end applications.",
                sections: [
                    {
                        title: "Languages",
                        content: "Node.js, Java, Kotlin, Python, SQL"
                    },

                    {
                        title: "Frameworks",
                        content:
                            "Spring Boot, Express.js, Nest, Django, Flask, NGINX, Apache"
                    }
                ]
            },

            {
                title: "Generic Developer",
                description:
                    "I am not only a web developer, I have other skills too!",
                sections: [
                    {
                        title: "Languages",
                        content: "C, C++, Haskell, R"
                    },

                    {
                        title: "Things I've Made",
                        content:
                            "Native & PWA Android Apps, Microservices, Web scrapers, audio editor tools, ..."
                    }
                ]
            }
        ]);

        /**
         * Projects
         */
        const projects = shallowRef<any>([]);

        /**
         * Blog posts to display.
         */
        const posts = shallowRef<any>(null);

        /**
         * Fetch content
         */
        useAsync(async () => {
            projects.value = await $content("projects")
                .where({ featured: true })
                .sortBy("order")
                .fetch();

            posts.value = await $content("blog")
                .sortBy("createdAt")
                .limit(3)
                .fetch();
        });

        return {
            skills,
            projects,
            posts,
            icons: {
                mdiArrowRight
            }
        };
    }
});
</script>

<style lang="scss"></style>
