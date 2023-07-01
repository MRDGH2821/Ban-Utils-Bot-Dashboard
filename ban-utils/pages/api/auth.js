import { NextApiRequest, NextApiResponse } from 'next';
import { discordOAuthConfig } from '../../utils/discordOAuth';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  try {
    const response = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: discordOAuthConfig.clientId,
      client_secret: discordOAuthConfig.clientSecret,
      code: code as string,
      grant_type: 'authorization_code',
      redirect_uri: discordOAuthConfig.redirectUri,
      scope: 'identify guilds',
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, expires_in, refresh_token, scope, token_type } = response.data;

    res.status(200).json({
      accessToken: access_token,
      expiresIn: expires_in,
      refreshToken: refresh_token,
      scope,
      tokenType: token_type,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}