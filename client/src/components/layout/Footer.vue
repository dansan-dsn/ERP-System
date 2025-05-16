<script setup>
import { computed } from "vue";

const currentDate = computed(() => {
  return new Date().getFullYear();
});
</script>
<template>
  <div class="pa-3">
    <p>
      {{ currentDate }} &copy;
      <span class="text-decoration-underline text-blue">
        ddryn970@gmail.com
      </span>
      <span class="text-subtitile2 font-weight-bold text-grey-darken-1"
        >All rights reserved</span
      >
    </p>
  </div>
</template>
