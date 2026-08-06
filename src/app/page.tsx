'use client'

import { useNavigation } from '@/store/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/components/pages/HomePage'
import { FestoPage } from '@/components/pages/FestoPage'
import { ProductsPage } from '@/components/pages/ProductsPage'
import { IndustriesPage } from '@/components/pages/IndustriesPage'
import { AboutPage } from '@/components/pages/AboutPage'
import { ContactPage } from '@/components/pages/ContactPage'

const PAGES = {
  home: <HomePage />,
  festo: <FestoPage />,
  products: <ProductsPage />,
  industries: <IndustriesPage />,
  about: <AboutPage />,
  contact: <ContactPage />,
} as const

export default function Page() {
  const { currentPage } = useNavigation()

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1c1c1c]">
      <Header />
      <div className="flex-1" id="contact">
        {PAGES[currentPage]}
      </div>
      <Footer />
    </div>
  )
}
