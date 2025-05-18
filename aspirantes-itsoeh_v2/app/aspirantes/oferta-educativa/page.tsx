import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Clock,
  Briefcase,
  GraduationCap,
  ChevronRight,
  FileText,
  Target,
  Search,
  ExternalLink,
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
      id: "civil",
      nombre: "Ingeniería Civil",
      descripcion:
        "Forma profesionistas en ingeniería civil de manera integral, con visión humana, analítica, creativa y emprendedora, capaces de identificar y resolver problemas con eficiencia, eficacia y pertinencia.",
      duracion: "9 semestres",
      imagen: "/img/civil.jpg",
      objetivo:
        "Formar profesionistas en ingeniería civil de manera integral, con visión humana, analítica, creativa y emprendedora, capaces de identificar y resolver problemas con eficiencia, eficacia y pertinencia, mediante la planeación, diseño, construcción, operación y conservación de obras de infraestructura, en el marco de la globalización, la sustentabilidad y la calidad, contribuyendo al desarrollo de la sociedad.",
      perfilIngreso:
        "Es fundamental contar con habilidades matemáticas sólidas, capacidad analítica, creatividad para resolver problemas, facilidad para el diseño y la construcción de infraestructura, habilidades de comunicación efectiva, tener pensamiento lógico y estructurado, y trabajo en equipo.",
      perfilEgreso: [
        "Planea, proyecta, diseña, construye, opera y conserva obras hidráulicas y sanitarias, sistemas estructurales, vías terrestres, edificación y obras de infraestructura urbana e industrial para el desarrollo de la sociedad.",
        "Dirige equipos técnicos para determinar la factibilidad ambiental, económica, técnica y social de los proyectos de obras civiles.",
        "Formula y ejecuta proyectos de investigación para el desarrollo tecnológico en el ámbito de la Ingeniería Civil.",
        "Crea, adapta, innova y aplica tecnologías en los estudios, proyectos y construcción de obras civiles para los requerimientos de la sociedad.",
        "Administra proyectos para optimizar el uso de los recursos en el logro de los objetivos de las obras civiles.",
        "Emplea técnicas de control de calidad en los materiales y procesos constructivos para la seguridad y durabilidad de las obras de ingeniería civil.",
        "Utiliza tecnologías de la información y comunicación para la optimización de los proyectos de Ingeniería Civil.",
        "Emprende proyectos productivos pertinentes para el desarrollo sustentable de las comunidades.",
      ],
      campoLaboral: [
        "Empresas constructoras",
        "Consultorías de ingeniería",
        "Sector público en obras públicas",
        "Desarrollo inmobiliario",
        "Empresas de materiales de construcción",
      ],
      mision: "",
      vision: "",
      reticulaPath: "/Reticula/reticula-civil.pdf",
      planEstudiosPath: "/Reticula/plan-civil.pdf",
    },
    {
      id: "industrial",
      nombre: "Ingeniería Industrial",
      descripcion:
        "Prepara profesionales para optimizar procesos, mejorar la productividad y gestionar eficientemente los recursos en entornos industriales y de servicios.",
      duracion: "9 semestres",
      imagen: "/img/ind.jpg",
      objetivo: "",
      perfilIngreso: "Los aspirantes deberán contar con las siguientes características:",
      perfilEgreso: [
        "Diseña, mejora e integra sistemas productivos de bienes y servicios aplicando tecnologías para su optimización.",
        "Diseña, implementa y mejora sistemas de trabajo para elevar la productividad.",
        "Implanta sistemas de calidad utilizando métodos estadísticos para mejorar la competitividad de las organizaciones.",
        "Administra sistemas de mantenimiento en procesos de bienes y servicios para la optimización en el uso de los recursos.",
        "Gestiona sistemas de seguridad, salud ocupacional de manera sustentable, en sistemas productivos de bienes y servicios atendiendo los lineamientos legales.",
        "Formula, evalúa y gestiona proyectos de inversión, sociales y de transferencia de tecnología para el desarrollo regional.",
      ],
      campoLaboral: [
        "Industrias manufactureras",
        "Empresas de logística y transporte",
        "Consultoría en procesos y calidad",
        "Sector de servicios",
        "Emprendimiento propio",
      ],
      mision:
        "Somos un programa educativo que forma ingenieros industriales con enfoque integral y sustentable, que sean capaces de satisfacer las necesidades del sector productivo y de servicio, mediante la capacitación constante del personal docente e infraestructura de vanguardia.",
      vision:
        "Ser el referente educativo en la formación de Ingenieros Industriales, reconocido por la calidad de su servicio, que aplica, transfiere y genera conocimientos científicos y tecnológicos en beneficio de la sociedad. Mediante el nivel educativo docente que se integra a asociaciones colegiadas.",
      reticulaPath: "/Reticula/reticula-industrial.pdf",
      planEstudiosPath: "/Reticula/plan-industrial.pdf",
    },
    {
      id: "alimentarias",
      nombre: "Ingeniería en Industrias Alimentarias",
      descripcion:
        "Forma profesionales especializados en la producción, conservación, procesamiento y control de calidad de alimentos, aplicando tecnologías innovadoras y sustentables.",
      duracion: "9 semestres",
      imagen: "/img/alim.jpg",
      objetivo: "",
      perfilIngreso: "",
      perfilEgreso: [
        "Evalúa sistemas de producción para satisfacer los requerimientos de la industria alimentaria, considerando aspectos de factibilidad y sustentabilidad.",
        "Aplica e innova técnicas tradicionales y emergentes para la conservación de los alimentos.",
        "Selecciona empaques para preservar y comercializar alimentos.",
        "Inspecciona, controla y evalúa procesos, equipo e instalaciones para asegurar la inocuidad y calidad en la industria alimentaria.",
        "Aplica herramientas estadísticas para la toma de decisiones en la industria alimentaria.",
        "Conoce sistemas de gestión para cumplir con la normatividad nacional e internacional en la industria alimentaria.",
        "Aplica métodos de análisis para la estandarización de procesos y caracterización de productos en la industria alimentaria.",
        "Transfiere tecnologías para la transformación de alimentos.",
        "Desarrolla nuevos productos para incrementar su valor agregado en la industria alimentaria.",
        "Desarrolla tecnologías para el aprovechamiento de subproductos alimentarios.",
        "Desarrolla proyectos para la creación de empresas de alimentos.",
        "Diseña e imparte cursos de capacitación referentes a tópicos de la industria alimentaria en general.",
        "Desarrolla habilidades de liderazgo, emprendedora, trabajo inter- y multidisciplinario, comunicación oral y escrita para el desempeño profesional.",
        "Conoce y aplica un segundo idioma para el desarrollo de su profesión.",
      ],
      campoLaboral: [
        "Industria alimentaria",
        "Laboratorios de control de calidad",
        "Empresas de desarrollo de productos",
        "Organismos reguladores",
        "Emprendimiento en el sector alimentario",
      ],
      mision:
        "Formar profesionales en el área de la Industria Alimentaria a través de un programa acreditado, que propicie la preparación científico-tecnológica bajo una conciencia social-humanista. Con respeto a su entorno, que pueda afrontar exitosamente el desafío del sector alimentario de la Región y de México.",
      vision:
        "La carrera de Ingeniería en Industrias Alimentarias es un referente educativo de nivel superior, reconocido por la mejora continua de sus procesos educativos para la formación integral de sus egresados, quienes generan, aplican y transfieren conocimientos científicos y tecnológicos en beneficio de la sociedad con un respeto a su entorno.",
      reticulaPath: "/Reticula/reticula-alimentarias.pdf",
      planEstudiosPath: "/Reticula/plan-alimentarias.pdf",
    },
    {
      id: "electromecanica",
      nombre: "Ingeniería Electromecánica",
      descripcion:
        "Forma profesionales con conocimientos en electricidad, electrónica y mecánica para diseñar, mantener y mejorar sistemas electromecánicos.",
      duracion: "9 semestres",
      imagen: "/img/elect.jpg",
      objetivo: "",
      perfilIngreso: "",
      perfilEgreso: [
        "Formular, gestionar y evaluar proyectos de ingeniería relacionados con sistemas y dispositivos en el área electromecánica, proponiendo soluciones con tecnologías de vanguardia, en el marco del desarrollo sustentable.",
        "Diseñar e implementar sistemas y dispositivos electromecánicos, utilizando estrategias para el uso eficiente de la energía en los sectores productivo y de servicios apegado a normas y acuerdos nacionales e internacionales.",
        "Diseñar e implementar estrategias y programas para el control y/o automatización de los procesos productivos y los dispositivos en los sistemas electromecánicos.",
        "Proyectar, gestionar, implementar y controlar actividades de instalación y operación de los sistemas electromecánicos.",
        "Formular administrar y supervisar programas de mantenimiento para la continuidad y optimización de procesos productivos, considerando el cuidado del medio ambiente.",
        "Colaborar en proyectos de investigación para el desarrollo tecnológico, en el área de electromecánica.",
        "Ejercer actitudes de liderazgo y de trabajo en grupo para la toma de decisiones a partir de un sentido ético profesional.",
        "Desarrollar la actitud emprendedora mediante la creación e incubación de empresas, innovando en productos y servicios del sector electromecánico.",
        "Aplicar herramientas computacionales de acuerdo a las tecnologías de vanguardia, para el diseño, simulación y operación de sistemas electromecánicos acordes a la demanda del sector industrial.",
        "Interpretar comprender y comunicar ideas, textos y documentos de distinta índole en un segundo idioma.",
      ],
      campoLaboral: [
        "Industrias manufactureras",
        "Empresas de generación y distribución de energía",
        "Mantenimiento industrial",
        "Automatización y control",
        "Consultoría técnica",
      ],
      mision:
        "Formar profesionistas con sentido crítico e innovador, que contribuyan al sector productivo, social y de servicios promoviendo el desarrollo sustentable y el emprendimiento, aplicando el uso racional de los recursos mediante un programa educativo acreditado.",
      vision:
        "Consolidar al programa educativo a través de la acreditación, la calidad académica de sus docentes, la actualización de la infraestructura y equipamiento; y de la vinculación académica de sus docentes y alumnos.",
      reticulaPath: "/Reticula/reticula-electromecanica.pdf",
      planEstudiosPath: "/Reticula/plan-electromecanica.pdf",
    },
    {
      id: "sistemas",
      nombre: "Ingeniería en Sistemas Computacionales",
      descripcion:
        "Forma profesionales capaces de diseñar, desarrollar e implementar soluciones basadas en tecnologías de información para resolver problemas en diversos ámbitos.",
      duracion: "9 semestres",
      imagen: "/img/sistem.jpg",
      objetivo: "",
      perfilIngreso: "",
      perfilEgreso: [
        "Diseñar, configurar y administrar redes computacionales aplicando las normas y estándares vigentes.",
        "Desarrollar, implementar y administrar software de sistemas o de aplicación que cumpla con los estándares de calidad con el fin de apoyar la productividad y competitividad de las organizaciones.",
        "Coordinar y participar en proyectos interdisciplinarios.",
        "Diseñar e implementar interfaces hombre‐máquina y máquina‐máquina para la automatización de sistemas.",
        "Identificar y comprender las tecnologías de hardware para proponer, desarrollar y mantener aplicaciones eficientes.",
        "Diseñar, desarrollar y administrar bases de datos conforme a requerimientos definidos, normas organizacionales de manejo y seguridad de la información, utilizando tecnologías emergentes.",
        "Integrar soluciones computacionales con diferentes tecnologías, plataformas o dispositivos.",
        "Desarrollar una visión empresarial para detectar áreas de oportunidad que le permitan emprender y desarrollar proyectos aplicando las tecnologías de la información y comunicación.",
        "Desempeñar sus actividades profesionales considerando los aspectos legales, éticos, sociales y de desarrollo sustentable.",
        "Poseer habilidades metodológicas de investigación que fortalezcan el desarrollo cultural, científico y tecnológico en el ámbito de sistemas computacionales y disciplinas afines.",
        "Seleccionar y aplicar herramientas matemáticas para el modelado, diseño y desarrollo de tecnología computacional.",
      ],
      campoLaboral: [
        "Empresas de desarrollo de software",
        "Departamentos de TI en organizaciones",
        "Consultoría tecnológica",
        "Startups y emprendimientos tecnológicos",
        "Instituciones educativas y de investigación",
      ],
      mision:
        "Formar ingenieros en sistemas computacionales con conocimientos significativos y habilidades pertinentes; a través de una formación integral en un programa educativo certificado y acreditado con estándares de calidad, que den solución a los problemas de los sectores de la producción, transformación y de servicios.",
      vision:
        "Ser un programa educativo actualizado y reconocido por sus estándares de calidad académica, a través de la capacitación y certificación de docentes y estudiantes e infraestructura pertinente; para la formación de profesionistas competentes en el desarrollo de sistemas computacionales.",
      reticulaPath: "/Reticula/reticula-sistemas.pdf",
      planEstudiosPath: "/Reticula/plan-sistemas.pdf",
    },
    {
      id: "gestion",
      nombre: "Ingeniería en Gestión Empresarial",
      descripcion:
        "Prepara profesionales con habilidades técnicas y administrativas para gestionar eficientemente organizaciones y desarrollar proyectos empresariales.",
      duracion: "9 semestres",
      imagen: "/img/gest.jpg",
      objetivo: "",
      perfilIngreso: "",
      perfilEgreso: [
        "Desarrollar y aplicar habilidades directivas y la ingeniería en el diseño, creación, gestión, desarrollo, fortalecimiento e innovación de las organizaciones, con una orientación sistémica y sustentable para la toma de decisiones en forma efectiva.",
        "Diseñar e innovar estructuras administrativas y procesos, con base en las necesidades de las organizaciones para competir eficientemente en mercados globales.",
        "Gestionar eficientemente los recursos de la organización con visión compartida, con el fin de suministrar bienes y servicios de calidad.",
        "Aplicar métodos cuantitativos y cualitativos para el análisis e interpretación de datos y modelado de sistemas, en los procesos organizacionales para la mejora continua, atendiendo estándares de calidad mundial.",
        "Diseñar, evaluar y emprender nuevos negocios y proyectos empresariales, que promuevan el desarrollo sustentable y la responsabilidad social, en un mercado competitivo.",
        "Diseñar e implementar estrategias de mercadotecnia basadas en información recopilada de fuentes primarias y secundarias del consumidor o usuario de algún producto, de acuerdo a oportunidades y amenazas del mercado.",
        "Establecer programas para el fortalecimiento de la seguridad e higiene en las organizaciones.",
        "Gestionar sistemas integrales de calidad, ejerciendo un liderazgo efectivo y un compromiso ético, aplicando las herramientas básicas de la ingeniería.",
        "Interpretar y aplicar normas legales que incidan en la creación y desarrollo de las organizaciones.",
        "Integrar, dirigir y desarrollar equipos de trabajo para la mejora continua y el crecimiento integral de las organizaciones.",
        "Analizar e interpretar la información financiera para detectar oportunidades de mejora e inversión en un mundo global, que incidan en la rentabilidad del negocio.",
        "Utilizar las nuevas tecnologías de información en la organización, para optimizar los procesos de comunicación y eficientar la toma de decisiones.",
        "Propiciar el desarrollo del capital humano, para la realización de los objetivos organizacionales, dentro de un marco ético y un contexto multicultural.",
        "Aplicar métodos de investigación para desarrollar e innovar sistemas, procesos y productos en las diferentes dimensiones de la organización.",
        "Gestionar la cadena de suministros de las organizaciones con un enfoque orientado a procesos.",
        "Analizar e interpretar la economía global para facilitar la toma de decisiones en la organización.",
      ],
      campoLaboral: [
        "Empresas públicas y privadas",
        "Departamentos administrativos",
        "Consultoría empresarial",
        "Emprendimiento propio",
        "Instituciones financieras",
      ],
      mision:
        "Servir a la sociedad, grupos de interés, y a la comunidad estudiantil, a través de la formación de profesionistas en la Ingeniería en Gestión Empresarial, con conocimientos científicos y tecnológicos, bajo los estándares de acreditación del programa, que garantizan la calidad del proceso educativo, con el objetivo de generar y administrar proyectos económicamente rentables, sustentables, que contribuyan al desarrollo y calidad de vida de la sociedad y clientes en un marco de alto sentido humano.",
      vision:
        "Ser un programa educativo acreditado en sus dos modalidades, que permita ofrecer estudios de posgrado a través de recursos humanos competentes, capaces de generar y transmitir conocimientos, contribuyendo a un constante desarrollo de la sociedad, mediante la aplicación de los valores institucionales.",
      reticulaPath: "/Reticula/reticula-gestion.pdf",
      planEstudiosPath: "/Reticula/plan-gestion.pdf",
    },
    {
      id: "arquitectura",
      nombre: "Arquitectura",
      descripcion:
        "Forma profesionales capaces de diseñar, proyectar y dirigir la construcción de espacios habitables, combinando aspectos estéticos, funcionales y técnicos.",
      duracion: "10 semestres",
      imagen: "/img/arqui.jpg",
      objetivo: "",
      perfilIngreso: "",
      perfilEgreso: [
        "Diseñar proyectos urbano-arquitectónicos, respetando normas y criterios de diseño.",
        "Diseñar interiores y paisaje urbano para crear ambientes confortables y funcionales.",
        "Seleccionar y aplicar, materiales y sistemas constructivos que respondan a calidad e innovación.",
        "Gestionar desarrollos urbanos de manera estratégica y sustentable.",
        "Operar planes de desarrollo urbano con una visión de sustentabilidad y mejora de la calidad de vida.",
        "Seleccionar y diseñar estructuras, instalaciones y sistemas constructivos sustentables.",
        "Administrar el proceso constructivo de las obras urbano-arquitectónicas, con base en la legislación vigente.",
        "Asesorar a los sectores público y privado, en la valoración y conservación del patrimonio, re-arquitectura, proyectos de inversión inmobiliaria y legislación urbana.",
        "Liderar organismos y grupos inter y multidisciplinarios para la integración de proyectos urbano – arquitectónicos.",
        "Actuar de manera responsable y ética con la sociedad y su entorno.",
        "Desarrollar los valores de responsabilidad, orden y disciplina así como el entusiasmo por continuar su crecimiento personal y profesional.",
      ],
      campoLaboral: [
        "Despachos de arquitectura",
        "Empresas constructoras",
        "Desarrollo inmobiliario",
        "Sector público en desarrollo urbano",
        "Consultoría en diseño arquitectónico",
      ],
      mision:
        "Es misión de la carrera de Arquitectura del ITSOEH, formar profesionistas competentes y con valores éticos, comprometidos con la sociedad y el medio ambiente. Mediante la certificación y acreditación del Programa Educativo, fomentando y desarrollando la creatividad, y aplicando los conocimientos en el desarrollo de Proyectos Urbano-Arquitectónicos, Sustentables y Sostenibles que resuelvan necesidades de la zona de influencia del Instituto.",
      vision:
        "Somos un referente en el estado de Hidalgo, por la formación de Arquitectos experimentados en la realización de Proyectos Reales en beneficio de la Sociedad, que garantiza el reconocimiento de una formación profesional de calidad.",
      reticulaPath: "/Reticula/reticula-arquitectura.pdf",
      planEstudiosPath: "/Reticula/plan-arquitectura.pdf",
    },
    {
      id: "tic",
      nombre: "Ingeniería en Tecnologías de la Información y Comunicaciones",
      descripcion:
        "Forma profesionales especializados en el desarrollo, implementación y gestión de tecnologías de la información y comunicación para optimizar procesos y servicios.",
      duracion: "9 semestres",
      imagen: "/img/tics.jpg",
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
    {
      id: "logistica",
      nombre: "Ingeniería en Logística",
      descripcion:
        "Prepara profesionales para optimizar la cadena de suministro, gestionar inventarios y mejorar los procesos de distribución y transporte.",
      duracion: "9 semestres",
      imagen: "/img/log.jpg",
      objetivo:
        "Formar profesionistas en el área de Ingeniería en Logística, que diseñe y gestione los flujos de información, productos, recursos y materiales en la cadena de suministro de manera competitiva y sostenible.",
      perfilIngreso: "",
      perfilEgreso: [
        "Diseña, implementa e innova sistemas de abastecimiento y distribución de bienes y servicios para la satisfacción de la sociedad de forma sostenible.",
        "Dirige las actividades logísticas de transporte, seguridad interna y externa de bienes y servicios para alcanzar los objetivos de la organización en forma eficaz y eficiente.",
        "Administra el flujo de materiales en las organizaciones para mejorar los sistemas de abastecimiento y distribución a fin de cumplir con los requerimientos del cliente.",
        "Usa el software de modelado en sistemas logísticos para su diseño, operación y control reduciendo costos y tiempos de respuesta.",
        "Diseña y evalúa estrategias logísticas de operación en redes internas y externas para contribuir con la estrategia global de la organización considerando criterios de calidad y costos.",
        "Administra los procesos de la cadena de suministro en el sistema de producción para mejorar el servicio al cliente en un contexto colaborativo.",
        "Realiza la planeación estratégica del flujo de información, productos y materiales en el desarrollo de procesos logísticos para la competitividad en un entorno globalizado.",
        "Organiza y dirige grupos interdisciplinarios en las organizaciones, para la solución de problemas en la cadena de suministros de manera sinérgica.",
        "Desarrolla proyectos de investigación para optimizar la cadena de suministros bajo enfoques innovadores.",
        "Gestiona alianzas estratégicas con proveedores-clientes-competidores para operar en los mercados globales de manera exitosa.",
        "Realiza procesos de importación y exportación de productos y servicios para satisfacer las necesidades del cliente cumpliendo con la normatividad vigente.",
        "Diseña y selecciona envases y embalajes para el manejo, distribución y confinamiento de materiales y productos, bajo las normas aplicables.",
        "Utiliza tecnologías de información y comunicación, para el desarrollo de las operaciones de los procesos logísticos para su cumplimiento en tiempo y forma.",
        "Desarrolla y analiza indicadores de desempeño logístico para fortalecer la competitividad de la cadena de suministro en el entorno internacional.",
      ],
      campoLaboral: [
        "Empresas de logística y transporte",
        "Departamentos de logística en organizaciones",
        "Comercio internacional",
        "Consultoría en cadena de suministro",
        "Centros de distribución",
      ],
      mision:
        "Formar Ingenieros(as) en Logística competentes en diseño, administración y operación en la cadena de suministro con apego al marco legal nacional e internacional aplicable, utilizando las TIC para satisfacer las necesidades de manera ética, sustentable e integral del sector productivo y de servicio.",
      vision:
        "Ser un programa educativo reconocido en la región del Valle del Mezquital por su calidad en la formación de ingenieros(as) en Logística, que aplican y transfieren conocimientos científico – tecnológicos para el diseño y operación eficiente de la cadena de suministros, basado en la innovación en beneficio del sector productivo y de servicios.",
      reticulaPath: "/Reticula/reticula-logistica.pdf",
      planEstudiosPath: "/Reticula/plan-logistica.pdf",
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

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Oferta Educativa</h1>
        <p className="text-lg text-gray-600 mt-2">
          Conoce nuestras carreras y elige la que mejor se adapte a tus intereses
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {carreras.map((carrera) => (
          <Card key={carrera.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={carrera.imagen || "/placeholder.svg"}
                alt={carrera.nombre}
                width={400}
                height={200}
                className="h-full w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{carrera.nombre}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              <p className="text-sm text-gray-600">{carrera.descripcion}</p>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="mr-2 h-4 w-4 text-blue-700" />
                <span>Duración: {carrera.duracion}</span>
              </div>
              <a href={`#${carrera.id}`}>
                <Button variant="outline" className="w-full mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                  Ver detalles
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

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
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="informacion">Información General</TabsTrigger>
                <TabsTrigger value="perfiles">Perfiles</TabsTrigger>
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
