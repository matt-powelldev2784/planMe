import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  console.log('session', session)

  if (session) {
    res.send({ content: 'SUCCESS' })
  } else {
    res.send({ error: 'ERROR' })
  }

  const { method } = req
}
