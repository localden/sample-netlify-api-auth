<template>
  <GitHubView :jsonData="jsonData" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Handler, getSecrets, NetlifySecrets } from "@netlify/functions";

export default {
      async asyncData() {
        if(process.server)
        {
          window.console.log ('Hello world');
          console.log("DATA!");
          let secrets: NetlifySecrets = {};
          secrets = await getSecrets();
          return {
            jsonData: JSON.stringify(process.env.NODE_ENV),
          }
        }
      },
    created() {
        window.console.log ('Hello world 2');
        console.log("Created!");
    }
  }
</script>
