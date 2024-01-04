
import { authOption } from "@/libs/auth-option";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOption);

export { handler as POST, handler as GET };
