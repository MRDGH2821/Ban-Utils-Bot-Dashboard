import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      {user && (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;