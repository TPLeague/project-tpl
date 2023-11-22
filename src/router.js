import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import RulesPage from './views/RulesPage.vue';

Vue.use(router);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesPage,
    },
    // ...
  ],
});
export default router;
