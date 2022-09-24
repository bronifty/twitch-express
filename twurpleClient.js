require('dotenv').config();
// const clientId = process.env.TWITCH_CLIENT_ID;
// const clientSecret = process.env.TWITCH_CLIENT_SECRET;
const { ClientCredentialsAuthProvider } = require('@twurple/auth');
const { ApiClient } = require('@twurple/api');

const authProvider = new ClientCredentialsAuthProvider(
  process.env.TWITCH_CLIENT_ID,
  process.env.TWITCH_CLIENT_SECRET
);
const apiClient = new ApiClient({ authProvider });

module.exports = {
  apiClient,
  default: apiClient,
};
