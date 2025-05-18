import Link from "next/link"
import { ArrowLeft, Calendar, BookOpen, Clock, HelpCircle, Download, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ExamenPage() {
  const temas = [
    {
      area: "Matemáticas",
      subtemas: [
        "Álgebra",
        "Geometría y Trigonometría",
        "Geometría Analítica",
        "Cálculo Diferencial",
        "Probabilidad y Estadística",
      ],
    },
    {
      area: "Comprensión Lectora",
      subtemas: [
        "Comprensión de textos",
        "Análisis de información",
        "Argumentación",
        "Síntesis de información",
        "Vocabulario",
      ],
    },
    {
      area: "Física",
      subtemas: ["Mecánica", "Electricidad y Magnetismo", "Termodinámica", "Ondas y Óptica"],
    },
    {
      area: "Química",
      subtemas: ["Estructura atómica", "Tabla periódica", "Enlaces químicos", "Reacciones químicas", "Estequiometría"],
    },
  ]

  const preguntas = [
    {
      pregunta: "¿Cuándo se realiza el examen de admisión?",
      respuesta:
        "El examen de admisión se realizará el 15 de junio de 2025 en las instalaciones del instituto. Se recomienda llegar 30 minutos antes de la hora asignada.",
    },
    {
      pregunta: "¿Qué debo llevar el día del examen?",
      respuesta:
        "Debes presentar tu comprobante de registro, identificación oficial con fotografía, lápiz del número 2, goma de borrar, sacapuntas y calculadora básica (no programable).",
    },
    {
      pregunta: "¿Cuánto dura el examen?",
      respuesta:
        "El examen tiene una duración de 3 horas. No se permitirá el acceso a personas que lleguen después de la hora de inicio.",
    },
    {
      pregunta: "¿Cómo se evalúa el examen?",
      respuesta:
        "El examen se evalúa en una escala de 0 a 100 puntos. La calificación mínima aprobatoria depende de la demanda y los lugares disponibles en cada carrera.",
    },
    {
      pregunta: "¿Cuándo se publican los resultados?",
      respuesta:
        "Los resultados se publicarán el 30 de junio de 2025 en la página web oficial del instituto y en las instalaciones del mismo.",
    },
    {
      pregunta: "¿Puedo solicitar revisión de mi examen?",
      respuesta:
        "Sí, puedes solicitar revisión de tu examen dentro de los 3 días hábiles posteriores a la publicación de resultados, presentando una solicitud por escrito en el Departamento de Servicios Escolares.",
    },
  ]

  const recomendaciones = [
    "Descansa bien la noche anterior al examen",
    "Desayuna adecuadamente el día del examen",
    "Llega con al menos 30 minutos de anticipación",
    "Lee cuidadosamente las instrucciones",
    "Administra bien tu tiempo durante el examen",
    "Contesta primero las preguntas que sepas con seguridad",
    "Revisa tus respuestas antes de entregar el examen",
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Examen de Ingreso</h1>
        <p className="text-lg text-gray-600 mt-2">Información sobre el examen de admisión y cómo prepararte</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-700" />
                Información General
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Fecha
                  </h3>
                  <p className="mt-1">15 de junio de 2025</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800 flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Horario
                  </h3>
                  <p className="mt-1">9:00 AM - 12:00 PM</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800">Lugar</h3>
                  <p className="mt-1">Instalaciones del ITSOEH</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800">Duración</h3>
                  <p className="mt-1">3 horas</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-lg mb-2">Estructura del examen</h3>
                <p className="mb-4">
                  El examen consta de 120 preguntas de opción múltiple, divididas en las siguientes áreas:
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                    <span>Matemáticas (40 preguntas)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                    <span>Comprensión Lectora (30 preguntas)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                    <span>Física (25 preguntas)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                    <span>Química (25 preguntas)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Temario
            </h2>
            <div className="space-y-4">
              {temas.map((tema, index) => (
                <Card key={index}>
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg">{tema.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {tema.subtemas.map((subtema, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
                          <span>{subtema}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Button className="bg-blue-700 hover:bg-blue-800" asChild>
              <Link href="/aspirantes/contacto">
                <Info className="mr-2 h-4 w-4" />
                Solicitar información
              </Link>
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50" asChild>
              <Link
                href="https://coalcoman.tecnm.mx/documentos/admision-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar guía de estudio
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-700" />
                Preguntas Frecuentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {preguntas.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.pregunta}</AccordionTrigger>
                    <AccordionContent>{item.respuesta}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-700" />
                Recomendaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recomendaciones.map((recomendacion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>{recomendacion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
