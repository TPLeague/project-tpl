<template>
  <v-container>
    <!-- MainNavbar is globally available and should not be re-imported on every page -->
    <v-row justify="center" class="home-intro">
      <v-col cols="12" md="8">
        <h1>Welcome to TPL</h1>
        <p>The premier destination for cricket enthusiasts.</p>
        <v-progress-circular
          indeterminate
          color="secondary"
        ></v-progress-circular>
        <p class="progress-text">Work in progress...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-intro {
  text-align: center;
  margin-top: 5rem;
}

h1 {
  font-size: 4rem; /* Larger font size for the main title */
  color: #2952c3; /* Primary theme color for the title */
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900; /* Extra bold for impact */
}

p {
  font-size: 1.25rem; /* Readable paragraph size */
  color: #2c3e50; /* Slightly darker text for body */
  margin-bottom: 1rem;
  font-family: 'Open Sans', sans-serif;
}

.v-progress-circular {
  margin-top: 2rem; /* Space above the spinner */
}

.progress-text {
  font-size: 1rem; /* Smaller font size for the progress text */
  color: #f56a00; /* Secondary color to draw attention */
  margin-top: 1rem; /* Space above the progress text */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 3rem; /* Slightly smaller font size for smaller screens */
  }

  .home-intro {
    margin-top: 3rem;
  }
}
</style>
