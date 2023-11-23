<template>
  <v-container>
    <div class="rules-container">
      <h1 class="title">Playing Rules</h1>
      <v-list dense>
        <v-list-group
          v-for="(rules, category) in categorizedRules"
          :key="category"
          :model-value="activeCategories[category]"
          @update:model-value="(value) => (activeCategories[category] = value)"
        >
          <template v-slot:activator>
            <v-list-item link>
              {{ category }}
            </v-list-item>
          </template>
          <p v-for="(rule, index) in rules" :key="index">
            {{ rule }}
          </p>
        </v-list-group>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeCategories: {},
      categorizedRules: {
        'Team Composition and Match Settings': [
          'Team Name: TPL (Mixed Cards)',
          'Match Format: T20',
          'Rounds: Each team will play 3 rounds.',
          'Difficulty Level: Legend (Hardest)',
          'Ground Selection: Any official ground may be chosen.',
          'Skill Normalization: Not applicable.',
          'Timer: Disabled during gameplay.',
        ],
        'In-Game Rules': [
          'Batting Restrictions: Players are allowed one sweep, scoop, advance, or movement per over. After the 6th over, no sweeps to pace or spin are allowed if there is no slip present.',
          'Ball Types: Each over must include three colored balls, with a maximum of two red balls.',
          'Bowling Quotas: A maximum of 8 overs of spin is allowed, with a minimum of 4 overs. Fast bowlers (RF/LF) are limited to 2 per squad.',
          'Over Restrictions: Each over may include one defensive play and one run. Pure batsmen are prohibited from bowling. Batsmen must not step outside the off stump.',
          'Fielding Setup: A 5-4 fielding setup is required. Fielders at short mid-off/on and short cover/leg are prohibited. The chip shot is banned.',
          'Slip Fielders: Rules regarding slip fielders after six overs for pace and spin bowlers.',
        ],
        'Bowling Actions and All-Rounders': [
          'Three genuine bowlers are compulsory in every playing XI.',
          'Each bowler must have a unique bowling action; no two bowlers in the playing XI can have the same style.',
          'Fast-medium and medium bowlers can bowl a combined maximum of 12 overs.',
          'All-Rounders: A maximum of 4 all-rounders are allowed in the playing XI.',
        ],
        'Technical Issues and Glitches': [
          'In the event of glitches, such as invisible balls or markers not appearing, save and exit the match to continue. If the issue persists, the match should be discontinued.',
        ],
        'Specific Player Restrictions': [
          'Refrain from using actions of S. Afridi, Bumrah, Malinga, Harbhajan if playing with Cards only.',
        ],
      },
    };
  },
  created() {
    // Initialize activeCategories with the same keys as categorizedRules
    for (let category in this.categorizedRules) {
      this.activeCategories[category] = false;
    }
  },
};
</script>

<style scoped>
.rules-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff; /* White background for the container */
  border-radius: 4px; /* Slight rounding of corners for a modern look */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.title {
  font-size: 2rem; /* Large, readable title size */
  color: #2952c3; /* Primary color from the theme for the title */
  text-align: center;
  margin-bottom: 1.5rem; /* Spacing below the title */
  font-family: 'Roboto', sans-serif; /* Roboto is often used with Material Design */
}

.category {
  margin-bottom: 1rem; /* Spacing between categories */
}

.v-list-item {
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.v-list-item:hover,
.v-list-item:active {
  background-color: #f56a00; /* Secondary color for hover/active state */
  color: #fff; /* White text when active/hover */
}

.v-list-group {
  border: 1px solid #e0e0e0; /* Light border for the collapsible group */
  border-radius: 4px;
  margin-bottom: 1rem;
}

.v-list-item--group {
  background-color: #f5f5f5; /* Light background for each item in group */
}

.div {
  text-align: left;
  font-weight: bold;
  font-size: 1rem;
  color: #333; /* Darker text for readability */
}

/* Customizing the look of the button used for categories */
.category-title {
  background-color: #ffd700; /* Accent color from the theme */
  color: #041836; /* Dark color for text */
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase; /* Uppercase text for a modern feel */
  padding: 0.75rem 1rem; /* Comfortable padding */
  border: none;
  border-radius: 4px; /* Rounded borders */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: block; /* Make the buttons fill their container */
  width: 100%; /* Ensure full width */
  text-align: left; /* Align text to the left */
}

.category-title:hover {
  background-color: #e6c300; /* Slightly darker yellow on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Deeper shadow on hover */
}

.rules li::before {
  content: '• '; /* Bullet point before each rule */
  color: #3498db; /* Blue color for bullet points */
  font-weight: bold; /* Bold bullet points */
  margin-right: 0.5rem; /* Space after bullet point */
}

/* Adjustments for mobile view */
@media (max-width: 600px) {
  .rules-container {
    margin: 10px;
    padding: 10px;
  }

  .title {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }
}
</style>
