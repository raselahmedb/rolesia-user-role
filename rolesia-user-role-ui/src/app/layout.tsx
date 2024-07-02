import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rolesia User Role Management",
  description: "Rolesia User Role Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
