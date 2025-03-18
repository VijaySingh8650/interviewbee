import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/utils/session-provider";



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
 
    <html lang="en">
      <body>
        <Provider>

        {children}

        </Provider>

       

     
       
      </body>
    </html>
 
  );
}
