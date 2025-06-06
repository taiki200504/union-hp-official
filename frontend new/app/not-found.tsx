"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-[#066ff2]" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">ページが見つかりません</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              お探しのページは存在しないか、移動または削除された可能性があります。
              URLをご確認いただくか、以下のリンクからお探しください。
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="w-full bg-[#066ff2] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              ホームに戻る
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-[#066ff2] dark:hover:border-[#066ff2] hover:text-[#066ff2] dark:hover:text-[#066ff2] transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              前のページに戻る
            </button>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              お探しのコンテンツはこちらかもしれません
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <Link
                href="/news"
                className="text-[#066ff2] hover:text-[#ec4faf] font-medium transition-colors duration-300"
              >
                ニュース・お知らせ
              </Link>
              <Link
                href="/community"
                className="text-[#066ff2] hover:text-[#ec4faf] font-medium transition-colors duration-300"
              >
                コミュニティ
              </Link>
              <Link
                href="/board"
                className="text-[#066ff2] hover:text-[#ec4faf] font-medium transition-colors duration-300"
              >
                掲示板
              </Link>
              <Link
                href="/media"
                className="text-[#066ff2] hover:text-[#ec4faf] font-medium transition-colors duration-300"
              >
                メディア
              </Link>
              <Link
                href="/about"
                className="text-[#066ff2] hover:text-[#ec4faf] font-medium transition-colors duration-300"
              >
                UNIONについて
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
