"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  title: string
  value: number
  icon?: React.ReactNode
}

export function AnimatedCounter({ title, value, icon }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (inView) {
      const duration = 2000 // ms
      const startTime = performance.now()

      const animateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const easedProgress = easeOutQuart(progress)

        countRef.current = Math.floor(easedProgress * value)
        setCount(countRef.current)

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animateCount)
        }
      }

      rafRef.current = requestAnimationFrame(animateCount)

      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
        }
      }
    }
  }, [inView, value])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-4 bg-white dark:bg-blue-950/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-100 dark:border-blue-900/50"
    >
      {icon && <div className="mb-2">{icon}</div>}
      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{count.toLocaleString()}</div>
      <div className="text-sm text-muted-foreground text-center mt-1">{title}</div>
    </div>
  )
}
