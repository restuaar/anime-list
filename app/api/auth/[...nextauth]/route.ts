// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

export const authOption = {
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as POST, handler as GET };
