import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import pinia from "./plugins/pinia";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App).use(router);
app.use(pinia);
app.use(vuetify);
app.mount("#app");
