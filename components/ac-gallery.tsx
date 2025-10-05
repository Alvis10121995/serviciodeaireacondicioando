"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    url: "/modern-air-conditioning-unit-on-wall-in-clean-home.jpg",
    alt: "Aire acondicionado residencial moderno",
    title: "Instalación Residencial",
  },
  {
    url: "/professional-technician-installing-air-conditionin.jpg",
    alt: "Técnico profesional instalando aire acondicionado",
    title: "Servicio Profesional",
  },
  {
    url: "/car-air-conditioning-repair-mechanic-working-on-au.jpg",
    alt: "Reparación de aire acondicionado automotriz",
    title: "Servicio Automotriz",
  },
  {
    url: "/modern-home-interior-with-wall-mounted-air-conditi.jpg",
    alt: "Sistema de climatización en hogar",
    title: "Climatización Integral",
  },
  {
    url: "/technician-performing-maintenance-on-commercial-ai.jpg",
    alt: "Mantenimiento preventivo",
    title: "Mantenimiento Preventivo",
  },
]

export function ACGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestro Trabajo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conoce algunos de nuestros proyectos y servicios realizados con excelencia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative rounded-2xl overflow-hidden bg-background shadow-xl">
            {/* Images */}
            <div className="relative h-[400px] md:h-[500px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-balance">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full w-12 h-12 shadow-lg"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full w-12 h-12 shadow-lg"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-5 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg overflow-hidden aspect-video transition-all ${
                  index === currentIndex ? "ring-4 ring-primary scale-105" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
