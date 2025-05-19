"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-[#020b27] dark:bg-[#020b27] flex items-center">
      {/* Gradientes y efectos de luz */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-600/20 to-blue-900/40"
        style={{
          backgroundPosition: `${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%`,
          transition: "background-position 0.3s ease-out",
        }}
      />

      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px]" />

      {/* Líneas de cuadrícula */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-10" />

      {/* Símbolo/Logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 md:opacity-30">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0L200 100L100 200L0 100L100 0Z" fill="url(#grad1)" />
          <path d="M100 30L170 100L100 170L30 100L100 30Z" fill="url(#grad2)" />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#60A5FA" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="grad2" x1="30" y1="30" x2="170" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#93C5FD" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Contenido */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-blue-200/30 bg-blue-900/30 px-3 py-1 text-sm text-blue-200 backdrop-blur-sm mb-6">
            <span className="mr-2">Admisiones abiertas 2025</span>
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="#convocatoria">Inscríbete ahora</Link>
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
            Ingeniería en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Tecnologías
            </span>{" "}
            de la Información
          </h1>

          <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mb-8">
            Forma parte de los profesionales que transforman el mundo a través de la innovación digital y el desarrollo
            tecnológico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full group transition-all duration-300 transform hover:scale-105 px-6"
            >
              <Link href="#convocatoria" className="flex items-center">
                Conoce la carrera
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-400/30 text-blue-100 hover:bg-blue-800/30 rounded-full group transition-all duration-300 transform hover:scale-105 px-6"
            >
              <Link href="#oferta" className="flex items-center">
                Plan de estudios
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Partículas flotantes */}
      <Particles />
    </div>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400/30 animate-float"
          style={{
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}
