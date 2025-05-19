"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function AnimatedSection({ children, id, className }: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </section>
  )
}
