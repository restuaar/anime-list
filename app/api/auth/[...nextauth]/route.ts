// pages/api/auth/[...nextauth].ts
import { authOption } from "@/libs/auth-option";
import NextAuth from "next-auth";

const handler = NextAuth(authOption);

export { handler as POST, handler as GET };
