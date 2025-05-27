import Link from "next/link"
import {
  ArrowLeft,
  Clock,
  Briefcase,
  GraduationCap,
  FileText,
  Target,
  Search,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import PdfViewerDialog from "@/components/pdf-viewer-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function OfertaEducativaPage() {
  const carreras = [
    {
      id: "tic",
      nombre: "Ingeniería en Tecnologías de la Información y Comunicaciones",
      descripcion:
        "Forma profesionales especializados en el desarrollo, implementación y gestión de tecnologías de la información y comunicación para optimizar procesos y servicios.",
      duracion: "9 semestres",
      imagen: "/placeholder.svg?height=200&width=400",
      objetivo: "",
      perfilIngreso: "",
      perfilEgreso: [
        "Diseñar, implementar y administrar redes de cómputo y comunicaciones, bajo modelos y estándares internacionales, para satisfacer las necesidades de información de los sistemas sociales, garantizando aspectos de seguridad y calidad.",
        "Diseñar, desarrollar y mantener sistemas de bases de datos asegurando la integridad, disponibilidad y confidencialidad de la información almacenada.",
        "Integrar las diferentes arquitecturas de hardware y administrar plataformas de software para incrementar la productividad en las organizaciones.",
        "Implementar sistemas de seguridad bajo políticas internas de las organizaciones y estándares aceptados.",
        "Observar los aspectos legales del uso y explotación de las Tecnologías de la Información y Comunicaciones.",
        "Desarrollar e implementar sistemas de información para el control y la toma de decisiones utilizando metodologías basadas en estándares internacionales.",
        "Analizar, diseñar y programar dispositivos con software empotrado.",
        "Utilizar tecnologías y herramientas actuales y emergentes acordes a las necesidades del entorno.",
        "Integrar soluciones basadas en sistemas de comunicaciones que involucren tecnologías actuales y emergentes.",
        "Desempeñar funciones de consultoría y auditoría en el campo de las Tecnologías de la Información y Comunicaciones.",
        "Crear empresas en el ámbito de las Tecnologías de la Información y Comunicaciones.",
        "Administrar proyectos que involucren Tecnologías de la Información y Comunicaciones en las organizaciones conforme a requerimientos establecidos.",
      ],
      campoLaboral: [
        "Empresas de tecnología",
        "Departamentos de TI en organizaciones",
        "Consultoría tecnológica",
        "Desarrollo de aplicaciones móviles",
        "Gestión de servicios digitales",
      ],
      mision:
        "Formar profesionistas competentes en el diseño, desarrollo e implementación de soluciones innovadoras en tecnologías de la información y comunicación bajo estándares y certificaciones internacionales para satisfacer las necesidades de la sociedad y la industria en un entorno de respeto y bienestar del individuo y de la sociedad.",
      vision:
        "Ser una carrera consolidada, reconocida por su calidad educativa, que ofrece servicios tecnológicos al entorno, con profesores y laboratorios certificados con estándares internacionales de tecnología, desarrollando tecnología de vanguardia para solución de problemas del entorno social y productivo de la región.",
      asignaturas: [
        "Interacción Humano Computadora",
        "Negocios Electrónicos I",
        "Redes de Computadoras",
        "Sistemas Operativos I",
      ],
      reticulaPath: "/Reticula/reticula-tic.pdf",
      planEstudiosPath: "/Reticula/plan-tic.pdf",
    },
  ]

  // Datos de ofertas laborales para recién egresados
  const ofertasLaborales = [
    {
      empresa: "IBM México",
      puesto: "Trainee en Desarrollo de Software",
      area: "Tecnología / Desarrollo",
      modalidad: "Remoto / Híbrido",
      requisitos: "Ingeniería en Sistemas o afín, conocimientos en Java y Git",
      contacto: "careers.ibm.com / contacto: reclutamiento@ibm.com",
      url: "https://careers.ibm.com",
    },
    {
      empresa: "Grupo Bimbo",
      puesto: "Ingeniero Jr. de Mejora Continua",
      area: "Producción / Ingeniería",
      modalidad: "Presencial (CDMX)",
      requisitos: "Ingeniería Industrial, Excel avanzado",
      contacto: "bimbo.com/es/carreras / RH: talento@grupobimbo.com",
      url: "https://bimbo.com/es/carreras",
    },
    {
      empresa: "BBVA México",
      puesto: "Programa Jóvenes Profesionales",
      area: "Finanzas / Análisis / TI",
      modalidad: "Híbrido",
      requisitos: "Administración, Finanzas, TI; inglés básico",
      contacto: "bbva.com / contacto: talentos@bbva.com",
      url: "https://bbva.com",
    },
    {
      empresa: "Softtek",
      puesto: "Junior QA Tester",
      area: "TI / Calidad de Software",
      modalidad: "Remoto",
      requisitos: "Testing básico, interés en automatización",
      contacto: "softtek.com / RH: mx.reclutamiento@softtek.com",
      url: "https://softtek.com",
    },
    {
      empresa: "CEMEX",
      puesto: "Programa Talento Universitario",
      area: "Operaciones / Ingeniería",
      modalidad: "Presencial (varias sedes)",
      requisitos: "Ingeniería Civil, Industrial, Química, etc.",
      contacto: "cemex.com/careers / contacto: campuscemex@cemex.com",
      url: "https://cemex.com/careers",
    },
  ]

  const objetivosEducacionales = [
    {
      id: "OE1",
      descripcion:
        "Diseñan, implementan y administran redes de cómputo y comunicaciones, bajo estándares de seguridad de la información.",
    },
    {
      id: "OE2",
      descripcion: "Desarrollan software basado en metodologías emergentes.",
    },
    {
      id: "OE3",
      descripcion:
        "Desempeñan funciones de auditoría en el campo de las Tecnologías de la Información y Comunicaciones.",
    },
    {
      id: "OE4",
      descripcion:
        "Participan en proyectos de TI o crean empresas, en el ámbito de las tecnologías de la información bajo un marco legal.",
    },
  ]

  const atributosEgreso = [
    {
      id: "AE1",
      descripcion:
        "Identifica, formula y resuelve problemas complejos de desarrollo de software, utilizando técnicas, métodos, herramientas, estándares y normas para sistematizar procesos en las organizaciones, garantizando el almacenamiento de la información.",
    },
    {
      id: "AE2",
      descripcion:
        "Analiza, implementa y administra redes de computadoras para la transferencia de datos y comunicación de información, mediante estándares internacionales de seguridad informática en las organizaciones, aplicando el juicio ingenieril.",
    },
    {
      id: "AE3",
      descripcion:
        "Diseña e implementa soluciones utilizando las tecnologías de la información y comunicaciones, con una comunicación efectiva y trabajo en equipo que cumplan los requerimientos y necesidades del sector, tomando en cuenta viabilidad: económica, ambiental, social, política, tecnológica y de sostenibilidad.",
    },
    {
      id: "AE4",
      descripcion:
        "Identifica, formula y resuelve problemas de ingeniería aplicando los principios y teorías de las ciencias básicas, así como técnicas, métodos y herramientas de ingeniería en tecnologías de la información y comunicaciones, conduciendo experimentaciones adecuadas.",
    },
    {
      id: "AE5",
      descripcion:
        "Implementa comunicación integral, clara y efectiva, con diferentes audiencias, expresando pensamientos, conocimientos y experiencias en el ámbito profesional, para el desempeño de sus funciones en el entorno laboral.",
    },
    {
      id: "AE6",
      descripcion:
        "Aplica el marco legal en el desempeño de funciones que involucren tecnologías de la información y comunicaciones en el entorno laboral, con responsabilidad y ética profesional.",
    },
    {
      id: "AE7",
      descripcion:
        "Identifica la necesidad de mantenerse actualizado en las nuevas tendencias de la Ingeniería en Tecnologías de la Información y Comunicaciones, que permita integrar y aplicar este conocimiento en su ejercicio profesional.",
    },
    {
      id: "AE8",
      descripcion:
        "Trabaja efectivamente en equipos de manera autónoma y autorregulada en los ámbitos de la Ingeniería en Tecnologías de la Información, estableciendo metas, tareas, fechas límites, analizando riesgos e incertidumbre.",
    },
    {
      id: "AE9",
      descripcion:
        "Implementa soluciones de seguridad y auditoría en tecnologías de la información y comunicaciones a través de técnicas, métodos, herramientas, estándares y normas para sistematizar procesos en las organizaciones para promover, mantener en criterios de calidad, eficiencia y productividad.",
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Oferta Educativa</h1>
        <p className="text-lg text-gray-600 mt-2">
          Conoce nuestra carrera
        </p>
      </div>

      {/* La sección de tarjetas de carreras ha sido eliminada */}

      <div className="space-y-16">
        {carreras.map((carrera) => (
          <div key={carrera.id} id={carrera.id} className="scroll-mt-20">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{carrera.nombre}</h2>
              <p className="text-gray-700">{carrera.descripcion}</p>
              <div className="flex items-center mt-2 text-gray-600">
                <Clock className="mr-2 h-4 w-4 text-blue-700" />
                <span>Duración: {carrera.duracion}</span>
              </div>
            </div>

            <Tabs defaultValue="informacion">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                <TabsTrigger value="informacion">Información General</TabsTrigger>
                <TabsTrigger value="perfiles">Perfiles</TabsTrigger>
                <TabsTrigger value="objetivos">Objetivos Educacionales</TabsTrigger>
                <TabsTrigger value="atributos">Atributos de Egreso</TabsTrigger>
                <TabsTrigger value="campo-laboral">Campo Laboral</TabsTrigger>
                <TabsTrigger value="plan-estudios">Plan de Estudios</TabsTrigger>
              </TabsList>

              <TabsContent value="informacion" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-blue-700" />
                      Misión y Visión
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {carrera.mision && (
                      <div>
                        <h3 className="font-medium text-blue-800 mb-2">Misión</h3>
                        <p className="text-gray-700">{carrera.mision}</p>
                      </div>
                    )}

                    {carrera.vision && (
                      <div>
                        <h3 className="font-medium text-blue-800 mb-2">Visión</h3>
                        <p className="text-gray-700">{carrera.vision}</p>
                      </div>
                    )}

                    {carrera.objetivo && (
                      <div>
                        <h3 className="font-medium text-blue-800 mb-2">Objetivo General</h3>
                        <p className="text-gray-700">{carrera.objetivo}</p>
                      </div>
                    )}

                    {carrera.asignaturas && carrera.asignaturas.length > 0 && (
                      <div>
                        <h3 className="font-medium text-blue-800 mb-2">Algunas Asignaturas</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {carrera.asignaturas.map((asignatura, index) => (
                            <li key={index} className="text-gray-700">
                              {asignatura}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="perfiles" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-blue-700" />
                      Perfiles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {carrera.perfilIngreso && (
                      <div>
                        <h3 className="font-medium text-blue-800 mb-2">Perfil de Ingreso</h3>
                        <p className="text-gray-700">{carrera.perfilIngreso}</p>
                      </div>
                    )}

                    {carrera.perfilEgreso && carrera.perfilEgreso.length > 0 && (
                      <div>
                        <h3 className="font-medium text-blue-800 mb-2">Perfil de Egreso</h3>
                        <div className="space-y-2 mt-4">
                          {carrera.perfilEgreso.map((item, index) => (
                            <div key={index} className="bg-blue-50 p-4 rounded-md">
                              <div className="flex items-start gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium text-sm flex-shrink-0 mt-0.5">
                                  {index + 1}
                                </div>
                                <p className="text-gray-700">{item}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(!carrera.perfilEgreso || carrera.perfilEgreso.length === 0) && (
                      <div className="bg-blue-50 p-4 rounded-md">
                        <p className="text-blue-800 text-sm">
                          Para conocer el perfil de egreso detallado, consulta el plan de estudios o comunícate con el
                          departamento académico.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="objetivos" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-blue-700" />
                      Objetivos Educacionales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Los egresados:</p>
                    <div className="space-y-4">
                      {objetivosEducacionales.map((objetivo) => (
                        <div key={objetivo.id} className="bg-blue-50 p-4 rounded-md">
                          <div className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium text-sm flex-shrink-0 mt-0.5">
                              {objetivo.id}
                            </div>
                            <p className="text-gray-700">{objetivo.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="atributos" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-700" />
                      Atributos de Egreso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">No.</TableHead>
                            <TableHead>Descripción</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {atributosEgreso.map((atributo) => (
                            <TableRow key={atributo.id}>
                              <TableCell className="font-medium">{atributo.id}</TableCell>
                              <TableCell>{atributo.descripcion}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="campo-laboral" className="mt-6">
                <Tabs defaultValue="areas">
                  <TabsList className="w-full">
                    <TabsTrigger value="areas">Áreas de Desarrollo</TabsTrigger>
                    <TabsTrigger value="ofertas">Ofertas Laborales</TabsTrigger>
                  </TabsList>

                  <TabsContent value="areas" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Briefcase className="mr-2 h-5 w-5 text-blue-700" />
                          Campo Laboral
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Como egresado de {carrera.nombre}, podrás trabajar en:</p>
                        <ul className="space-y-2">
                          {carrera.campoLaboral.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="ofertas" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Search className="mr-2 h-5 w-5 text-blue-700" />
                          Ofertas Laborales para Recién Egresados
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          A continuación se presentan oportunidades laborales activas dirigidas a recién egresados, con
                          información de contacto directo para facilitar el proceso de postulación.
                        </p>

                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Empresa</TableHead>
                                <TableHead>Puesto / Vacante</TableHead>
                                <TableHead>Área</TableHead>
                                <TableHead>Modalidad</TableHead>
                                <TableHead>Requisitos principales</TableHead>
                                <TableHead>Contacto / Postulación</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {ofertasLaborales.map((oferta, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{oferta.empresa}</TableCell>
                                  <TableCell>{oferta.puesto}</TableCell>
                                  <TableCell>{oferta.area}</TableCell>
                                  <TableCell>
                                    <Badge
                                      variant="outline"
                                      className={
                                        oferta.modalidad.includes("Remoto")
                                          ? "bg-green-50 text-green-700 border-green-200"
                                          : oferta.modalidad.includes("Híbrido")
                                            ? "bg-blue-50 text-blue-700 border-blue-200"
                                            : "bg-orange-50 text-orange-700 border-orange-200"
                                      }
                                    >
                                      {oferta.modalidad}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>{oferta.requisitos}</TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <span className="mr-2">{oferta.contacto}</span>
                                      <Link href={oferta.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4 text-blue-700" />
                                        <span className="sr-only">Visitar sitio</span>
                                      </Link>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-md">
                          <h3 className="font-medium text-blue-800 mb-2">Consejos para los Egresados</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                              <span>Ten tu CV actualizado y adaptado a la vacante.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                              <span>Mantén tu perfil de LinkedIn completo y profesional.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                              <span>Postúlate dentro de las fechas establecidas.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                              <span>
                                Si envías correo, incluye en el asunto: Postulación – Nombre del Puesto – Tu Nombre
                                Completo
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </TabsContent>

              <TabsContent value="plan-estudios" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-blue-700" />
                      Plan de Estudios
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        El plan de estudios de {carrera.nombre} está diseñado para brindarte los conocimientos y
                        habilidades necesarios para tu desarrollo profesional.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <PdfViewerDialog
                          title={`Plan de Estudios - ${carrera.nombre}`}
                          pdfPath={carrera.planEstudiosPath}
                          buttonText="Ver Plan de Estudios"
                        />
                        <PdfViewerDialog
                          title={`Retícula - ${carrera.nombre}`}
                          pdfPath={carrera.reticulaPath}
                          buttonText="Ver Retícula"
                          buttonVariant="outline"
                        />
                      </div>

                      <div className="bg-blue-50 p-4 rounded-md mt-4">
                        <p className="text-blue-800 text-sm">
                          Para más información sobre el plan de estudios, materias y créditos, te invitamos a contactar
                          directamente al departamento académico.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8">
              <Link href="/aspirantes/convocatoria">
                <Button className="bg-blue-700 hover:bg-blue-800">Solicitar más información</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
