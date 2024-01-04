import { NextAuthOptions } from "next-auth";
import githubAuth from "next-auth/providers/github";

export const authOption: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
