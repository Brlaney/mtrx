import type { NextApiRequest, NextApiResponse } from 'next';
import { topics } from '@/lib/data/stiffness/topics';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(topics)
};
