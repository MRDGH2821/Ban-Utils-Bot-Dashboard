```javascript
import React from 'react';
import { useRouter } from 'next/router';
import { getDiscordRedirectURL } from '../utils/discordOAuth';
import LoginButton from '../components/LoginButton';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const redirectURL = getDiscordRedirectURL();
    window.location.href = redirectURL;
  };

  React.useEffect(() => {
    const code = router.query.code;

    if (code) {
      // TODO: Handle the OAuth code to get the access token and log in the user
    }
  }, [router.query.code]);

  return (
    <div>
      <h1>Login to Ban Utils</h1>
      <LoginButton onClick={handleLogin} />
    </div>
  );
};

export default LoginPage;
```