```javascript
import axios from 'axios';

const getUserServers = async (accessToken) => {
  try {
    const response = await axios.get('https://discord.com/api/users/@me/guilds', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data) {
      return response.data;
    } else {
      throw new Error('Unable to fetch user servers');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getUserServers;
```