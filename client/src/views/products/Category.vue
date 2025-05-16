<script setup lang="ts">
import { ref, onMounted, h } from "vue";
import DataTable from "@/components/data-table/DataTable.vue";
import { CategoryService } from "@/shared/services/category";
import type { Category } from "@/shared/interface/category";
import type {
  DataTableHeader,
  DataTableOptions,
} from "@/shared/types/dataTable";
import { useDialogStore } from "@/stores/dialog";
import CategoryDialog from "@/components/dialog/CategoryDialog.vue";
import { VChip } from "vuetify/components";

// Reactive state
const dialogStore = useDialogStore();
const loading = ref(false);
const categories = ref<Category[]>([]);
const search = ref("");
const tableOptions = ref<DataTableOptions>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [{ key: "id", order: "asc" }],
});

// Table configuration
const headers: DataTableHeader[] = [
  {
    title: "#",
    key: "id",
    align: "start",
    width: "80px",
    // sortable: true,
  },
  {
    title: "NAME",
    key: "name",
    align: "start",
    // sortable: true,
  },
  {
    title: "SLUG",
    key: "slug",
    align: "start",
  },
  {
    title: "TYPE",
    key: "type",
    align: "center",
    render: (value: string) =>
      h(
        VChip,
        {
          color: value === "retail" ? "primary" : "secondary",
          size: "small",
        },
        value
      ),
  },
  {
    title: "STATUS",
    key: "status",
    align: "center",
    render: (value: string) =>
      h(
        VChip,
        {
          color: value === "active" ? "success" : "warning",
          size: "small",
        },
        value
      ),
  },
  {
    title: "ACTIONS",
    key: "actions",
    align: "end",
    width: "150px",
  },
];

// Helper function for default category
const getDefaultCategory = (): Category => ({
  id: 0,
  name: "",
  slug: "",
  type: "retail",
  status: "active",
});

// Data operations
const loadCategories = async () => {
  try {
    loading.value = true;
    categories.value = await CategoryService.loadCategories();
  } finally {
    loading.value = false;
  }
};

const editCategory = async (category: Category) => {
  try {
    const result = await dialogStore.openDialog({
      type: "category",
      title: category.id ? "Edit Category" : "Create Category",
      component: CategoryDialog,
      props: {
        category: { ...category },
        isEditing: !!category.id,
      },
    });
    if (result) {
      loading.value = true;
      await CategoryService.saveCategory(result as Category);
      await loadCategories();
    }
  } finally {
    loading.value = false;
  }
};

const deleteCategory = async (category: Category) => {
  const confirmed = await dialogStore.openDialog({
    type: "confirm",
    title: "Confirm Deletion",
    message: `Are you sure you want to delete ( ${category.name} )?`,
  });

  if (!confirmed) return;

  try {
    loading.value = true;
    await CategoryService.deleteCategory(category.id);
    await loadCategories();
  } finally {
    loading.value = false;
  }
};

// Initialize component
onMounted(() => {
  loadCategories();
});
</script>

<template>
  <div class="product-categories-view">
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h5 font-weight-bold">Product Categories</h1>
      <v-btn
        color="primary"
        prepend-icon="mdi-plus-circle"
        size="small"
        @click="editCategory(getDefaultCategory())"
      >
        New Category
      </v-btn>
    </div>

    <DataTable
      :headers="headers"
      :items="categories"
      :loading="loading"
      :options="tableOptions"
      :search="search"
      :actions="{
        edit: editCategory,
        delete: deleteCategory,
      }"
      searchable
      @update:options="tableOptions = $event"
      @update:search="search = $event"
      @refresh="loadCategories"
    >
      <template #title>
        <v-icon icon="mdi-view-grid" class="me-2" />
        <span>Category List</span>
      </template>
    </DataTable>
  </div>
</template>

<style scoped>
.product-categories-view {
  margin: 0 auto;
  /* padding: 20px; */
  /* max-width: 1200px; */
}

/* Ensure chips have proper spacing */
.v-chip {
  margin: 0 2px;
}
</style>
