"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: "/", label: "Top" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/board", label: "掲示板" },
    { href: "/news", label: "News" },
    { href: "/community", label: "Community" },
    { href: "/join", label: "Join Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴエリア */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#066ff2] to-[#ec4faf] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#066ff2] to-[#ec4faf] bg-clip-text text-transparent">
                UNION
              </span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#066ff2] hover:to-[#ec4faf] hover:bg-clip-text transition-all duration-300 font-medium px-3 py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2"
              aria-label="メニューを開く"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#066ff2] hover:to-[#ec4faf] hover:bg-clip-text transition-all duration-300 font-medium rounded-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 