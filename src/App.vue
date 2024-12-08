<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <router-view />
  <button @click="goBack">Go Back</button>
  <button @click="goForward">Go Forward</button>
  <button @click="redirect">Redirect</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
    redirect() {
      // auth system code
      // open account
      // redirect
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  border-radius: 15px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  background-color: crimson;
  color: white;
  padding: 15px;
}
</style>
