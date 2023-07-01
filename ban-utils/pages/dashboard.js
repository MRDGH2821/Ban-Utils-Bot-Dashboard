import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServerList from '../components/ServerList';
import ServerSelect from '../components/ServerSelect';
import BanCopy from '../components/BanCopy';
import { fetchServers } from '../utils/discordAPI';

const Dashboard = () => {
  const router = useRouter();
  const [servers, setServers] = useState([]);
  const [selectedServer, setSelectedServer] = useState(null);
  const [targetServer, setTargetServer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchServers();
      setServers(result);
    };

    fetchData();
  }, []);

  const handleServerSelect = (server) => {
    setSelectedServer(server);
  };

  const handleTargetSelect = (server) => {
    setTargetServer(server);
  };

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div>
      <Header onLogout={handleLogout} />
      <ServerList servers={servers} onServerSelect={handleServerSelect} />
      {selectedServer && (
        <ServerSelect servers={servers} onServerSelect={handleTargetSelect} />
      )}
      {selectedServer && targetServer && (
        <BanCopy sourceServer={selectedServer} targetServer={targetServer} />
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;