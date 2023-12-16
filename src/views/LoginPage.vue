<template>
  <div class="min-h-screen flex items-center justify-center bg-space-black">
    <div class="w-full max-w-xs">
      <form
        @submit.prevent="login"
        class="bg-space-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-galactic-white text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            v-model="email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-galactic-white text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="password"
            required
          />
          <p v-if="error" class="text-red-500 text-xs italic">{{ error }}</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-electric-blue hover:bg-neon-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-starlight-yellow hover:text-cosmic-orange"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');

const router = useRouter();

const login = async () => {
  try {
    await axios.post('/api/login', {
      email: email.value,
      password: password.value,
    });
    router.push('/');
  } catch (e) {
    error.value = e.response?.data?.message || e.message;
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
