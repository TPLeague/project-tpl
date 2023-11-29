<template>
  <v-container>
    <!-- Stadium Selection -->
    <v-row class="mb-4">
      <v-col cols="12" sm="6">
        <v-select
          :items="countries"
          label="Select Country"
          v-model="selectedCountry"
          @change="updateStadiums"
          outlined
          dense
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn color="primary" @click="generatePitch" :disabled="isLoading">
          Generate Pitch
        </v-btn>
      </v-col>
    </v-row>
    <!-- Generated Pitch Card -->
    <v-row>
      <v-col cols="12">
        <v-card outlined v-if="generatedPitch" class="mb-4">
          <v-card-title>Generated Pitch Conditions</v-card-title>
          <v-card-text>
            <div>Stadium: {{ generatedPitch.stadium }}</div>
            <div>Pitch Type: {{ generatedPitch.pitchType }}</div>
            <div>Cracks: {{ generatedPitch.cracks }}</div>
            <div>Hardness: {{ generatedPitch.hardness }}</div>
            <div>Pitch Day: {{ generatedPitch.pitchDay }}</div>
            <v-btn icon @click="copyToClipboard(generatedPitch)">
              <v-icon color="primary">mdi-content-copy</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- Pitch Log Table -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Previous Pitches</v-card-title>
          <v-data-table
            :headers="tableHeaders"
            :items="logEntries"
            class="elevation-1"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn icon @click="copyToClipboard(item)">
                <v-icon color="primary">mdi-content-copy</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      countries: ['All', 'Australia', 'India', 'England'], // Example country list
      stadiums: [], // Will be populated from an API
      selectedCountry: 'All',
      generatedPitch: null,
      logEntries: [], // Log of generated pitches
      isLoading: false,
      tableHeaders: [
        { text: 'Date/Time', value: 'timestamp' },
        { text: 'Stadium', value: 'stadium' },
        { text: 'Pitch Type', value: 'pitchType' },
        { text: 'Cracks', value: 'cracks' },
        { text: 'Hardness', value: 'hardness' },
        { text: 'Pitch Day', value: 'pitchDay' },
        { text: 'Actions', value: 'actions' },
      ],
    };
  },
  methods: {
    updateStadiums() {
      // Logic to filter stadiums by country
      // If 'All' is selected, reset the filtered stadiums to include all
      if (this.selectedCountry === 'All') {
        this.fetchStadiums();
      } else {
        // Filter stadiums by selected country
        this.stadiums = this.stadiums.filter(
          (stadium) => stadium.country === this.selectedCountry
        );
      }
    },
    async fetchStadiums() {
      // Fetch stadiums from the API
      // Replace with your actual API call
      this.isLoading = true;
      try {
        const response = await axios.get('/api/stadiums');
        this.stadiums = response.data;
      } catch (error) {
        console.error('Error fetching stadiums:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async generatePitch() {
      // Generate pitch based on selected country or all stadiums
      // Replace with your actual logic or API call to generate a pitch
      this.isLoading = true;
      // Example logic:
      this.generatedPitch = {
        // Mocked data; replace with actual data from your API
        stadium: 'Sample Stadium',
        pitchType: 'Grassy',
        cracks: 'None',
        hardness: 'Hard',
        pitchDay: 2,
      };
      this.logEntries.unshift({
        ...this.generatedPitch,
        timestamp: new Date().toISOString(),
      });
      this.isLoading = false;
    },
    copyToClipboard(pitch) {
      const pitchDetails = [
        `Stadium: ${pitch.stadium}`,
        `Pitch Type: ${pitch.pitchType}`,
        `Cracks: ${pitch.cracks}`,
        `Hardness: ${pitch.hardness}`,
        `Pitch Day: ${pitch.pitchDay}`,
      ].join('\n');
      navigator.clipboard.writeText(pitchDetails).then(
        () => {
          // Success feedback
        },
        (err) => {
          // Error feedback
          console.error('Could not copy text: ', err);
        }
      );
    },
  },
  created() {
    this.fetchStadiums();
  },
};
</script>

<style>
/* Add styles for buttons and icons, and adjust as needed */
.v-icon {
  color: #555; /* Example color; adjust as needed */
}
</style>
