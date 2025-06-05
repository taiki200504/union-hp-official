import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "学生団体連合UNION",
  description: "学生の声を社会に響かせる",
  keywords: ["学生団体", "UNION", "メディア", "コミュニティ", "リーダーシップ"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
