import React from 'react';

const ServerList = ({ servers }) => {
  return (
    <div id="serverList">
      <h2>Your Servers</h2>
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