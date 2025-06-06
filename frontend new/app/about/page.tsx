import Header from "@/components/header"
import Footer from "@/components/footer"
import ModernHero from "@/components/modern-hero"
import AnimatedSection from "@/components/animated-section"
import { Users, MessageSquare, Target, Lightbulb, Briefcase } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <ModernHero
        subtitle="About UNION"
        title="UNIONについて"
        description="学生団体連合UNIONの理念と活動について詳しくご紹介します。私たちは学生の声を社会に響かせ、若者の挑戦を支援する組織として活動しています。"
        primaryCTA={{
          text: "参加する",
          href: "/join",
        }}
        secondaryCTA={{
          text: "サービスを見る",
          href: "/services",
        }}
      />

      {/* PMVV セクション */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                Our Philosophy
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">PMVV</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Purpose、Mission、Vision、Valuesを通じてUNIONの理念をお伝えします
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <AnimatedSection animation="fadeInLeft">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-[#066ff2] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Purpose</h3>
                </div>
                <div className="ml-11">
                  <h4 className="text-xl font-semibold text-[#066ff2] dark:text-blue-400 mb-3">Why we need</h4>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    学生から熱狂を生み出せる世界を作る。
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    今の日本社会は自分の行動で、国や社会を変えられると思うことができる若者が少ない。
                    そんな社会の中で、学生団体は社会を動かすタネを秘めていると思う。しかし課題として、情報伝達手段がない。
                    そこで我々UNIONが学生活動の旗振り役・広告塔として、学生のサポートを行うことで、
                    『学生から変えようとする空気感・世界観を作り出す』未来を目指す。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-[#ec4faf] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mission</h3>
                </div>
                <div className="ml-11">
                  <h4 className="text-xl font-semibold text-[#ec4faf] dark:text-pink-400 mb-3">What we do</h4>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">学生の声を社会に響かせる。</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    学生団体連合UNIONは、このMissionを通して、学生・学生団体同士の連携を強化し、
                    情報共有や共同イベントの開催、人材育成を促進します。また、学生・学生団体の影響力を集約し、
                    イベントの告知や広報を我々のメディアを通して行うことで学生の声を多くの人に届けます。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-[#066ff2] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vision</h3>
                </div>
                <div className="ml-11">
                  <h4 className="text-xl font-semibold text-[#066ff2] dark:text-blue-400 mb-3">Where we go</h4>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-bold text-gray-900 dark:text-white">大ゴール（10年）：</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        学生発のムーブメントが、世の中を動かす『時代』をつくる。
                      </p>
                    </li>
                    <li>
                      <p className="font-bold text-gray-900 dark:text-white">中ゴール（5年）：</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        学生の挑戦が、社会の中で当たり前に受け入れられる『文化』をつくる。
                      </p>
                    </li>
                    <li>
                      <p className="font-bold text-gray-900 dark:text-white">小ゴール（1年）：</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        学生同士がつながり、互いに影響を与え合う『場』をつくる。
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-[#ec4faf] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Values</h3>
                </div>
                <div className="ml-11">
                  <h4 className="text-xl font-semibold text-[#ec4faf] dark:text-pink-400 mb-3">How to do</h4>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-bold text-gray-900 dark:text-white">Collaboration：</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        学生団体同士の連携を深め、共に成長し合う環境を作ります。
                      </p>
                    </li>
                    <li>
                      <p className="font-bold text-gray-900 dark:text-white">Impact：</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        学生の声を広く届けることで、社会にポジティブな変化をもたらします。
                      </p>
                    </li>
                    <li>
                      <p className="font-bold text-gray-900 dark:text-white">Synergy：</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        活躍する若者や団体が集い「熱狂」が生まれる場所を創出する。
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 活動内容セクション */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-[#ec4faf] dark:text-pink-400 text-sm font-medium mb-6 border border-pink-100 dark:border-pink-800">
                Activities
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">活動内容</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">UNIONの主な活動内容</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-[#066ff2]" />,
                title: "メディア事業",
                items: ["ポッドキャスト番組制作・配信", "YouTube動画制作", "SNS情報発信", "学生団体の広報支援"],
                color: "blue",
              },
              {
                icon: <Users className="h-8 w-8 text-[#ec4faf]" />,
                title: "コミュニティ事業",
                items: ["学生団体Slack運営", "定期ミートアップ開催", "合同イベント企画・運営", "学生リーダー育成"],
                color: "pink",
              },
              {
                icon: <Briefcase className="h-8 w-8 text-[#066ff2]" />,
                title: "企業連携事業",
                items: [
                  "企業×学生団体コラボ企画",
                  "インターンシップ紹介",
                  "キャリア支援プログラム",
                  "協賛企業プロモーション",
                ],
                color: "blue",
              },
            ].map((activity, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-16 h-16 ${activity.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30" : "bg-pink-100 dark:bg-pink-900/30"} rounded-full flex items-center justify-center`}
                    >
                      {activity.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                    {activity.title}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex}>・{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
