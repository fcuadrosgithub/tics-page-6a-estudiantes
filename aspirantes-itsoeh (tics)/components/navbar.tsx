import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Aspirantes", href: "/aspirantes", active: true },
    { name: "Estudiantes", href: "/estudiantes" },
    { name: "Egresados", href: "/egresados" },
    { name: "Investigación", href: "/investigacion" },
    { name: "Nosotros", href: "/nosotros" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/logo_itsoeh.png"
              alt="ITSOEH Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              style={{ objectFit: "contain" }}
              priority
            />
            <span className="hidden text-xl font-bold text-blue-900 sm:inline-block">ITSOEH</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-5 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                item.active ? "text-blue-700 font-semibold" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-medium transition-colors hover:text-blue-700 ${
                      item.active ? "text-blue-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
