import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function ACFooter() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-6 h-6 text-foreground"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M9 15h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">ClimaFresh</h3>
                <p className="text-xs opacity-80">Servicios de A/C</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Expertos en climatización residencial y automotriz con más de 15 años de experiencia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#servicios" className="hover:opacity-100 transition-opacity">
                  A/C Residencial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition-opacity">
                  A/C Automotriz
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition-opacity">
                  Mantenimiento
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition-opacity">
                  Instalación
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition-opacity">
                  Emergencias 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:opacity-100 transition-opacity">
                  Por Qué Elegirnos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>(555) 123-4567</li>
              <li>contacto@climafresh.com</li>
              <li>
                Av. Principal #123
                <br />
                Ciudad de México
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>&copy; 2025 ClimaFresh. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Política de Privacidad
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
