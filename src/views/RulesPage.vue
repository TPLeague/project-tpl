<template>
  <div>
    <div class="rules-container">
      <h1 class="title">Playing Rules</h1>
      <div
        class="category"
        v-for="(rules, category) in categorizedRules"
        :key="category"
      >
        <button class="category-title" @click="toggleCategory(category)">
          {{ category }}
        </button>
        <div class="rules" v-show="activeCategories.includes(category)">
          <ul>
            <li v-for="rule in rules" :key="rule">{{ rule }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategories: [],
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
  methods: {
    toggleCategory(category) {
      const index = this.activeCategories.indexOf(category);
      if (index !== -1) {
        this.activeCategories.splice(index, 1);
      } else {
        this.activeCategories.push(category);
      }
    },
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 20px;
  color: #0047ab; /* Electric Blue */
  font-size: 2em;
  font-family: 'Montserrat', sans-serif;
}

.rules-container {
  max-width: 800px;
  margin: auto;
  background-color: #ffffff; /* Galactic White */
}

.v-expansion-panel-header {
  background-color: #0047ab; /* Electric Blue */
  color: #ffffff; /* Galactic White */
}

.v-expansion-panel-content {
  background-color: #ffffff; /* Galactic White */
  color: #000000; /* Space Black */
}

.v-chip {
  margin-bottom: 10px;
  background-color: #7d3c98; /* Neon Purple */
  color: #ffffff; /* Galactic White */
}
</style>
