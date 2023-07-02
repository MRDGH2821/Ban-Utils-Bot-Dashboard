```javascript
import React from 'react';

const LoginButton = ({ onLogin }) => {
  return (
    <button onClick={onLogin}>
      Login with Discord
    </button>
  );
};

export default LoginButton;
```