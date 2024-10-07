import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belíssima Cosméticos",
  description: "A Potência do Pará na Beleza Capilar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
