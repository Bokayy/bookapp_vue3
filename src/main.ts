import { usePaginationStore } from "@/store/usePagination";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./style/style.scss";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount("#app");

const paginationStore = usePaginationStore();
