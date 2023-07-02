```javascript
import { getSession } from 'next-auth/client';
import { getUserServers } from '../../utils/getUserServers';

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const servers = await getUserServers(session.accessToken);
    return res.status(200).json({ servers });
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page."
    });
  }
};
```