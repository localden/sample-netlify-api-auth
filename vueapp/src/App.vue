<template>
  <Analytics :msg="msg"/>
</template>

<script>
import Analytics from './components/Analytics.vue'
import getSecrets from "@netlify/functions";


export default {
  name: 'App',
  components: {
    Analytics
  },
  data () {
   var secrets = {};
   console.log("Inside data!");
   secrets = getSecrets();
   return {
     msg: secrets,
   }
 },
 created() {
   console.log("Hello!");
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
