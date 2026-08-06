'use client'

import {
  COMPANY_STATS,
  LEADERS,
  WHY_CHOOSE_US,
  CONTAINER,
  HEADING2_UPPER,
} from '@/data/site'
import { CheckIcon } from '@/components/shared/Icons'

export function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-12">
        <div className={CONTAINER}>
          <div className="text-[12px] font-normal uppercase tracking-[0.15em] text-[#00aa73] mb-3">About Us</div>
          <h1 className="text-3xl sm:text-4xl font-light mb-4">Harness Your Industrial Intelligence</h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-normal text-[#1c1c1c] mb-6">Who We Are</h2>
              <div className="space-y-4 text-[#666] leading-relaxed text-sm">
                <p>
                  We are Pakistan&apos;s leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration
                  and Motion Control Equipment &amp; Instrumentation with Our Brands. We would like to offer our
                  services in your organization as registered supplier.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/about/what.webp" alt="Company Portfolio" className="w-full rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Portfolio & Stats */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className={CONTAINER}>
          <h2 className="text-2xl font-normal text-[#1c1c1c] mb-6">Company Portfolio</h2>
          <p className="text-[#666] text-sm leading-relaxed max-w-4xl mb-10">
            Automation Technology is a total solution provider in the fields of industrial automation. Automation
            Technology believes teamwork, encourage collaborative culture and closely working together. Automation
            Technology provides career growth and continuous learning opportunities to work across functions and
            places. Automation Technology maintains long term healthy relationship with its customers, technology
            partners and suppliers. The strong in-house technical expertise to provide total customer/product support
            has helped Automation Technology win the confidence and establish excellent rapport with end users of
            various industries &amp; markets and among Project Consultants, System Integrators, Companies executing
            turnkey packages. The emphasis on complete customer support has resulted in a large number of loyal
            customers across a wide variety of industries.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {COMPANY_STATS.map((s) => (
              <div key={s.label} className="text-center p-4 bg-white">
                <p className="text-2xl font-light text-[#00aa73]">{s.value}</p>
                <p className="text-[10px] text-[#999] mt-1 uppercase tracking-[0.05em]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-10">
        <div className={CONTAINER}>
          <h2 className="text-2xl font-normal text-[#1c1c1c] mb-4">Leadership</h2>
          <p className="text-[#666] text-sm mb-10">Meet the people shaping the future of industrial solutions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="text-center">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 mx-auto mb-3 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#444] flex items-center justify-center">
                    <span className="text-white text-2xl font-light">
                      {leader.name
                        .split(' ')
                        .map((w) => w[0])
                        .join('')}
                    </span>
                  </div>
                )}
                <h3 className="text-[14px] font-semibold text-[#1c1c1c]">{leader.name}</h3>
                <p className="text-[12px] text-[#999] uppercase tracking-[0.05em]">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className={CONTAINER}>
          <p className={`${HEADING2_UPPER} text-[#666] mb-3`}>Why Choose Us</p>
          <h3 className="text-2xl font-normal text-[#1c1c1c] mb-10">Why Choose Automation Technology</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="bg-white p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <CheckIcon />
                  <h3 className="text-[13px] font-semibold text-[#1c1c1c] uppercase tracking-[0.05em]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
