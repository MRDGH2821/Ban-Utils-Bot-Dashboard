import React from 'react';
import { useRouter } from 'next/router';
import LoginButton from '../components/LoginButton';

const HomePage = () => {
  const router = useRouter();

  const checkLogin = async () => {
    const token = localStorage.getItem('discord_token');
    if (token) {
      router.push('/dashboard');
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      <h1>Welcome to Ban Utils</h1>
      <LoginButton />
    </div>
  );
};

export default HomePage;