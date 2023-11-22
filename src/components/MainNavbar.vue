<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.jpeg" alt="Platform Logo" class="nav-logo" />
    </div>
    <ul class="nav-links">
      <router-link to="/" exact>
        <template #default="{ navigate }">
          <li class="nav-button" @click="navigate">Home</li>
        </template>
      </router-link>
      <router-link to="/rules">
        <template #default="{ navigate }">
          <li class="nav-button" @click="navigate">Rules</li>
        </template>
      </router-link>
      <router-link to="/teams">
        <template #default="{ navigate }">
          <li class="nav-button" @click="navigate">Teams</li>
        </template>
      </router-link>
      <router-link to="/schedule">
        <template #default="{ navigate }">
          <li class="nav-button" @click="navigate">Schedule</li>
        </template>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar',
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 10px 20px;
}
.nav-logo {
  height: 50px;
  width: auto;
}
.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
.nav-links li {
  margin-left: 20px;
}
.nav-button {
  background-color: #ffd700;
  color: #000000;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  transition: background-color 0.3s;
}
.nav-button:hover {
  background-color: #e6c300;
}
.nav-active > .nav-button {
  color: #ffffff;
  background-color: #f56a00;
}
</style>
