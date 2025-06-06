"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback, memo } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
  threshold?: number
  rootMargin?: string
}

const AnimatedSection = memo(
  ({
    children,
    className = "",
    animation = "fadeInUp",
    delay = 0,
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
  }: AnimatedSectionProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout>()

    const handleIntersection = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        if (entry.isIntersecting && !isVisible) {
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true)
            }, delay)
          } else {
            setIsVisible(true)
          }
        }
      },
      [delay, isVisible],
    )

    useEffect(() => {
      const element = ref.current
      if (!element) return

      const observer = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin,
      })

      observer.observe(element)

      return () => {
        observer.unobserve(element)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [handleIntersection, threshold, rootMargin])

    const getAnimationClass = () => {
      const baseClass = "transition-all duration-1000 ease-out"

      if (!isVisible) {
        switch (animation) {
          case "fadeInUp":
            return `${baseClass} opacity-0 translate-y-8`
          case "fadeInLeft":
            return `${baseClass} opacity-0 -translate-x-8`
          case "fadeInRight":
            return `${baseClass} opacity-0 translate-x-8`
          case "fadeIn":
            return `${baseClass} opacity-0`
          case "scaleIn":
            return `${baseClass} opacity-0 scale-95`
          default:
            return `${baseClass} opacity-0 translate-y-8`
        }
      }

      return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
    }

    return (
      <div ref={ref} className={`${getAnimationClass()} ${className}`}>
        {children}
      </div>
    )
  },
)

AnimatedSection.displayName = "AnimatedSection"

export default AnimatedSection
