```javascript
import axios from 'axios';

const discordOAuth = async (code) => {
  try {
    const { data } = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI,
      scope: 'identify guilds',
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const userResult = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${data.token_type} ${data.access_token}`,
      },
    });

    const guildsResult = await axios.get('https://discord.com/api/users/@me/guilds', {
      headers: {
        authorization: `${data.token_type} ${data.access_token}`,
      },
    });

    return { user: userResult.data, guilds: guildsResult.data };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default discordOAuth;
```