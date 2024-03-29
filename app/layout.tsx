import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import PopUp from "@/components/PopUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Reellnnovate",
  description:
    " revolutionize the fishing experience by incorporating cutting-edge technology and sustainable practices. The primary focus will be on creating smart and eco-friendly fishing gear to enhance the enjoyment of fishing while preserving the environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopUp />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
