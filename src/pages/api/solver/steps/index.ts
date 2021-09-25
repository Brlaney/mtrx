import type { NextApiRequest, NextApiResponse } from 'next';
import { steps } from '@/lib/data/solver/steps';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(steps)
};
