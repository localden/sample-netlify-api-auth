<template>
  <Analytics :msg="msg"/>
</template>

<script>
import Analytics from './components/Analytics.vue'

export default {
  name: 'App',
  components: {
    Analytics
  },
  data () {
   const { getSecrets } = require('@netlify/functions')
   var secrets = {};
   console.log("Inside data!");
   secrets = await getSecrets();
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
