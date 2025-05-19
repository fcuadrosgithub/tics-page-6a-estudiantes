"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <div className="flex md:hidden w-full items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="font-bold text-lg text-white">IT</span>
        </div>
        <span className="font-bold text-xl text-blue-600 dark:text-blue-400">ITIC</span>
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden relative overflow-hidden group">
            <Menu className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[385px] border-l-blue-100 dark:border-l-blue-900/50 p-0">
          <div className="h-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background p-6">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="relative overflow-hidden group"
              >
                <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex flex-col space-y-6">
              <Link
                href="#convocatoria"
                className="text-lg font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2"
                onClick={() => setOpen(false)}
              >
                Convocatoria
              </Link>
              <Link
                href="#becas"
                className="text-lg font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2"
                onClick={() => setOpen(false)}
              >
                Becas
              </Link>
              <Link
                href="#eventos"
                className="text-lg font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2"
                onClick={() => setOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="#logros"
                className="text-lg font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2"
                onClick={() => setOpen(false)}
              >
                Logros
              </Link>
              <Link
                href="#oferta"
                className="text-lg font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2"
                onClick={() => setOpen(false)}
              >
                Oferta Educativa
              </Link>
              <Link
                href="#contacto"
                className="text-lg font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2"
                onClick={() => setOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex justify-center mt-4">
                <ThemeToggle />
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link href="#convocatoria" onClick={() => setOpen(false)}>
                  Inscríbete
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
