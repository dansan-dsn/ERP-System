<script setup>
import { ref } from "vue";

const search = ref("");

const headers = [
  { title: "#", key: "id" },
  { title: "Name", key: "name" },
  { title: "Slug", key: "slug" },
  { title: "Business Type", key: "type" },
  { title: "Status", key: "status" },
];
const productCategories = [
  {
    id: 1,
    name: "Point of Sale Devices",
    slug: "point-of-sale-devices",
    type: "retail",
    status: "active",
  },
  {
    id: 2,
    name: "Storage & Shelving",
    slug: "storage-shelving",
    type: "wholesale",
    status: "inactive",
  },
  {
    id: 3,
    name: "Packaging Materials",
    slug: "packaging-materials",
    type: "retail",
    status: "active",
  },
  {
    id: 4,
    name: "Shop Signage",
    slug: "shop-signage",
    type: "wholesale",
    status: "active",
  },
  {
    id: 5,
    name: "Security Equipment",
    slug: "security-equipment",
    type: "retail",
    status: "active",
  },
  {
    id: 6,
    name: "Display Accessories",
    slug: "display-accessories",
    type: "retail",
    status: "inactive",
  },
  {
    id: 7,
    name: "Cleaning Supplies",
    slug: "cleaning-supplies",
    type: "wholesale",
    status: "active",
  },
  {
    id: 8,
    name: "Cash Handling Tools",
    slug: "cash-handling-tools",
    type: "retail",
    status: "active",
  },
  {
    id: 9,
    name: "Labeling Equipment",
    slug: "labeling-equipment",
    type: "retail",
    status: "inactive",
  },
  {
    id: 10,
    name: "Shop Essentials",
    slug: "shop-essentials",
    type: "wholesale",
    status: "active",
  },
];

function getColor(status) {
  if (status === "active") return "success";
  else return "warning";
}
</script>

<template>
  <div>
    <div class="mt-10 my-5">
      <p>Manage your categories</p>
    </div>
    <v-card flat>
      <v-card-title class="d-flex align-center pe-2 my-3">
        <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; Find Product
        Categories

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="productCategories"
        v-model:search="search"
        :filter-keys="['name', 'slug', 'type', '']"
      >
        <template v-slot:item.status="{ value }">
          <v-chip
            :border="`${getColor(value)} thin opacity-25`"
            :color="getColor(value)"
            :text="value"
            size="x-small"
          ></v-chip>
        </template>
      </v-data-table>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>
