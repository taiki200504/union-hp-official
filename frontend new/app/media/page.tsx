"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ModernHero from "@/components/modern-hero"
import { Mic, Radio, Video } from "lucide-react"
import Image from "next/image"

export default function Media() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<"uniradio" | "kokomiyume" | "genepoli" | "career">("uniradio")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["uniradio", "kokomiyume", "genepoli", "career"].includes(tab)) {
      setActiveTab(tab as "uniradio" | "kokomiyume" | "genepoli" | "career")
    }
  }, [searchParams])

  const programs = {
    uniradio: {
      title: "ユニラジ",
      subtitle: "「学生のリアルな声が、社会を動かす。」",
      concept:
        '学生団体や課外活動に真剣に取り組む学生の"声"を社会に届ける音声番組。双子パーソナリティ「あんりん」が、多種多様な学生の価値観・行動・葛藤をインタビュー形式で深掘り。',
      target: [
        "学生団体に所属する学生",
        "自分のやりたいことを模索している大学生・高校生",
        "Z世代のリアルを知りたい企業・社会人",
      ],
      message:
        "「自分の活動が誰かの一歩になるように」声が届かない寂しさを知っているパーソナリティが、同世代の挑戦に光を当てる。",
      personality: "双子姉妹：あんな・りんな（あんりん）",
      corners: [
        "明日のユニコーン：注目学生のインタビュー",
        "あんりんと：悩み相談への回答",
        "課外活動掲示板：イベント告知",
        "メールコーナー：リスナー投稿紹介",
      ],
      platforms: {
        podcast: ["Spotify", "Apple Podcast"],
        youtube: "https://www.youtube.com/channel/union_official",
        sns: ["Instagram", "Twitter"],
      },
      coverImage: "/images/media/yuniraji-cover.jpg",
    },
    kokomiyume: {
      title: "ここみゆの夢ぐらし",
      subtitle: "「私たちのペースで社会を歩く」",
      concept:
        '夢を追いかけるZ世代女子ふたりが、「日常×社会」をテーマにゆるっと語るトーク番組。時に真面目に、時に感情のままに、"今を生きる学生"の姿を等身大で届けます。',
      target: [
        "普通の大学生、高校生",
        "「何かしてみたいけど一歩が踏み出せない」学生",
        '共感できる"学生の暮らし"を探しているリスナー',
      ],
      message:
        '「夢に向かって、私たちのペースで一歩ずつ」背伸びしない"ありのまま"の発信で、誰かの小さな勇気につなげたい。',
      personality:
        "白須湖々美（ここみ）：弁論・社会問題の探求者\n杉山美唯（みゆ）：映像クリエイター＆元FMパーソナリティ",
      corners: ["二人回：日常や夢、悩みについて自由に語る", "ゲスト回：挑戦する若者や企業の方と本音トーク"],
      platforms: {
        podcast: ["Spotify", "Apple Podcast"],
        youtube: "https://www.youtube.com/channel/union_official",
        sns: ["TikTok", "Instagram Reels"],
      },
      coverImage: "/images/media/cocomiyu-cover.jpg",
    },
    genepoli: {
      title: "ジェネポリ",
      subtitle: "「政治って、私が作るんだ」",
      concept:
        '17歳の学生たちが政治・社会を語り合うPodcast。難しくなりがちなテーマを、若者ならではの視点で身近に。"政治は他人事じゃない"を実感できる番組。',
      target: [
        "10代〜20代の若者（U22層）",
        "政治に「なんとなく関心はある」けど、詳しく知らない学生",
        "教育関係者・社会人のサブ視聴層",
      ],
      message: '「政治を"学ぶ"のではなく、"考えられるようになる"場を」自分たちの声と視点で、社会との接点を作りたい。',
      personality: "東坂明憲（N/S高・政治部）\n横濱奏恵（U17・アクティビスト）",
      corners: [
        "今週の言葉：政治用語解説",
        "若者の声：リスナー投稿×パーソナリティトーク",
        "ゲスト対談（政治家・教育者・記者など）",
      ],
      platforms: {
        podcast: ["Spotify", "Apple Podcast"],
        youtube: "https://www.youtube.com/channel/union_official",
        sns: ["Twitter", "Instagram"],
      },
      coverImage: "/placeholder.svg?height=400&width=400",
    },
    career: {
      title: "キャリアみっけ隊",
      subtitle: '「キャリアは、"見つける"ものじゃなくて、"つくる"もの。」',
      concept:
        '「やりたいことがわからない」学生に向けた、キャリア探求Podcast。社会に出る前の"迷い"や"ヒント"を、ゲストトークとパートナー企業の対話でお届け。',
      target: [
        "首都圏私大の大学2年生（Sγ層）",
        "就活・留学で迷っている層",
        "経済・IT・AIなどに関心がある情報感度の高い学生",
      ],
      message:
        '「"知る"から"動ける"へ。人生を自分のものにするヒントを届けたい」キャリア選択が"未来を作る楽しさ"になるよう、対話と体験のきっかけを提供。',
      personality: "三島大毅（立教大学∕UNION代表）\n井上幹太（ZEN大学∕UNION CTO）",
      corners: [
        "ゲスト回：キャリア相談室∕業界インサイト",
        "パートナー回：業界深掘りOneTopic∕キャリア語り∕パンドラの未来",
      ],
      platforms: {
        podcast: ["Spotify", "Apple Podcast"],
        youtube: "https://www.youtube.com/channel/union_official",
        sns: ["TikTok", "Instagram Reels"],
      },
      coverImage: "/placeholder.svg?height=400&width=400",
    },
  }

  const currentProgram = programs[activeTab]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <ModernHero
        subtitle="Media Business"
        title="メディア事業"
        description="学生の声を社会に届けるUNIONのメディア事業"
      />

      {/* タブ切り替え */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <button
              onClick={() => setActiveTab("uniradio")}
              className={`py-4 px-6 text-lg font-medium border-b-2 ${
                activeTab === "uniradio"
                  ? "border-[#066ff2] text-[#066ff2]"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              id="uniradio"
            >
              ユニラジ
            </button>
            <button
              onClick={() => setActiveTab("kokomiyume")}
              className={`py-4 px-6 text-lg font-medium border-b-2 ${
                activeTab === "kokomiyume"
                  ? "border-[#066ff2] text-[#066ff2]"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              id="kokomiyume"
            >
              ここみゆの夢ぐらし
            </button>
            <button
              onClick={() => setActiveTab("genepoli")}
              className={`py-4 px-6 text-lg font-medium border-b-2 ${
                activeTab === "genepoli"
                  ? "border-[#066ff2] text-[#066ff2]"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              id="genepoli"
            >
              ジェネポリ
            </button>
            <button
              onClick={() => setActiveTab("career")}
              className={`py-4 px-6 text-lg font-medium border-b-2 ${
                activeTab === "career"
                  ? "border-[#066ff2] text-[#066ff2]"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              id="career"
            >
              キャリアみっけ隊
            </button>
          </div>
        </div>
      </div>

      {/* 番組詳細 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 番組タイトル */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentProgram.title} - {currentProgram.subtitle}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              パーソナリティ：{currentProgram.personality.split("\n")[0]}
            </p>
          </div>

          {/* アートカバー */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md aspect-square rounded-xl shadow-md overflow-hidden">
              {currentProgram.coverImage.includes("placeholder") ? (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg">{currentProgram.title} カバーアート</span>
                </div>
              ) : (
                <Image
                  src={currentProgram.coverImage || "/placeholder.svg"}
                  alt={`${currentProgram.title} カバーアート`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* 概要セクション */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#066ff2] dark:text-blue-400">コンセプト</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentProgram.concept}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#ec4faf] dark:text-pink-400">ターゲット</h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                {currentProgram.target.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#066ff2] dark:text-blue-400">番組の想い</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentProgram.message}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#ec4faf] dark:text-pink-400">パーソナリティ</h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {currentProgram.personality}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#066ff2] dark:text-blue-400">番組コーナー</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {currentProgram.corners.map((corner, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#ec4faf] mr-2">•</span>
                    <span>{corner}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 配信プラットフォーム */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#066ff2] dark:text-blue-400">配信プラットフォーム</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mic className="h-6 w-6 text-[#066ff2] mr-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Podcast</h3>
                  </div>
                  <div className="space-y-2">
                    {currentProgram.platforms.podcast.map((platform, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-300"
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Video className="h-6 w-6 text-[#ec4faf] mr-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">YouTube</h3>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-300">
                    YouTube
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Radio className="h-6 w-6 text-[#066ff2] mr-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">SNS</h3>
                  </div>
                  <div className="space-y-2">
                    {currentProgram.platforms.sns.map((platform, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-300"
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube埋め込み */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#ec4faf] dark:text-pink-400">最新エピソード</h2>
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">YouTube動画プレイヤー</span>
              </div>
            </div>

            {/* 出演応募ボタン */}
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOQutZeoIiVYSASMeWjbkzZFpd4VSzIliJjB2xsIVYAOU8LQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#066ff2] to-[#ec4faf] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 inline-block"
              >
                出演を希望する
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
