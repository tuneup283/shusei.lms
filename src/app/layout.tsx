import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "守成クラブ神戸ベイサイド",
  description: "守成クラブに参加される方に向けたオリエンテーションサイトです。コンテンツをご覧いただき守成クラブについての理解を深めた上でご参加ください。",
  keywords: "守成クラブ,神戸ベイサイド,経営者交流会,ビジネスネットワーク,中小企業",
  openGraph: {
    title: "守成クラブ神戸ベイサイド",
    description: "守成クラブに参加される方に向けたオリエンテーションサイトです。コンテンツをご覧いただき守成クラブについての理解を深めた上でご参加ください。",
    type: "website",
    locale: "ja_JP",
    siteName: "守成クラブ神戸ベイサイド",
  },
  twitter: {
    card: "summary_large_image",
    title: "守成クラブ神戸ベイサイド",
    description: "守成クラブに参加される方に向けたオリエンテーションサイトです。コンテンツをご覧いただき守成クラブについての理解を深めた上でご参加ください。",
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
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
        {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
