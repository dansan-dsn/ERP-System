<script setup lang="ts">
import { ref } from "vue";
import type { Category } from "@/shared/interface/category";

const props = defineProps<{
  category: Category;
  isEditing: boolean;
}>();

const emit = defineEmits(["close", "submit"]);

const form = ref<Category>({ ...props.category });
const formRef = ref();

const rules = {
  required: (value: string) => !!value || "This field is required",
  slug: (value: string) =>
    /^[a-z0-9-]+$/.test(value) ||
    "Only lowercase letters, numbers and hyphens allowed",
  minLength: (length: number) => (value: string) =>
    (value && value.length >= length) || `Minimum ${length} characters`,
};

const save = async () => {
  const { valid } = await formRef.value.validate();
  if (valid) {
    emit("submit", form.value);
  }
};
</script>

<template>
  <v-card>
    <v-card-title class="bg-primary text-white">
      {{ isEditing ? "Edit Category" : "Create Category" }}
    </v-card-title>
    <v-form ref="formRef" @submit.prevent="save">
      <v-card-text>
        <v-text-field
          v-model="form.name"
          variant="outlined"
          label="Name *"
          :rules="[rules.required, rules.minLength(3)]"
          clearable
        />

        <v-text-field
          v-model="form.slug"
          variant="outlined"
          label="Slug *"
          :rules="[rules.required, rules.slug, rules.minLength(3)]"
          hint="Lowercase letters, numbers and hyphens only"
          persistent-hint
          clearable
        />

        <v-select
          v-model="form.type"
          variant="outlined"
          :items="['retail', 'wholesale']"
          label="Type *"
          :rules="[rules.required]"
        />

        <v-select
          v-model="form.status"
          variant="outlined"
          :items="['active', 'inactive']"
          label="Status *"
          :rules="[rules.required]"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          size="small"
          variant="elevated"
          @click="emit('close')"
        >
          Cancel
        </v-btn>
        <v-btn color="primary" size="small" variant="elevated" type="submit">
          Save
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style scoped>
.v-card-title {
  padding: 16px;
}
</style>
