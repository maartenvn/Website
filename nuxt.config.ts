import seo from "./seo.config";

export default {
    /**
     * Source directory
     */
    srcDir: "src/",

    /**
     * Build both modern & legacy bundles.
     */
    modern: process.env.NODE_ENV === "production" && false,

    /**
     * Generate a static website.
     */
    target: "static",

    /**
     * Global page headers
     * @ref https://go.nuxtjs.dev/config-head
     */
    head: {
        title: `${seo.title} - ${seo.description}`,
        meta: [
            /**
             * Defaults
             */
            {
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },

            /**
             * SEO
             */

            // General
            {
                hid: "title",
                name: "title",
                content: seo.title
            },
            {
                hid: "description",
                name: "description",
                content: seo.description
            },
            {
                hid: "image",
                name: "image",
                content: seo.image
            },
            {
                hid: "author",
                name: "author",
                content: seo.authors
            },
            {
                hid: "keywords",
                name: "keywords",
                content: seo.keywords
            },
            {
                hid: "robots",
                name: "robots",
                content: "index, follow"
            },

            // SEO (schema.org for Google)
            {
                hid: "schema-name",
                itemprop: "name",
                content: seo.title
            },
            {
                hid: "schema-description",
                itemprop: "description",
                content: seo.description
            },
            {
                hid: "schema-image",
                itemprop: "image",
                content: seo.image
            },

            // SEO (Twitter)
            {
                hid: "twitter:card",
                name: "twitter:card",
                content: "summary"
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: seo.title
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: seo.description
            },
            {
                hid: "twitter:site",
                name: "twitter:site",
                content: seo.twitterHandle
            },
            {
                hid: "twitter:img:src",
                name: "twitter:img:src",
                content: seo.image
            },

            // SEO (Facebook)
            {
                hid: "og:title",
                property: "og:title",
                content: seo.title
            },
            {
                hid: "og:description",
                property: "og:description",
                content: seo.description
            },
            {
                hid: "og:image",
                property: "og:image",
                content: seo.image
            },
            {
                hid: "og:site_name",
                property: "og:site_name",
                content: seo.site
            },
            {
                hid: "og:locale",
                property: "og:locale",
                content: "nl_BE"
            },
            {
                hid: "og:type",
                property: "type",
                content: "website"
            },

            // Apple
            {
                hid: "apple-mobile-web-app-title",
                name: "apple-mobile-web-app-title",
                content: seo.title
            },

            /**
             * Colors
             */
            {
                name: "msapplication-TileColor",
                content: "#6699FF"
            },
            {
                name: "msapplication-config",
                content: "/img/icons/browserconfig.xml"
            },
            {
                name: "theme-color",
                content: "#6699FF"
            }
        ],
        link: [
            /**
             * Favicon
             */
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/img/icons/apple-touch-icon.png"
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/img/icons/favicon-32x32.png"
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/img/icons/favicon-16x16.png"
            },
            {
                rel: "mask-icon",
                color: "#6699ff",
                href: "/img/icons/safari-pinned-tab.svg"
            },
            {
                rel: "shortcut icon",
                href: "/img/icons/favicon.ico"
            },

            /**
             * PWA manifest
             */
            {
                rel: "manifest",
                href: "/site.webmanifest"
            }
        ],
        script: []
    },

    /**
     * Global CSS
     * @ref https://go.nuxtjs.dev/config-css
     */
    css: ["@/assets/scss/main.scss"],

    /**
     * Style Resources
     */
    styleResources: {
        scss: ["@/assets/scss/variables.scss"]
    },

    /**
     * Plugins to run before rendering page
     * @ref https://go.nuxtjs.dev/config-plugins
     */
    plugins: [],

    /**
     * Auto import components
     * @ref https://go.nuxtjs.dev/config-components
     */
    components: [
        {
            path: "@/components/",
            pathPrefix: false // Do not include the path prefix in the component name
        }
    ],

    /**
     * Modules for dev and build (recommended)
     * @ref https://go.nuxtjs.dev/config-modules
     */
    buildModules: ["@nuxt/typescript-build", "@nuxtjs/composition-api/module"],

    /**
     * Modules
     * @ref https://go.nuxtjs.dev/config-modules
     */
    modules: ["@nuxt/content", "@nuxtjs/style-resources"],

    /**
     * Hooks
     * @ref https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-hooks
     */
    hooks: {
        "content:file:beforeInsert": (document: any) => {
            if (document.extension === ".md") {
                const { minutes } = require("reading-time")(document.text);

                document.readingTime = minutes;
            }
        }
    },

    /**
     * Loading indicator.
     */
    loading: {
        color: "#0a275a",
        height: "3px"
    },

    /**
     * Build Configuration
     * @ref https://go.nuxtjs.dev/config-build
     */
    build: {
        analyze: false,

        /**
         * Extract all CSS into seperate CSS files.
         */
        extractCSS: true,

        /**
         * Babel
         */
        babel: {
            plugins: [
                // Fix for: https://bit.ly/3vFJkAY
                ["@babel/plugin-proposal-private-methods", { loose: true }]
            ]
        }
    }
};
