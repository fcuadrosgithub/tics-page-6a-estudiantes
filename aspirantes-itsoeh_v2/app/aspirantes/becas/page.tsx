import Link from "next/link"
import { ArrowLeft, Download, Calendar, FileCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BecasPage() {
  const becas = [
    {
      id: "academicas",
      title: "Becas Académicas",
      description: "Para estudiantes con excelente desempeño académico.",
      requisitos: ["Promedio mínimo de 9.0", "No tener materias reprobadas", "Carta de recomendación de un profesor"],
      documentos: ["Solicitud de beca", "Historial académico", "Identificación oficial", "Comprobante de domicilio"],
      fechas: {
        inicio: "15 de mayo de 2025",
        cierre: "30 de junio de 2025",
        resultados: "15 de julio de 2025",
      },
    },
    {
      id: "economicas",
      title: "Becas Económicas",
      description: "Apoyo financiero para estudiantes de bajos recursos.",
      requisitos: ["Estudio socioeconómico", "Promedio mínimo de 8.0", "No contar con otra beca"],
      documentos: [
        "Solicitud de beca",
        "Comprobante de ingresos familiares",
        "Identificación oficial",
        "Comprobante de domicilio",
        "CURP",
      ],
      fechas: {
        inicio: "1 de junio de 2025",
        cierre: "15 de julio de 2025",
        resultados: "1 de agosto de 2025",
      },
    },
    {
      id: "transporte",
      title: "Becas de Transporte",
      description: "Apoyo para estudiantes que viven lejos del campus.",
      requisitos: ["Residir a más de 10 km del instituto", "Promedio mínimo de 8.0", "Comprobante de domicilio"],
      documentos: ["Solicitud de beca", "Comprobante de domicilio", "Identificación oficial", "Constancia de estudios"],
      fechas: {
        inicio: "1 de junio de 2025",
        cierre: "30 de junio de 2025",
        resultados: "20 de julio de 2025",
      },
    },
    {
      id: "excelencia",
      title: "Becas de Excelencia",
      description: "Para estudiantes con desempeño sobresaliente.",
      requisitos: [
        "Promedio mínimo de 9.5",
        "Participación en actividades extracurriculares",
        "No tener materias reprobadas",
      ],
      documentos: [
        "Solicitud de beca",
        "Historial académico",
        "Constancias de participación en actividades",
        "Identificación oficial",
        "Carta de motivos",
      ],
      fechas: {
        inicio: "15 de mayo de 2025",
        cierre: "15 de junio de 2025",
        resultados: "10 de julio de 2025",
      },
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Becas</h1>
        <p className="text-lg text-gray-600 mt-2">
          Conoce los diferentes tipos de becas disponibles para nuestros estudiantes.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Proceso de solicitud de becas</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Revisa las convocatorias disponibles</h3>
                  <p className="text-gray-600 text-sm mt-1">Verifica los requisitos y fechas de cada tipo de beca.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Prepara tu documentación</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Reúne todos los documentos requeridos según el tipo de beca.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Completa la solicitud en línea</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Llena el formulario de solicitud en el portal de estudiantes.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Entrega documentación física</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Presenta tus documentos en el Departamento de Becas del instituto.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                  5
                </div>
                <div>
                  <h3 className="font-medium">Espera los resultados</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Los resultados se publicarán en la fecha indicada en la convocatoria.
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Tipos de Becas</h2>

          <Tabs defaultValue="academicas">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
              {becas.map((beca) => (
                <TabsTrigger key={beca.id} value={beca.id}>
                  {beca.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {becas.map((beca) => (
              <TabsContent key={beca.id} value={beca.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{beca.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{beca.description}</p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <FileCheck className="mr-2 h-5 w-5 text-blue-700" />
                          Requisitos
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {beca.requisitos.map((req, index) => (
                            <li key={index} className="text-gray-700">
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <Download className="mr-2 h-5 w-5 text-blue-700" />
                          Documentación
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {beca.documentos.map((doc, index) => (
                            <li key={index} className="text-gray-700">
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-blue-700" />
                        Fechas importantes
                      </h3>
                      <div className="bg-blue-50 p-4 rounded-md">
                        <div className="grid gap-2 md:grid-cols-3">
                          <div>
                            <p className="text-sm font-medium text-blue-800">Inicio de convocatoria</p>
                            <p className="text-gray-700">{beca.fechas.inicio}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-800">Cierre de convocatoria</p>
                            <p className="text-gray-700">{beca.fechas.cierre}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-800">Publicación de resultados</p>
                            <p className="text-gray-700">{beca.fechas.resultados}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Link href="/aspirantes/contacto">
                        <Button className="bg-blue-700 hover:bg-blue-800">Solicitar más información</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
