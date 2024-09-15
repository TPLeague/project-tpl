<template>
  <div
    class="app-container bg-space-black text-galactic-white min-h-screen p-4"
  >
    <h1 class="text-4xl font-bold text-electric-blue mb-6">Market Page</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Objectives card -->
      <div class="card bg-neon-purple p-4 rounded-lg">
        <h2 class="card-title text-2xl font-semibold mb-2">Objectives</h2>
        <p class="card-subtitle text-starlight-yellow">
          Season 2 Act II: It's the Season
        </p>
        <p class="card-time-left text-cosmic-orange mt-2">
          13 Days 21 Hours Left
        </p>
        <p class="card-description mt-2">
          Check back daily to discover new Objectives for the opportunity to
          earn rewards.
        </p>
      </div>

      <!-- Add more cards here -->
    </div>
  </div>
</template>

<script setup>
// Composition API logic goes here, if needed

// Any reactive data, computed properties, or methods can be defined directly here
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* You can add any additional styles here */
</style>
