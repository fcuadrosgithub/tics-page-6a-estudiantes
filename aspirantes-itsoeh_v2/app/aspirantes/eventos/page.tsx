import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Award, Users, MapPin, Trophy, BookOpen, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import EventDetailDialog from "@/components/event-detail-dialog"

export default function EventosPage() {
  const eventos = [
    {
      id: 1,
      titulo: "Jornada Nacional de Tequios por la Paz y contra las Adicciones",
      fecha: "14 de mayo de 2025",
      hora: "Todo el día",
      lugar: "Campus ITSOEH",
      descripcion:
        "Estudiantes de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones-ITSOEH participarán en la 'Jornada Nacional de Tequios por la Paz y contra las Adicciones', esfuerzo conjunto del gobierno de México a través de la Secretaría de Educación Pública, la Secretaría del Trabajo y Previsión Social y el Instituto Mexicano de la Juventud. Esta jornada busca promover la paz y la prevención de adicciones a través de actividades de participación ciudadana como trabajos comunitarios y de recreación.",
      imagen: "/img/J_paz.jpg",
      categoria: "Participación Social",
    },
    {
      id: 2,
      titulo: "3er. Racing Cup TIC's, 2025",
      fecha: "Marzo 2025",
      hora: "9:00 AM - 6:00 PM",
      lugar: "Campus ITSOEH",
      descripcion:
        "Con gran éxito se realizó el '3er. Racing Cup TIC's, 2025', organizado por la Ing. en Tecnologías de la Información y Comunicaciones y con la participación de los Estudiantes de Educación Media Superior y Superior. Equipos ganadores en Categoría Senior: Primer Lugar: 'Puro TICs' (ITSOEH), Segundo Lugar: 'Hermes' (ITSOEH), Tercer Lugar: 'The Monster Herbie' (UTVM). Categoría Junior: Primer Lugar: 'Los Sumitos' (ITSOEH), Segundo Lugar: 'Code Wheels' (TecNM Atitalaquia), Tercer Lugar: 'Blackout Crew' (ITSOEH).",
      imagen: "/img/car_rc.jpg",
      categoria: "Competencia",
    },
    {
      id: 3,
      titulo: "Jornada Deportiva de Ingeniería en TIC's",
      fecha: "Febrero 2025",
      hora: "10:00 AM - 5:00 PM",
      lugar: "Instalaciones Deportivas ITSOEH",
      descripcion:
        "Con gran éxito se llevó a cabo la Jornada Deportiva del Programa Educativo de Ingeniería en TIC's. Los estudiantes participaron en las disciplinas de voleibol, baloncesto y fútbol. ¡Muchas felicidades a los equipos ganadores!",
      imagen: "/img/deport.jpg",
      categoria: "Deportivo",
    },
    {
      id: 4,
      titulo: "Competencia Nacional de Robótica y Habilidades STEM",
      fecha: "Enero 2025",
      hora: "9:00 AM - 7:00 PM",
      lugar: "Pachuca, Hidalgo",
      descripcion:
        "Estudiantes de la Ingeniería en Tecnologías de la Información y Comunicaciones (ITIC's) del ITSOEH participaron en la Competencia Nacional de Robótica y Habilidades STEM, en la Ciudad de Pachuca, Hidalgo, en la categoría de Robótica Móvil.",
      imagen: "/img/robotic.jpg",
      categoria: "Competencia",
    },
  ]

  const logros = [
    {
      id: 1,
      titulo: "Destacada participación en el 16.º Campeonato Nacional de Robótica y Habilidades STEM 2025",
      fecha: "Abril 2025",
      descripcion:
        "El ITSOEH felicita a estudiantes de Ingeniería en Tecnologías de la Información y Comunicaciones: José de Jesús Martínez Espinoza, Anette Vargas Monroy, Fernando García Moreno, José Manuel Cortes Cerón, Kaory Gissel Contreras Álvarez y Jesús Eduardo Vázquez Martínez, por su destacada participación y liderazgo en los equipos de Robótica Móvil representativos del ITSOEH en el 16.º Campeonato Nacional de Robótica y Habilidades STEM 2025. Asesor: Dr. Francisco Javier Cuadros Romero, docente de la Ingeniería en TIC's.",
      categoria: "Académico",
      imagen: "/img/jj_y_su_pandilla.jpg",
    },
    {
      id: 2,
      titulo: "Investigación publicada en la biblioteca digital del IEEE",
      fecha: "Marzo 2023",
      descripcion:
        "La SEP reconoce al estudiante Kevin Luciano Guadalupe, por su investigación 'Desarrollo de una DAPP en la red Rinkeby para el registro de sensores de un entorno de Internet de las Cosas (IoT)'. Su artículo será publicado en la biblioteca digital del Instituto de Ingenieros Eléctricos y Electrónicos (IEEE).",
      categoria: "Investigación",
      imagen: "/img/ieee.jpg",
    },
    {
      id: 3,
      titulo: "Primer lugar en el 3er. Racing Cup TIC's, 2025",
      fecha: "Marzo 2025",
      descripcion:
        "El equipo 'Puro TICs' de la Ingeniería en Tecnologías de la Información y Comunicaciones del ITSOEH obtuvo el primer lugar en la categoría Senior del 3er. Racing Cup TIC's, 2025. Además, el equipo 'Hermes' obtuvo el segundo lugar en la misma categoría.",
      categoria: "Competencia",
      imagen: "/img/car_rc_2.jpg",
    },
    {
      id: 4,
      titulo: "Acreditación de Excelencia Académica",
      fecha: "Enero 2025",
      descripcion:
        "El ITSOEH recibió la acreditación de excelencia académica por parte del Consejo de Acreditación de la Enseñanza de la Ingeniería (CACEI) para sus programas de ingeniería.",
      categoria: "Institucional",
      imagen: "/img/quien.jpg",
    },
  ]

  const proximosEventos = [
    {
      fecha: "14 de mayo de 2025",
      evento: "Jornada Nacional de Tequios por la Paz y contra las Adicciones",
      lugar: "Campus ITSOEH",
    },
    {
      fecha: "20 de mayo de 2025",
      evento: "Feria de Ciencias y Tecnología 2025",
      lugar: "Campus ITSOEH",
    },
    {
      fecha: "5 de junio de 2025",
      evento: "Hackathon ITSOEH 2025",
      lugar: "Centro de Cómputo",
    },
    {
      fecha: "15 de junio de 2025",
      evento: "Examen de Admisión",
      lugar: "Campus ITSOEH",
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Eventos y Logros</h1>
        <p className="text-lg text-gray-600 mt-2">Conoce nuestras actividades destacadas y logros institucionales</p>
      </div>

      <Tabs defaultValue="eventos" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="eventos">Eventos</TabsTrigger>
          <TabsTrigger value="logros">Logros Destacados</TabsTrigger>
        </TabsList>

        <TabsContent value="eventos" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {eventos.map((evento) => (
              <Card key={evento.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={evento.imagen || "/placeholder.svg"}
                    alt={evento.titulo}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{evento.categoria}</Badge>
                  </div>
                  <CardTitle className="text-lg">{evento.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-2 h-4 w-4 text-blue-700" />
                    <span>
                      {evento.fecha} | {evento.hora}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="mr-2 h-4 w-4 text-blue-700" />
                    <span>{evento.lugar}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">{evento.descripcion}</p>
                  <EventDetailDialog
                    title={evento.titulo}
                    description={evento.descripcion}
                    date={evento.fecha}
                    time={evento.hora}
                    location={evento.lugar}
                    category={evento.categoria}
                    image={evento.imagen}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-700" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proximosEventos.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-md text-center min-w-[60px]">
                      <div className="text-sm font-medium">
                        {item.fecha.split(" ")[1].substring(0, 3).toUpperCase()}
                      </div>
                      <div className="text-xl font-bold">{item.fecha.split(" ")[0]}</div>
                    </div>
                    <div>
                      <h3 className="font-medium">{item.evento}</h3>
                      <p className="text-sm text-gray-600">{item.lugar}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-6 w-6 text-blue-700" />
              <h3 className="text-lg font-medium text-blue-800">Participa en nuestros eventos</h3>
            </div>
            <p className="mb-4">
              El ITSOEH organiza regularmente eventos académicos, culturales y deportivos para enriquecer la experiencia
              universitaria de nuestros estudiantes. Te invitamos a participar activamente en estas actividades para
              desarrollar tus habilidades y conocer a otros estudiantes con intereses similares.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <BookOpen className="h-8 w-8 text-blue-700 mb-2" />
                <h4 className="font-medium mb-1">Eventos Académicos</h4>
                <p className="text-sm text-gray-600">Conferencias, talleres, hackathons y competencias.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <Users className="h-8 w-8 text-blue-700 mb-2" />
                <h4 className="font-medium mb-1">Eventos Culturales</h4>
                <p className="text-sm text-gray-600">Exposiciones, conciertos, teatro y danza.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <Trophy className="h-8 w-8 text-blue-700 mb-2" />
                <h4 className="font-medium mb-1">Eventos Deportivos</h4>
                <p className="text-sm text-gray-600">Torneos, competencias y actividades recreativas.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="logros" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {logros.map((logro) => (
              <Card key={logro.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <Image
                      src={logro.imagen || "/placeholder.svg"}
                      alt={logro.titulo}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200">{logro.categoria}</Badge>
                    <h3 className="font-medium mb-1 line-clamp-2">{logro.titulo}</h3>
                    <p className="text-sm text-gray-500 mb-2">{logro.fecha}</p>
                    <p className="text-sm text-gray-600 line-clamp-4">{logro.descripcion}</p>
                    <EventDetailDialog
                      title={logro.titulo}
                      description={logro.descripcion}
                      date={logro.fecha}
                      category={logro.categoria}
                      image={logro.imagen}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-blue-700" />
                Reconocimientos Institucionales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <Award className="h-8 w-8 text-blue-700" />
                  <div>
                    <h3 className="font-medium">Acreditación de Excelencia Académica</h3>
                    <p className="text-sm text-gray-600">
                      Otorgada por el Consejo de Acreditación de la Enseñanza de la Ingeniería (CACEI)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b">
                  <Award className="h-8 w-8 text-blue-700" />
                  <div>
                    <h3 className="font-medium">Certificación ISO 9001:2015</h3>
                    <p className="text-sm text-gray-600">
                      Sistema de Gestión de Calidad en procesos académicos y administrativos
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Award className="h-8 w-8 text-blue-700" />
                  <div>
                    <h3 className="font-medium">Reconocimiento a la Excelencia Educativa</h3>
                    <p className="text-sm text-gray-600">
                      Otorgado por la Secretaría de Educación Pública del Estado de Hidalgo
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="h-6 w-6 text-blue-700" />
              <h3 className="text-lg font-medium text-blue-800">Destacados en Tecnología e Innovación</h3>
            </div>
            <p className="mb-4">
              Nuestros estudiantes y docentes participan activamente en proyectos de investigación e innovación
              tecnológica, obteniendo reconocimientos a nivel nacional e internacional. Algunos de los campos en los que
              destacamos son:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-4">
              <div className="bg-white p-3 rounded-md text-center">
                <h4 className="font-medium text-blue-800">Robótica</h4>
              </div>
              <div className="bg-white p-3 rounded-md text-center">
                <h4 className="font-medium text-blue-800">Inteligencia Artificial</h4>
              </div>
              <div className="bg-white p-3 rounded-md text-center">
                <h4 className="font-medium text-blue-800">IoT</h4>
              </div>
              <div className="bg-white p-3 rounded-md text-center">
                <h4 className="font-medium text-blue-800">Desarrollo Sostenible</h4>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
