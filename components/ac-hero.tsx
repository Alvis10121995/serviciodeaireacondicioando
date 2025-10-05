import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function ACHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-air-conditioning-unit-on-wall-in-clean-home.jpg"
          alt="Air conditioning"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Expertos en Aire Acondicionado
            <span className="block text-primary mt-2">Residencial y Automotriz</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Instalación, mantenimiento y reparación de sistemas de climatización para tu hogar y vehículo. Servicio
            profesional con más de 15 años de experiencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2 text-base px-8">
              <Phone className="w-5 h-5" />
              Contactar Ahora
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 bg-transparent">
              <Calendar className="w-5 h-5" />
              Agendar Cita
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Servicio de Emergencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
