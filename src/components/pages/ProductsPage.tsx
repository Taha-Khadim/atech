'use client'

import { useState } from 'react'
import { useNavigation } from '@/store/navigation'
import {
  PRESSURE_PRODUCTS,
  TEMPERATURE_PRODUCTS,
  CONTAINER,
  LABEL_UPPER,
} from '@/data/site'
import { CheckIcon, ChevronIcon } from '@/components/shared/Icons'
import type { ProductCategory } from '@/types'

type Tab = 'pressure' | 'temperature' | 'flow' | 'level'

const TABS: { id: Tab; label: string }[] = [
  { id: 'pressure', label: 'Pressure Measurement' },
  { id: 'temperature', label: 'Temperature Measurement' },
  { id: 'flow', label: 'Flow Measurement' },
  { id: 'level', label: 'Level Measurement' },
]

export function ProductsPage() {
  const { navigate } = useNavigation()
  const [activeTab, setActiveTab] = useState<Tab>('pressure')
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const products = activeTab === 'pressure' ? PRESSURE_PRODUCTS : activeTab === 'temperature' ? TEMPERATURE_PRODUCTS : null

  return (
    <main>
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/products/pressure-measurment-2.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent" />
        <div className={`relative ${CONTAINER} py-16 sm:py-20`}>
          <div className="max-w-3xl">
            <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>Field Instruments</p>
            <h1 className="text-3xl sm:text-4xl font-light mb-3">Products &amp; Solutions</h1>
            <p className="text-gray-400 max-w-2xl text-sm">
              Accurate and reliable measurement instruments that play a critical role in your facility&apos;s
              operations. With 20 million+ devices installed worldwide, we have got you covered.
            </p>
            <div className="mt-5">
              <button
                onClick={() => navigate('contact')}
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
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setExpandedProduct(null) }}
                className={`px-4 py-2 text-[13px] font-normal uppercase tracking-[0.05em] transition-colors border-b-2 -mb-[17px] ${
                  activeTab === tab.id
                    ? 'text-[#00aa73] border-[#00aa73]'
                    : 'text-[#666] border-transparent hover:text-[#1c1c1c]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'pressure' && (
            <>
              <p className="text-[#666] text-sm leading-relaxed mb-6 max-w-4xl">
                Pressure measurement instruments have helped customers reduce downtime, operate more efficiently
                and enhance plant safety. Every product is designed with you in mind, as we put more insights and
                control in your hands, because no one knows your operations better than you.
              </p>
              <div className="w-full max-w-xl mb-8">
                <img src="/images/products/pt-500x200.jpg" alt="Pressure Measurement" className="w-full rounded" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {PRESSURE_PRODUCTS.map((cat) => (
                  <ProductCard
                    key={cat.title}
                    category={cat}
                    isExpanded={expandedProduct === cat.title}
                    onToggle={() => setExpandedProduct(expandedProduct === cat.title ? null : cat.title)}
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === 'temperature' && (
            <>
              <p className="text-[#666] text-sm leading-relaxed mb-6 max-w-4xl">
                Temperature Measurement Solutions deliver accurate and reliable temperature data to help keep your
                operations running smoothly. Our solutions are utilized in a wide variety of industrial applications
                around the world in various industries including oil and gas, chemical, food and beverage, and many more.
              </p>
              <div className="w-full max-w-xl mb-8">
                <img src="/images/products/temp01-500x200.jpg" alt="Temperature Measurement" className="w-full rounded" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {TEMPERATURE_PRODUCTS.map((cat) => (
                  <ProductCard
                    key={cat.title}
                    category={cat}
                    isExpanded={expandedProduct === cat.title}
                    onToggle={() => setExpandedProduct(expandedProduct === cat.title ? null : cat.title)}
                  />
                ))}
              </div>
            </>
          )}

          {(activeTab === 'flow' || activeTab === 'level') && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#f5f5f5] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg text-[#1c1c1c] mb-2">{activeTab === 'flow' ? 'Flow Measurement' : 'Level Measurement'}</h3>
              <p className="text-sm text-[#666] mb-4 max-w-md mx-auto">
                We offer a comprehensive range of {activeTab} instruments. Contact us for detailed product catalogs and specifications.
              </p>
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center px-6 py-2.5 bg-[#00aa73] hover:bg-[#008c5e] text-white text-[13px] uppercase tracking-[0.05em] transition-colors"
              >
                Request a Quote
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-10">
        <div className={CONTAINER}>
          <img src="/images/products/1425.webp" alt="Industrial Automation" className="w-full rounded" />
        </div>
      </section>

      <section className="py-10 bg-[#1a1a1a] text-white">
        <div className={`${CONTAINER} text-center`} onError={() => navigate('contact')}>
          <h2 className="text-2xl font-light mb-3">
            Looking for more information on our people, technology and solutions?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm mb-6">
            Contact our engineering team to discuss your measurement and automation requirements.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center px-8 py-2.5 bg-[#00aa73] hover:bg-[#008c5e] text-white text-[13px] font-normal uppercase tracking-[0.05em] transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  )
}

function ProductCard({ category, isExpanded, onToggle }: { category: ProductCategory; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white border border-gray-200 overflow-hidden group hover:border-[#00aa73] transition-colors">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full text-left mb-2"
        >
          <h3 className="text-[13px] font-semibold text-[#1c1c1c] group-hover:text-[#00aa73] transition-colors uppercase tracking-[0.05em]">
            {category.title}
          </h3>
          <ChevronIcon open={isExpanded} className="w-4 h-4 text-[#999]" />
        </button>
        <p className="text-sm text-[#666] leading-relaxed">{category.description}</p>
        {isExpanded && (
          <ul className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">
            {category.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#666]">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
