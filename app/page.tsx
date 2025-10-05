import { ACHeader } from "@/components/ac-header"
import { ACHero } from "@/components/ac-hero"
import { ACServices } from "@/components/ac-services"
import { ACBenefits } from "@/components/ac-benefits"
import { ACGallery } from "@/components/ac-gallery"
import { ACContact } from "@/components/ac-contact"
import { ACFooter } from "@/components/ac-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ACHeader />
      <ACHero />
      <ACGallery />
      <ACServices />
      <ACBenefits />
      <ACContact />
      <ACFooter />
    </main>
  )
}
