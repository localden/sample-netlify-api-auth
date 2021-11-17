<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Analytics msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Analytics from './components/Analytics.vue'

export default {
  name: 'App',
  components: {
    Analytics
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
