<template>
  <GitHubView :jsonData="jsonData" />
</template>

<script lang="ts">
import { getSecrets, NetlifySecrets } from "@netlify/functions";
import {Context} from '@nuxt/types';

export default {
      async asyncData(context : Context) {
        try
        {
          let secrets: NetlifySecrets = {};
          secrets = await getSecrets();
          if (secrets.gitHub)
          {
            return {
              jsonData: JSON.stringify(secrets.github?.isLoggedIn),
            }
          }
          else
          {
            return {
              jsonData: {error: "No GitHub token available."}
            }
          }
        } catch (e) {
          context.error(e)
        }
      },
    created() {
        console.log("Created!");
    }
  }
</script>
