import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // Make sure this import path is correct

const app = createApp(App);

app.use(router);
app.use(vuetify); // Use the vuetify instance imported from the plugins

app.mount('#app');
