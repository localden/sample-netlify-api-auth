<template>
  <GitHubView :jsonData="jsonData" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Handler, getSecrets, NetlifySecrets } from "@netlify/functions";
import {Context} from '@nuxt/types';

export default {
      async asyncData(context : Context) {
        try
        {
          window.console.log ('Hello world');
          console.log("DATA!");
          let secrets: NetlifySecrets = {};
          secrets = await getSecrets();
          return {
            jsonData: JSON.stringify(secrets),
          }
        } catch (e) {
          context.error(e) // Show the nuxt error page with the thrown error
        }
      },
    created() {
        window.console.log ('Hello world 2');
        console.log("Created!");
    }
  }
</script>
