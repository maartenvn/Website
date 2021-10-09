module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "vue/attributes-order": "off",
    "vue/order-in-components": "off",
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
  },
  overrides: [],
};
