import type { NextApiRequest, NextApiResponse } from 'next';
import { choices } from './data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(choices)
};
