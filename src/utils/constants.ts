import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        authorization: {
          url: "https://accounts.google.com/o/oauth2/auth",
          params: {
            scope: "openid email profile https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly",
            access_type: "offline",
            prompt: "consent",
            response_type: "code",
          },
        },
        token: "https://oauth2.googleapis.com/token",
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt", // ✅ Ensure JWT is used for sessions
    },
    callbacks: {
      async jwt({ token, account, profile }) {
  

        if (account && profile) {
          token.id = profile.sub;
          token.name = profile.name;
          token.email = profile.email;
          token.accessToken = account.access_token;
        }
  
        return token;
      },
      async session({ session, token }) {
        if (session?.user) {
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
          session.accessToken = token.accessToken;
        }
        return session;
      },
    },
  };