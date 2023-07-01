import { NextApiRequest, NextApiResponse } from 'next';
import { fetchServers } from '../../utils/discordAPI';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  try {
    const servers = await fetchServers(token);
    res.status(200).json({ servers });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch servers' });
  }
}