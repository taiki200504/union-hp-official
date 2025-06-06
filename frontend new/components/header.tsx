"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/components/theme-provider"
import { throttle } from "@/lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  // スクロール処理をスロットルで最適化
  const handleScroll = useCallback(
    throttle(() => {
      setIsScrolled(window.scrollY > 10)
    }, 100),
    [],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // メニューを閉じる関数
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [])

  // ESCキーでメニューを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen, closeMenu])

  const navigationLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      {
        href: "/services",
        label: "Services",
        hasDropdown: true,
        dropdownItems: [
          { href: "/services#student", label: "学生向けサービス" },
          { href: "/services#corporate", label: "企業向けサービス" },
          { href: "/services/community", label: "コミュニティ事業" },
          { href: "/media", label: "メディア事業" },
        ],
      },
      { href: "/board", label: "掲示板" },
      { href: "/news", label: "News" },
      { href: "/community", label: "Community" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  )

  // ダークモードかどうかを判定
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* ロゴエリア */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" onClick={closeMenu}>
                <Image
                  src={isDarkMode ? "/images/logo-for-dark.png" : "/images/header-logo.png"}
                  alt="UNION 学生団体連合"
                  width={180}
                  height={36}
                  className="h-7 sm:h-9 w-auto"
                  priority
                  sizes="(max-width: 640px) 140px, 180px"
                />
              </Link>
            </div>

            {/* デスクトップナビゲーション */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#066ff2] dark:hover:text-[#066ff2] transition-colors duration-200 font-medium px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm xl:text-base">
                        {link.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-[#066ff2] dark:hover:text-[#066ff2] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-[#066ff2] dark:hover:text-[#066ff2] transition-colors duration-200 font-medium px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm xl:text-base"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* 右側のアクション */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <ThemeToggle />

              {/* デスクトップCTAボタン */}
              <div className="hidden lg:block">
                <Link
                  href="/join"
                  className="bg-gradient-to-r from-[#066ff2] to-[#ec4faf] text-white px-4 xl:px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 shadow-sm text-sm xl:text-base"
                >
                  Join Us
                </Link>
              </div>

              {/* ハンバーガーメニューボタン */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイル・タブレットメニューオーバーレイ */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* モバイル・タブレットメニュー */}
      <div
        className={`fixed top-16 sm:top-20 left-0 right-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navigationLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[#066ff2] dark:hover:text-[#066ff2] transition-colors duration-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-base sm:text-lg"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 space-y-1 border-l-2 border-gray-100 dark:border-gray-700 pl-4 mt-2">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#066ff2] dark:hover:text-[#066ff2] transition-colors duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/join"
                className="block bg-gradient-to-r from-[#066ff2] to-[#ec4faf] text-white px-4 py-3 rounded-lg font-medium text-center shadow-sm text-base sm:text-lg"
                onClick={closeMenu}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
