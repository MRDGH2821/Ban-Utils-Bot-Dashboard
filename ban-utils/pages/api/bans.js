```javascript
import { getSession } from 'next-auth/client';
import { getServerBans } from '../../utils/getServerBans';

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const { serverId } = req.query;
    const bans = await getServerBans(serverId, session.user.accessToken);

    if (bans) {
      res.status(200).json(bans);
    } else {
      res.status(500).json({ error: 'Unable to fetch bans' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
```