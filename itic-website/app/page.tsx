import Link from "next/link"
import Image from "next/image"
import { Calendar, Award, GraduationCap, Phone, Mail, MapPin, FileText, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { SocialLinks } from "@/components/social-links"
import { Footer } from "@/components/footer"
import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingShapes } from "@/components/floating-shapes"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <section className="w-full py-12 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
              <AnimatedCounter
                title="Años de Experiencia"
                value={15}
                icon={<GraduationCap className="h-6 w-6 text-blue-500" />}
              />
              <AnimatedCounter
                title="Egresados Exitosos"
                value={1200}
                icon={<Award className="h-6 w-6 text-blue-500" />}
              />
              <AnimatedCounter
                title="Empresas Vinculadas"
                value={85}
                icon={<ExternalLink className="h-6 w-6 text-blue-500" />}
              />
              <AnimatedCounter
                title="Proyectos Innovadores"
                value={340}
                icon={<FileText className="h-6 w-6 text-blue-500" />}
              />
            </div>
          </div>
        </section>

        {/* Convocatoria Section */}
        <AnimatedSection
          id="convocatoria"
          className="w-full py-12 md:py-20 bg-white dark:bg-background relative overflow-hidden"
        >
          <FloatingShapes />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                  Admisiones Abiertas
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                  Convocatoria de Ingreso
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce los requisitos y fechas importantes para formar parte de nuestra comunidad universitaria.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/50 dark:to-background">
                  <CardTitle className="text-2xl">Proceso de Admisión</CardTitle>
                  <CardDescription className="text-base">Periodo 2025-2026</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid gap-2">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" /> Fechas Importantes:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Registro en línea: <span className="font-medium">15 de enero al 30 de marzo de 2025</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Examen de admisión: <span className="font-medium">15 de mayo de 2025</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Publicación de resultados: <span className="font-medium">30 de mayo de 2025</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Inscripciones: <span className="font-medium">1 al 15 de julio de 2025</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Inicio de clases: <span className="font-medium">5 de agosto de 2025</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid gap-2 pt-2">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                      <FileText className="mr-2 h-5 w-5" /> Requisitos:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Certificado de bachillerato
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Acta de nacimiento
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">CURP</span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Identificación oficial
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Comprobante de domicilio
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          6 fotografías tamaño infantil
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full group transition-all duration-300 transform hover:scale-105">
                    <Link href="#" className="flex items-center gap-2">
                      Descargar Convocatoria Completa
                      <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/50 dark:to-background">
                  <CardTitle className="text-2xl">Examen de Admisión</CardTitle>
                  <CardDescription className="text-base">Información importante</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid gap-2">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                      <FileText className="mr-2 h-5 w-5" /> Detalles del Examen:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Duración: <span className="font-medium">3 horas</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Áreas evaluadas:{" "}
                          <span className="font-medium">
                            Matemáticas, Comprensión lectora, Ciencias básicas, Razonamiento lógico
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Sede: <span className="font-medium">Campus principal</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Hora: <span className="font-medium">9:00 AM (presentarse 1 hora antes)</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid gap-2 pt-2">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                      <Award className="mr-2 h-5 w-5" /> Recomendaciones:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Descansar adecuadamente la noche anterior
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Llevar identificación oficial
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          Llevar lápiz #2, borrador y sacapuntas
                        </span>
                      </li>
                      <li className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                          No se permite el uso de calculadoras o dispositivos electrónicos
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full rounded-full group transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    <Link href="#" className="flex items-center gap-2">
                      Guía de Estudio
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Becas Section */}
        <AnimatedSection
          id="becas"
          className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                  Programa de Becas
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Apoyos económicos disponibles para facilitar tus estudios universitarios.
                </p>
              </div>
            </div>
            <div className="mx-auto py-8">
              <Tabs defaultValue="gobierno" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 rounded-full h-14 p-1 bg-blue-100/50 dark:bg-blue-900/20">
                  <TabsTrigger
                    value="gobierno"
                    className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 data-[state=active]:shadow-sm transition-all duration-300"
                  >
                    Becas de Gobierno
                  </TabsTrigger>
                  <TabsTrigger
                    value="institucionales"
                    className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 data-[state=active]:shadow-sm transition-all duration-300"
                  >
                    Becas Institucionales
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="gobierno" className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-full z-10 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30"></div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          Beca Jóvenes Escribiendo el Futuro
                        </CardTitle>
                        <CardDescription>Gobierno Federal</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Apoyo económico bimestral de $2,400 pesos para estudiantes de educación superior en situación
                          de pobreza o vulnerabilidad.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          <Link href="#" className="flex items-center gap-2">
                            Más Información
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-full z-10 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30"></div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          Beca Benito Juárez
                        </CardTitle>
                        <CardDescription>Gobierno Federal</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Apoyo universal para estudiantes de educación superior inscritos en instituciones públicas,
                          con un monto de $2,450 pesos mensuales.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          <Link href="#" className="flex items-center gap-2">
                            Más Información
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-full z-10 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30"></div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          Beca de Manutención
                        </CardTitle>
                        <CardDescription>SEP - CNBES</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Apoyo económico mensual que varía según el año de estudios, destinado a estudiantes en
                          situación económica adversa.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          <Link href="#" className="flex items-center gap-2">
                            Más Información
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="institucionales" className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-full z-10 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30"></div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          Beca de Excelencia Académica
                        </CardTitle>
                        <CardDescription>Hasta 100% de colegiatura</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Para estudiantes con promedio superior a 9.5 en el nivel medio superior o en el semestre
                          anterior.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          <Link href="#" className="flex items-center gap-2">
                            Requisitos
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-full z-10 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30"></div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          Beca Deportiva
                        </CardTitle>
                        <CardDescription>Hasta 50% de colegiatura</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Para estudiantes que destaquen en alguna disciplina deportiva y representen a la institución
                          en competencias.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          <Link href="#" className="flex items-center gap-2">
                            Requisitos
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-bl-full z-10 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30"></div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          Beca Socioeconómica
                        </CardTitle>
                        <CardDescription>Hasta 75% de colegiatura</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Para estudiantes con situación económica adversa comprobable y con promedio mínimo de 8.0.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          <Link href="#" className="flex items-center gap-2">
                            Requisitos
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </AnimatedSection>

        {/* Eventos Section */}
        <AnimatedSection
          id="eventos"
          className="w-full py-12 md:py-20 bg-white dark:bg-background relative overflow-hidden"
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                  Próximos Eventos
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mantente al día con las actividades y eventos de la carrera.
                </p>
              </div>
            </div>
            <div className="mx-auto py-8">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                        <CardHeader className="p-0">
                          <div className="relative overflow-hidden aspect-video">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/30 to-transparent z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-full h-full bg-[url('/images/hackathon.png')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[1px]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-20 h-20 rounded-full bg-blue-500/30 backdrop-blur-sm flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-white animate-pulse"
                                    >
                                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-3 left-3 z-20">
                              <h3 className="text-white font-bold text-lg">Hackathon TIC 2025</h3>
                              <p className="text-white/80 text-sm">15-17 de junio, 2025</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-sm text-muted-foreground">
                            Competencia de desarrollo de software con enfoque en soluciones para ciudades inteligentes.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                          >
                            <Calendar className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                            Agregar al Calendario
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                        <CardHeader className="p-0">
                          <div className="relative overflow-hidden aspect-video">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-900/30 to-transparent z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-full h-full bg-[url('/images/ia-conferencia.png')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-[1px]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-20 h-20 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-white animate-pulse"
                                    >
                                      <path d="M12 2a5 5 0 0 0-5 5v14a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z"></path>
                                      <path d="M2 12h4"></path>
                                      <path d="M18 12h4"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-3 left-3 z-20">
                              <h3 className="text-white font-bold text-lg">Conferencia IA Aplicada</h3>
                              <p className="text-white/80 text-sm">22 de junio, 2025</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-sm text-muted-foreground">
                            Ponentes de empresas líderes en tecnología compartirán avances en inteligencia artificial.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                          >
                            <Calendar className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                            Agregar al Calendario
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                        <CardHeader className="p-0">
                          <div className="relative overflow-hidden aspect-video">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-green-900/30 to-transparent z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-green-900/20 backdrop-blur-[1px]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-20 h-20 rounded-full bg-green-500/30 backdrop-blur-sm flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-white animate-pulse"
                                    >
                                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-3 left-3 z-20">
                              <h3 className="text-white font-bold text-lg">Taller de Ciberseguridad</h3>
                              <p className="text-white/80 text-sm">5-7 de julio, 2025</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-sm text-muted-foreground">
                            Aprende técnicas de protección de sistemas y redes con expertos del sector.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                          >
                            <Calendar className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                            Agregar al Calendario
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                        <CardHeader className="p-0">
                          <div className="relative overflow-hidden aspect-video">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-orange-900/30 to-transparent z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-orange-900/20 backdrop-blur-[1px]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-20 h-20 rounded-full bg-orange-500/30 backdrop-blur-sm flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-white animate-pulse"
                                    >
                                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-3 left-3 z-20">
                              <h3 className="text-white font-bold text-lg">Feria de Proyectos TIC</h3>
                              <p className="text-white/80 text-sm">20 de julio, 2025</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-sm text-muted-foreground">
                            Exhibición de proyectos desarrollados por estudiantes de la carrera.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                          >
                            <Calendar className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                            Agregar al Calendario
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-1 bg-white/80 hover:bg-white dark:bg-background/80 dark:hover:bg-background border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400" />
                <CarouselNext className="right-1 bg-white/80 hover:bg-white dark:bg-background/80 dark:hover:bg-background border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400" />
              </Carousel>
            </div>
          </div>
        </AnimatedSection>

        {/* Logros Section */}
        <AnimatedSection
          id="logros"
          className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                  Logros y Reconocimientos
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestros estudiantes destacan en competencias nacionales e internacionales.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Primer Lugar Hackathon Nacional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Hackathon Nacional"
                      fill
                      className="object-cover transition-transform duration-5000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nuestro equipo "TechInnovators" obtuvo el primer lugar en el Hackathon Nacional 2024 con su proyecto
                    de movilidad urbana inteligente.
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <Award className="mr-1 h-3 w-3 animate-pulse" /> Primer Lugar
                  </Badge>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Finalistas Competencia Internacional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Competencia Internacional"
                      fill
                      className="object-cover transition-transform duration-5000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    El equipo "DataMasters" clasificó entre los 5 finalistas de la Competencia Internacional de Ciencia
                    de Datos 2024 en Silicon Valley.
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <Award className="mr-1 h-3 w-3 animate-pulse" /> Top 5
                  </Badge>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Reconocimiento Proyecto Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Proyecto Social"
                      fill
                      className="object-cover transition-transform duration-5000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    La aplicación "EduAccess" desarrollada por nuestros estudiantes recibió reconocimiento por su
                    impacto en comunidades rurales.
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <Award className="mr-1 h-3 w-3 animate-pulse" /> Impacto Social
                  </Badge>
                </CardFooter>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Oferta Educativa Section */}
        <AnimatedSection
          id="oferta"
          className="w-full py-12 md:py-20 bg-white dark:bg-background relative overflow-hidden"
        >
          <FloatingShapes />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                  Oferta Educativa
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce el plan de estudios y las áreas de especialización de la carrera.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-8">
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/50 dark:to-background">
                  <CardTitle className="text-2xl">
                    Ingeniería en Tecnologías de la Información y las Comunicaciones
                  </CardTitle>
                  <CardDescription className="text-base">Duración: 9 semestres (4.5 años)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="grid gap-4">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Perfil del Egresado</h3>
                    <p className="text-muted-foreground">
                      El egresado de la carrera de Ingeniería en TIC será capaz de diseñar, implementar y administrar
                      sistemas de información, redes de computadoras y soluciones tecnológicas innovadoras para resolver
                      problemas en diversos sectores.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Áreas de Especialización</h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-300 hover:shadow-md hover:bg-blue-100/70 dark:hover:bg-blue-900/30 group/area">
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2 group-hover/area:text-blue-800 dark:group-hover/area:text-blue-200 transition-colors duration-300">
                          <div className="h-2 w-2 rounded-full bg-blue-400 group-hover/area:bg-blue-600 dark:group-hover/area:bg-blue-300 transition-colors duration-300"></div>
                          Desarrollo de Software
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Programación avanzada
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Desarrollo web y móvil
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Arquitectura de software
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Bases de datos
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-300 hover:shadow-md hover:bg-blue-100/70 dark:hover:bg-blue-900/30 group/area">
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2 group-hover/area:text-blue-800 dark:group-hover/area:text-blue-200 transition-colors duration-300">
                          <div className="h-2 w-2 rounded-full bg-blue-400 group-hover/area:bg-blue-600 dark:group-hover/area:bg-blue-300 transition-colors duration-300"></div>
                          Redes y Telecomunicaciones
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Diseño de redes
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Seguridad informática
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Sistemas distribuidos
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Comunicaciones inalámbricas
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-300 hover:shadow-md hover:bg-blue-100/70 dark:hover:bg-blue-900/30 group/area">
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2 group-hover/area:text-blue-800 dark:group-hover/area:text-blue-200 transition-colors duration-300">
                          <div className="h-2 w-2 rounded-full bg-blue-400 group-hover/area:bg-blue-600 dark:group-hover/area:bg-blue-300 transition-colors duration-300"></div>
                          Inteligencia Artificial
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Machine Learning
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Procesamiento de lenguaje natural
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Visión por computadora
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Sistemas expertos
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-300 hover:shadow-md hover:bg-blue-100/70 dark:hover:bg-blue-900/30 group/area">
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2 group-hover/area:text-blue-800 dark:group-hover/area:text-blue-200 transition-colors duration-300">
                          <div className="h-2 w-2 rounded-full bg-blue-400 group-hover/area:bg-blue-600 dark:group-hover/area:bg-blue-300 transition-colors duration-300"></div>
                          Gestión de Proyectos TI
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Metodologías ágiles
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Administración de recursos
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Calidad de software
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                            <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              Emprendimiento tecnológico
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Campo Laboral</h3>
                    <p className="text-muted-foreground">
                      Los egresados pueden desempeñarse en empresas de desarrollo de software, consultoría tecnológica,
                      telecomunicaciones, instituciones financieras, sector público, o como emprendedores tecnológicos.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full group transition-all duration-300 transform hover:scale-105">
                    <Link href="#" className="flex items-center gap-2">
                      Descargar Plan de Estudios Completo (PDF)
                      <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Contacto Section */}
        <AnimatedSection
          id="contacto"
          className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                  Contacto
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Tienes dudas? Estamos aquí para ayudarte.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/50 dark:to-background">
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                  <CardDescription className="text-base">Departamento de Ingeniería en TIC</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-1">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/30 transition-colors duration-300">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-700 dark:text-blue-300">Teléfono</h3>
                      <p className="text-sm text-muted-foreground group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                        <Link href="tel:+525512345678" className="hover:underline">
                          +52 (55) 1234-5678
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-1">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/30 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-700 dark:text-blue-300">Correo Electrónico</h3>
                      <p className="text-sm text-muted-foreground group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                        <Link href="mailto:info.tic@universidad.edu.mx" className="hover:underline">
                          info.tic@universidad.edu.mx
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-1">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/30 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-700 dark:text-blue-300">Dirección</h3>
                      <p className="text-sm text-muted-foreground group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                        Av. Universidad 1234, Col. Tecnológica
                        <br />
                        Ciudad de México, CP 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-1">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/30 transition-colors duration-300">
                      <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-700 dark:text-blue-300">Coordinación Académica</h3>
                      <p className="text-sm text-muted-foreground group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                        Dr. Juan Pérez Rodríguez
                        <br />
                        <Link href="mailto:coordinacion.tic@universidad.edu.mx" className="hover:underline">
                          coordinacion.tic@universidad.edu.mx
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-3 text-center">
                      Síguenos en redes sociales
                    </h3>
                    <SocialLinks />
                  </div>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden border-2 border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl dark:hover:shadow-blue-900/20">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950/50 dark:to-background">
                  <CardTitle className="text-2xl">Ubicación</CardTitle>
                  <CardDescription className="text-base">Visítanos en el campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src="/images/campus.png"
                      alt="Campus universitario"
                      fill
                      className="object-cover transition-transform duration-5000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full rounded-full group/btn transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    <Link
                      href="https://maps.app.goo.gl/9ECrsumZP6zaGCoP8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Ver en Google Maps
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
