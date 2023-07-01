import React from 'react';
import { useRouter } from 'next/router';
import { login } from '../utils/discordOAuth';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login();
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Ban Utils</h1>
      <p>Please login with your Discord account to continue.</p>
      <button id="loginButton" onClick={handleLogin}>
        Login with Discord
      </button>
    </div>
  );
}