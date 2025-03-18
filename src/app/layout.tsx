import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/utils/session-provider";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "InterviewBee",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
    <html lang="en" className={inter.className}>
      <body>
        <Provider>

        {children}

        </Provider>

       

     
       
      </body>
    </html>
 
  );
}
