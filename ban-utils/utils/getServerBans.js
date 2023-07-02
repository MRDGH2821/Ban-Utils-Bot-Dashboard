```javascript
import axios from 'axios';

const getServerBans = async (serverId, token) => {
  try {
    const response = await axios.get(`https://discord.com/api/guilds/${serverId}/bans`, {
      headers: {
        'Authorization': `Bot ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching bans for server ${serverId}: ${error}`);
    return null;
  }
};

export default getServerBans;
```