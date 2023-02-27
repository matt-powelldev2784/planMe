import prisma from 'prisma/db/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const { method } = req
  const user_id = req.query.id

  try {
    if (session && method === 'GET') {
      const email = session?.user?.email

      if (!email) {
        res.status(403).json({ success: false, status: 403, errors: [{ msg: 'User not found' }] })
      }

      if (email && !Array.isArray(user_id)) {
        const clients = await prisma.user.findUnique({
          where: { id: user_id },
          include: { clients: true },
        })

        const clientsList = clients?.clients

        res.status(201).json({
          success: true,
          status: 201,
          data: clientsList,
        })
      }
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
