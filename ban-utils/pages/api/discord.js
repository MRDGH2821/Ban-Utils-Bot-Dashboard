```javascript
import { getSession } from 'next-auth/client';
import { discordOAuth } from '../../utils/discordOAuth';

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const discordData = await discordOAuth(session.accessToken);
    res.status(200).json({ discordData });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
};
```