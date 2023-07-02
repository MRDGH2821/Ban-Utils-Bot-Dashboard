```javascript
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getDiscordUserServers } from '../utils/discordAPI';
import ServerList from '../components/ServerList';
import ServerSelect from '../components/ServerSelect';
import BanCopy from '../components/BanCopy';

const Dashboard = () => {
  const router = useRouter();
  const [servers, setServers] = useState([]);
  const [selectedServer, setSelectedServer] = useState(null);
  const [targetServer, setTargetServer] = useState(null);

  useEffect(() => {
    const fetchServers = async () => {
      const servers = await getDiscordUserServers();
      setServers(servers);
    };

    fetchServers();
  }, []);

  const handleServerSelect = (server) => {
    setSelectedServer(server);
  };

  const handleTargetServerSelect = (server) => {
    setTargetServer(server);
  };

  const handleLogout = () => {
    localStorage.removeItem('discordToken');
    router.push('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <ServerList servers={servers} onServerSelect={handleServerSelect} />
      {selectedServer && (
        <ServerSelect
          servers={servers}
          selectedServer={selectedServer}
          onTargetServerSelect={handleTargetServerSelect}
        />
      )}
      {targetServer && <BanCopy sourceServer={selectedServer} targetServer={targetServer} />}
    </div>
  );
};

export default Dashboard;
```