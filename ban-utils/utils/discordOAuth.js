```javascript
import { stringify } from 'querystring';
import fetch from 'node-fetch';

const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

export async function getDiscordAccessToken(code) {
  const params = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    scope: 'identify guilds',
  };

  const res = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: stringify(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error_description);
  }

  return json.access_token;
}

export async function getDiscordUser(accessToken) {
  const res = await fetch('https://discord.com/api/users/@me', {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await res.json();

  if (json.code) {
    throw new Error(json.message);
  }

  return json;
}
```