<template>
  <v-app-bar app color="primary" dense>
    <v-toolbar-title>
      <v-img :src="logoSrc" alt="Platform Logo" height="40" contain></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Use router-link with the exact prop to highlight active link -->
    <router-link to="/" exact>
      <v-btn text class="nav-link">Home</v-btn>
    </router-link>
    <router-link to="/rules" exact>
      <v-btn text class="nav-link">Rules</v-btn>
    </router-link>
    <router-link to="/teams" exact>
      <v-btn text to="/pitch-randomizer">Pitch Randomizer</v-btn>
    </router-link>
    <!-- <router-link to="/tournaments" exact>
      <v-btn text class="nav-link">Tournaments</v-btn>
    </router-link> -->
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
      return this.$route.name; // This will keep track of the current active route.
    },
  },
};
</script>

<style scoped>
/* Styles for the navigation links */
.nav-link {
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 16px;
  letter-spacing: 0.05em;
  transition: color 0.3s ease; /* Transition for a smooth color change */
}

/* Style adjustments for active navigation link */
.nav-link.active {
  color: var(--v-accent-base); /* Accent color for the active link */
}

/* Adjust the logo image */
.v-img {
  max-height: 40px; /* Limit the logo size */
}

/* Ensure the app bar extends full width and remove default shadow for a flat design */
.v-app-bar {
  width: 100%;
  box-shadow: none;
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
  .nav-link {
    margin-right: 8px; /* Less margin on smaller screens */
    font-size: 0.875rem; /* Smaller font size for nav links */
  }

  .v-toolbar-title {
    min-width: 0; /* Allow the title area to shrink on smaller screens */
  }
}
</style>
