import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../types/index';
import { logout, getUser } from '../services/auth';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    history.push('/login');
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;