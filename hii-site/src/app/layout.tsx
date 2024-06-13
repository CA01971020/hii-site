import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomHeader from "@/component/base/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ひーサイト",
  description: "情報系学生が作成したポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <CustomHeader></CustomHeader>
        {children}
      </body>
    </html>
  );
}
