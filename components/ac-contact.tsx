"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ACContact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Solicita tu Cotización Gratuita
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Contáctanos hoy mismo y recibe una evaluación sin compromiso. Estamos listos para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo
                    </label>
                    <Input id="name" placeholder="Juan Pérez" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Servicio
                  </label>
                  <select
                    id="service"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option>Aire Acondicionado Residencial</option>
                    <option>Aire Acondicionado Automotriz</option>
                    <option>Mantenimiento Preventivo</option>
                    <option>Servicio de Emergencia</option>
                    <option>Instalación de Equipo Nuevo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea id="message" placeholder="Cuéntanos sobre tu necesidad..." rows={4} />
                </div>

                <Button size="lg" className="w-full">
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground mb-2">Llámanos directamente</p>
                    <a href="tel:+525551234567" className="text-primary font-semibold hover:underline">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Correo Electrónico</h3>
                    <p className="text-muted-foreground mb-2">Escríbenos tu consulta</p>
                    <a href="mailto:contacto@climafresh.com" className="text-primary font-semibold hover:underline">
                      contacto@climafresh.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Ubicación</h3>
                    <p className="text-muted-foreground mb-2">Visítanos en nuestro taller</p>
                    <p className="text-foreground">
                      Av. Principal #123
                      <br />
                      Col. Centro, CP 12345
                      <br />
                      Ciudad de México
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Horario</h3>
                    <p className="text-muted-foreground mb-2">Estamos disponibles</p>
                    <p className="text-foreground">
                      Lun - Vie: 8:00 AM - 7:00 PM
                      <br />
                      Sábado: 9:00 AM - 5:00 PM
                      <br />
                      Emergencias: 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
