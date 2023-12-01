<template>
  <v-container class="pitch-randomizer">
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="title">Generate Pitch Conditions</v-card-title>
          <v-card-text v-if="generatedPitch">
            <div><strong>Stadium:</strong> {{ generatedPitch.stadium }}</div>
            <div>
              <strong>Pitch Type:</strong> {{ generatedPitch.pitchType }}
            </div>
            <div><strong>Cracks:</strong> {{ generatedPitch.cracks }}</div>
            <div><strong>Hardness:</strong> {{ generatedPitch.hardness }}</div>
            <div><strong>Pitch Day:</strong> {{ generatedPitch.pitchDay }}</div>
            <div><strong>Pitch ID:</strong> {{ generatedPitch.id }}</div>
            <v-btn
              small
              color="secondary"
              @click="copyToClipboard(generatedPitch)"
              >Copy Current Pitch</v-btn
            >
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn class="generate-btn" color="primary" @click="generatePitch"
              >Generate New Pitch</v-btn
            >
          </v-card-actions>
        </v-card>
        <v-alert type="error" v-if="error">{{ error }}</v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="title">Pitch Log</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="logEntries"
              :items-per-page="5"
              class="elevation-1"
              hide-default-footer
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn small color="secondary" @click="copyToClipboard(item)"
                  >Copy</v-btn
                >
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PitchRandomizer',
  data() {
    return {
      generatedPitch: null,
      logEntries: [],
      error: '',
      headers: [
        { text: 'ID', align: 'start', sortable: false, value: 'id' },
        { text: 'Stadium', value: 'stadium' },
        { text: 'Pitch Type', value: 'pitchType' },
        { text: 'Cracks', value: 'cracks' },
        { text: 'Hardness', value: 'hardness' },
        { text: 'Pitch Day', value: 'pitchDay' },
        { text: 'Timestamp', value: 'timestamp' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    };
  },
  methods: {
    async generatePitch() {
      try {
        this.error = '';
        const response = await axios.get(
          'http://localhost:3000/api/pitch-randomizer'
        );
        const pitchData = {
          ...response.data,
          timestamp: new Date().toLocaleString(),
        };
        this.generatedPitch = pitchData;
        this.logEntries.unshift(pitchData);
      } catch (err) {
        this.error = `Failed to load pitch data: ${
          err.message || 'Server error'
        }`;
      }
    },
    copyToClipboard(pitch) {
      if (!pitch) {
        this.error = 'No pitch data available to copy.';
        return;
      }
      const pitchText = `Stadium: ${pitch.stadium}\nPitch Type: ${pitch.pitchType}\nCracks: ${pitch.cracks}\nHardness: ${pitch.hardness}\nPitch Day: ${pitch.pitchDay}\nTimestamp: ${pitch.timestamp}`;
      navigator.clipboard
        .writeText(pitchText)
        .then(() => {
          // Handle successful copy
        })
        .catch((err) => {
          this.error = 'Failed to copy pitch conditions: ' + err.message;
        });
    },
  },
};
</script>

<style scoped>
.pitch-randomizer {
  max-width: 100%;
  overflow-x: auto;
}

/* Card styling */
.pitch-randomizer .v-card {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Title styling */
.pitch-randomizer .title {
  color: #2952c3;
  font-weight: bold;
}

/* Button styling */
.pitch-randomizer .v-btn {
  color: white;
  margin-top: 10px;
}

/* Generate button specific styling */
.pitch-randomizer .generate-btn {
  background-color: #4caf50;
}

/* Copy button styling */
.pitch-randomizer .v-btn.secondary {
  background-color: #ffc107;
}

/* Table styling */
.pitch-randomizer .v-data-table {
  background-color: #f5f5f5;
  border-radius: 8px;
}

.pitch-randomizer .v-data-table th {
  color: #2952c3;
  font-weight: bold;
}

.pitch-randomizer .v-data-table .v-icon {
  color: #ffd700;
}

/* Alert styling */
.pitch-randomizer .v-alert {
  margin-top: 20px;
}

/* Centered actions */
.pitch-randomizer .v-card-actions {
  justify-content: center;
}

@media (max-width: 600px) {
  .pitch-randomizer .v-card {
    margin-top: 10px;
  }
}

/* Table header styling */
.pitch-randomizer .v-data-table-header {
  background-color: #e9e9e9; /* Light grey background for headers */
  color: #333; /* Dark text for readability */
  font-weight: bold;
}

/* Centered button styling */
.pitch-randomizer .v-btn {
  margin: auto;
  display: block;
}

/* Table cell styling */
.pitch-randomizer .v-data-table .cell {
  text-align: center; /* Center align text in cells */
}
</style>
