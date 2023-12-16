<template>
  <div class="min-h-screen bg-space-black p-8 text-galactic-white">
    <div class="container mx-auto space-y-6">
      <div
        class="bg-gradient-to-r from-neon-purple via-electric-blue to-neon-purple p-6 rounded-xl shadow-lg"
      >
        <h2 class="text-3xl font-bold mb-4">Generate Pitch Conditions</h2>
        <div
          v-if="generatedPitch"
          class="p-4 bg-space-black bg-opacity-80 rounded-xl"
        >
          <div class="grid grid-cols-1 gap-4">
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Stadium:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.stadium }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Pitch Type:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.pitchType }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Cracks:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.cracks }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Hardness:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.hardness }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase"
                >Pitch Day:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.pitchDay }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Pitch ID:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.id || 'N/A' }}</span
              >
            </div>
          </div>
          <button
            class="mt-4 bg-cosmic-orange text-galactic-white font-bold py-2 px-4 rounded hover:bg-starlight-yellow transition duration-300"
            @click="copyToClipboard(generatedPitch)"
          >
            Copy Current Pitch
          </button>
        </div>
        <button
          class="mt-4 text-galactic-white font-bold py-2 px-4 rounded bg-electric-blue hover:bg-neon-purple transition duration-300"
          @click="generatePitch"
        >
          Generate New Pitch
        </button>
        <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
      </div>
      <div
        class="bg-gradient-to-r from-neon-purple via-electric-blue to-neon-purple p-6 rounded-xl shadow-lg"
      >
        <h3 class="text-3xl font-bold text-galactic-white mb-4">Pitch Log</h3>
        <div
          class="overflow-x-auto bg-space-black bg-opacity-80 rounded-xl p-4"
        >
          <table class="min-w-full divide-y divide-galactic-white">
            <thead class="bg-space-black">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Stadium
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Pitch Type
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Cracks
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Hardness
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Pitch Day
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Time/Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-space-black divide-y divide-galactic-white">
              <tr v-for="(entry, index) in logEntries" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ entry.stadium }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.pitchType }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ entry.cracks }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.hardness }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.pitchDay }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.timestamp }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button
                    class="bg-cosmic-orange text-white font-bold py-1 px-3 rounded hover:bg-starlight-yellow transition duration-300"
                    @click="copyToClipboard(entry)"
                  >
                    Copy
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PitchRandomizer',
  data() {
    return {
      pitchId: 0,
      generatedPitch: null,
      logEntries: [],
      error: '',
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
        this.pitchId++;
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
      const pitchText = `ID: ${pitch.id}\nStadium: ${pitch.stadium}\nPitch Type: ${pitch.pitchType}\nCracks: ${pitch.cracks}\nHardness: ${pitch.hardness}\nPitch Day: ${pitch.pitchDay}\nTimestamp: ${pitch.timestamp}`;
      navigator.clipboard.writeText(pitchText).catch((err) => {
        this.error = 'Failed to copy pitch conditions: ' + err.message;
      });
    },
  },
};
</script>

<style scoped></style>
