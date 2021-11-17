<template>
  <Analytics msg="Experimental GitHub Analytics View"/>
</template>

<script>
import Analytics from './components/Analytics.vue'
import { Handler, getSecrets, NetlifySecrets } from "@netlify/functions";


export default {
  name: 'App',
  components: {
    Analytics
  },
  data () {
    var secrets = {};
    secrets = await getSecrets();
    return {
      msg: secrets,
    }
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
