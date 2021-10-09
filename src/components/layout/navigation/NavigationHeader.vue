<template>
  <header :class="`header ${scrolled ? 'header--scroll' : ''}`">
    <nav class="navigation">
      <!-- Logo -->
      <nuxt-link class="navigation-title" to="/">
        Maarten Van Neyghem
      </nuxt-link>

      <div class="d-flex flex-direction-column">
        <!-- Navigation -->
        <div class="navigation-menu hidden-md-and-down">
          <nuxt-link
            v-for="(entry, index) of entries"
            :key="index"
            :to="entry.to"
          >
            {{ entry.text }}
          </nuxt-link>

          <!-- TODO: make v-spacer -->
          <div style="margin-left: 8px" />

          <!-- Socials -->
          <a href="https://github.com/maartenvn" target="_blank">
            <v-icon :icon="icons.mdiGithub" />
          </a>

          <a href="https://twitter.com/maarten_vn" target="_blank">
            <v-icon :icon="icons.mdiTwitter" />
          </a>

          <a href="mail:maartenvn.eu@gmail.com" target="_blank">
            <v-icon :icon="icons.mdiEmail" />
          </a>
        </div>

        <!-- Snackbar -->
        <div class="navigation-menu navigation-snackbar hidden-md-and-up">
          <a @click="toggleSidebar">
            <v-icon :icon="icons.mdiMenu" size="34px" />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { mdiEmail, mdiGithub, mdiMenu, mdiTwitter } from "@mdi/js";
import { defineComponent, PropType, shallowRef } from "@nuxtjs/composition-api";

import { NavigationEntry } from "./NavigationEntry";

export default defineComponent({
  props: {
    /**
     * If the sidebar is visible.
     */
    sidebar: {
      type: Boolean as PropType<boolean>,
      required: true,
    },

    /**
     * If the sidebar is visible.
     */
    entries: {
      type: Array as PropType<NavigationEntry[]>,
      required: true,
    },
  },

  setup(props, { emit }) {
    /**
     * If the scroll position is not at the top
     */
    const scrolled = shallowRef(false);

    /**
     * Handle scroll
     */
    if (process.client) {
      window.addEventListener("scroll", () => {
        scrolled.value = window.scrollY !== 0;
      });
    }

    /**
     * Toggle Sidebar
     */
    function toggleSidebar() {
      emit("update:sidebar", !props.sidebar);
    }

    return {
      scrolled,
      toggleSidebar,
      icons: {
        mdiMenu,
        mdiGithub,
        mdiTwitter,
        mdiEmail,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  height: 70px;
  width: 100%;

  z-index: 100;

  color: white;

  /**
     * This acts as the background layer.
     * It makes it possible to make the navigation color darker.
     */
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;

    background-color: var(--color-primary);

    transition: all 200ms ease;
  }

  /**
     * When the header is not at the top of the page
     */
  &--scroll {
    &:before {
      filter: brightness(90%);
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: 1240px;

    margin: 0 32px;

    &-title {
      font-size: 2rem;
      font-weight: bold;
      margin-top: auto;
      margin-bottom: auto;

      @media (max-width: $breakpoint-lg) {
        font-size: 1.2rem;
      }
    }

    &-menu {
      display: flex;
      align-items: center;
      height: 100%;

      a {
        display: flex;
        align-items: center;
        font-weight: 500;

        margin-left: 16px;
        height: 45px;
        padding: 0 12px;

        border-radius: 10px;
        transition: background-color 200ms ease;
        cursor: pointer;

        color: inherit !important;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }

      ::v-deep.nuxt-link-exact-active {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }

    &-snackbar {
      font-size: 2rem;
    }
  }
}
</style>
