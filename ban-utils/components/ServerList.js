```javascript
import React, { useEffect, useState } from 'react';
import { getUserServers } from '../utils/getUserServers';

const ServerList = ({ token }) => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      const serverList = await getUserServers(token);
      setServers(serverList);
    };

    fetchServers();
  }, [token]);

  return (
    <div>
      <h2>Your Discord Servers</h2>
      <ul>
        {servers.map((server) => (
          <li key={server.id}>
            <img src={server.icon} alt={server.name} />
            <span>{server.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
```