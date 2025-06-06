"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FavoriteButton from "@/components/favorite-button"
import { getFavorites, type FavoriteItem } from "@/lib/favorites"
import { Heart, Calendar, User, Search } from "lucide-react"

export default function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  const filteredFavorites = favorites.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleFavoriteUpdate = () => {
    setFavorites(getFavorites())
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHeader
        title="お気に入り"
        subtitle="保存した記事を管理・閲覧できます"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* 検索バー */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="お気に入りの中から検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#066ff2] focus:border-transparent"
            />
          </div>
        </div>

        {/* 統計情報 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
            <Heart className="h-5 w-5 mr-2 fill-current" />
            <span className="font-medium">
              {filteredFavorites.length}件のお気に入り
              {searchTerm && ` (検索結果)`}
            </span>
          </div>
        </div>

        {/* お気に入り一覧 */}
        {filteredFavorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFavorites.map((item) => (
              <Link key={item.id} href={`/board/${item.id}`}>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-pink-100 relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <FavoriteButton item={item} />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-1" />
                      {item.author}
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 leading-tight">{item.title}</h3>

                    <div className="flex items-center text-[#066ff2] font-medium text-sm">
                      詳細を見る
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              {searchTerm ? "検索結果が見つかりませんでした" : "お気に入りがありません"}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm
                ? "検索条件を変更してもう一度お試しください。"
                : "掲示板で気になる記事を見つけて、ハートボタンでお気に入りに追加しましょう。"}
            </p>
            <Link
              href="/board"
              className="bg-[#066ff2] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-block"
            >
              掲示板を見る
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
