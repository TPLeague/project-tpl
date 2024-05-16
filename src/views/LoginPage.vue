<template>
  <div class="flex items-center justify-center min-h-screen bg-space-black p-4">
    <div class="w-full max-w-md form-container">
      <h1 class="form-title">Login to TPL</h1>
      <form @submit.prevent="handleLogin" class="space-y-6 mt-4">
        <div class="input-field">
          <label for="email" class="input-label">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="input-box"
            required
            autofocus
          />
        </div>
        <div class="input-field">
          <label for="password" class="input-label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="input-box"
            required
          />
        </div>
        <button type="submit" class="btn-primary w-full">Login</button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
      <div class="text-center text-galactic-white mt-4">
        <a href="#" class="link-hover">Forgot Password?</a><br />
        New to TPL? <a href="/register" class="link-hover">Sign Up</a>
      </div>
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

const handleLogin = async () => {
  try {
    await axios.post('/api/login', {
      email: email.value,
      password: password.value,
    });
    router.push('/some-success-route');
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed';
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
