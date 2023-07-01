import React, { useState } from 'react';
import { copyBans } from '../utils/banUtils';

const BanCopy = ({ sourceServer, targetServer }) => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopyBans = async () => {
    setCopyStatus('Copying...');
    try {
      await copyBans(sourceServer, targetServer);
      setCopyStatus('Copy successful');
    } catch (error) {
      setCopyStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div id="banCopy">
      <h2>Copy Bans</h2>
      <p>Source Server: {sourceServer.name}</p>
      <p>Target Server: {targetServer.name}</p>
      <button onClick={handleCopyBans}>Copy Bans</button>
      <p>{copyStatus}</p>
    </div>
  );
};

export default BanCopy;