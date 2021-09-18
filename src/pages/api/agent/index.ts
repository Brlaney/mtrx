import type { NextApiRequest, NextApiResponse } from 'next';
import uaString from './getUserAgent';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(uaString);
  const data = { check: uaString };

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.statusCode = 200
  res.end(JSON.stringify({ message: 'success', data }))

  // res.status(200).json(isMobile)
};
