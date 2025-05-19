import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function MainNav() {
  return (
    <div className="hidden md:flex flex-1">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
          <span className="font-bold text-lg text-white">IT</span>
        </div>
        <span className="font-bold text-xl text-blue-600 dark:text-blue-400">ITIC</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
        <Link
          href="#convocatoria"
          className="relative group transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          <span>Convocatoria</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#becas" className="relative group transition-colors hover:text-blue-600 dark:hover:text-blue-400">
          <span>Becas</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#eventos" className="relative group transition-colors hover:text-blue-600 dark:hover:text-blue-400">
          <span>Eventos</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#logros" className="relative group transition-colors hover:text-blue-600 dark:hover:text-blue-400">
          <span>Logros</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#oferta" className="relative group transition-colors hover:text-blue-600 dark:hover:text-blue-400">
          <span>Oferta Educativa</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#contacto"
          className="relative group transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          <span>Contacto</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105">
          <Link href="#convocatoria">Inscríbete</Link>
        </Button>
      </div>
    </div>
  )
}
