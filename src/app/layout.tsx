import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "守成クラブ神戸ベイサイド解説ページ",
  description: "経営者のための交流会。中小企業の経営者同士が集まり、ネットワークを形成し、ビジネスチャンスを創出する場です。",
  keywords: "守成クラブ,神戸ベイサイド,経営者交流会,ビジネスネットワーク,中小企業",
  openGraph: {
    title: "守成クラブ神戸ベイサイド解説ページ",
    description: "経営者のための交流会。中小企業の経営者同士が集まり、ネットワークを形成し、ビジネスチャンスを創出する場です。",
    type: "website",
    locale: "ja_JP",
    siteName: "守成クラブ神戸ベイサイド解説ページ",
  },
  twitter: {
    card: "summary_large_image",
    title: "守成クラブ神戸ベイサイド解説ページ",
    description: "経営者のための交流会。中小企業の経営者同士が集まり、ネットワークを形成し、ビジネスチャンスを創出する場です。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
