import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Two Truths One Lie",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-to-b from-color1 to-color2 flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
// <main className="h-screen bg-gradient-to-b from-cyan-500 to-blue-500 flex items-center justify-center">
