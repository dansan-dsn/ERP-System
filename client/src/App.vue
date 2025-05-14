<script setup>
import MainLayout from "@/components/MainLayout.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <v-app>
    <main-layout />

    <v-main class="layout">
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<style scoped>
.layout {
  background: #f5f7ff;
  /* padding-right: 1rem; */
}
</style>
