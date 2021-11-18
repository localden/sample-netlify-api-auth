<template>
  <GitHubView :jsonData="jsonData" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Handler, getSecrets, NetlifySecrets } from "@netlify/functions";

// export default Vue.extend({})
// export default {
//   watch: {
//     repositoryList(newValue) {
//       this.$store.commit("setRespositoryList", newValue)
//     }
//   }
// }

export default {
      async data() {
        let secrets: NetlifySecrets = {};
        secrets = await getSecrets();
        return {
          jsonData: JSON.stringify(secrets),
        }
      },
    created() {
        console.log("Created!")
    }
  }
</script>
