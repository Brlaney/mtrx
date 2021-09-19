import type { NextApiRequest, NextApiResponse } from 'next';
import { topics } from '@/lib/data/matrix/learn/topics';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(topics)
};
