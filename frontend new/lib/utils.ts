"use client"

import React from "react"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 画像の遅延読み込みを最適化するヘルパー関数
export function getImageProps(src: string, width: number, height: number, quality = 75) {
  return {
    src,
    width,
    height,
    quality,
    loading: "lazy" as const,
    decoding: "async" as const,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  }
}

// 画像のプレースホルダーURLを生成する関数
export function getPlaceholderImage(width: number, height: number, text?: string) {
  return `/placeholder.svg?height=${height}&width=${width}${text ? `&text=${encodeURIComponent(text)}` : ""}`
}

// パフォーマンス最適化のためのデバウンス関数
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// パフォーマンス最適化のためのスロットル関数
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Intersection Observer を使用した遅延読み込み
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  callback: () => void,
  options?: IntersectionObserverInit,
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  React.useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isIntersecting) {
          setIsIntersecting(true)
          callback()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [elementRef, callback, isIntersecting, options])

  return isIntersecting
}

// レスポンシブブレークポイント
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

// メディアクエリヘルパー
export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}
