import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Facebook, Instagram, Youtube, Twitter, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RedesSocialesPage() {
  const redesSociales = [
    {
      id: "facebook",
      nombre: "Facebook",
      usuario: "@TecnológicoNacionaldeMéxicoCampusOccidentedelEstadodeHidalgo",
      url: "https://www.facebook.com/people/Tecnol%C3%B3gico-Nacional-de-M%C3%A9xico-Campus-Occidente-del-Estado-de-Hidalgo/100069473374138/",
      descripcion: "Mantente al día con nuestras publicaciones, eventos y noticias institucionales.",
      icono: <Facebook className="h-8 w-8" />,
      color: "bg-blue-600",
    },
    {
      id: "instagram",
      nombre: "Instagram",
      usuario: "@itsoeh_oficial",
      url: "https://www.instagram.com/itsoeh_oficial?igsh=MW1sanFsMWJlYjJlYg==",
      descripcion: "Conoce nuestra vida estudiantil a través de fotos y videos de eventos y actividades.",
      icono: <Instagram className="h-8 w-8" />,
      color: "bg-pink-600",
    },
    {
      id: "youtube",
      nombre: "YouTube",
      usuario: "ITSOEHOficial",
      url: "https://www.youtube.com/user/ITSOEHoficial",
      descripcion: "Mira nuestros videos educativos, conferencias y eventos institucionales.",
      icono: <Youtube className="h-8 w-8" />,
      color: "bg-red-600",
    },
    {
      id: "twitter",
      nombre: "Twitter",
      usuario: "@itsoehmx",
      url: "https://twitter.com/itsoehmx",
      descripcion: "Sigue nuestras actualizaciones y noticias en tiempo real.",
      icono: <Twitter className="h-8 w-8" />,
      color: "bg-blue-400",
    },
  ]

  const publicacionesDestacadas = [
    {
      id: 1,
      titulo: "Convocatoria de Nuevo Ingreso 2025",
      descripcion: "Ya está abierta nuestra convocatoria para el ciclo escolar 2025-2026. ¡No te quedes fuera!",
      imagen: "/img/adolfo.jpg",
      red: "Facebook",
      fecha: "15 de marzo de 2025",
    },
    {
      id: 2,
      titulo: "Feria de Ciencias y Tecnología",
      descripcion:
        "Conoce los proyectos innovadores de nuestros estudiantes en la Feria de Ciencias y Tecnología 2025.",
      imagen: "/img/ft.jpg",
      red: "Instagram",
      fecha: "10 de marzo de 2025",
    },
    {
      id: 3,
      titulo: "Conferencia: El Futuro de la Ingeniería",
      descripcion:
        "No te pierdas nuestra próxima conferencia sobre las tendencias y el futuro de la ingeniería en México.",
      imagen: "/img/cofe.jpg",
      red: "YouTube",
      fecha: "5 de marzo de 2025",
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Redes Sociales</h1>
        <p className="text-lg text-gray-600 mt-2">Síguenos en nuestras redes sociales y mantente informado</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {redesSociales.map((red) => (
          <Card key={red.id} className="overflow-hidden">
            <div className={`${red.color} text-white p-6 flex justify-center`}>{red.icono}</div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{red.nombre}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              <p className="text-sm font-medium truncate">{red.usuario}</p>
              <p className="text-sm text-gray-600">{red.descripcion}</p>
              <Link href={red.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Share2 className="mr-2 h-4 w-4" />
                  Visitar
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Publicaciones Destacadas</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {publicacionesDestacadas.map((pub) => (
            <Card key={pub.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={pub.imagen || "/placeholder.svg"}
                  alt={pub.titulo}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{pub.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-3">
                <p className="text-sm text-gray-600">{pub.descripcion}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{pub.red}</span>
                  <span>{pub.fecha}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Share2 className="h-6 w-6 text-blue-700" />
          <h3 className="text-lg font-medium text-blue-800">Síguenos y comparte nuestro contenido</h3>
        </div>
        <p className="mb-4">
          Mantente informado sobre eventos, convocatorias y noticias importantes siguiendo nuestras redes sociales
          oficiales. Comparte nuestro contenido para que más personas conozcan nuestra institución.
        </p>
        <div className="flex flex-wrap gap-3">
          {redesSociales.map((red) => (
            <Link key={red.id} href={red.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                {red.icono}
                <span className="hidden sm:inline">Seguir en {red.nombre}</span>
                <span className="sm:hidden">Seguir</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 border border-yellow-200 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-medium text-yellow-800 mb-3">Información importante</h3>
        <p className="text-yellow-700">
          Nuestras redes sociales oficiales son administradas exclusivamente por el departamento de comunicación del
          ITSOEH. Verifica siempre que estás siguiendo nuestras cuentas oficiales para recibir información confiable y
          actualizada.
        </p>
      </div>
    </div>
  )
}
