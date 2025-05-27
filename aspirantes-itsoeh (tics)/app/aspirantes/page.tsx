"use client"

import Link from "next/link"
import Image from "next/image"
import { GraduationCap, Calendar, FileText, Phone, Award, BookOpen, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

export default function AspirantesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      id: "becas",
      title: "Becas",
      icon: <GraduationCap className="h-10 w-10 text-blue-700" />,
      description: "Conoce los tipos de becas disponibles, requisitos y fechas de convocatoria.",
      href: "/aspirantes/becas",
    },
    {
      id: "convocatoria",
      title: "Convocatoria",
      icon: <Calendar className="h-10 w-10 text-blue-700" />,
      description: "Información sobre el proceso de admisión, fechas importantes y requisitos.",
      href: "/aspirantes/convocatoria",
    },
    {
      id: "examen",
      title: "Examen de Ingreso",
      icon: <FileText className="h-10 w-10 text-blue-700" />,
      description: "Todo lo que necesitas saber sobre el examen de admisión y cómo prepararte.",
      href: "/aspirantes/examen",
    },
    {
      id: "contacto",
      title: "Contacto",
      icon: <Phone className="h-10 w-10 text-blue-700" />,
      description: "Comunícate directamente con nosotros para resolver tus dudas.",
      href: "/aspirantes/contacto",
    },
    {
      id: "eventos",
      title: "Eventos / Logros",
      icon: <Award className="h-10 w-10 text-blue-700" />,
      description: "Conoce nuestras actividades destacadas y logros institucionales.",
      href: "/aspirantes/eventos",
    },
    {
      id: "oferta",
      title: "Oferta Educativa",
      icon: <BookOpen className="h-10 w-10 text-blue-700" />,
      description: "Explora nuestras carreras, perfiles y campo laboral.",
      href: "/aspirantes/oferta-educativa",
    },
    {
      id: "redes",
      title: "Redes Sociales",
      icon: <Share2 className="h-10 w-10 text-blue-700" />,
      description: "Síguenos en nuestras redes sociales oficiales y mantente informado.",
      href: "/aspirantes/redes-sociales",
    },
  ]

  const carouselImages = [
    {
      src: "/img/itsoeh.png",
      alt: "Campus ITSOEH",
    },
    {
      src: "/img/adolfo.jpg",
      alt: "Estudiantes ITSOEH",
    },
    {
      src: "/img/car_tics.jpg",
      alt: "Laboratorios ITSOEH",
    },
    {
      src: "/img/itis.jpg",
      alt: "Eventos ITSOEH",
    },
    {
      src: "/img/jj_y_su_pandilla.jpg",
      alt: "Graduación ITSOEH",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        {mounted && (
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                      <div className="max-w-3xl mx-auto text-center text-white px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Bienvenido, aspirante</h1>
                        <p className="text-lg md:text-xl opacity-90">
                          Todo lo que necesitas saber para formar parte del Instituto Tecnológico Superior del Occidente
                          del Estado de Hidalgo
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        )}
      </section>

      {/* Sections Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.id} href={section.href}>
                <Card className="h-full transition-all hover:shadow-md hover:border-blue-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-blue-50 rounded-full">{section.icon}</div>
                    <h2 className="text-xl font-bold mb-2 text-blue-900">{section.title}</h2>
                    <p className="text-gray-600">{section.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-100 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">¿Listo para dar el siguiente paso?</h2>
            <p className="text-lg text-blue-800 mb-6">
              Inicia tu proceso de admisión hoy mismo y forma parte de nuestra comunidad educativa.
            </p>
            <Link
              href="/aspirantes/convocatoria"
              className="inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Iniciar proceso de admisión
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
