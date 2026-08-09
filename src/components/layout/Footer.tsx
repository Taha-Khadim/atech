import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { industries } from '@/data/industries';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image src={siteConfig.logo} alt="Automation Technology" width={140} height={36} className="max-h-[36px] w-auto brightness-0 invert mb-4" />
            <p className="text-[13px] leading-relaxed text-gray-500">
              Pakistan&apos;s leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration and Motion Control Equipment & Instrumentation.
            </p>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white text-[13px] font-semibold uppercase tracking-wide mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="text-[13px] text-gray-500 hover:text-white transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[13px] font-semibold uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-[13px] text-gray-500 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/festo-germany" className="text-[13px] text-gray-500 hover:text-white transition-colors">Festo Products</Link></li>
              <li><Link href="/about" className="text-[13px] text-gray-500 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-[13px] text-gray-500 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-[13px] font-semibold uppercase tracking-wide mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {siteConfig.contact.address}
              </p>
              <div className="space-y-1">
                {siteConfig.contact.phones.map((phone) => (
                  <p key={phone} className="text-[13px] text-gray-500">
                    <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition-colors">{phone}</a>
                  </p>
                ))}
              </div>
              <p className="text-[13px] text-gray-500">
                <a href={`mailto:${siteConfig.contact.emails.general}`} className="hover:text-white transition-colors">{siteConfig.contact.emails.general}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-gray-600">
            {siteConfig.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
