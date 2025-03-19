import { DefaultSession, DefaultUser } from "next-auth";

// Extend Session to include accessToken
declare module "next-auth" {
  interface Session {
    accessToken?: string; // ✅ Add accessToken to Session
    user: {
      id?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id?: string;
  }
}

// Extend JWT to include accessToken
declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string; // ✅ Add accessToken to JWT
  }
}
