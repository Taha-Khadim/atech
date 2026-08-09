import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us | Automation Technology',
  description: 'Learn about Automation Technology - Pakistan\'s leading industrial automation company since 2006. Meet our leadership team.',
};

const leaders = [
  {
    name: 'Ghulam Sarwar Khan',
    title: 'CEO / Founder',
    image: '/images/leaders/ghulam-sarwar.jpg',
    bio: 'With over 25 years of experience in industrial automation, Ghulam Sarwar Khan founded Automation Technology with a vision to bring world-class automation solutions to Pakistan. His leadership has grown the company from a small trading firm to Pakistan\'s leading Festo distributor and instrumentation specialist.',
  },
  {
    name: 'Emaad Yaseen Saeed',
    title: 'Director',
    image: '/images/leaders/emaad-yasin.jpg',
    bio: 'Emaad Yaseen Saeed brings strategic vision and modern management practices to Automation Technology. He oversees business development, strategic partnerships and the company\'s expansion into new industrial sectors across Pakistan.',
  },
];

const stats = [
  { label: 'Years Experience', value: siteConfig.stats.yearsExperience.toString() },
  { label: 'Customers Served', value: siteConfig.stats.customers.toString() + '+' },
  { label: 'Projects Delivered', value: siteConfig.stats.projects.toString() + '+' },
  { label: 'Team Members', value: siteConfig.stats.employees.toString() + '+' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#003da5] text-white relative">
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex items-center min-h-[300px]">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300 font-medium mb-2">About Us</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Harness your industrial intelligence</h1>
            <p className="text-[13px] text-gray-300 leading-relaxed max-w-xl">
              Since {siteConfig.foundingYear}, Automation Technology has been Pakistan&rsquo;s trusted partner for industrial automation, measurement instrumentation and Festo pneumatic products.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">Who We Are</h2>
              <div className="space-y-3 text-[14px] text-[#444] leading-relaxed">
                <p>
                  Automation Technology is a leading Pakistani company specializing in industrial automation, process instrumentation and pneumatic systems. We are the authorized distributor of Festo Germany, the world leader in pneumatic and electric automation technology.
                </p>
                <p>
                  Headquartered in Lahore, we serve customers across Pakistan in industries including oil & gas, power generation, mining, food & beverage and pulp & paper. Our team of qualified engineers provides complete solutions from product selection through installation and commissioning.
                </p>
                <p>
                  We represent world-class manufacturers and deliver measurement solutions, project execution services and discrete automation systems that help our customers achieve operational excellence.
                </p>
              </div>
            </div>
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src="/images/hero/what.webp"
                alt="Automation Technology Portfolio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#f7f8fa] border-y border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#003da5]">{stat.value}</div>
                <div className="text-[12px] text-[#666] mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 bg-white" id="leadership">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Leadership" subtitle="Meet the people driving Automation Technology's growth and innovation." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {leaders.map((leader) => (
              <div key={leader.name} className="border border-[#e0e0e0] overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold text-[#1a1a1a]">{leader.name}</h3>
                  <p className="text-[12px] text-[#003da5] font-medium uppercase tracking-wide mb-2">{leader.title}</p>
                  <p className="text-[13px] text-[#666] leading-relaxed">{leader.bio}</p>
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
            <h2 className="text-xl font-bold text-white">Ready to partner with us?</h2>
            <p className="text-sm text-blue-200 mt-1">Let&rsquo;s discuss how we can help with your automation needs.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center px-6 py-2.5 bg-[#00aa73] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#009663] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}