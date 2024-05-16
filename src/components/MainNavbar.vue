<template>
  <nav class="navbar flex items-center justify-between shadow-lg px-4 py-2">
    <div class="navbar-brand text-galactic-white font-bold text-xl">
      <a href="/">TPL League</a>
    </div>
    <ul class="navbar-nav flex items-center">
      <!-- List of Navigation Links -->
      <li><a href="/" class="navbar-link">Home</a></li>
      <li><a href="/auction" class="navbar-link">Auction</a></li>
      <li><a href="/tournaments" class="navbar-link">Tournaments</a></li>
      <li><a href="/rules" class="navbar-link">Rules</a></li>
      <li>
        <a href="/pitch-randomizer" class="navbar-link">Pitch Randomizer</a>
      </li>
      <li><a href="/market" class="navbar-link">Market</a></li>
      <li><a href="/tours" class="navbar-link">Tours</a></li>
      <li><a href="/transfers" class="navbar-link">Transfers</a></li>
      <li><a href="/login" class="navbar-link">Login</a></li>
      <li><a href="/register" class="navbar-link">Register</a></li>
      <!-- Additional Links as needed -->
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MainNavbar',
  setup() {
    const showModal = ref(false);

    return {
      showModal,
    };
  },
};
</script>

<style>
.glow {
  text-shadow: 0 0 8px #ff5c00;
}
</style>
