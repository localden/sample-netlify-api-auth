import { Handler, getSecrets, NetlifySecrets } from "@sgrove/netlify-functions";

const handler: Handler = async (event, context) => {
  let secrets: NetlifySecrets = {};
  secrets = await getSecrets(event);

  return {
    statusCode: 200,
    body: JSON.stringify(secrets),
  };
};

export { handler };
