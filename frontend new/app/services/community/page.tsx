import Header from "@/components/header"
import Footer from "@/components/footer"
import ModernHero from "@/components/modern-hero"
import AnimatedSection from "@/components/animated-section"
import { Users, MessageSquare, Calendar, Handshake, Target, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CommunityService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <ModernHero
        subtitle="Community Service"
        title="コミュニティ事業"
        description="UNIONのコミュニティ事業は、学生団体同士の連携を深め、共に成長し合う環境を提供します。Slackコミュニティ、定期ミートアップ、合同イベントを通じて、学生の挑戦を支援しています。"
        primaryCTA={{
          text: "コミュニティに参加",
          href: "/join",
        }}
        secondaryCTA={{
          text: "詳細を見る",
          href: "#details",
        }}
      />

      {/* コミュニティ事業概要 */}
      <section className="py-24" id="details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                Community Overview
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                学生団体をつなぐ
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#066ff2] to-[#ec4faf]">
                  コミュニティ
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                UNIONのコミュニティ事業は、全国の学生団体が集まり、情報交換や協力を通じて共に成長できる場を提供しています。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection animation="fadeInUp" delay={0}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-[#066ff2]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">150+</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">加盟団体</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-10 w-10 text-[#ec4faf]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5,000+</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">コミュニティメンバー</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-[#066ff2]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">年間イベント数</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 主要サービス */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-[#ec4faf] dark:text-pink-400 text-sm font-medium mb-6 border border-pink-100 dark:border-pink-800">
                Main Services
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">主要サービス</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                UNIONコミュニティ事業の核となるサービス
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInUp" delay={0}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-[#066ff2]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">学生オンリーSlack</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  学生団体メンバー限定のSlackワークスペースで、日々活発な情報交換や相談が行われています。
                  チャンネルごとに分野別の議論ができ、全国の学生とつながることができます。
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-[#066ff2] rounded-full mr-2"></span>
                    情報交換・質問チャンネル
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-[#066ff2] rounded-full mr-2"></span>
                    イベント告知・募集
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-[#066ff2] rounded-full mr-2"></span>
                    分野別専門チャンネル
                  </div>
                </div>
                <a
                  href="https://join.slack.com/t/union-finschool/shared_invite/zt-2s6iy0dj5-ttUUdbA2MrY2XJf~cou81A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#066ff2] hover:text-[#ec4faf] font-medium"
                >
                  Slackに参加する
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-[#ec4faf]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">定期ミートアップ</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  月1回開催される定期ミートアップでは、学生団体同士の交流や情報共有、スキルアップセミナーを実施しています。
                  オンライン・オフライン両方で開催し、全国から参加可能です。
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-[#ec4faf] rounded-full mr-2"></span>
                    月1回の定期開催
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-[#ec4faf] rounded-full mr-2"></span>
                    スキルアップセミナー
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-[#ec4faf] rounded-full mr-2"></span>
                    ネットワーキング
                  </div>
                </div>
                <Link href="/news" className="inline-flex items-center text-[#066ff2] hover:text-[#ec4faf] font-medium">
                  開催情報を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Handshake className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">合同イベント</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  複数の学生団体が協力して開催する大規模イベントや、企業とのコラボレーションイベントを企画・運営しています。
                  年間を通じて様々なテーマでイベントを開催しています。
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    学生団体合同イベント
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    企業コラボイベント
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    テーマ別ワークショップ
                  </div>
                </div>
                <Link href="/news" className="inline-flex items-center text-[#066ff2] hover:text-[#ec4faf] font-medium">
                  開催情報を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 支援内容 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                Support Services
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">支援内容</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                学生団体の活動をサポートする様々な支援サービス
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-[#066ff2]" />,
                title: "1on1カウンセリング",
                description: "学生団体の運営や活動に関する相談に、経験豊富なメンバーがアドバイスします。",
                features: ["運営相談", "活動企画支援", "メンバー管理", "資金調達相談"],
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-[#ec4faf]" />,
                title: "イベント告知支援",
                description: "UNIONのSNSやメディアを通じて、学生団体のイベントを広く発信します。",
                features: ["SNS拡散", "メディア掲載", "告知文作成支援", "デザイン支援"],
              },
              {
                icon: <Users className="h-8 w-8 text-[#066ff2]" />,
                title: "他団体との交流機会",
                description: "同じ分野や関心を持つ学生団体同士をつなぎ、コラボレーションを促進します。",
                features: ["マッチング支援", "合同企画提案", "交流イベント", "情報共有"],
              },
              {
                icon: <Heart className="h-8 w-8 text-[#ec4faf]" />,
                title: "メンバー募集支援",
                description: "学生団体の新メンバー募集を、UNIONのネットワークを活用してサポートします。",
                features: ["募集告知", "説明会支援", "面接サポート", "オンボーディング"],
              },
            ].map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 bg-[#066ff2] rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-24 bg-gradient-to-br from-[#066ff2] to-[#ec4faf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">コミュニティに参加しませんか？</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              UNIONコミュニティは、学生の挑戦を応援し、共に成長していく仲間を募集しています
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://join.slack.com/t/union-finschool/shared_invite/zt-2s6iy0dj5-ttUUdbA2MrY2XJf~cou81A"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#066ff2] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Slackに参加
              </a>
              <Link
                href="/join"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#066ff2] transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                参加方法を見る
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
