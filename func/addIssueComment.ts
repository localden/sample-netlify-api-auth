import { withSecrets } from "@sgrove/netlify-functions";

export const handler = withSecrets(async (event, { secrets }) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Test"),
    headers: {
      "Content-Type": "application/json",
    },
  };
});