<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    :class="classes"
    :style="styles"
  >
    <path :d="icon" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    /**
     * @mdi/js icon
     */
    icon: {
      type: String as PropType<string>,
      required: true,
    },

    /**
     * Size of the icon
     */
    size: {
      type: String as PropType<string>,
      default: "24px",
    },

    /**
     * Left from text
     */
    left: {
      type: Boolean as PropType<boolean>,
      default: false,
    },

    /**
     * Right from text
     */
    right: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  setup(props) {
    /**
     * Applicable classes for the button.
     */
    const classes = computed(() => {
      const cls = [];

      // Default
      cls.push("v-icon");

      // Position
      if (props.left) {
        cls.push("v-icon-position--left");
      } else if (props.right) {
        cls.push("v-icon-position--right");
      }

      return cls.join(" ");
    });

    /**
     * Applicable styles for the button.
     */
    const styles = computed(() => {
      const style = [];

      // Size
      style.push(`width: ${props.size}`);
      style.push(`height: ${props.size}`);

      return style.join("; ");
    });

    return {
      classes,
      styles,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-icon {
  width: 10px;
  fill: currentColor;
  font-size: inherit;

  &-position {
    &--left {
      margin-right: 8px;
    }

    &--right {
      margin-left: 8px;
    }
  }
}
</style>
