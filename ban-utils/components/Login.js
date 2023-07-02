```javascript
import React from 'react';
import { useDiscordAuth } from '../utils/discordOAuth';

const Login = () => {
  const { loginWithDiscord, loading, error } = useDiscordAuth();

  const handleLogin = async () => {
    try {
      await loginWithDiscord();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button id="login-button" onClick={handleLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Login with Discord'}
      </button>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Login;
```