<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-card class="my-4" elevation="2">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Playing Rules</v-toolbar-title>
          </v-toolbar>
          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(rules, category) in categorizedRules"
              :key="category"
            >
              <v-expansion-panel-title>{{ category }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list dense>
                  <v-list-item v-for="rule in rules" :key="rule">
                    <v-list-item-title>{{ rule }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RulesPage',
  data() {
    return {
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
};
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
