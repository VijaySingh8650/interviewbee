import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest, NextResponse } from "next/server";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.sub;
        token.name = profile.name;
        token.email = profile.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export async function GET(req: NextRequest) {
  return handler(req) as Promise<NextResponse>;
}

export async function POST(req: NextRequest) {
  return handler(req) as Promise<NextResponse>;
}
