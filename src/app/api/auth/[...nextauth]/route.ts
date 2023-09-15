import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { appAuthenticate, authenticate } from "@/shared/services/auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as any),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
      },
      async authorize(credentials, req) {
        const user = (await authenticate(credentials?.email).catch((err) => {
          console.log("err", err);
        })) as any;

        if (user) {
          return {
            ...user?.user,
            token: user?.token,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ account, user, credentials }) {
      if (account?.type === "credentials") {
        return "/login/credentials-mail";
      } else if (account?.provider === "google") {
        return await appAuthenticate(user?.email)
          .then((user) => {
            return user;
          })
          .catch(() => {
            return `/es/app-signin?email=${user?.email}`;
          });
      } else {
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
