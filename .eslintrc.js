module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/recommended",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    // Import Sorter
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // Composition API Specific Rules
    // These rules are designed for Vue 3, but should also work with Vue 2.
    "vue/no-ref-as-operand": "error",
    "vue/no-setup-props-destructure": "error",

    // Error instead of warning on specific rules
    "vue/require-prop-types": "error",
  },
};
