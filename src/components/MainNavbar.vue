<template>
  <v-app-bar app color="green darken-3" dense flat>
    <v-toolbar-title class="mr-10">
      <v-img :src="logoSrc" alt="Platform Logo" height="40px"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="{ path: '/' }" class="nav-item">Home</v-btn>
    <v-btn text :to="{ path: '/rules' }" class="nav-item">Rules</v-btn>
    <v-btn text :to="{ path: '/pitch-randomizer' }" class="nav-item"
      >Pitch Randomizer</v-btn
    >
    <!-- Placeholder for Teams button, disabled until the route is implemented -->
    <v-btn text disabled class="nav-item">Teams (Coming Soon)</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      logoSrc: require('@/assets/logo.png'),
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.nav-item {
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 20px;
  color: white;
  letter-spacing: 0.05em;
}

.v-app-bar {
  background-color: #004d40; /* Dark green color for the navbar to match cricket theme */
  height: 60px; /* Increased height for better visibility */
}

.v-toolbar-title {
  display: flex;
  align-items: center;
}

@media (max-width: 600px) {
  .nav-item {
    margin-right: 8px;
    font-size: 0.875rem;
  }

  .v-toolbar-title {
    min-width: 0;
  }
}
</style>
