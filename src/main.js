import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
//import VueGtag from "vue-gtag";

createApp(App).mount('#app')

// Create a Vue app instance with analytics
// createApp(App).use(router).use(VueGtag, {
//     config: { id: "> INSERT ID <" },
//     appName: "Phoenix Website Live",
//     pageTrackerScreenviewEnabled: true,
//     }).mount("#app");