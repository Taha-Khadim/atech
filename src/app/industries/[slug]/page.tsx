import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { industries, getIndustryBySlug } from '@/data/industries';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Not Found' };
  return {
    title: `${industry.title} Industry Solutions | Automation Technology`,
    description: industry.shortDescription,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f7f8fa] border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-[12px] text-[#666]">
            <Link href="/" className="hover:text-[#003da5]">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-[#003da5]">Industries</Link>
            <span>/</span>
            <span className="text-[#1a1a1a] font-medium">{industry.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#003da5] text-white relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 flex items-center min-h-[260px]">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300 font-medium mb-2">Industry Solutions</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">{industry.title}</h1>
            <p className="text-[13px] text-gray-300 leading-relaxed max-w-xl">{industry.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Description + Stats */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">About {industry.title} Solutions</h2>
              <p className="text-[14px] text-[#444] leading-relaxed">{industry.fullDescription}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {industry.stats.map((stat) => (
                <div key={stat.label} className="bg-[#f7f8fa] p-4 text-center border border-[#e0e0e0]">
                  <div className="text-2xl font-bold text-[#003da5]">{stat.value}</div>
                  <div className="text-[11px] text-[#666] mt-1 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-14 bg-[#f7f8fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Applications</h2>
              <div className="space-y-2">
                {industry.applications.map((app) => (
                  <div key={app} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[#00aa73] mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-[#444]">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Key Products Used</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {industry.keyProducts.map((prod) => (
                  <div key={prod} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[#003da5] mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-[#444]">{prod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003da5] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">Need {industry.title} solutions?</h2>
            <p className="text-sm text-blue-200 mt-1">Our engineers have deep experience in {industry.title.toLowerCase()} automation.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center px-6 py-2.5 bg-[#00aa73] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#009663] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}