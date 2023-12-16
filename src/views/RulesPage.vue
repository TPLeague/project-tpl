<template>
  <div class="min-h-screen bg-space-black p-8">
    <div class="container mx-auto">
      <div
        class="bg-gradient-to-r from-neon-purple to-electric-blue p-4 rounded-lg shadow-xl"
      >
        <h2 class="text-4xl text-galactic-white font-bold mb-4">
          Playing Rules
        </h2>
        <div
          v-for="(rules, category) in categorizedRules"
          :key="category"
          class="mb-4 p-4 bg-space-black bg-opacity-80 rounded-lg"
        >
          <h3 class="text-2xl text-starlight-yellow font-semibold mb-2">
            {{ category }}
          </h3>
          <ul>
            <li
              v-for="rule in rules"
              :key="rule"
              class="text-galactic-white text-lg mb-1"
            >
              {{ rule }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const categorizedRules = ref({
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
});
</script>

<style scoped>
.v-toolbar {
  border-radius: 4px 4px 0 0;
}

.v-expansion-panel-header {
  font-size: 1.1rem;
  font-weight: bold;
}

.v-expansion-panel-content {
  font-size: 0.95rem;
  background-color: var(--light-background);
}

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

/* Custom colors to match the theme */
.primary {
  background-color: var(--electric-blue);
}

/* Global style overrides */
:root {
  --electric-blue: #0047ab;
  --light-background: #f5f5f5;
}
</style>
