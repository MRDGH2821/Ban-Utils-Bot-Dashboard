```javascript
import React, { useEffect, useState } from 'react';
import { getServerBans } from '../utils/getServerBans';

const BanList = ({ serverId }) => {
  const [bans, setBans] = useState([]);

  useEffect(() => {
    if (serverId) {
      getServerBans(serverId)
        .then(bans => setBans(bans))
        .catch(err => console.error(err));
    }
  }, [serverId]);

  return (
    <div>
      <h2>Ban List</h2>
      {bans.length > 0 ? (
        <ul>
          {bans.map((ban, index) => (
            <li key={index}>
              {ban.user.username}#{ban.user.discriminator}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bans found for this server.</p>
      )}
    </div>
  );
};

export default BanList;
```