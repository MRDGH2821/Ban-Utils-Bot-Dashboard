```javascript
import React, { useState, useEffect } from 'react';
import { getDiscordServers } from '../utils/discordAPI';

const ServerSelect = ({ setServerId }) => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    getDiscordServers()
      .then(servers => setServers(servers))
      .catch(err => console.error(err));
  }, []);

  const handleServerSelect = (event) => {
    setServerId(event.target.value);
  };

  return (
    <div>
      <label htmlFor="serverSelect">Select a server:</label>
      <select id="serverSelect" onChange={handleServerSelect}>
        <option value="">--Please choose a server--</option>
        {servers.map(server => (
          <option key={server.id} value={server.id}>{server.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ServerSelect;
```