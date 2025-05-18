import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, FileText, AlertCircle, Clock, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConvocatoriaPage() {
  const fechasImportantes = [
    {
      fecha: "10 de febrero de 2025",
      evento: "Inicio de solicitud de fichas",
    },
    {
      fecha: "6 de junio de 2025",
      evento: "Cierre de solicitud de fichas",
    },
    {
      fecha: "20 de junio de 2025",
      evento: "Evaluación diagnóstica en línea",
    },
    {
      fecha: "25 de junio de 2025",
      evento: "Publicación de resultados",
    },
    {
      fecha: "Julio 2025",
      evento: "Inscripciones",
    },
    {
      fecha: "Agosto 2025",
      evento: "Inicio de clases",
    },
  ]

  const requisitos = [
    "Certificado o constancia de estudios de bachillerato donde especifique promedio mínimo de 7.0",
    "Acta de nacimiento",
    "CURP (emitido por la RENAPO)",
    "Contar con correo electrónico con dominio gmail",
    "Fotografía tamaño infantil en formato digital .jpg",
  ]

  const pasos = [
    {
      titulo: "Registro en línea",
      descripcion: "Ingresa al link para iniciar tu registro de ficha: https://fichas.itsoeh.edu.mx/",
    },
    {
      titulo: "Pago de derechos",
      descripcion: "Realiza el pago correspondiente al proceso de admisión.",
    },
    {
      titulo: "Subir documentación",
      descripcion: "Digitaliza y sube los documentos requeridos en formato PDF, por separado.",
    },
    {
      titulo: "Presentar evaluación",
      descripcion: "Realiza la evaluación diagnóstica en línea el 20 de junio de 2025.",
    },
    {
      titulo: "Consultar resultados",
      descripcion: "Verifica tus resultados el 25 de junio de 2025.",
    },
    {
      titulo: "Inscripción",
      descripcion: "Si fuiste aceptado, completa el proceso de inscripción en julio de 2025.",
    },
  ]

  const ofertaEducativa = [
    "Ingeniería en Tecnologías de la Información y Comunicaciones (TIC's)",
    "Ingeniería en Industrias Alimentarias",
    "Ingeniería en Logística",
    "Ingeniería Electromecánica",
    "Ingeniería en Gestión Empresarial",
    "Ingeniería en Sistemas Computacionales",
    "Ingeniería Civil",
    "Arquitectura",
    "Ingeniería Industrial",
  ]

  const modalidades = {
    escolarizada: [
      "Ingeniería en Sistemas Computacionales",
      "Ingeniería en Gestión Empresarial",
      "Ingeniería Industrial",
    ],
    mixta: ["Ingeniería en Sistemas Computacionales", "Ingeniería en Gestión Empresarial", "Ingeniería Industrial"],
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Convocatoria de Nuevo Ingreso</h1>
        <p className="text-lg text-gray-600 mt-2">Proceso de admisión para el ciclo escolar 2025-2026</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Alert className="bg-blue-50 border-blue-200">
            <AlertCircle className="h-4 w-4 text-blue-700" />
            <AlertTitle className="text-blue-800">Convocatoria abierta</AlertTitle>
            <AlertDescription>
              El proceso de admisión para el ciclo escolar 2025-2026 ya está abierto. Regístrate antes del 6 de junio de
              2025.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle className="text-xl">CONVOCATORIA 2025-2026</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                A todas las personas que deseen participar en el proceso de admisión al ciclo escolar 2025-2026,
                considerar la siguiente oferta educativa:
              </p>

              <div className="grid gap-2 sm:grid-cols-2 mb-6">
                {ofertaEducativa.map((carrera, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-md">
                    <p className="font-medium text-blue-800">{carrera}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h3 className="font-medium mb-2">Departamento de Control Escolar</h3>
                <p className="text-sm text-gray-600 mb-1">Horario: Lunes a viernes de 08:30 a 16:30 horas</p>
                <p className="text-sm text-gray-600 mb-1">Teléfono: 73873-54000 ext. 631, 632, 633 y 634</p>
                <p className="text-sm text-gray-600">Correo: fichas@itsoeh.edu.mx</p>
              </div>

              <Tabs defaultValue="modalidades">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="modalidades">Modalidades</TabsTrigger>
                  <TabsTrigger value="extranjeros">Estudiantes Extranjeros</TabsTrigger>
                </TabsList>
                <TabsContent value="modalidades" className="mt-4">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h3 className="font-medium text-blue-800 mb-2">MODALIDAD ESCOLARIZADA</h3>
                      <ul className="space-y-1">
                        {modalidades.escolarizada.map((carrera, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                            <span className="text-sm">{carrera}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h3 className="font-medium text-blue-800 mb-2">MODALIDAD MIXTA</h3>
                      <ul className="space-y-1">
                        {modalidades.mixta.map((carrera, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                            <span className="text-sm">{carrera}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="extranjeros" className="mt-4">
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="font-medium text-blue-800 mb-2">Requisitos para estudiantes extranjeros</h3>
                    <p className="text-sm">
                      Estudiantes extranjeros deberán tramitar su certificado de estudios revalidados en la
                      Subsecretaría de Educación Media Superior y Superior, ubicada en Circuito Ex Hacienda de la
                      Concepción, Lote 17, San Juan Tilcuautla, Municipio de San Agustín Tlaxiaca, Hidalgo.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-700" />
                Requisitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Contar con los siguientes documentos escaneados en formato PDF, por separado:</p>
              <ul className="space-y-2">
                {requisitos.map((requisito, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-700 mt-0.5" />
                    <span>{requisito}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Proceso de Admisión</h2>
            <div className="space-y-6">
              {pasos.map((paso, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{paso.titulo}</h3>
                    <p className="text-gray-600">
                      {paso.titulo === "Registro en línea" ? (
                        <>
                          Ingresa al link para iniciar tu registro de ficha:{" "}
                          <Link
                            href="https://fichas.itsoeh.edu.mx/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:underline inline-flex items-center"
                          >
                            https://fichas.itsoeh.edu.mx/
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </>
                      ) : (
                        paso.descripcion
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="https://fichas.itsoeh.edu.mx/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800">Iniciar registro</Button>
            </Link>
            <Link
              href="https://www.itsoeh.edu.mx/front/slider-images/docs/CONVOCATORIA%202025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full sm:w-auto border-blue-700 text-blue-700 hover:bg-blue-50">
                <FileText className="mr-2 h-4 w-4" />
                Descargar convocatoria PDF
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-700" />
                Fechas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fechasImportantes.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <p className="font-medium text-blue-800">{item.fecha}</p>
                    <p className="text-gray-600">{item.evento}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800 mb-3">Costos</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Proceso de admisión:</span>
                <span className="font-medium">$850.00 MXN</span>
              </div>
              <div className="flex justify-between">
                <span>Inscripción:</span>
                <span className="font-medium">$2,500.00 MXN</span>
              </div>
              <div className="flex justify-between">
                <span>Colegiatura semestral:</span>
                <span className="font-medium">$3,200.00 MXN</span>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              * Los costos pueden variar. Consulta la convocatoria oficial para más detalles.
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-700" />
                Proceso de Evaluación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Evaluación diagnóstica en línea</h3>
                <p className="text-sm text-gray-600">
                  La evaluación se realizará el 20 de junio de 2025. Recibirás instrucciones detalladas por correo
                  electrónico.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Resultados</h3>
                <p className="text-sm text-gray-600">
                  Los resultados se publicarán el 25 de junio de 2025 en la página oficial del instituto.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden border">
            <Image
              src="/img/adolfo.jpg"
              alt="Campus ITSOEH"
              width={300}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
