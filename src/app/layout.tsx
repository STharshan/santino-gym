import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";  // Import the Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santino's Gym & Studio - Your Fitness Your Victory",
  description: "Ready to change your physique, but can’t find your gym?",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Metadata and favicon */}
        <meta name="description" content="Ready to change your physique, but can’t find your gym?" />
        <title>Santino's Gym & Studio - Your Fitness Your Victory</title>
        <link rel="icon" href="/favicon.png" /> {/* Ensure the favicon is correctly placed in public folder */}
      </Head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
