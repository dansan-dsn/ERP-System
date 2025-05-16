<script setup lang="ts">
import { ref, computed } from "vue";
import type {
  DataTableHeader,
  DataTableOptions,
  DataTableActions,
} from "@/shared/types/dataTable";

const props = defineProps<{
  headers: DataTableHeader[];
  items: any[];
  loading?: boolean;
  options?: DataTableOptions;
  actions?: DataTableActions;
  searchable?: boolean;
}>();

const emit = defineEmits(["update:options", "refresh"]);

const internalOptions = ref<DataTableOptions>({
  page: 1,
  itemsPerPage: 3,
  sortBy: [],
  search: "",
  ...props.options,
});

const search = ref(props.options?.search || "");

const filteredItems = computed(() => {
  if (!search.value) return props.items;

  return props.items.filter((item) =>
    props.headers.some((header) => {
      if (!header.filterable && header.key !== "actions") {
        const value = item[header.key];
        return String(value).toLowerCase().includes(search.value.toLowerCase());
      }
      return false;
    })
  );
});

function handleEdit(item: any) {
  props.actions?.edit?.(item);
}

function handleDelete(item: any) {
  props.actions?.delete?.(item);
}

function handleView(item: any) {
  props.actions?.view?.(item);
}

function handleCustomAction(action: (item: any) => void, item: any) {
  action(item);
}

function refreshData() {
  emit("refresh");
}
</script>

<template>
  <v-card>
    <v-card-title class="d-flex align-center">
      <slot name="title"></slot>
      <v-spacer />
      <v-text-field
        v-if="searchable"
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo"
        class="search-field"
        hide-details
        clearable
        single-line
        @update:model-value="
          $emit('update:options', { ...internalOptions, search })
        "
      />
    </v-card-title>

    <v-data-table-server
      v-model:items-per-page="internalOptions.itemsPerPage"
      v-model:page="internalOptions.page"
      v-model:sort-by="internalOptions.sortBy"
      :headers="headers"
      :items="filteredItems"
      :items-length="filteredItems.length"
      :loading="loading"
      :search="search"
      @update:options="$emit('update:options', $event)"
    >
      <template v-for="header in headers" #[`item.${header.key}`]="{ item }">
        <template v-if="header.render">
          <component :is="header.render(item[header.key])" />
        </template>
        <template v-else>
          {{ item[header.key] }}
        </template>
      </template>

      <template v-if="actions" #item.actions="{ item }">
        <div class="d-flex justify-end gap-1">
          <v-btn
            v-if="actions.view"
            icon
            size="small"
            color="info"
            variant="text"
            @click="handleView(item)"
            title="View"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn
            v-if="actions.edit"
            icon
            size="small"
            color="secondary"
            variant="text"
            @click="handleEdit(item)"
            title="Edit"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            v-if="actions.delete"
            icon
            size="small"
            color="error"
            variant="text"
            @click="handleDelete(item)"
            title="Delete"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <template v-if="actions.custom">
            <v-btn
              v-for="(action, index) in actions.custom"
              :key="index"
              icon
              size="small"
              :color="action.color"
              variant="text"
              @click="handleCustomAction(action.action, item)"
              :title="action.tooltip"
            >
              <v-icon>{{ action.icon }}</v-icon>
            </v-btn>
          </template>
        </div>
      </template>

      <template #bottom>
        <div class="d-flex justify-space-between align-center pa-2">
          <v-btn
            variant="text"
            icon="mdi-refresh"
            @click="refreshData"
            title="Refresh"
          />
          <v-spacer />
          <v-pagination
            v-model="internalOptions.page"
            rounded="circle"
            :length="
              Math.ceil(
                filteredItems.length / (internalOptions.itemsPerPage || 10)
              )
            "
          />
        </div>
      </template>
    </v-data-table-server>
  </v-card>
</template>

<style scoped>
.search-field {
  max-width: 300px;
}

.v-data-table-server :deep(th) {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.75rem;
}
</style>
