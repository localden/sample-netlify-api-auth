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
        let contributionArray = contributions.data.viewer.contributionsCollection.contributionCalendar.weeks;

        let flatContributions = flattenContributions(contributionArray);

        return {
          jsonData: JSON.stringify(flatContributions),
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

function flattenContributions(contributions : any) {
  let flatContributions: string[] = [];

  for (let item of contributions) {
    for (let contributionItem of item.contributionDays) {
        flatContributions.push(contributionItem);
    }
  }

  return flatContributions;
}

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
