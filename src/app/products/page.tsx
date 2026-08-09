import Link from 'next/link';
import type { Metadata } from 'next';
import { Gauge, Thermometer, Waves, Layers, FlaskConical, Scale, ArrowRight, Settings, ClipboardCheck, Cpu } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { measurementCategories, services } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products | Automation Technology',
  description: 'Complete range of industrial measurement instruments: pressure, temperature, flow, level, analysis and density measurement solutions.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gauge, Thermometer, Waves, Layers, FlaskConical, Scale,
  Settings, ClipboardCheck, Cpu,
};

export default function ProductsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f7f8fa] border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-[12px] text-[#666]">
            <Link href="/" className="hover:text-[#003da5]">Home</Link>
            <span>/</span>
            <span className="text-[#1a1a1a] font-medium">Products</span>
          </div>
        </div>
      </div>

      {/* Measurement Categories */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Measurement Products"
            subtitle="Precision instruments for all your process measurement needs. Click on a category to explore our full product range."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {measurementCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Gauge;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="border border-[#e0e0e0] p-6 hover:border-[#003da5]/30 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#003da5]/10 flex items-center justify-center rounded-sm">
                      <Icon size={24} className="text-[#003da5]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#1a1a1a] group-hover:text-[#003da5] transition-colors mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-[12px] text-[#666] leading-relaxed mb-3">{cat.shortDescription}</p>
                      <span className="inline-flex items-center text-[11px] font-semibold text-[#003da5] uppercase tracking-wide gap-1">
                        View Products <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 bg-[#f7f8fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Beyond products, we deliver complete solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Settings;
              return (
                <div key={s.title} id={s.title.toLowerCase().replace(/\s+/g, '-')} className="bg-white p-6 border border-[#e0e0e0]">
                  <Icon size={28} className="text-[#003da5] mb-3" />
                  <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003da5] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">Can&apos;t find what you need?</h2>
            <p className="text-sm text-blue-200 mt-1">Our engineers can help you select the right instrument for your application.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center px-6 py-2.5 bg-[#00aa73] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#009663] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}