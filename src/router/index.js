import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../views/HomePage.vue"
import AuctionPage from "../views/AuctionPage.vue"
import TournamentsPage from "../views/TournamentsPage.vue"
import RulesPage from "../views/RulesPage.vue"
import PitchRandomizer from "../views/PitchRandomizer.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import MarketPage from "../views/MarketPage.vue"
import ToursPage from "../views/ToursPage.vue"
import TransfersPage from "../views/TransfersPage.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/auction", component: AuctionPage },
  { path: "/tournaments", component: TournamentsPage },
  { path: "/rules", component: RulesPage },
  { path: "/pitch-randomizer", component: PitchRandomizer },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/market", component: MarketPage },
  { path: "/tours", component: ToursPage },
  { path: "/transfers", component: TransfersPage },
  // Add additional routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
