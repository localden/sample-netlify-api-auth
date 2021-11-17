<template>
  <GitHubView :state="state" />
</template>

<script lang="ts">
import Vue from 'vue'
import GitHubView from "../components/GitHubView.vue"
import { getSecrets, NetlifySecrets } from '@netlify/functions'

export default {
  name: 'App',
  components: {
    GitHubView
  },
  async data () {
   let secrets: NetlifySecrets = {};
   secrets = await getSecrets();

   return {
     state: secrets,
   }
 }
}
</script>
