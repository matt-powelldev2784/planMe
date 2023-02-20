import prisma from 'prisma/db/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const { method } = req
  const email = session?.user?.email

  try {
    if (email && method === 'GET') {
      const { user } = session

      const user_id = await prisma.user.findUnique({
        where: { email },
        select: { id: true },
      })

      res.status(201).json({
        success: true,
        status: 201,
        data: {
          user,
          user_id,
        },
      })
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
