'use client'

import { useState } from 'react'
import { useNavigation } from '@/store/navigation'
import {
  FESTO_STATS,
  FESTO_CERTIFICATIONS,
  FESTO_PRODUCTS,
  FESTO_AUTH_DETAILS,
  CONTAINER,
  LABEL_UPPER,
} from '@/data/site'
import { CheckIcon, ChevronIcon } from '@/components/shared/Icons'

export function FestoPage() {
  const [showCert, setShowCert] = useState(false)

  return (
    <main>
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/festo/festo.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]/70" />
        <div className={`relative ${CONTAINER} py-16 sm:py-20`}>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-light mb-3">FESTO</h1>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl font-light">
              The spirit of invention is deeply rooted in our corporate culture. Since our foundation, we have been
              setting standards in the development of innovative solutions that meet the requirements of our customers.
              Our goal remains unchanged: to make collaboration between people and machines even better and easier.
            </p>
            <div className="mt-5">
              <button
                onClick={() => setShowCert(!showCert)}
                className="inline-flex items-center px-6 py-2.5 bg-[#00aa73] hover:bg-[#008c5e] text-white text-[13px] font-normal uppercase tracking-[0.05em] transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className={CONTAINER}>
          <h2 className="text-2xl font-normal text-[#1c1c1c] mb-3">
            Prime Movers In The Field Of Automation And Technical Education
          </h2>
          <p className="text-[#666] text-sm leading-relaxed mb-6 max-w-4xl">
            Each and every day at Festo, we pursue the goal of making tomorrow&apos;s working world more productive,
            simpler and more sustainable. That is why we develop solutions for automation and technical education that
            prepare people, companies and organizations for the digital future in production, and for new technologies.
          </p>
          <img src="/images/festo/festo.webp" alt="Festo" className="w-full max-w-2xl rounded" />
        </div>
      </section>

      <section className="py-10 bg-[#f5f5f5]">
        <div className={CONTAINER}>
          <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>Actuators and Drives</p>
          <h2 className="text-2xl font-normal text-[#1c1c1c] mb-8">Product Categories</h2>
          <div className="space-y-8">
            {FESTO_PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProductCard product={FESTO_PRODUCTS[3]} />
            <div className="bg-white border border-gray-200 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/festo/VTUX.webp" alt="VTUX" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1c1c1c] mb-2">VTUX</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  The adaptable valve terminal provides maximum flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthorizationSection showCert={showCert} onToggle={() => setShowCert(!showCert)} />
      <FestoStatsSection />
      <CertificationsSection />
      <FestoBottomCTA />
    </main>
  )
}

function ProductCard({ product }: { product: (typeof FESTO_PRODUCTS)[0] }) {
  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-[16/10] overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#1c1c1c] mb-3">{product.title}</h3>
          <ul className="space-y-1.5">
            {product.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#666]">
                <CheckIcon />
                <a
                  href={product.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00aa73] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function AuthorizationSection({ showCert, onToggle }: { showCert: boolean; onToggle: () => void }) {
  return (
    <section className="py-10 border-b border-gray-200">
      <div className={CONTAINER}>
        <div className="bg-[#f5f5f5] p-5">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#00aa73] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-normal text-[#1c1c1c]">Official Authorization Confirmation</h2>
                  <p className="text-[11px] text-[#999] uppercase tracking-[0.1em]">Letter of Confirmation from Festo</p>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed mb-3">
                This confirms that <strong className="text-[#1c1c1c]">Automation Technology</strong>, S-42, 2nd
                Floor, Gulberg Center, Main Boulevard, Gulberg-III Lahore-54660-Pakistan, is authorized to sell Festo
                Industrial Automation products as our official distributor in the territory of Pakistan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {FESTO_AUTH_DETAILS.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-2 text-sm text-[#666]">
                    <CheckIcon />
                    <span>
                      <span className="text-[#999]">{detail.label} </span>
                      <strong className="text-[#1c1c1c]">{detail.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={onToggle}
                className="inline-flex items-center text-[13px] text-[#00aa73] hover:text-[#008c5e] transition-colors"
              >
                {showCert ? 'Hide' : 'View'} Authorization Letter{' '}
                <ChevronIcon open={showCert} className="ml-1 w-4 h-4" />
              </button>
            </div>
            {showCert && (
              <div className="w-full lg:w-auto lg:max-w-sm">
                <img
                  src="/certificate.png"
                  alt="Festo Authorization Letter"
                  className="w-full max-h-[500px] object-contain border border-gray-200 bg-white"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FestoStatsSection() {
  return (
    <section className="py-10">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>About Festo</p>
            <h2 className="text-2xl font-normal text-[#1c1c1c] mb-5">A Global Leader in Industrial Automation</h2>
            <div className="space-y-3 text-[#666] leading-relaxed text-sm">
              <p>
                Founded in 1925, Festo is a leading worldwide supplier of industrial automation and technical education.
                With an annual turnover of 3.2 billion Euro and over 20,100 employees, Festo operates in 176 countries
                through 61 subsidiaries and more than 250 branch offices.
              </p>
              <p>
                Comprehensive portfolio spans pneumatic and electric automation, process automation, and learning systems.
                With over 33,000 catalogue products and more than 15,000 customer solutions developed every year, Festo
                maintains an R&amp;D quota of 8% of total revenue, filing 100 new patents annually.
              </p>
              <p>
                Worldwide production network includes facilities in Germany, Switzerland, USA, Brazil, India, China,
                Bulgaria, Czech Republic, and Hungary. Serves over 300,000 industry customers and 56,000 didactic
                customers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {FESTO_STATS.map((s) => (
              <div key={s.label} className="text-center p-3 bg-[#f5f5f5]">
                <p className="text-xl font-light text-[#00aa73]">{s.value}</p>
                <p className="text-[11px] text-[#999] mt-1 uppercase tracking-[0.05em]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  return (
    <section className="py-10 bg-[#f5f5f5]">
      <div className={CONTAINER}>
        <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>Quality &amp; Compliance</p>
        <h2 className="text-2xl font-normal text-[#1c1c1c] mb-8">Product Certifications &amp; Approvals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FESTO_CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="bg-white p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-semibold text-[#1c1c1c]">{cert.name}</h3>
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#999] bg-[#f5f5f5] px-2 py-0.5">
                  {cert.type}
                </span>
              </div>
              <p className="text-[12px] text-[#666]">{cert.description || cert.scope}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FestoBottomCTA() {
  const { navigate } = useNavigation()
  return (
    <section className="py-10 bg-[#1a1a1a] text-white">
      <div className={`${CONTAINER} text-center`}>
        <h2 className="text-2xl font-light mb-3">
          Looking for more information on our people, technology and solutions?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm mb-6">
          Contact our team to discuss your Festo automation requirements.
        </p>
        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center px-8 py-2.5 bg-[#00aa73] hover:bg-[#008c5e] text-white text-[13px] font-normal uppercase tracking-[0.05em] transition-colors"
        >
          Contact Us
        </button>
      </div>
    </section>
  )
}
