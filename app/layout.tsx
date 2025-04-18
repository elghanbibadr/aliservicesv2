import type { Metadata } from "next";
import {IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const IbmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["400", "700","100","200","300","500"], // Ensure the required font weights are included
  display: "swap",
});
 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IbmPlex.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
