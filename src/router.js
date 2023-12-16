import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import RulesPage from './views/RulesPage.vue';
import PitchRandomizer from './views/PitchRandomizer.vue';
import LoginPage from './views/LoginPage.vue';
import RegisterPage from './views/RegisterPage.vue';
import MarketHome from './views/MarketPage.vue';
import ToursPage from './views/ToursPage.vue';
import TournamentsPage from './views/TournamentsPage.vue';
import AuctionPage from './views/AuctionPage.vue';
import TransfersPage from './views/TransfersPage.vue';

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
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/pitch-randomizer',
    name: 'pitch-randomizer',
    component: PitchRandomizer,
  },
  {
    path: '/Register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/Market',
    name: 'market',
    component: MarketHome,
  },
  { path: '/tours', name: 'tours', component: ToursPage },

  { path: '/tournaments', component: TournamentsPage, name: 'tournaments' }, // Add this line
  { path: '/auction', component: AuctionPage, name: 'auction' }, // Add this line
  { path: '/transfers', component: TransfersPage, name: 'transfers' }, // Add this line
  // ... any other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
