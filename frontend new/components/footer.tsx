import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import AnimatedSection from "@/components/animated-section"

const Footer = memo(() => {
  const snsLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/gakusei.union",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/channel/UC7XCW-wvswPyR8ey80jR38w?si=6jDXveXquV8Cj86u",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/your-podcast-id",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Link href="/">
                  <Image
                    src="/images/footer-logo.png"
                    alt="UNION"
                    width={120}
                    height={30}
                    className="h-6 sm:h-8 w-auto cursor-pointer"
                    sizes="(max-width: 640px) 100px, 120px"
                  />
                </Link>
              </div>
              <p className="text-gray-400 text-sm mb-4">学生の声を社会に響かせる</p>
              <p className="text-gray-400 text-sm mb-4 break-all">gakusei.union226@gmail.com</p>

              {/* SNSリンク */}
              <div className="flex space-x-4">
                {snsLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">サービス</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="/services#podcast" className="hover:text-white transition-colors">
                    Podcast出演
                  </Link>
                </li>
                <li>
                  <Link href="/services#sns" className="hover:text-white transition-colors">
                    SNS告知
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="hover:text-white transition-colors">
                    Slack参加
                  </Link>
                </li>
                <li>
                  <Link href="/services#consulting" className="hover:text-white transition-colors">
                    リーダー相談
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">ページ</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="hover:text-white transition-colors">
                    Join
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/partner" className="hover:text-white transition-colors">
                    Partner
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">リンク</h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <Link href="/contact" className="block hover:text-white transition-colors">
                  お問い合わせ
                </Link>
                <Link href="/privacy" className="block hover:text-white transition-colors">
                  利用規約
                </Link>
                <Link href="/brand" className="block hover:text-white transition-colors">
                  ブランドガイドライン
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            © 2025 学生団体連合UNION. All rights reserved.
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"

export default Footer
