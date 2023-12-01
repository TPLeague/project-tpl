import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import RulesPage from './views/RulesPage.vue';
import PitchRandomizer from './views/PitchRandomizer.vue';

const routes = [
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
  {
    path: '/pitch-randomizer',
    name: 'pitch-randomizer',
    component: PitchRandomizer,
  },
  // ... any other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
