import { CheckCircle2, Award, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle2,
    title: "Técnicos Certificados",
    description:
      "Nuestro equipo cuenta con certificaciones oficiales y capacitación continua en las últimas tecnologías de climatización.",
  },
  {
    icon: Award,
    title: "Garantía de Calidad",
    description:
      "Todos nuestros servicios incluyen garantía por escrito. Usamos únicamente repuestos originales y de primera calidad.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Cada cliente es único. Ofrecemos soluciones personalizadas según tus necesidades específicas y presupuesto.",
  },
  {
    icon: Zap,
    title: "Servicio Rápido",
    description:
      "Respetamos tu tiempo. Servicio eficiente sin comprometer la calidad. Disponibilidad inmediata para emergencias.",
  },
]

export function ACBenefits() {
  return (
    <section id="beneficios" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">¿Por Qué Elegirnos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Somos tu mejor opción en servicios de aire acondicionado. Calidad, experiencia y compromiso garantizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Image Section */}
        <div className="mt-16 rounded-xl overflow-hidden max-w-4xl mx-auto">
          <img src="/professional-technician-installing-air-conditionin.jpg" alt="Técnico profesional" className="w-full h-[400px] object-cover" />
        </div>
      </div>
    </section>
  )
}
