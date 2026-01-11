import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import vueHljs from "vue-hljs";
import hljs from "highlight.js";
import "vue-hljs/style.css";

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia).use(router).use(vueHljs, { hljs })

app.mount('#app')
