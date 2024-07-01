import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodigoCerto",
  description:
    "Somos uma iniciativa dedicada a capacitar novos talentos na área de tecnologia através de projetos práticos e mentoria especializada. Nossa missão é fomentar a inovação e o desenvolvimento digital, criando oportunidades de aprendizado e crescimento para todos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
