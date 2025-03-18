"use client"; // Add this at the top

import { SessionProvider } from "next-auth/react";

import { Session } from "next-auth";
import { ReduxProvider } from "./redux-provider";

type TypeOfPageProps = Readonly<{
    children: React.ReactNode;
    session?: Session;
}>;

export default function Provider({ children, session }: TypeOfPageProps) {
  
  return <SessionProvider session={session}>
    
    <ReduxProvider>
     
     {children}

    </ReduxProvider>
    
  </SessionProvider>;
  
}