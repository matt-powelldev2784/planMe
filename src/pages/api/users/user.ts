import prisma from 'prisma/db/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    if (method === 'GET') {
      const session = await getServerSession(req, res, authOptions)

      if (!session) {
        res
          .status(403)
          .json({ success: false, status: 403, errors: [{ msg: 'No Session. User not logged in' }] })
      }

      if (session) {
        const { user } = session

        res.status(201).json({
          success: true,
          status: 201,
          data: {
            user,
          },
        })
      }
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
