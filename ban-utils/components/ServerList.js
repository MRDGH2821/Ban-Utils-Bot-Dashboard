```javascript
import React from 'react';

const ServerList = ({ servers, onSelect }) => {
  return (
    <div>
      <h2>Select a Server</h2>
      <ul>
        {servers.map((server, index) => (
          <li key={index} onClick={() => onSelect(server)}>
            {server.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerList;
```