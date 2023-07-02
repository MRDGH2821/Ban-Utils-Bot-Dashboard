```javascript
import axios from 'axios';

const BASE_URL = 'https://discord.com/api';

export const getUserServers = async (accessToken) => {
  const response = await axios.get(`${BASE_URL}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const getBannedUsers = async (accessToken, serverId) => {
  const response = await axios.get(`${BASE_URL}/guilds/${serverId}/bans`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const banUser = async (accessToken, serverId, userId, reason = '') => {
  await axios.put(
    `${BASE_URL}/guilds/${serverId}/bans/${userId}?delete-message-days=0&reason=${encodeURIComponent(reason)}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const unbanUser = async (accessToken, serverId, userId) => {
  await axios.delete(`${BASE_URL}/guilds/${serverId}/bans/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
```