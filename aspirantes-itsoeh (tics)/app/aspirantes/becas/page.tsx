import Link from "next/link"
import { ArrowLeft, Download, Calendar, FileCheck, ExternalLink, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BecasPage() {
  const becas = [
    {
      id: "transformacion",
      title:
        "Becas para la Transformación de Estudiantes de Instituciones de Educación Superior en el Estado de Hidalgo",
      description: "Apoyo económico para estudiantes de instituciones de educación superior en el Estado de Hidalgo.",
      requisitos: [
        "Ser de nacionalidad mexicana o demostrar su residencia legal en el país y ser residente en el Estado de Hidalgo, comprobable mediante documento oficial que lo acredite, el cual, se tramitará en la presidencia municipal que corresponda, documento que tendrá una vigencia de 2 meses.",
        "Postularse a través del Sistema de Registro y Asignación de Becas para la Transformación de Estudiantes de Instituciones de Educación Superior (SiRAB), los periodos para la postulación serán anunciados por el enlace de becas de cada institución.",
      ],
      documentos: [
        "Clave Única de Registro de Población (CURP) actualizada, verificada por RENAPO.",
        "Cuenta personal activa de correo electrónico.",
        "Ficha escolar actualizada por parte de su IES participante.",
        "Solicitud de apoyo (anexo 1).",
        "Estudio socioeconómico, el cual se realiza a través del SiRAB (anexo 2,5 y 6).",
        "Acuse generado por el SiRAB del registro de la solicitud de Beca.",
        "Credencial para votar vigente del Estado de Hidalgo (INE).",
        "Comprobante médico en caso de discapacidad o embarazo.",
        "Carta de presentación de plaza de internado o servicio social (para estudiantes de Medicina).",
        "Carta de exposición de motivos en casos especiales (pérdida de padres, contingencias, etc.).",
        "Comprobante de domicilio no mayor a 2 meses.",
        "Registro Federal de Contribuyentes a 10 o 13 posiciones.",
      ],
      fechas: {
        inicio: "Por anunciar",
        cierre: "Por anunciar",
        resultados: "Por anunciar",
      },
      url: "https://becasparalatransformacion.seph.gob.mx/",
    },
    {
      id: "jovenes",
      title: "Jóvenes Escribiendo el Futuro",
      description: "Programa federal de becas para estudiantes de educación superior.",
      requisitos: [
        "Ser estudiante regular de una institución de educación superior.",
        "No recibir otra beca del gobierno federal.",
        "Registro en el Sistema Único de Beneficiarios de Educación Superior (SUBES).",
      ],
      documentos: ["CURP", "Identificación oficial", "Comprobante de domicilio", "Comprobante de estudios"],
      fechas: {
        inicio: "Febrero de 2025",
        cierre: "Febrero de 2025",
        resultados: "Marzo de 2025",
        entrega: "10 al 30 de abril de 2025",
      },
      url: "https://www.facebook.com/watch/?v=1348346739695259",
    },
    {
      id: "excelencia",
      title: "Beca de Excelencia (Institucional)",
      description: "Apoyo económico para estudiantes con excelente desempeño académico.",
      requisitos: [
        "Ser estudiante regular del ITSOEH.",
        "Contar con promedio sobresaliente.",
        "No tener materias reprobadas.",
      ],
      documentos: ["Solicitud de beca", "Historial académico", "Identificación oficial"],
      fechas: {
        inicio: "Por anunciar",
        cierre: "Por anunciar",
        resultados: "Por anunciar",
      },
      monto: "$800.00 MXN",
    },
    {
      id: "cultura",
      title: "Beca de Cultura y Deporte (Institucional)",
      description: "Apoyo económico para estudiantes destacados en actividades culturales o deportivas.",
      requisitos: [
        "Ser estudiante regular del ITSOEH.",
        "Participar activamente en actividades culturales o deportivas institucionales.",
        "Representar a la institución en eventos culturales o deportivos.",
      ],
      documentos: [
        "Solicitud de beca",
        "Constancia de participación en actividades culturales o deportivas",
        "Identificación oficial",
      ],
      fechas: {
        inicio: "Por anunciar",
        cierre: "Por anunciar",
        resultados: "Por anunciar",
      },
      monto: "$800.00 MXN",
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
                    Llena el formulario de solicitud en el portal correspondiente.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Entrega documentación física (si aplica)</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Presenta tus documentos en el Departamento de Becas del instituto cuando sea requerido.
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

          <Tabs defaultValue="transformacion">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
              {becas.map((beca) => (
                <TabsTrigger key={beca.id} value={beca.id}>
                  {beca.id === "transformacion"
                    ? "Transformación"
                    : beca.id === "jovenes"
                      ? "Jóvenes"
                      : beca.id === "excelencia"
                        ? "Excelencia"
                        : "Cultura y Deporte"}
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

                    {beca.monto && (
                      <div className="bg-blue-50 p-4 rounded-md mb-4">
                        <p className="font-medium text-blue-800">Monto: {beca.monto}</p>
                      </div>
                    )}

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
                          {beca.fechas.entrega && (
                            <div>
                              <p className="text-sm font-medium text-blue-800">Entrega de tarjetas</p>
                              <p className="text-gray-700">{beca.fechas.entrega}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      {beca.id === "transformacion" && (
                        <Button className="bg-blue-700 hover:bg-blue-800" asChild>
                          <Link href={beca.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Consultar más información
                          </Link>
                        </Button>
                      )}

                      {beca.id === "jovenes" && (
                        <Button className="bg-blue-700 hover:bg-blue-800" asChild>
                          <Link href={beca.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver videotutorial de registro
                          </Link>
                        </Button>
                      )}

                      {(beca.id === "excelencia" || beca.id === "cultura") && (
                        <Button className="bg-blue-700 hover:bg-blue-800" asChild>
                          <Link href="/aspirantes/contacto">
                            <Info className="mr-2 h-4 w-4" />
                            Solicitar más información
                          </Link>
                        </Button>
                      )}
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
