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
        title:
            "Maarten Van Neyghem - Computer Science Student at Ghent University",
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
                content: "Maarten Van Neyghem"
            },
            {
                hid: "description",
                name: "description",
                content: "Computer Science Student at Ghent University"
            },
            {
                hid: "image",
                name: "image",
                content: "/img/logo.png"
            },
            {
                hid: "author",
                name: "author",
                content: "Maarten Van Neyghem"
            },
            {
                hid: "keywords",
                name: "keywords",
                content:
                    "Maarten Van Neyghem, Maartenvn, UGent, University Ghent, Computer Science, CS, Student"
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
                content: "Maarten Van Neyghem"
            },
            {
                hid: "schema-description",
                itemprop: "description",
                content: "Computer Science Student at Ghent University"
            },
            {
                hid: "schema-image",
                itemprop: "image",
                content: "/img/logo.png"
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
                content: "Maarten Van Neyghem"
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: "Computer Science Student at Ghent University"
            },
            {
                hid: "twitter:site",
                name: "twitter:site",
                content: "@maarten_vn"
            },
            {
                hid: "twitter:img:src",
                name: "twitter:img:src",
                content: "/img/logo.png"
            },

            // SEO (Facebook)
            {
                hid: "og:title",
                property: "og:title",
                content: "Maarten Van Neyghem"
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "Computer Science Student at Ghent University"
            },
            {
                hid: "og:image",
                property: "og:image",
                content: "/img/logo.png"
            },
            {
                hid: "og:site_name",
                property: "og:site_name",
                content: "maartenvn.be"
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
                content: "Maarten Van Neyghem"
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
    components: true,

    /**
     * Modules for dev and build (recommended)
     * @ref https://go.nuxtjs.dev/config-modules
     */
    buildModules: ["@nuxt/typescript-build", "@nuxtjs/composition-api"],

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
        "content:file:beforeInsert": (document) => {
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
        color: "#4281fe",
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
        extractCSS: true
    }
};
