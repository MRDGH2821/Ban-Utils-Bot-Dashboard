import { NextApiRequest, NextApiResponse } from 'next';
import { fetchBans } from '../../utils/discordAPI';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { serverId } = req.query;

  if (!serverId) {
    return res.status(400).json({ error: 'Server ID is required' });
  }

  try {
    const bans = await fetchBans(serverId as string);
    return res.status(200).json(bans);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch bans' });
  }
}