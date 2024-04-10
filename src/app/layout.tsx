import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScriptBootstrap from "@/components/ScriptBootstrap";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rafaellopes.dev",
  description: "rafaellopes.dev website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        <ScriptBootstrap />
        {children}
        <Footer />
      </body>
    </html>
  );
}
