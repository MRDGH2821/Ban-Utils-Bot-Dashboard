const axios = require('axios');
const qs = require('querystring');

const discordOAuthConfig = {
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  redirectUri: process.env.DISCORD_REDIRECT_URI,
  scope: 'identify guilds',
};

async function exchangeCodeForAccessToken(code) {
  const data = {
    client_id: discordOAuthConfig.clientId,
    client_secret: discordOAuthConfig.clientSecret,
    grant_type: 'authorization_code',
    redirect_uri: discordOAuthConfig.redirectUri,
    code,
    scope: discordOAuthConfig.scope,
  };

  const response = await axios.post('https://discord.com/api/oauth2/token', qs.stringify(data), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
}

async function getUserInfo(accessToken) {
  const response = await axios.get('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

module.exports = {
  discordOAuthConfig,
  exchangeCodeForAccessToken,
  getUserInfo,
};