```javascript
import axios from 'axios';

const copyBans = async (sourceServerId, targetServerId, token) => {
  try {
    const sourceBans = await axios.get(`/api/bans?serverId=${sourceServerId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const copyPromises = sourceBans.data.map(ban => {
      return axios.post(`/api/bans`, {
        serverId: targetServerId,
        userId: ban.user.id,
        reason: ban.reason
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    });

    await Promise.all(copyPromises);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};

export default copyBans;
```