import React from 'react';

const BanList = ({ bans }) => {
  return (
    <div id="banList">
      <h2>Banned Members</h2>
      <ul>
        {bans.map((ban, index) => (
          <li key={index}>
            <p>{ban.username}</p>
            <p>{ban.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BanList;