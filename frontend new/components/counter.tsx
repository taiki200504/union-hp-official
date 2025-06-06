"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { Users, Building, Briefcase } from "lucide-react"
import { fetchCounterData, type CounterData } from "@/lib/api"
import AnimatedSection from "@/components/animated-section"

const Counter = memo(() => {
  const [data, setData] = useState<CounterData>({
    organizationCount: 0,
    studentCount: 0,
    partnerCount: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  const getCounterData = useCallback(async () => {
    try {
      const counterData = await fetchCounterData()
      setData(counterData)
    } catch (error) {
      console.error("Failed to fetch counter data:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getCounterData()

    // 定期的に更新（30秒ごと）
    const intervalId = setInterval(getCounterData, 30000)
    return () => clearInterval(intervalId)
  }, [getCounterData])

  // アニメーションのためのカウントアップ効果
  const [displayCounts, setDisplayCounts] = useState({
    organizationCount: 0,
    studentCount: 0,
    partnerCount: 0,
  })

  useEffect(() => {
    if (isLoading) return

    const duration = 2000 // アニメーション時間（ミリ秒）
    const steps = 50 // アニメーションのステップ数
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setDisplayCounts({
        organizationCount: Math.round(data.organizationCount * progress),
        studentCount: Math.round(data.studentCount * progress),
        partnerCount: Math.round(data.partnerCount * progress),
      })

      if (currentStep === steps) {
        clearInterval(timer)
        setDisplayCounts(data)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [data, isLoading])

  const counterItems = [
    {
      icon: <Users className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-[#066ff2] dark:text-blue-400" />,
      count: displayCounts.organizationCount,
      label: "加盟団体数",
      isLoading,
    },
    {
      icon: <Building className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-[#ec4faf] dark:text-pink-400" />,
      count: displayCounts.studentCount,
      label: "加盟学生数",
      isLoading,
    },
    {
      icon: <Briefcase className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-[#066ff2] dark:text-blue-400" />,
      count: displayCounts.partnerCount,
      label: "提携企業数",
      isLoading,
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {counterItems.map((item, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
              <div className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">{item.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.isLoading ? (
                    <span className="inline-block w-12 sm:w-16 md:w-20 h-8 sm:h-10 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></span>
                  ) : (
                    item.count.toLocaleString()
                  )}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">{item.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
})

Counter.displayName = "Counter"

export default Counter
