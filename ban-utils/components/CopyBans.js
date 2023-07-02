```javascript
import React, { useState } from 'react';
import { copyBans } from '../utils/copyBans';

const CopyBans = ({ sourceServer, targetServer }) => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopyBans = async () => {
    try {
      setCopyStatus('Copying bans...');
      await copyBans(sourceServer, targetServer);
      setCopyStatus('Bans copied successfully!');
    } catch (error) {
      setCopyStatus(`Error copying bans: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Copy Bans</h2>
      <p>Source Server: {sourceServer}</p>
      <p>Target Server: {targetServer}</p>
      <button onClick={handleCopyBans}>Copy Bans</button>
      <p>{copyStatus}</p>
    </div>
  );
};

export default CopyBans;
```