import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomHeader from "@/component/base/header";
import CustomFooter from "@/component/base/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ひーサイト",
  description: "情報系学生が作成したポートフォリオサイトです。",
  openGraph: {
    title: "ひーサイト",
    description: "情報系学生が作成したポートフォリオサイトです。",
    url: "https://hii-site.vercel.app/",
    images: [
      {
        url: "https://hii-site.vercel.app/opgimg.png",
        width: 800,
        height: 600,
        alt: "ひーサイトイメージ画像",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@aputech2024",
    title: "ひーサイト",
    description: "情報系学生が作成したポートフォリオサイトです。",
    images: "https://hii-site.vercel.app/opgimg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className=" fixed z-50">
          <CustomHeader></CustomHeader>
        </div>
        {children}
        <div className=" mt-60">
          <CustomFooter></CustomFooter>
        </div>
      </body>
    </html>
  );
}
