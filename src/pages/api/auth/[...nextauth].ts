import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../../prisma/db/prismadb'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/',
  },
}

export default NextAuth(authOptions)
