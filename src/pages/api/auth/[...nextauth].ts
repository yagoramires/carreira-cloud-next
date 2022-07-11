import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  // callbacks: {
  //   async signIn({ user }) {
  //     const { email } = user;
  //     await fauna.query(q.Create(q.Collection('users'), { data: { email } }));
  //   },
  // },
});
