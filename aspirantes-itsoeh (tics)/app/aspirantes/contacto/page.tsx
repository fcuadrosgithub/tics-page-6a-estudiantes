"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form } from "@/components/ui/form"
import { CheckCircle } from "lucide-react"

// Definir el esquema de validación con zod
const formSchema = z.object({
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/, { message: "El nombre no debe contener números ni caracteres especiales" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  telefono: z
    .string()
    .min(10, { message: "El teléfono debe tener al menos 10 dígitos" })
    .regex(/^[0-9]+$/, { message: "Solo se permiten números" }),
  tipo: z.enum(["aspirante", "padre", "otro"], {
    required_error: "Debes seleccionar una opción",
  }),
  asunto: z.string({
    required_error: "Debes seleccionar un asunto",
  }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export default function ContactoPage() {
  const [formSuccess, setFormSuccess] = useState(false)

  // Inicializar el formulario con React Hook Form y zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      tipo: "aspirante",
      asunto: "",
      mensaje: "",
    },
  })

  // Función para manejar el envío del formulario
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    // Aquí iría la lógica para enviar el formulario a un servidor
    setFormSuccess(true)
    form.reset()

    // Ocultar el mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setFormSuccess(false)
    }, 5000)
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/aspirantes" className="inline-flex items-center text-blue-700 hover:text-blue-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Aspirantes
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-blue-900">Contacto</h1>
        <p className="text-lg text-gray-600 mt-2">Estamos aquí para resolver todas tus dudas</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Formulario de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nombre" className="flex items-center">
                          Nombre completo <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="nombre"
                          placeholder="Ingresa tu nombre completo"
                          {...form.register("nombre")}
                          className={form.formState.errors.nombre ? "border-red-500" : ""}
                          onKeyDown={(e) => {
                            // Prevenir la entrada de números
                            if (/^\d$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
                              e.preventDefault()
                            }
                          }}
                        />
                        {form.formState.errors.nombre && (
                          <p className="text-red-500 text-sm flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {form.formState.errors.nombre.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center">
                          Correo electrónico <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@ejemplo.com"
                          {...form.register("email")}
                          className={form.formState.errors.email ? "border-red-500" : ""}
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-500 text-sm flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="flex items-center">
                        Teléfono <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="telefono"
                        placeholder="Ingresa tu número telefónico"
                        {...form.register("telefono")}
                        className={form.formState.errors.telefono ? "border-red-500" : ""}
                      />
                      {form.formState.errors.telefono && (
                        <p className="text-red-500 text-sm flex items-center mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {form.formState.errors.telefono.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center">
                        ¿Eres aspirante o padre de familia? <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <RadioGroup
                        defaultValue="aspirante"
                        className="flex gap-4"
                        onValueChange={(value) => form.setValue("tipo", value as "aspirante" | "padre" | "otro")}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="aspirante" id="aspirante" />
                          <Label htmlFor="aspirante">Aspirante</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="padre" id="padre" />
                          <Label htmlFor="padre">Padre/Madre</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="otro" id="otro" />
                          <Label htmlFor="otro">Otro</Label>
                        </div>
                      </RadioGroup>
                      {form.formState.errors.tipo && (
                        <p className="text-red-500 text-sm flex items-center mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {form.formState.errors.tipo.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center">
                        Asunto <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select onValueChange={(value) => form.setValue("asunto", value)}>
                        <SelectTrigger className={form.formState.errors.asunto ? "border-red-500" : ""}>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admision">Proceso de admisión</SelectItem>
                          <SelectItem value="becas">Becas</SelectItem>
                          <SelectItem value="carreras">Información de carreras</SelectItem>
                          <SelectItem value="examen">Examen de ingreso</SelectItem>
                          <SelectItem value="costos">Costos y pagos</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.asunto && (
                        <p className="text-red-500 text-sm flex items-center mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {form.formState.errors.asunto.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje" className="flex items-center">
                        Mensaje <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        {...form.register("mensaje")}
                        className={form.formState.errors.mensaje ? "border-red-500" : ""}
                      />
                      {form.formState.errors.mensaje && (
                        <p className="text-red-500 text-sm flex items-center mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {form.formState.errors.mensaje.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensaje
                    </Button>
                  </div>

                  {formSuccess && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 border border-green-200 rounded-md flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-gray-600">
                    Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula Km. 2.5, Mixquiahuala de Juárez, Hidalgo, C.P.
                    42700
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Teléfonos</h3>
                  <p className="text-gray-600">(738) 725 1060</p>
                  <p className="text-gray-600">(738) 725 1061</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Correo electrónico</h3>
                  <p className="text-gray-600">admisiones@itsoeh.edu.mx</p>
                  <p className="text-gray-600">contacto@itsoeh.edu.mx</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Jefe de carrera de TIC's</h3>
                  <p className="text-gray-600">Lic. Juan Cornejo</p>
                  <p className="text-gray-600">jcornejo@itsoeh.edu.mx</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horario de Atención</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Lunes a Viernes:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábados:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800 mb-3">Departamentos</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Departamento de Servicios Escolares</h4>
                <p className="text-sm text-gray-600">Ext. 123 | escolares@itsoeh.edu.mx</p>
              </div>
              <div>
                <h4 className="font-medium">Departamento de Admisiones</h4>
                <p className="text-sm text-gray-600">Ext. 124 | admisiones@itsoeh.edu.mx</p>
              </div>
              <div>
                <h4 className="font-medium">Departamento de Becas</h4>
                <p className="text-sm text-gray-600">Ext. 125 | becas@itsoeh.edu.mx</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.473937761482!2d-99.22366068214261!3d20.205076747401048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3d66879fea89d%3A0xdd896a66614b30fb!2sITSOEH!5e0!3m2!1ses-419!2smx!4v1747530434705!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
