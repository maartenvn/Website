<template>
  <div>
    <!-- Hero -->
    <div class="hero hero--small">
      <div class="container">
        <div class="hero-title">CV</div>
      </div>
    </div>

    <!-- Content -->
    <div class="section section--overlap--small container">
      <div class="card" style="--card-padding: 32px">
        <div class="card-content">
          <!-- Actions -->
          <div class="cv-actions">
            <v-btn soft @click.native="print">
              <v-icon :icon="icons.mdiPrinter" />
            </v-btn>

            <v-btn soft href="cv.pdf" target="_blank">
              <v-icon :icon="icons.mdiFilePdfBox" />
            </v-btn>
          </div>

          <!-- CV -->
          <cv />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiFilePdfBox, mdiPrinter } from "@mdi/js";
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    /**
     * Print
     */
    function print() {
      const printWindow = window.open("/cv.pdf");

      if (printWindow) {
        printWindow.print();
      }
    }

    /**
     * SEO
     */
    useMeta({
      meta: [
        {
          hid: "title",
          name: "title",
          content: "CV - Maarten Van Neyghem",
        },
        // Google
        {
          hid: "schema-name",
          itemprop: "name",
          content: "CV - Maarten Van Neygheù",
        },
        // Facebook
        {
          hid: "og:title",
          property: "og:title",
          content: "CV - Maarten Van Neyghem",
        },

        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "CV - Maarten Van Neyghem",
        },
      ],
    });

    return {
      print,
      icons: {
        mdiPrinter,
        mdiFilePdfBox,
      },
    };
  },
  head: {},
});
</script>

<style lang="scss" scoped>
.cv {
  &-actions {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 16px;

    > * {
      margin-left: 16px;
    }
  }
}
</style>
