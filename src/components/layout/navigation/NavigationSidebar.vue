<template>
  <div class="sidebar">
    <!-- Toolbar -->
    <div class="sidebar-toolbar">
      <div @click="toggleSidebar">
        <v-icon :icon="icons.mdiClose" size="34px" />
      </div>
    </div>

    <!-- Navigation -->
    <div class="sidebar-navigation" @click="toggleSidebar">
      <v-animation
        v-for="(entry, index) of entries"
        :key="index"
        name="fadeInDownLarge"
        duration="0.4s"
        delay="0.1s"
        :delay-multiply="index"
      >
        <nuxt-link :to="entry.to">{{ entry.text }}</nuxt-link>
      </v-animation>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiClose } from "@mdi/js";
import { defineComponent, PropType } from "@nuxtjs/composition-api";

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
     * Toggle Sidebar
     */
    function toggleSidebar() {
      emit("update:sidebar", !props.sidebar);
    }

    return {
      toggleSidebar,
      icons: {
        mdiClose,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  color: white;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    background-color: var(--color-primary);
    opacity: 0.85;
  }

  z-index: 1000;

  &-toolbar {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    padding: 20px 40px 0 40px;
  }

  &-navigation {
    padding: 40px;

    a {
      display: flex;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
}
</style>
