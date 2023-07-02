```javascript
import React, { useState } from 'react';
import { copyBans } from '../utils/discordAPI';

const BanCopy = ({ sourceServer, targetServer, userToken }) => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleBanCopy = async () => {
    setCopyStatus('Copying bans...');
    try {
      await copyBans(sourceServer, targetServer, userToken);
      setCopyStatus('Bans copied successfully!');
    } catch (error) {
      setCopyStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Copy Bans</h2>
      <p>Source Server: {sourceServer}</p>
      <p>Target Server: {targetServer}</p>
      <button onClick={handleBanCopy}>Copy Bans</button>
      <p>{copyStatus}</p>
    </div>
  );
};

export default BanCopy;
```