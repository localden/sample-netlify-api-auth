# Sample API Authentication Usage in Netlify Builds

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/localden/sample-netlify-api-auth)

This sample shows how to use the [API Authentication](https://ntl.fyi) feature launched through Netlify Labs in your site builds.

The sample uses [Nuxt.js](https://nuxtjs.org/) to generate a static site that renders the number of GitHub contributions queried through the [GitHub GraphQL API](https://docs.github.com/en/graphql), rendered with [d3.js](https://d3js.org/). No client-side calls are executed, as the data is populated at build time.