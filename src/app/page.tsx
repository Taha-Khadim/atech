import Link from 'next/link';
import { Gauge, Thermometer, Waves, Layers, FlaskConical, Scale, Monitor, History, Globe, Wrench, ArrowRight, Settings, ClipboardCheck, Cpu } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { measurementCategories, services } from '@/data/products';
import { industries } from '@/data/industries';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gauge, Thermometer, Waves, Layers, FlaskConical, Scale,
  Settings, ClipboardCheck, Cpu,
};

const features = [
  { icon: Monitor, title: 'Unrivaled Industrial Software', desc: 'Advanced process automation software solutions for modern industrial operations.' },
  { icon: History, title: 'Legacy of Innovation', desc: '18+ years delivering cutting-edge automation technology across Pakistan.' },
  { icon: Wrench, title: 'Proven Expertise', desc: 'Specialized engineering team with deep domain knowledge.' },
  { icon: Globe, title: 'Global Support', desc: 'Partnered with world-leading manufacturers for comprehensive solutions.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#003da5] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex items-center min-h-[400px]">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300 font-medium mb-3">Industrial Automation & Instrumentation</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Open New Automation Mind
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 max-w-xl">
              Pakistan&apos;s leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration and Motion Control Equipment. Authorized Festo distributor.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-2.5 bg-[#00aa73] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#009663] transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 border border-white/30 text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="py-12 bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-5 rounded-sm border border-[#e0e0e0] hover:border-[#003da5]/30 hover:shadow-sm transition-all">
                <div className="flex-shrink-0 w-10 h-10 bg-[#003da5]/10 flex items-center justify-center rounded-sm">
                  <f.icon size={20} className="text-[#003da5]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-1">{f.title}</h3>
                  <p className="text-[12px] text-[#666] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Products & Services */}
      <section className="py-14 bg-[#f7f8fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Discover Products & Services"
            subtitle="Comprehensive automation and measurement solutions for every industry"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Settings;
              return (
                <div key={s.title} className="bg-white p-6 border border-[#e0e0e0] hover:border-[#003da5]/30 hover:shadow-md transition-all group">
                  <Icon size={28} className="text-[#003da5] mb-3" />
                  <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#666] leading-relaxed mb-4">{s.description}</p>
                  <Link href="/products" className="inline-flex items-center text-[12px] font-semibold text-[#003da5] uppercase tracking-wide hover:underline group-hover:gap-2 gap-1 transition-all">
                    Discover Now <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measurement Finder */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="We help you find your product"
            subtitle="Browse our measurement categories to find the right instrument for your application"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {measurementCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Gauge;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="bg-[#f7f8fa] p-5 text-center hover:bg-[#003da5] hover:text-white group transition-all border border-[#e0e0e0] hover:border-[#003da5]"
                >
                  <Icon size={28} className="mx-auto mb-3 text-[#003da5] group-hover:text-white" />
                  <h3 className="text-[13px] font-semibold text-[#1a1a1a] group-hover:text-white">{cat.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-14 bg-[#f7f8fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Solutions by Industry"
            subtitle="Tailored automation solutions for your specific industry"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-white border border-[#e0e0e0] overflow-hidden group hover:shadow-md hover:border-[#003da5]/30 transition-all"
              >
                <div className={`h-32 bg-gradient-to-br ${ind.gradient} flex items-center justify-center relative`}>
                  <span className="text-4xl font-bold text-white/15">{ind.iconLetter}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-[14px] font-semibold">{ind.title}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">{ind.title}</h3>
                  <p className="text-[12px] text-[#666] leading-relaxed line-clamp-2">{ind.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#003da5] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">Build your career in energy innovation</h2>
            <p className="text-sm text-blue-200 mt-1">Join our team of automation professionals shaping Pakistan&apos;s industrial future.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center px-6 py-2.5 bg-[#00aa73] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#009663] transition-colors"
          >
            Discover Now
          </Link>
        </div>
      </section>
    </>
  );
}