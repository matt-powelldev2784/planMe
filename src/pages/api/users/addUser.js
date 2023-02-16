import { prisma } from '../../../../server/db/client'

export default async function handler(req, res) {
  const { method } = req

  try {
    if (method === 'POST') {
      // const { email, firstName, lastName, password } = req.body

      // const userExists = await prisma.User.findUnique({
      //   where: {
      //     email,
      //   },
      // })

      // if (userExists) {
      //   return res
      //     .status(400)
      //     .json({ success: false, status: 400, errors: [{ msg: 'User already exists.' }] })
      // }

      // const user = await prisma.User.create({
      //   data: { email, firstName, lastName, password },
      // })

      res.status(201).json({
        success: true,
        status: 201,
        user: 'user',
        // user,
      })
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}
