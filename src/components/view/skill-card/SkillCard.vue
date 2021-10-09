<template>
  <div class="skill-card card card--center card--stretch mb-4">
    <div>
      <!-- Title -->
      <div class="card-title">
        {{ skill.title }}
      </div>

      <!-- Description -->
      <div class="card-content">
        {{ skill.description }}
      </div>
    </div>

    <!-- Sections -->
    <div v-for="(section, index) of skill.sections" :key="index">
      <div class="card-section">
        <div class="card-section-title">
          {{ section.title }}
        </div>

        <div class="card-section-content">
          {{ section.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";

import { Skill } from "./Skill";

export default defineComponent({
  props: {
    /**
     * Skill to display
     */
    skill: {
      type: Object as PropType<Skill>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.skill-card {
  --card-padding: 32px;

  justify-content: space-between;
}
</style>
