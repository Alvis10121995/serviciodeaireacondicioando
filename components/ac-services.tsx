import { Card, CardContent } from "@/components/ui/card"
import { Home, Car, Wrench, Thermometer } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Aire Acondicionado Residencial",
    description:
      "Instalación, mantenimiento y reparación de sistemas de climatización para tu hogar. Trabajamos con todas las marcas y modelos.",
    features: ["Instalación profesional", "Mantenimiento preventivo", "Reparaciones urgentes", "Limpieza de ductos"],
  },
  {
    icon: Car,
    title: "Aire Acondicionado Automotriz",
    description:
      "Servicio especializado para el sistema de A/C de tu vehículo. Diagnóstico computarizado y recarga de gas refrigerante.",
    features: ["Recarga de gas", "Diagnóstico computarizado", "Reparación de fugas", "Cambio de compresor"],
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description:
      "Planes de mantenimiento programado para garantizar el óptimo funcionamiento de tu equipo durante todo el año.",
    features: ["Revisión trimestral", "Limpieza de filtros", "Verificación de gas", "Reporte detallado"],
  },
  {
    icon: Thermometer,
    title: "Instalación de Equipos Nuevos",
    description:
      "Asesoría personalizada para elegir el equipo ideal según tus necesidades. Instalación profesional certificada.",
    features: ["Asesoría gratuita", "Cálculo de BTU", "Instalación certificada", "Configuración óptima"],
  },
]

export function ACServices() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones completas de climatización para tu hogar y vehículo con la mejor calidad y garantía del mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
