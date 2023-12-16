<template>
  <div class="register-page-container">
    <h1 class="register-header">Create Your Account</h1>
    <form class="register-form">
      <input
        type="email"
        class="register-input"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="password"
        class="register-input"
        placeholder="Password"
        v-model="password"
      />
      <button type="submit" class="register-button">Sign Up</button>
      <p v-if="error" class="register-error">{{ error }}</p>
    </form>
    <p class="register-footer">
      Already have an account?
      <a href="/login" class="register-link">Login here</a>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async handleRegistration() {
      try {
        await axios.post('/api/register', {
          email: this.email,
          password: this.password,
        });
        this.$router.push('/login');
      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      }
    },
    async socialLogin(provider) {
      // Logic for social login
      window.location.href = `/api/auth/${provider}`;
    },
  },
};
</script>

<!-- Scoped styles are removed to leverage global.css -->
