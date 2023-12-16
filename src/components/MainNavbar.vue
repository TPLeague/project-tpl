<template>
  <nav class="navbar flex items-center justify-between shadow-lg px-4 py-2">
    <div class="navbar-brand text-galactic-white font-bold text-xl">
      <a href="/">TPL League</a>
    </div>
    <ul class="navbar-nav flex items-center">
      <li>
        <a
          href="/"
          class="navbar-link px-3 py-2 rounded hover:bg-neon-purple transition-colors"
          >Home</a
        >
      </li>
      <li>
        <a
          href="/auction"
          class="navbar-link px-3 py-2 rounded hover:bg-neon-purple transition-colors"
          >Auction</a
        >
      </li>
      <li>
        <a
          href="/tournaments"
          class="navbar-link px-3 py-2 rounded hover:bg-neon-purple transition-colors"
          >Tournaments</a
        >
      </li>
      <!-- Additional navbar items -->
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
