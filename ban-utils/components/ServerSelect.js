import React, { useState } from 'react';

const ServerSelect = ({ servers, onSelect }) => {
  const [selectedServer, setSelectedServer] = useState(null);

  const handleSelect = (server) => {
    setSelectedServer(server);
    onSelect(server);
  };

  return (
    <div id="serverSelect">
      <h2>Select a Server</h2>
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="">--Select a server--</option>
        {servers.map((server) => (
          <option key={server.id} value={server.id}>
            {server.name}
          </option>
        ))}
      </select>
      {selectedServer && <p>Selected Server: {selectedServer}</p>}
    </div>
  );
};

export default ServerSelect;