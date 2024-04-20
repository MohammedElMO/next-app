import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters";
 

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton()


if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db


 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db) as Adapter, 
  providers: [],
})

export default db
