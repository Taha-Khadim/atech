'use client'

import { useNavigation } from '@/store/navigation'
import {
  INDUSTRIES,
  BRANDS,
  SERVICES,
  MEASUREMENT_TYPES,
  CONTAINER,
  LABEL_UPPER,
  HEADING2_UPPER,
} from '@/data/site'
import { ExternalLinkIcon, ButtonArrowIcon, ArrowRightIcon } from '@/components/shared/Icons'
import type { Page } from '@/types'

export function HomePage() {
  const { navigate } = useNavigation()

  return (
    <main>
      <HeroSection navigate={navigate} />
      <section className="py-8 lg:py-10">
        <div className={CONTAINER}>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-light text-[#1c1c1c] leading-relaxed max-w-4xl mx-auto text-center">
            Automation Technology combines advanced technologies, industry-leading expertise and an insatiable curiosity
            about the world to create sustainable solutions for our customers.
          </h2>
        </div>
      </section>
      <BrandsSection />
      <ServicesSection />
      <MeasurementFinderSection navigate={navigate} />
      <IndustrySolutionsSection navigate={navigate} />
      <CTASection />
    </main>
  )
}

function HeroSection({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src="/images/hero/hero-2.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent" />
      <div className={`relative ${CONTAINER} py-20 sm:py-28 lg:py-32`}>
        <div className="max-w-2xl">
          <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>Industrial Automation Solutions</p>
          <h1 className="text-3xl sm:text-4xl font-light leading-tight mb-5">
            Enhancing Safety and Reliability with Advanced Automation
          </h1>
          <p className="text-base text-gray-300 leading-relaxed mb-7 max-w-xl font-light">
            Pakistan&apos;s leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration and Motion Control Equipment &amp; Instrumentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('festo')}
              className="inline-flex items-center px-6 py-2.5 bg-[#00aa73] hover:bg-[#008c5e] text-white text-[13px] font-normal uppercase tracking-[0.05em] transition-colors"
            >
              Explore Festo Products <ButtonArrowIcon className="ml-2 w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center px-6 py-2.5 border border-white/40 hover:border-white text-white text-[13px] font-normal uppercase tracking-[0.05em] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandsSection() {
  return (
    <section className="py-10 bg-[#f5f5f5]">
      <div className={CONTAINER}>
        <p className={`${HEADING2_UPPER} text-[#666] mb-3`}>Our Principals</p>
        <h3 className="text-2xl font-normal text-[#1c1c1c] mb-8">Brands We Represent</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BRANDS.map((brand) => (
            <div
              key={brand.title}
              className="bg-white p-6 border border-gray-200 hover:border-[#00aa73] transition-colors text-left group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-11 h-11 rounded flex items-center justify-center"
                  style={{ backgroundColor: brand.color }}
                >
                  <span className="text-white font-bold text-lg">
                    {brand.link ? brand.title[0] : 'AT'}
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1c1c1c] group-hover:text-[#00aa73] transition-colors uppercase tracking-[0.05em]">
                    {brand.title}
                  </p>
                  <p className="text-[11px] text-[#999]">{brand.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed">{brand.description}</p>
              {brand.link && (
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-[12px] uppercase tracking-[0.05em] text-[#00aa73] hover:text-[#008c5e] transition-colors"
                >
                  Visit Website <ExternalLinkIcon />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-10">
      <div className={CONTAINER}>
        <p className={`${HEADING2_UPPER} text-[#666] mb-3`}>What We Offer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <div key={service.title} className="border border-gray-200 p-5 hover:border-[#00aa73] transition-colors">
              <h3 className="text-[13px] font-semibold text-[#1c1c1c] mb-2 uppercase tracking-[0.05em]">
                {service.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MeasurementFinderSection({ navigate }: { navigate: (p: Page) => void }) {
  const icons = ['M3 4h13M3 8h9m-9 4h6', 'M13 10V3L4 14h7v7l9-11h-7z', 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v10m6 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4']
  return (
    <section className="py-10 bg-[#f5f5f5]">
      <div className={CONTAINER}>
        <p className={`${HEADING2_UPPER} text-[#666] mb-3`}>Discover Products and Services</p>
        <h3 className="text-2xl font-normal text-[#1c1c1c] mb-3">We Help You Find Your Product</h3>
        <p className="text-[#666] text-sm mb-6">What type of measurement are you looking for?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MEASUREMENT_TYPES.map((m, i) => (
            <button
              key={m.title}
              onClick={() => navigate(m.page)}
              className="bg-white border border-gray-200 p-4 text-center hover:border-[#00aa73] hover:bg-[#f0faf6] transition-all"
            >
              <svg className="w-6 h-6 mx-auto mb-2 text-[#00aa73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[i % icons.length]} />
              </svg>
              <p className="text-[12px] font-semibold text-[#1c1c1c] leading-tight">{m.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustrySolutionsSection({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="py-10">
      <div className={CONTAINER}>
        <p className={`${HEADING2_UPPER} text-[#666] mb-3`}>Industry Solutions</p>
        <h3 className="text-2xl font-normal text-[#1c1c1c] mb-2">
          Automation Technology Solutions by Industry
        </h3>
        <p className="text-[#666] text-sm mb-8">
          Delivers industrial solutions purpose-built for the energy, infrastructure, and manufacture sectors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.slice(0, 6).map((ind) => (
            <button
              key={ind.name}
              onClick={() => navigate('industries')}
              className="group relative overflow-hidden text-left"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#333]">
                {ind.image ? (
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <span className="text-2xl font-light text-white/20">{ind.name}</span>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base font-semibold text-white mb-0.5">{ind.name}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{ind.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('industries')}
            className="inline-flex items-center text-[13px] font-normal uppercase tracking-[0.05em] text-[#00aa73] hover:text-[#008c5e] transition-colors"
          >
            View All Industries <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { navigate } = useNavigation()
  return (
    <section className="py-10 bg-[#1a1a1a] text-white">
      <div className={`${CONTAINER} text-center`}>
        <h2 className="text-2xl sm:text-3xl font-light mb-3">Ready to Automate?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-sm">
          Contact our engineering team to discuss your automation requirements.
        </p>
        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center px-8 py-2.5 bg-[#00aa73] hover:bg-[#008c5e] text-white text-[13px] font-normal uppercase tracking-[0.05em] transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </section>
  )
}
