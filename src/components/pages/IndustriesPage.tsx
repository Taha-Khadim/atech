'use client'

import { useState } from 'react'
import {
  INDUSTRIES,
  INDUSTRY_GROUPS,
  CONTAINER,
  LABEL_UPPER,
} from '@/data/site'
import { ChevronIcon, CheckIcon } from '@/components/shared/Icons'
import type { Industry } from '@/types'

const INDUSTRY_DETAILS: Record<string, string> = {
  'Oil & Gas': 'Automation Technology provides comprehensive automation solutions for the oil and gas industry, from upstream exploration to downstream refining. Our process valve assemblies, pressure and temperature instruments, and control systems are engineered to withstand harsh environments and ensure safe, reliable operations. We serve drilling platforms, refineries, petrochemical plants, and pipeline networks with Festo pneumatic and electric automation products backed by global certifications.',
  'Chemical': 'The chemical industry demands corrosion-resistant, high-reliability automation components. We supply a full range of measurement instruments, control valves, pneumatic actuators, and process automation systems designed for chemical processing plants. Our solutions help maintain precise control over reaction parameters, ensuring product quality, safety, and environmental compliance in the most demanding chemical processing environments.',
  'Food & Beverage': 'Hygiene and precision are paramount in food and beverage production. We offer automation solutions that meet food-grade standards including IP69K protection, FDA-compliant materials, and washdown-ready components. Our portfolio includes pneumatic actuators for packaging lines, temperature and pressure sensors for processing, and complete control systems for batch and continuous production operations.',
  'Water & Wastewater': 'Reliable valve automation and flow control are essential for water treatment and distribution. We provide pressure transmitters, level sensors, flow meters, and automated valve assemblies optimized for water and wastewater applications. Our solutions help municipalities and industrial facilities maintain water quality, reduce energy consumption, and ensure regulatory compliance in treatment processes.',
  'Pharmaceutical': 'Pharmaceutical manufacturing requires the highest levels of precision, cleanliness, and traceability. We supply automation components that comply with GMP and FDA standards, including sanitary actuators, precision pressure and temperature controls, and cleanroom-compatible pneumatic systems. Our solutions support sterile manufacturing, quality control, and regulatory validation processes.',
  'Automotive & Transportation': 'The automotive industry demands high-speed, reliable automation for assembly, painting, and testing operations. We provide pneumatic and electric automation solutions including grippers, linear axes, electric cylinders, and complete handling systems. Our Festo product range supports everything from body-in-white assembly to final vehicle testing with the precision and speed automotive manufacturing requires.',
  'Pulp & Paper': 'Pulp and paper production is one of the most demanding industrial environments. We supply robust automation components that withstand high humidity, temperature extremes, and continuous operation. Our range includes heavy-duty actuators for paper machine sections, pressure and tension control systems, and process valves for chemical recovery and water treatment within pulp and paper mills.',
  'Power': 'From traditional fossil fuel power plants to modern renewable energy installations, we provide automation solutions that ensure reliable, efficient power generation. Our instrumentation covers boiler control, turbine monitoring, emissions monitoring, and grid stability systems. We also support emerging technologies including hydrogen production, battery storage, and smart grid infrastructure.',
  'Mining': 'Mining operations require heavy-duty, reliable automation capable of withstanding extreme conditions. We supply robust valve assemblies, pneumatic and hydraulic actuators, and control systems for mineral processing, material handling, and mine ventilation. Our solutions are engineered for the dust, vibration, and harsh environments typical of mining and mineral processing operations.',
  'Factory Automation': 'Factory automation encompasses a wide range of industries where discrete manufacturing and assembly processes benefit from pneumatic and electric automation. We provide complete solutions including pick-and-place systems, CNC machine automation, packaging line controls, and material handling systems. Our expertise spans from single-component supply to fully integrated production lines.',
  'Renewable Energy': 'The renewable energy sector requires specialized automation for solar tracking systems, wind turbine pitch and yaw control, hydrogen electrolysis, and energy storage systems. We supply precision actuators, sensors, and control systems optimized for the unique requirements of renewable energy generation, helping our customers maximize energy output and minimize maintenance costs.',
  'Data Centers': 'Data centers require precise environmental control for optimal server performance. We provide automation solutions for cooling systems, power distribution monitoring, fire suppression, and environmental sensing. Our HVAC actuators, temperature and humidity sensors, and pressure monitoring systems help maintain the precise conditions required for reliable data center operations.',
  'Cement': 'Cement production involves extreme temperatures, abrasive materials, and continuous heavy-duty operation. We supply automation components including high-temperature actuators for kiln and cooler systems, pressure and flow instruments for material transport, and control systems for the entire production process from raw material extraction to final product packaging.',
  'Iron & Steel': 'Iron and steel manufacturing is among the most demanding industrial processes. We provide robust automation solutions for blast furnace control, continuous casting, rolling mills, and coating lines. Our heavy-duty actuators, high-temperature sensors, and process control systems are engineered to withstand the extreme heat, dust, and mechanical stress of steel production facilities.',
}

export function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null)

  if (selectedIndustry) {
    return (
      <main>
        <button
          onClick={() => setSelectedIndustry(null)}
          className="inline-flex items-center gap-1 text-[13px] text-[#00aa73] hover:text-[#008c5e] transition-colors mb-6 ml-4 sm:ml-6 lg:ml-8 mt-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Industries
        </button>
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>Industry Detail</p>
              <h1 className="text-3xl font-normal text-[#1c1c1c] mb-4">{selectedIndustry.name}</h1>
              <p className="text-[#666] text-sm leading-relaxed">
                {INDUSTRY_DETAILS[selectedIndustry.name] || selectedIndustry.description}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="p-4 bg-[#f5f5f5] text-center">
                  <p className="text-lg font-light text-[#00aa73]">33,000+</p>
                  <p className="text-[11px] text-[#999] uppercase tracking-[0.05em]">Available Products</p>
                </div>
                <div className="p-4 bg-[#f5f5f5] text-center">
                  <p className="text-lg font-light text-[#00aa73]">24h</p>
                  <p className="text-[11px] text-[#999] uppercase tracking-[0.05em]">Express Delivery</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {selectedIndustry.image && (
                <img src={selectedIndustry.image} alt={selectedIndustry.name} className="w-full rounded aspect-[16/10] object-cover" />
              )}
              <div className="bg-[#f5f5f5] p-5">
                <h3 className="text-[13px] font-semibold text-[#1c1c1c] uppercase tracking-[0.05em] mb-3">Key Products</h3>
                <div className="space-y-2">
                  {['Pneumatic Actuators', 'Electric Actuators', 'Pressure Instruments', 'Temperature Instruments', 'Control Valves', 'Process Automation Systems'].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-[#666]"><CheckIcon />{p}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="bg-[#1a1a1a] text-white py-12">
        <div className={CONTAINER}>
          <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>Industries We Serve</p>
          <h1 className="text-3xl sm:text-4xl font-light mb-3">Solutions Across Industries</h1>
          <p className="text-gray-400 max-w-2xl text-sm">
            Automation Technology delivers industrial solutions purpose-built for the energy, infrastructure, and
            manufacture sectors, and engineered to drive a sustainable future.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.name}
                onClick={() => setSelectedIndustry(ind)}
                className="group relative overflow-hidden text-left"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#333]">
                  {ind.image ? (
                    <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <span className="text-xl font-light text-white/20">{ind.name}</span>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white">{ind.name}</h3>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-2 mt-1">{ind.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#f5f5f5]">
        <div className={CONTAINER}>
          {INDUSTRY_GROUPS.map((group, gi) => (
            <div key={group.title} className={gi > 0 ? 'mt-8' : ''}>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1c1c1c] mb-4 pb-2 border-b-2 border-[#00aa73]">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2.5 bg-white">
                    <CheckIcon />
                    <span className="text-[13px] text-[#1c1c1c]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
