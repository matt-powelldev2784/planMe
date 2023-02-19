import prisma from 'prisma/db/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const { method } = req

  try {
    if (session && method === 'GET') {
      const email = session?.user?.email

      if (!email) {
        res.status(403).json({ success: false, status: 403, errors: [{ msg: 'User not found' }] })
      }

      if (email) {
        const clients = await prisma.clients.findMany({
          where: { email_id: email },
        })

        res.status(201).json({
          success: true,
          status: 201,
          data: clients,
        })
      }
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
