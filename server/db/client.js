import { PrismaClient } from '@prisma/client'

export const prisma =
  global.prisma ||
  new PrismaClient({
    //log: ['query'], //logs prisma query to terminal
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
