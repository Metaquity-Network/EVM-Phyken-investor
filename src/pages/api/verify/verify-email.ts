import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseURL = process.env.BASE_URL || 'https://evm-phyken-middleware-production.up.railway.app';
  const { hash } = req.query;

  if (!hash) {
    return res.status(400).json({ error: 'Hash parameter is required' });
  }

  try {
    const response = await axios.get(`${baseURL}/waitlist/verify`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        hash,
      },
    });

    const data = response.data;
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
