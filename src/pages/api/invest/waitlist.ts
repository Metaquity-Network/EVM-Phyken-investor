import axios from 'axios';
import { NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: any) {
  const baseURL = process.env.BASE_URL || 'https://evm-phyken-middleware-production.up.railway.app/';

  try {
    const response = await axios.post(`${baseURL}waitlist`, req.body, {
      headers: {
        ContentType: 'application/json',
      },
    });
    const data = response.data;
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json(error.response.data);
  }
}
