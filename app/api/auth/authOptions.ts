import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from '@/prisma/client'
import bcrypt from 'bcrypt'
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(prisma),
  
      providers: [
  
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password", placeholder: "password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
           if(!credentials?.email || !credentials.password)
           {
            return null;
           }
  
           const user = await prisma.user.findUnique({
            where:
            {
              email: credentials.email
            }
           })
  
           if(!user)
           {
            return null;
           }
  
           const passwordMatch = await bcrypt.compare(credentials.password, user.hashpassword!)
          //  we will need to use hashpassword! because since we have put hashpassword  as optional in the user model, we need to use ! to tell typescript that we are sure that it will not be null
  
          return passwordMatch ?  user : null;
          
          }
        }),
  
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          })
        ],
        session:
        {
          strategy: 'jwt',
        }
  };