import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
            </h3>
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula Km. 2.5, Mixquiahuala de Juárez, Hidalgo, C.P. 42700
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">(738) 725 1060</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">contacto@itsoeh.edu.mx</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/aspirantes" className="text-sm hover:underline">
                  Aspirantes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/aviso-privacidad" className="text-sm hover:underline">
                  Aviso de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/people/Tecnol%C3%B3gico-Nacional-de-M%C3%A9xico-Campus-Occidente-del-Estado-de-Hidalgo/100069473374138/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/itsoeh_oficial?igsh=MW1sanFsMWJlYjJlYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/user/ITSOEHoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://twitter.com/itsoehmx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
