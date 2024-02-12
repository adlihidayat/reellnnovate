import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Contact - Reellnnovate",
  description:
    " revolutionize the fishing experience by incorporating cutting-edge technology and sustainable practices. The primary focus will be on creating smart and eco-friendly fishing gear to enhance the enjoyment of fishing while preserving the environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
