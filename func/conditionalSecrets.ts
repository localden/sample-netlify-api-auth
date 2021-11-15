import { getSecrets, NetlifySecrets } from "@sgrove/netlify-functions";
import { formatSecret } from "../src/lib";

export const handler = async (event) => {
  const skipSecrets = event.queryStringParameters.skipSecrets === "true";

  let secrets: NetlifySecrets = {};

  if (!skipSecrets) {
    secrets = await getSecrets();

    // Sanitize the secrets before showing them to the user
    secrets = {
      gitHub: formatSecret(secrets.gitHub),
      salesforce: formatSecret(secrets.salesforce),
      spotify: formatSecret(secrets.spotify),
      stripe: formatSecret(secrets.stripe),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(secrets),
    headers: {
      "Content-Type": "application/json",
    },
  };
};