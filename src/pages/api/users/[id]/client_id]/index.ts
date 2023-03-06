import prisma from '../../../../../../prisma/db/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    if (method === 'GET') {
      const session = await getServerSession(req, res, authOptions)
      const email = session?.user?.email
      const user_id = req.query.id?.toString()

      if (!email) {
        res.status(403).json({ success: false, status: 403, errors: [{ msg: 'User not found' }] })
      }

      const user = await prisma.user.findUnique({
        where: { id: user_id },
        select: { clients: { where: { id: 'clergxuh70007pg3bin8gc8yy' } } },
      })

      const clientsList = user?.clients

      res.status(201).json({
        success: true,
        status: 201,
        data: clientsList,
      })
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
