"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ModernHero from "@/components/modern-hero"
import {
  Mic,
  Users,
  Bell,
  MessageSquare,
  Briefcase,
  Handshake,
  GraduationCap,
  Building,
  JapaneseYenIcon as Yen,
} from "lucide-react"
import Link from "next/link"

export default function Services() {
  const [activeTab, setActiveTab] = useState<"student" | "corporate">("student")

  const studentServices = [
    {
      icon: <Mic className="h-8 w-8 text-[#066ff2]" />,
      title: "Podcast出演",
      description: "UNIONのポッドキャスト番組に出演し、あなたの活動や思いを発信しませんか？",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeOQutZeoIiVYSASMeWjbkzZFpd4VSzIliJjB2xsIVYAOU8LQ/viewform",
    },
    {
      icon: <Users className="h-8 w-8 text-[#ec4faf]" />,
      title: "学生オンリーSlack",
      description: "学生団体や学生限定のSlackコミュニティに参加して、情報交換や交流を深めましょう。",
      link: "https://join.slack.com/t/union-finschool/shared_invite/zt-2s6iy0dj5-ttUUdbA2MrY2XJf~cou81A",
    },
    {
      icon: <Bell className="h-8 w-8 text-[#066ff2]" />,
      title: "告知依頼",
      description: "イベントやプロジェクトの告知をUNIONのSNSやメディアで発信します。",
      link: "https://forms.gle/9czvypxEcyi7BxS1A",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#ec4faf]" />,
      title: "1on1カウンセリング",
      description: "学生団体の運営や活動に関する相談に、経験豊富なメンバーがアドバイスします。",
      link: "/contact",
    },
  ]

  const corporateServices = [
    {
      icon: <Briefcase className="h-8 w-8 text-[#066ff2]" />,
      title: "協賛相談",
      description: "UNIONのメディアやイベントへの協賛を通じて、Z世代へのリーチを強化します。",
      link: "https://union-information.notion.site/1f223f8602bf80d58355c76d2fac2086?pvs=105",
      pricing: true,
    },
    {
      icon: <Handshake className="h-8 w-8 text-[#ec4faf]" />,
      title: "学生団体との共創プロジェクト",
      description: "学生団体とのコラボレーションプロジェクトをコーディネートします。",
      link: "/contact",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[#066ff2]" />,
      title: "インターン紹介",
      description: "優秀な学生人材とのマッチングをサポートします。",
      link: "/contact",
    },
    {
      icon: <Building className="h-8 w-8 text-[#ec4faf]" />,
      title: "学生団体への相談窓口",
      description: "企業と学生団体をつなぐ窓口として、様々な相談に対応します。",
      link: "/contact",
    },
  ]

  // 料金表データ
  const eventPricing = [
    {
      name: "イベント出展協賛",
      price: "¥30,000〜",
      description:
        "学生向けイベントや交流会などにおいて、企業様のブース出展・資料配布・名刺交換などを可能とする協賛枠。",
      features: ["会場内ブース設置スペースの提供", "企業ロゴの掲載(パンフレットなど)", "学生との直接交流機会の提供"],
    },
    {
      name: "プレゼンテーション・登壇協賛",
      price: "¥50,000〜",
      description: "イベント内での企業紹介プレゼンやパネルディスカッションへの登壇など、登壇機会を提供する協賛枠。",
      features: [
        "5〜10分程度のプレゼン時間(内容応相談)",
        "タイムテーブル・パンフレット・Web上での紹介",
        "質疑応答やトークセッション参加権",
      ],
    },
    {
      name: "SNS投稿協賛",
      price: "¥5,000〜",
      description: "学生団体連合UNIONの公式SNS(Instagram、X (旧Twitter) など)を活用した、企業様に関する投稿枠。",
      features: [
        "企業紹介、商品・サービス紹介投稿(1回)",
        "投稿デザイン・文面は基本的にUNION側で作成(事前確認あり)",
        "投稿後のリーチ・エンゲージメント報告",
      ],
    },
    {
      name: "タイトル協賛",
      price: "¥100,000〜",
      description: "イベントそのものに企業名を冠する形での協賛枠。ブランディングやPR効果が高い協賛形式。",
      features: [
        "イベント名に企業名を冠する(例:「○○株式会社Presents○○フェス」)",
        "各種媒体(チラシ、HP、SNS等)でのロゴ・社名の最上位掲載",
        "主催挨拶時などでの紹介、登壇・出展含む全特典",
      ],
    },
    {
      name: "企業主催",
      price: "¥50,000",
      description: "企業様主催でのイベント開催をサポートいたします。",
      features: ["イベント企画・運営サポート", "学生集客支援", "会場手配サポート"],
    },
  ]

  const snsPricing = [
    { name: "企業告知(フィード投稿)", price: "¥2,000" },
    { name: "企業告知(リール投稿)", price: "¥5,000" },
    { name: "イベント告知(フィード投稿)", price: "¥2,000" },
    { name: "イベント告知(リール投稿)", price: "¥5,000" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <ModernHero subtitle="Our Services" title="サービス" description="UNIONが提供する様々なサービス" />

      {/* タブ切り替え */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab("student")}
              className={`py-4 px-6 text-lg font-medium border-b-2 ${
                activeTab === "student"
                  ? "border-[#066ff2] text-[#066ff2]"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              id="student"
            >
              学生向けサービス
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`py-4 px-6 text-lg font-medium border-b-2 ${
                activeTab === "corporate"
                  ? "border-[#066ff2] text-[#066ff2]"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              id="corporate"
            >
              企業向けサービス
            </button>
          </div>
        </div>
      </div>

      {/* サービス一覧 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "student" ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">学生・学生団体向けサービス</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  UNIONは学生の挑戦を支援するために、様々なサービスを提供しています。
                  メディア出演、コミュニティ参加、イベント告知など、あなたの活動を後押しします。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studentServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                        <a
                          href={service.link}
                          target={service.link.startsWith("http") ? "_blank" : "_self"}
                          rel={service.link.startsWith("http") ? "noopener noreferrer" : ""}
                          className="text-[#066ff2] dark:text-blue-400 hover:text-[#ec4faf] dark:hover:text-pink-400 font-medium"
                        >
                          詳細を見る →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">企業・パートナー向けサービス</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  UNIONは企業と学生をつなぐハブとして、Z世代へのリーチや学生団体とのコラボレーションをサポートします。
                  メディア協賛、共創プロジェクト、インターン紹介など、様々な形で連携が可能です。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {corporateServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {service.title}
                          {service.pricing && <Yen className="inline h-5 w-5 ml-2 text-green-600" />}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                        <a
                          href={service.link}
                          target={service.link.startsWith("http") ? "_blank" : "_self"}
                          rel={service.link.startsWith("http") ? "noopener noreferrer" : ""}
                          className="text-[#066ff2] dark:text-blue-400 hover:text-[#ec4faf] dark:hover:text-pink-400 font-medium"
                        >
                          {service.link.includes("notion") ? "料金表を見る" : "お問い合わせ"} →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 料金表セクション */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">協賛料金表</h3>
                  <p className="text-gray-600 dark:text-gray-300">企業様向けの協賛プランと料金をご案内いたします</p>
                </div>

                {/* イベント協賛 */}
                <div className="mb-12">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">イベント協賛</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {eventPricing.map((plan, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h5>
                          <span className="text-lg font-bold text-[#066ff2] dark:text-blue-400">{plan.price}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{plan.description}</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 bg-[#066ff2] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SNS協賛 */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">SNS協賛</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {snsPricing.map((plan, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 text-center"
                      >
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h5>
                        <span className="text-lg font-bold text-[#ec4faf] dark:text-pink-400">{plan.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 番組協賛 */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-700">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">番組協賛</h4>
                  <p className="text-yellow-700 dark:text-yellow-400 font-medium">現在受付を中止しております</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* メディア事業セクション */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">メディア事業</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">UNIONのメディア事業について詳しく知る</p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg">メディア事業イメージ</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">学生の声を社会に届ける</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  UNIONのメディア事業では、ポッドキャスト番組やYouTube、SNSなどを通じて、
                  学生の声や活動を社会に広く発信しています。学生団体の広報支援も行っており、
                  より多くの人に学生の挑戦を知ってもらうためのプラットフォームを提供しています。
                </p>
                <Link
                  href="/media"
                  className="bg-gradient-to-r from-[#066ff2] to-[#ec4faf] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 inline-block"
                >
                  メディア事業の詳細
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
