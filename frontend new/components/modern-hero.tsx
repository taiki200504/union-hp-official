import { memo } from "react"
import AnimatedSection from "@/components/animated-section"

interface ModernHeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundPattern?: boolean
}

const ModernHero = memo(
  ({ title, subtitle, description, primaryCTA, secondaryCTA, backgroundPattern = true }: ModernHeroProps) => {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16 sm:pt-20">
        {backgroundPattern && (
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#066ff2]/20 to-[#ec4faf]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-[#ec4faf]/20 to-[#066ff2]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-black/5 to-gray-900/5 dark:from-white/5 dark:to-gray-100/5 rounded-full blur-2xl"></div>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {subtitle && (
              <AnimatedSection animation="fadeIn" delay={200}>
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#066ff2] dark:text-blue-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-blue-100 dark:border-blue-800">
                  {subtitle}
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection animation="fadeInUp" delay={400}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
                {title.split(" ").map((word, index) => {
                  if (word.includes("UNION") || word.includes("学生") || word.includes("声") || word.includes("社会")) {
                    return (
                      <span
                        key={index}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#066ff2] to-[#ec4faf]"
                      >
                        {word}{" "}
                      </span>
                    )
                  }
                  return word + " "
                })}
              </h1>
            </AnimatedSection>

            {description && (
              <AnimatedSection animation="fadeInUp" delay={600}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                  {description}
                </p>
              </AnimatedSection>
            )}

            {(primaryCTA || secondaryCTA) && (
              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                  {primaryCTA && (
                    <a
                      href={primaryCTA.href}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#066ff2] to-[#ec4faf] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                    >
                      {primaryCTA.text}
                    </a>
                  )}
                  {secondaryCTA && (
                    <a
                      href={secondaryCTA.href}
                      className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-[#066ff2] dark:hover:border-[#066ff2] hover:text-[#066ff2] dark:hover:text-[#066ff2] transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
                    >
                      {secondaryCTA.text}
                    </a>
                  )}
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    )
  },
)

ModernHero.displayName = "ModernHero"

export default ModernHero
