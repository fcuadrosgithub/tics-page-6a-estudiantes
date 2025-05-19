"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, ChevronUp } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full border-t bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-blue-950/30 relative">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="h-5 w-5" />
          <span className="sr-only">Volver arriba</span>
        </Button>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Universidad Tecnológica. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 group"
          >
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 group"
          >
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 group"
          >
            <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 group"
          >
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
