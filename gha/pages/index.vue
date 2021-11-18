<template>
  <GitHubView :jsonData="jsonData" />
</template>

<script lang="ts">
import { getSecrets, NetlifySecrets } from "@netlify/functions";
import { Context } from "@nuxt/types";

export default {
  async asyncData(context: Context) {
    try {
      let secrets: NetlifySecrets = {};
      secrets = await getSecrets();
      if (secrets.gitHub) {
        let contributions = await getContributions(secrets.gitHub?.bearerToken)
        return {
          jsonData: JSON.stringify(contributions.data.viewer.contributionsCollection),
        };
      } else {
        return {
          jsonData: { error: "No GitHub token available." },
        };
      }
    } catch (e) {
      context.error(e);
    }
  },
  created() {
    console.log("Created!");
  },
};

async function getContributions(token: string | null) {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query:
      "query {viewer {contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { contributionCount date }}}}}}",
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  return data;
}
</script>
