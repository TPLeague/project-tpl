import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "@/utils/supabase" // Side-effect import to ensure supabase.js is executed
import "./styles/global.css"

const app = createApp(App)
app.use(router)
app.mount("#app")
