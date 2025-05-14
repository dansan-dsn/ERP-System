<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const route = useRoute();
const { mdAndUp } = useDisplay();

const props = defineProps({
  toggleSidebar: {
    required: true,
    type: Function,
  },
  links: {
    required: true,
    type: Array,
  },
});

const activeLinkText = computed(() => {
  const currentPath = route.path;
  for (const link of props.links) {
    const matched = link.subdir.find((item) => item.route === currentPath);
    if (matched) return matched.text;
  }
  return null;
});
</script>

<template>
  <v-app-bar
    flat
    :class="{ 'mx-4 mr-3': mdAndUp, 'mb-4': true, rounded: true }"
    :app="false"
    class="app-bar"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="text-grey"
        @click="toggleSidebar"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="text-capitalize text-grey">
      <span class="font-weight-light text-subtitle-1">{{
        activeLinkText
      }}</span>
    </v-app-bar-title>

    <v-btn
      variant="text"
      color="grey"
      class="mr-6"
      append-icon="mdi-exit-to-app"
    >
      <template v-slot:append><v-icon></v-icon></template
      ><span class="text-lowercase"> Sign Out</span>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.app-bar {
  background-color: #f5f7ff !important;
}
</style>
