import type { NextApiRequest, NextApiResponse } from 'next'
import { locationData } from './data'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(locationData)
}
