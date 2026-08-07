import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industries | Automation Technology',
  description: 'Automation solutions for Oil & Gas, Power, Mining & Metal, Food & Beverage, and Pulp & Paper industries.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f7f8fa] border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-[12px] text-[#666]">
            <Link href="/" className="hover:text-[#003da5]">Home</Link>
            <span>/</span>
            <span className="text-[#1a1a1a] font-medium">Industries</span>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Solutions by Industry"
            subtitle="We deliver tailored automation and measurement solutions for the most demanding industrial environments in Pakistan."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="border border-[#e0e0e0] overflow-hidden group hover:shadow-md hover:border-[#003da5]/30 transition-all"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-[18px] font-bold">{ind.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[13px] text-[#666] leading-relaxed mb-3">{ind.shortDescription}</p>
                  <span className="inline-flex items-center text-[11px] font-semibold text-[#003da5] uppercase tracking-wide gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}