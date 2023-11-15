import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you are using css-loader
import App from './App.vue';

const app = createApp(App);

const vuetify = createVuetify(); // Replaces new Vuetify()

app.use(vuetify);

app.mount('#app');
