<script setup>
import { ref } from "vue";
import NavBar from "./NavBar.vue";

const drawer = ref(true);

const toggleSidebar = () => {
  drawer.value = !drawer.value;
};

const links = [
  {
    title: "Inventory",
    icon: "mdi-warehouse", // Top-level icon (optional)
    subdir: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        route: "/inventory/dashboard",
      },
      {
        icon: "mdi-package-variant",
        text: "Products",
        route: "/inventory/products",
      },
      {
        icon: "mdi-shape-outline",
        text: "Categories",
        route: "/inventory/categories",
      },
      {
        icon: "mdi-alert",
        text: "Low Stock",
        route: "/inventory/low-stock",
      },
      {
        icon: "mdi-clipboard-edit",
        text: "Adjustments",
        route: "/inventory/adjustments",
      },
    ],
  },
  {
    title: "Sales",
    icon: "mdi-cash-register",
    subdir: [
      {
        icon: "mdi-point-of-sale",
        text: "POS Terminal",
        route: "/sales/pos",
      },
      {
        icon: "mdi-receipt",
        text: "Invoices",
        route: "/sales/invoices",
      },
      {
        icon: "mdi-cart",
        text: "Orders",
        route: "/sales/orders",
      },
      {
        icon: "mdi-undo-variant",
        text: "Returns",
        route: "/sales/returns",
      },
    ],
  },
  {
    title: "Purchasing",
    icon: "mdi-truck-delivery",
    subdir: [
      {
        icon: "mdi-account-hard-hat",
        text: "Suppliers",
        route: "/purchasing/suppliers",
      },
      {
        icon: "mdi-clipboard-text",
        text: "Purchase Orders",
        route: "/purchasing/orders",
      },
      {
        icon: "mdi-checkbox-marked-circle",
        text: "Received Goods",
        route: "/purchasing/receipts",
      },
    ],
  },
  {
    title: "Customers",
    icon: "mdi-account-group",
    subdir: [
      {
        icon: "mdi-card-account-details",
        text: "Customer Directory",
        route: "/customers/list",
      },
      {
        icon: "mdi-credit-card-clock",
        text: "Credit Accounts",
        route: "/customers/credit",
      },
      {
        icon: "mdi-star",
        text: "Loyalty Program",
        route: "/customers/loyalty",
      },
    ],
  },
  {
    title: "Reports",
    icon: "mdi-chart-box",
    subdir: [
      {
        icon: "mdi-chart-bar",
        text: "Sales Reports",
        route: "/reports/sales",
      },
      {
        icon: "mdi-finance",
        text: "Profit & Loss",
        route: "/reports/profit",
      },
      {
        icon: "mdi-chart-pie",
        text: "Inventory Analysis",
        route: "/reports/inventory",
      },
    ],
  },
  {
    title: "Settings",
    icon: "mdi-cog",
    subdir: [
      {
        icon: "mdi-account",
        text: "User Management",
        route: "/settings/users",
      },
      {
        icon: "mdi-percent",
        text: "Tax Configuration",
        route: "/settings/tax",
      },
      {
        icon: "mdi-printer",
        text: "Printer Setup",
        route: "/settings/printers",
      },
    ],
  },
];
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    floating
    class="px-4 hide-scrollbar overflow-auto"
  >
    <div
      class="text-uppercase font-weight-bold text-center text-h5 mb-5 mt-4 pt-4 position-sticky top-0 bg-white logo-header hide-scrollbar overflow-auto"
    >
      Wellness
    </div>
    <v-list v-for="(module, i) in links" :key="i">
      <v-list-item
        class="font-weight-bold text-uppercase text-caption text-grey"
        >{{ module.title }}</v-list-item
      >
      <v-list-item
        v-for="(link, j) in module.subdir"
        :key="j"
        :prepend-icon="link.icon"
        router
        :to="link.route"
      >
        <template v-slot:prepend>
          <v-icon></v-icon>
        </template>
        <v-list-item-title class="text-caption">{{
          link.text
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <div class="">
    <nav-bar :toggleSidebar="toggleSidebar" :links="links" />
  </div>
</template>

<style scoped>
.logo-header {
  z-index: 100;
}
</style>
