import { authOptions } from "@/utils/constants";
import NextAuth from "next-auth";



// ✅ Fix: Export both GET and POST methods
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
