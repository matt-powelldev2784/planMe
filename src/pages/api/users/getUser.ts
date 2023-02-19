import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const { method } = req

  try {
    if (session && method === 'GET') {
      const { user } = session
      res.status(201).json({
        success: true,
        status: 201,
        data: user,
      })
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
