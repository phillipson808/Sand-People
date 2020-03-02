import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: "sandpeople.myshopify.com",
  storefrontAccessToken: "36a908b298bc3054a3b965f3030af92e",
})

export default client;