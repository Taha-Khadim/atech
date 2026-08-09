import Link from 'next/link';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
   title: 'Contact Us | Automation Technology',
  description: 'Get in touch with Automation Technology. Visit our Lahore office or contact us by phone and email for industrial automation solutions.',
};

const emailCards = [
  { label: 'General Inquiries', email: siteConfig.contact.emails.general, icon: Mail },
  { label: 'Sales Inquiries', email: siteConfig.contact.emails.sales, icon: Mail },
  { label: 'Technical Support', email: siteConfig.contact.emails.technical, icon: Mail },
];

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f7f8fa] border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-[12px] text-[#666]">
            <Link href="/" className="hover:text-[#003da5]">Home</Link>
            <span>/</span>
            <span className="text-[#1a1a1a] font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Map + Info */}
            <div className="lg:col-span-3 space-y-5">
              {/* Google Maps */}
              <div className="relative h-[360px] bg-[#f7f8fa] border border-[#e0e0e0] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.3436!3d31.5350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e6b4c0e0e1%3A0x1234567890!2sGulberg%20III%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Automation Technology Office Location"
                />
                <a
                  href="https://maps.google.com/?q=Gulberg+III+Lahore+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#1a1a1a] text-[11px] font-semibold rounded-sm shadow-md hover:shadow-lg transition-shadow border border-[#e0e0e0]"
                >
                  <ExternalLink size={12} />
                  Open in Maps
                </a>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-[#e0e0e0] p-5">
                  <MapPin size={20} className="text-[#003da5] mb-2" />
                  <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Address</h3>
                  <p className="text-[12px] text-[#666] leading-relaxed">{siteConfig.contact.address}</p>
                </div>
                <div className="border border-[#e0e0e0] p-5">
                  <Phone size={20} className="text-[#003da5] mb-2" />
                  <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Phone</h3>
                  <div className="space-y-1">
                    {siteConfig.contact.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="block text-[12px] text-[#666] hover:text-[#003da5] transition-colors">{phone}</a>
                    ))}
                  </div>
                </div>
                <div className="border border-[#e0e0e0] p-5">
                  <Clock size={20} className="text-[#003da5] mb-2" />
                  <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Business Hours</h3>
                  <p className="text-[12px] text-[#666]">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-[12px] text-[#666]">Sunday: Closed</p>
                </div>
              </div>

              {/* Email Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {emailCards.map((card) => (
                  <a
                    key={card.email}
                    href={`mailto:${card.email}`}
                    className="flex items-center gap-3 border border-[#e0e0e0] p-4 hover:border-[#003da5]/30 hover:bg-[#f7f8fa] transition-all group"
                  >
                    <card.icon size={18} className="text-[#003da5] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] text-[#999] uppercase tracking-wide">{card.label}</div>
                      <div className="text-[13px] text-[#003da5] font-medium truncate">{card.email}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">Send us a message</h2>
              <p className="text-[13px] text-[#666] mb-6">Fill out the form and our team will respond within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
