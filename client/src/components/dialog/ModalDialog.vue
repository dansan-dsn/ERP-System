<script setup lang="ts">
import { useDialogStore } from "@/stores/dialog";

const dialogStore = useDialogStore();
</script>

<template>
  <v-dialog
    v-model="dialogStore.dialogState.isOpen"
    :max-width="dialogStore.dialogState.type === 'confirm' ? 500 : 600"
    persistent
  >
    <component
      :is="dialogStore.dialogState.component"
      v-if="dialogStore.dialogState.component"
      v-bind="dialogStore.dialogState.props"
      @close="dialogStore.closeDialog"
      @submit="dialogStore.closeDialog"
    />

    <!-- Confirm Dialog Template -->
    <v-card v-else-if="dialogStore.dialogState.type === 'confirm'">
      <v-card-title class="d-flex align-center bg-error">
        <v-icon icon="mdi-alert-circle" color="warning" class="mr-2" />
        <span>{{ dialogStore.dialogState.title }}</span>
      </v-card-title>

      <v-card-text class="pt-4">
        <p class="text-body-1 font-weight-bold">
          {{ dialogStore.dialogState.message }}
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="grey-darken-1"
          variant="text"
          @click="dialogStore.closeDialog(false)"
        >
          Cancel
        </v-btn>
        <v-btn color="error" @click="dialogStore.closeDialog(true)">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
/* Add custom styles for better message display */
.v-card-text p {
  white-space: pre-line;
  word-break: break-word;
}
</style>
