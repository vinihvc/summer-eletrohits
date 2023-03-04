import { db } from '@/libs/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    process.env.VERCEL_ENV === 'preview'
      ? CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: {
              label: 'Username',
              type: 'text',
              placeholder: 'vinicius',
            },
            password: { label: 'Password', type: 'password' },
          },
          async authorize() {
            return {
              id: '1',
              name: 'V Vicentini',
              email: 'vinicius@example.com',
              image: 'https://i.pravatar.cc/150?u=vinicius@example.com',
            }
          },
        })
      : GoogleProvider({
          clientId: process.env.GOOGLE_ID || '',
          clientSecret: process.env.GOOGLE_SECRET || '',
        }),
  ],
}

export default NextAuth(authOptions)
