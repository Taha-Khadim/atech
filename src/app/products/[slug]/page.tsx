import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { measurementCategories, getProductBySlug } from '@/data/products';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return measurementCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Not Found' };
  return {
    title: `${product.title} | Automation Technology`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f7f8fa] border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-[12px] text-[#666]">
            <Link href="/" className="hover:text-[#003da5]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#003da5]">Products</Link>
            <span>/</span>
            <span className="text-[#1a1a1a] font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#003da5] text-white relative">
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 flex items-center min-h-[280px]">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300 font-medium mb-2">Measurement Solutions</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">{product.title}</h1>
            <p className="text-[13px] text-gray-300 leading-relaxed max-w-xl">{product.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Sub Products */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`${product.title} Instruments`}
            subtitle={`Explore our range of ${product.title.toLowerCase()} products`}
          />
          <div className="mt-8 space-y-6">
            {product.subItems.map((sub, idx) => (
              <div key={sub.name} className="border border-[#e0e0e0] grid grid-cols-1 md:grid-cols-3 gap-0 hover:shadow-md transition-shadow overflow-hidden">
                {/* Image */}
                <div className="relative min-h-[200px] bg-[#f7f8fa]">
                  {sub.image ? (
                    <Image
                      src={sub.image}
                      alt={sub.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-[#003da5]/20 text-4xl font-bold">{idx + 1}</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="md:col-span-2 p-6">
                  <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">{sub.name}</h3>
                  <p className="text-[13px] text-[#666] leading-relaxed mb-4">{sub.description}</p>
                  {sub.specs && sub.specs.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {sub.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[#00aa73] mt-0.5 flex-shrink-0" />
                          <span className="text-[12px] text-[#444]">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003da5] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">Need a {product.title} solution?</h2>
            <p className="text-sm text-blue-200 mt-1">Our application engineers can help you select the right product.</p>
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
