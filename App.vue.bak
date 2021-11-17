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
  async data () {
   const { getSecrets } = require('@netlify/functions')
   var secrets = {};
   console.log("Inside data!");
   console.log(secrets);
   secrets = await getSecrets();
   return {
     msg: secrets,
   }
 },
 created() {
   console.log(JSON.stringify(process.env));
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
