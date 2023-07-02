```javascript
import React from 'react';
import Login from '../components/Login';
import ServerList from '../components/ServerList';
import { useAuth } from '../utils/discordOAuth';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Login />;
  }

  return <ServerList />;
}
```