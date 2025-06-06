"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ModernHero from "@/components/modern-hero"
import Carousel from "@/components/carousel"
import { Users, Calendar, MessageSquare, Handshake, Building, Star, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Community() {
  // モック加盟団体データ
  const memberOrganizations = [
    { id: 1, name: "東京大学起業サークルTNK", logo: "/placeholder.svg?height=80&width=80", description: "起業支援" },
    { id: 2, name: "早稲田大学国際交流サークル", logo: "/placeholder.svg?height=80&width=80", description: "国際交流" },
    {
      id: 3,
      name: "慶應義塾大学ボランティア団体",
      logo: "/placeholder.svg?height=80&width=80",
      description: "社会貢献",
    },
    { id: 4, name: "明治大学メディア研究会", logo: "/placeholder.svg?height=80&width=80", description: "メディア制作" },
    { id: 5, name: "立教大学環境保護団体", logo: "/placeholder.svg?height=80&width=80", description: "環境活動" },
    {
      id: 6,
      name: "青山学院大学文化祭実行委員会",
      logo: "/placeholder.svg?height=80&width=80",
      description: "イベント企画",
    },
    { id: 7, name: "上智大学国際協力団体", logo: "/placeholder.svg?height=80&width=80", description: "国際協力" },
    {
      id: 8,
      name: "中央大学プログラミング研究会",
      logo: "/placeholder.svg?height=80&width=80",
      description: "技術研究",
    },
  ]

  // モック提携企業データ
  const partnerCompanies = [
    {
      id: 1,
      name: "株式会社サイバーエージェント",
      logo: "/placeholder.svg?height=80&width=80",
      description: "IT・メディア",
    },
    { id: 2, name: "株式会社メルカリ", logo: "/placeholder.svg?height=80&width=80", description: "EC・フィンテック" },
    { id: 3, name: "株式会社DeNA", logo: "/placeholder.svg?height=80&width=80", description: "ゲーム・IT" },
    {
      id: 4,
      name: "楽天グループ株式会社",
      logo: "/placeholder.svg?height=80&width=80",
      description: "EC・フィンテック",
    },
    { id: 5, name: "株式会社リクルート", logo: "/placeholder.svg?height=80&width=80", description: "人材・メディア" },
    { id: 6, name: "ソフトバンク株式会社", logo: "/placeholder.svg?height=80&width=80", description: "通信・IT" },
  ]

  // ホバー状態を管理
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <ModernHero
        subtitle="UNION Community"
        title="学生団体と企業が集う活気あふれるコミュニティ"
        description="UNIONは全国の学生団体と企業をつなぐプラットフォームです。多様な分野で活動する学生団体と、学生の成長を支援する企業が集まり、共に学び、成長し、社会にポジティブな変化をもたらしています。"
        primaryCTA={{
          text: "コミュニティに参加",
          href: "/join",
        }}
        secondaryCTA={{
          text: "詳細を見る",
          href: "#details",
        }}
      />

      {/* コミュニティ概要 */}
      <section className="py-24" id="details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#066ff2]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">150</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">加盟団体</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-[#ec4faf]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5,000</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">コミュニティメンバー</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-10 w-10 text-[#066ff2]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">提携企業</p>
            </div>
          </div>
        </div>
      </section>

      {/* 参加形態の詳細説明 - 修正版 */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-6">
              Partnership Types
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">3つの参加形態</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              UNIONでは、それぞれの目的に応じた3つの参加形態をご用意しています
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* 加盟団体 */}
            <div className="relative">
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-[#066ff2] h-full"
                onMouseEnter={() => setHoveredCard("member")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#066ff2]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">加盟団体</h3>
                <div className="bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  学生団体向け
                </div>

                {hoveredCard !== "member" && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    学生団体連合の加盟団体として連合サービス提供＋コミュニティサービス提供
                  </p>
                )}

                {/* ホバー時の詳細情報 */}
                {hoveredCard === "member" && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">提供価値</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        学生団体連合の加盟団体として連合サービス提供＋コミュニティサービス提供
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">サービス内容</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">メディア出演機会の提供</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">Slackコミュニティへの参加</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">イベント告知支援</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">1on1カウンセリング</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="text-green-700 dark:text-green-400 text-xs font-medium">💰 費用：無料</p>
                    </div>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSffY_V_buYyNzGK2gg5cWV-0j0s_BMQqIjBi7ZucTdD_l2uEQ/viewform?usp=sf_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#066ff2] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-center block text-sm"
                    >
                      加盟申請する
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* 提携団体/企業 */}
            <div className="relative">
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-[#ec4faf] h-full"
                onMouseEnter={() => setHoveredCard("partner")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Handshake className="h-8 w-8 text-[#ec4faf]" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">提携団体/企業</h3>
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 text-[#ec4faf] dark:text-pink-400 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  学生主体企業・非ビジネス企業向け
                </div>

                {hoveredCard !== "partner" && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    コミュニティサービスの提供、団体とのパートナーシップで今後のコラボレーションをスムーズにする
                  </p>
                )}

                {/* ホバー時の詳細情報 */}
                {hoveredCard === "partner" && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">提供価値</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        コミュニティサービスの提供、団体とのパートナーシップで今後のコラボレーションをスムーズにする
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">サービス内容</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">学生団体とのマッチング</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">コラボプロジェクトの企画支援</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">インターンシップ機会の提供</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">Z世代マーケティング支援</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="text-green-700 dark:text-green-400 text-xs font-medium">💰 費用：無料</p>
                    </div>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdUR_v_l38b0abzhnaEqsA58zRjeS6z72s0SSwb4OWoZouZ6g/viewform?usp=sf_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#ec4faf] text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors duration-300 text-center block text-sm"
                    >
                      提携申請する
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* 協賛企業 */}
            <div className="relative">
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-yellow-500 h-full"
                onMouseEnter={() => setHoveredCard("sponsor")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">協賛企業</h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  ビジネス連携企業向け
                </div>

                {hoveredCard !== "sponsor" && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    UNIONのメディア or コミュニティにおいてシナジーが生まれるところを売り込みに行く
                  </p>
                )}

                {/* ホバー時の詳細情報 */}
                {hoveredCard === "sponsor" && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">提供価値</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        UNIONのメディア or コミュニティにおいてシナジーが生まれるところを売り込みに行く
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">サービス内容</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">ポッドキャスト番組協賛</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">イベントスポンサーシップ</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">SNSでのプロモーション</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">学生向けセミナー開催</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-blue-700 dark:text-blue-400 text-xs font-medium">💰 費用：要相談（有料）</p>
                    </div>

                    <a
                      href="https://union-information.notion.site/1f223f8602bf80d58355c76d2fac2086?pvs=105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors duration-300 text-center block text-sm"
                    >
                      協賛をご検討の企業様へ
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 加盟団体紹介 */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1">
              <Carousel items={memberOrganizations} title="加盟団体" />
            </div>
            <Link
              href="/community/organizations"
              className="ml-8 bg-[#066ff2] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
            >
              一覧を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 提携企業紹介 */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1">
              <Carousel items={partnerCompanies} title="提携企業" />
            </div>
            <Link
              href="/community/partners"
              className="ml-8 bg-[#ec4faf] text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors duration-300 flex items-center"
            >
              一覧を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* コミュニティ活動 */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
              Community Activities
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">コミュニティ活動</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              UNIONコミュニティで行われている様々な活動
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-200 dark:bg-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <Image src="/images/slack-logo.png" alt="Slack" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">学生オンリーSlack</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                学生団体メンバー限定のSlackワークスペースで、日々活発な情報交換や相談が行われています。
              </p>
              <a
                href="https://join.slack.com/t/union-finschool/shared_invite/zt-2s6iy0dj5-ttUUdbA2MrY2XJf~cou81A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#066ff2] hover:text-[#ec4faf] font-medium"
              >
                今すぐSlackに参加
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-200 dark:bg-pink-700 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-[#ec4faf]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">定期ミートアップ</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                月1回開催される定期ミートアップでは、学生団体同士の交流や情報共有、スキルアップセミナーを実施しています。
              </p>
              <Link href="/news" className="inline-flex items-center text-[#066ff2] hover:text-[#ec4faf] font-medium">
                開催情報を見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-200 dark:bg-green-700 rounded-2xl flex items-center justify-center mb-6">
                <Handshake className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">合同イベント</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                複数の学生団体が協力して開催する大規模イベントや、企業とのコラボレーションイベントを企画・運営しています。
              </p>
              <Link href="/news" className="inline-flex items-center text-[#066ff2] hover:text-[#ec4faf] font-medium">
                開催情報を見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 参加方法 */}
      <section className="py-24 bg-gradient-to-br from-[#066ff2] to-[#ec4faf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">コミュニティに参加しませんか？</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            UNIONコミュニティは、学生の挑戦を応援し、共に成長していく仲間を募集しています
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">学生・学生団体の方</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                学生団体として加盟するか、個人としてSlackコミュニティに参加することができます。
                同じ志を持つ仲間と出会い、共に成長していきましょう。
              </p>
              <Link
                href="/join"
                className="bg-white text-[#066ff2] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                今すぐSlackに参加
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">企業・団体の方</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                学生の成長を支援し、次世代のリーダー育成に貢献しませんか？
                様々な形でのパートナーシップをご提案いたします。
              </p>
              <Link
                href="/contact"
                className="bg-white text-[#ec4faf] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                協賛をご検討の企業様へ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
