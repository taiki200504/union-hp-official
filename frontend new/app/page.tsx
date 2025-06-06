import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ModernHero from "@/components/modern-hero"
import AnimatedSection from "@/components/animated-section"
import { ArrowRight, Play, Mic, Users, MessageSquare, UserCheck, Briefcase, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// ローディングコンポーネント
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#066ff2]"></div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* 改善されたヒーローセクション */}
      <ModernHero
        subtitle="学生団体連合UNION"
        title="学生の声を社会に響かせる"
        description="Slackに参加して全国の学生団体とつながり、コラボ・発信・協賛のチャンスを得よう"
        primaryCTA={{
          text: "Slackに参加する",
          href: "/join",
        }}
        secondaryCTA={{
          text: "詳しく見る",
          href: "/about",
        }}
      />

      {/* 統計カウンターセクション（実績セクション） */}
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedSection>
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">UNIONの実績</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">全国の学生団体と共に築いてきた成果</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#066ff2] mb-2">85</div>
                  <div className="text-gray-600 dark:text-gray-300">加盟団体数</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#ec4faf] mb-2">1,200</div>
                  <div className="text-gray-600 dark:text-gray-300">Slack参加学生</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#066ff2] mb-2">40万</div>
                  <div className="text-gray-600 dark:text-gray-300">番組総再生数</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#ec4faf] mb-2">12</div>
                  <div className="text-gray-600 dark:text-gray-300">協賛企業数</div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </Suspense>

      {/* 6つのサービス紹介セクション */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                Our Services
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">UNIONのサービス</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                学生団体の活動を支援する6つのサービス
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-8 w-8" />,
                title: "Podcast出演",
                description: "ユニラジなどの番組に出演して活動をPR",
                link: "/services#podcast",
                color: "blue",
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "SNS告知",
                description: "イベントや活動をSNSで拡散支援",
                link: "/services#sns",
                color: "pink",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Slack参加",
                description: "全国の学生団体とつながるコミュニティ",
                link: "/join",
                color: "blue",
              },
              {
                icon: <UserCheck className="h-8 w-8" />,
                title: "リーダー相談",
                description: "団体運営の悩みを1on1でサポート",
                link: "/services#consulting",
                color: "green",
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "インターン紹介",
                description: "提携企業のインターンシップ機会を提供",
                link: "/services#internship",
                color: "purple",
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "協賛相談",
                description: "企業との協賛・パートナーシップをサポート",
                link: "/partner",
                color: "orange",
              },
            ].map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.color === "blue"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-[#066ff2]"
                        : service.color === "pink"
                          ? "bg-pink-100 dark:bg-pink-900/30 text-[#ec4faf]"
                          : service.color === "green"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600"
                            : service.color === "purple"
                              ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600"
                              : service.color === "orange"
                                ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-600"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-[#066ff2] dark:text-blue-400 hover:text-[#ec4faf] dark:hover:text-pink-400 font-medium transition-colors duration-200"
                  >
                    詳しく見る
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Usセクション */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                  About UNION
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  UNIONの
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#066ff2] to-[#ec4faf]">
                    目指す未来
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  学生団体連合UNIONは、学生の声を社会に届け、若者の挑戦を支援する組織です。
                  メディア事業とコミュニティ事業を通じて、学生同士の連携を深め、 社会にポジティブな変化をもたらします。
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center bg-gradient-to-r from-[#066ff2] to-[#ec4faf] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  詳しく見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="w-20 h-20 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Play className="h-8 w-8 text-[#066ff2] ml-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mediaセクション */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-[#ec4faf] dark:text-pink-400 text-sm font-medium mb-6 border border-pink-100 dark:border-pink-800">
                Media Business
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">メディア事業</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                学生の声を届けるポッドキャスト番組を配信しています
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ユニラジ",
                description:
                  "ちょっと先をいく先輩、学生団体の活動や思いを双子姉妹のあんりんが対話を通じて発信するUNIONのPodcast番組です。",
                link: "/media?tab=uniradio",
                coverImage: "/images/media/yuniraji-cover.jpg",
                cta: "番組に出たい方はこちら",
              },
              {
                title: "ここみゆの夢ぐらし",
                description: "夢を追いかけるZ世代女子ふたりが、「日常×社会」をテーマにゆるっと語るトーク番組。",
                link: "/media?tab=kokomiyume",
                coverImage: "/images/media/cocomiyu-cover.jpg",
                cta: "番組に出たい方はこちら",
              },
              {
                title: "ジェネポリ",
                description: "17歳の学生たちが政治・社会を語り合うPodcast。政治を身近に感じられる番組。",
                link: "/media?tab=genepoli",
                coverImage: null,
                cta: "番組に出たい方はこちら",
              },
              {
                title: "キャリアみっけ隊",
                description: "「やりたいことがわからない」学生に向けた、キャリア探求Podcast。",
                link: "/media?tab=career",
                coverImage: null,
                cta: "番組に出たい方はこちら",
              },
            ].map((program, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 mx-auto mb-6 rounded-xl overflow-hidden">
                    {program.coverImage ? (
                      <Image
                        src={program.coverImage || "/placeholder.svg"}
                        alt={`${program.title} カバーアート`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-[#066ff2] to-[#ec4faf] rounded-xl"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">{program.description}</p>
                  <Link
                    href={program.link}
                    className="text-[#066ff2] dark:text-blue-400 hover:text-[#ec4faf] dark:hover:text-pink-400 font-medium text-sm inline-flex items-center transition-colors duration-200"
                  >
                    {program.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 最新のお知らせセクション（CMS想定） */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-12">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-4 border border-blue-100 dark:border-blue-800">
                  Latest News
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">最新のお知らせ</h2>
              </div>
              <Link
                href="/news"
                className="text-[#066ff2] dark:text-blue-400 hover:text-[#ec4faf] dark:hover:text-pink-400 font-medium inline-flex items-center transition-colors duration-200"
              >
                すべて見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "新たな加盟団体を迎えました",
                excerpt:
                  "この度、新たに5つの学生団体がUNIONに加盟いたしました。多様な分野で活動する団体が加わり、コミュニティがさらに充実します。",
                date: "2025年1月15日",
                category: "お知らせ",
              },
              {
                id: 2,
                title: "ユニラジ新シーズン開始のお知らせ",
                excerpt:
                  "人気ポッドキャスト番組「ユニラジ」の新シーズンが開始されました。今シーズンも魅力的なゲストをお迎えしてお送りします。",
                date: "2025年1月10日",
                category: "メディア",
              },
              {
                id: 3,
                title: "企業パートナーシップ拡大について",
                excerpt:
                  "UNIONの企業パートナーシップが拡大し、学生により多くの機会を提供できるようになりました。インターンや協賛の機会が増加しています。",
                date: "2025年1月5日",
                category: "パートナーシップ",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.id} animation="fadeInUp" delay={index * 200}>
                <Link href={`/news/${item.id}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30"></div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full font-medium border border-blue-200 dark:border-blue-700">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.date}</span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Slackに参加するCTAブロック */}
      <section className="py-24 bg-gradient-to-br from-[#066ff2] to-[#ec4faf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">今すぐSlackに参加しよう</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              全国1,200名の学生とつながり、コラボ・発信・協賛のチャンスを掴もう
            </p>
            <Link
              href="/join"
              className="inline-flex items-center bg-white text-[#066ff2] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              今すぐSlackに参加
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
