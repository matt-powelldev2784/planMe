import prisma from 'prisma/db/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    if (method === 'POST') {
      const session = await getServerSession(req, res, authOptions)
      const { user_id, name, company_name, add1, add2, post_code, email } = req.body

      if (session) {
        const newClient = await prisma.client.create({
          data: { user_id: user_id, name, company_name, add1, add2, post_code, email },
        })

        res.status(201).json({
          success: true,
          status: 201,
          msg: 'New Client added to database',
          data: newClient,
        })
      }
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
