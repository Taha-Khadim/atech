import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Cog, Disc, Wind, Plug, Radio, Zap, Hand, ArrowRight, FileText, ExternalLink, ShieldCheck,
} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata: Metadata = {
  title: 'Festo Products | Automation Technology',
  description: 'Authorized Festo distributor in Pakistan. Pneumatic cylinders, valves, actuators, sensors, electric drives, handling systems and more.',
};

interface FestoCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  items: { name: string; link: string }[];
}

const festoCategories: FestoCategory[] = [
  {
    id: 'actuators',
    title: 'Actuators & Drives',
    icon: Cog,
    image: '/images/festo/pneumatic.jpg',
    items: [
      { name: 'Pneumatic Cylinders – Piston Rod', link: 'https://www.festo.com/us/en/p/pneumatic-cylinders_p_102497/' },
      { name: 'Round Cylinders', link: 'https://www.festo.com/us/en/p/pneumatic-cylinders-round_p_102530/' },
      { name: 'Compact Cylinders', link: 'https://www.festo.com/us/en/p/compact-cylinders_p_102506/' },
      { name: 'Profile Cylinders', link: 'https://www.festo.com/us/en/p/profile-cylinders_p_102511/' },
      { name: 'Rotary Actuators', link: 'https://www.festo.com/us/en/p/rotary-actuators_p_102655/' },
      { name: 'Electromechanical Actuators – Spindle', link: 'https://www.festo.com/us/en/p/spindle-actuators_p_102715/' },
      { name: 'Toothed Belt Axes', link: 'https://www.festo.com/us/en/p/toothed-belt-axes_p_102718/' },
      { name: 'Linear Axes', link: 'https://www.festo.com/us/en/p/linear-axes_p_102710/' },
      { name: 'Servopneumatic Positioning Systems', link: 'https://www.festo.com/us/en/p/servopneumatic-positioning-systems_p_102730/' },
    ],
  },
  {
    id: 'valves',
    title: 'Valves & Valve Manifolds',
    icon: Disc,
    image: '/images/festo/valves.jpg',
    items: [
      { name: 'Solenoid Valves', link: 'https://www.festo.com/us/en/p/solenoid-valves_p_102660/' },
      { name: 'Valve Terminals (VTUX)', link: 'https://www.festo.com/us/en/p/valve-terminals_p_102670/' },
      { name: 'Proportional Valves', link: 'https://www.festo.com/us/en/p/proportional-valves_p_102690/' },
      { name: 'Manual & Mechanical Valves', link: 'https://www.festo.com/us/en/p/manual-valves_p_102695/' },
    ],
  },
  {
    id: 'compressed-air',
    title: 'Compressed Air Preparation',
    icon: Wind,
    items: [
      { name: 'Filters', link: 'https://www.festo.com/us/en/p/air-preparation-units_p_102810/' },
      { name: 'Regulators', link: 'https://www.festo.com/us/en/p/pressure-regulators_p_102815/' },
      { name: 'Lubricators', link: 'https://www.festo.com/us/en/p/lubricators_p_102820/' },
      { name: 'FRC Units (Filter-Regulator-Lubricator)', link: 'https://www.festo.com/us/en/p/frc-units_p_102825/' },
    ],
  },
  {
    id: 'fittings',
    title: 'Pneumatic Fittings & Tubing',
    icon: Plug,
    items: [
      { name: 'Push-in Fittings', link: 'https://www.festo.com/us/en/p/push-in-fittings_p_102860/' },
      { name: 'Threaded Fittings', link: 'https://www.festo.com/us/en/p/fitting-accessories_p_102870/' },
      { name: 'Tubing (PU, PA, PE)', link: 'https://www.festo.com/us/en/p/tubing_p_102880/' },
    ],
  },
  {
    id: 'sensors',
    title: 'Sensors & Controls',
    icon: Radio,
    items: [
      { name: 'Proximity Sensors', link: 'https://www.festo.com/us/en/p/sensors_p_102900/' },
      { name: 'Pressure Switches', link: 'https://www.festo.com/us/en/p/pressure-sensors_p_102910/' },
      { name: 'Optical Sensors', link: 'https://www.festo.com/us/en/p/optical-sensors_p_102920/' },
      { name: 'Position Transmitters', link: 'https://www.festo.com/us/en/p/position-transmitters_p_102930/' },
    ],
  },
  {
    id: 'electric-drives',
    title: 'Electric Drives & Controls',
    icon: Zap,
    image: '/images/festo/electric.jpg',
    items: [
      { name: 'Servo Motors', link: 'https://www.festo.com/us/en/p/servo-motors_p_102950/' },
      { name: 'Stepper Motors', link: 'https://www.festo.com/us/en/p/stepper-motors_p_102960/' },
      { name: 'Motor Controllers', link: 'https://www.festo.com/us/en/p/motor-controllers_p_102970/' },
      { name: 'Cables & Connectors', link: 'https://www.festo.com/us/en/p/cables_p_102980/' },
    ],
  },
  {
    id: 'handling',
    title: 'Handling & Assembly',
    icon: Hand,
    image: '/images/festo/handling.webp',
    items: [
      { name: 'Handling Systems', link: 'https://www.festo.com/us/en/p/handling-systems_p_103000/' },
      { name: 'Linear Guides', link: 'https://www.festo.com/us/en/p/linear-guides_p_103010/' },
      { name: 'Grippers', link: 'https://www.festo.com/us/en/p/grippers_p_103020/' },
      { name: 'Vacuum Generators', link: 'https://www.festo.com/us/en/p/vacuum-technology_p_103030/' },
    ],
  },
];

export default function FestoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#e20015] text-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/festo/hero.webp" alt="Festo" fill className="object-cover" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex items-center min-h-[320px]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-red-300 font-medium">Authorized Distributor</span>
              <ShieldCheck size={16} className="text-red-300" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">FESTO</h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 max-w-xl">
              Automation Technology is the authorized distributor of Festo Germany in Pakistan. We supply the complete range of Festo pneumatic, electric and process automation products with full technical support.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 bg-[#e20015] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#c00012] transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="https://www.festo.com/us/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/30 text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                Visit Festo.com <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Festo Product Categories"
            subtitle="Complete range of Festo pneumatic and electric automation products"
          />
          <div className="mt-8 space-y-6">
            {festoCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id} id={cat.id} className="border border-[#e0e0e0] overflow-hidden">
                  <div className="flex items-center gap-3 p-5 bg-[#f7f8fa] border-b border-[#e0e0e0]">
                    <Icon size={22} className="text-[#003da5]" />
                    <h2 className="text-[16px] font-bold text-[#1a1a1a]">{cat.title}</h2>
                  </div>
                  <div className="p-5">
                    {cat.image && (
                      <div className="mb-4 h-40 relative overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1400px) 100vw, 1400px"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cat.items.map((item) => (
                        <a
                          key={item.link}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 rounded-sm hover:bg-[#f7f8fa] group transition-colors"
                        >
                          <ArrowRight size={14} className="text-[#999] group-hover:text-[#003da5] flex-shrink-0" />
                          <span className="text-[13px] text-[#333] group-hover:text-[#003da5] transition-colors">{item.name}</span>
                          <ExternalLink size={12} className="text-[#ccc] ml-auto flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate of Authenticity */}
      <section className="py-14 bg-[#f7f8fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FileText size={36} className="mx-auto text-[#003da5] mb-3" />
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Certificate of Authenticity</h2>
            <p className="text-[13px] text-[#666] mb-2">
              Automation Technology is officially authorized by Festo SE & Co. KG to distribute Festo products in Pakistan.
            </p>
            <p className="text-[12px] text-[#999] mb-6">
              Signed by Zaid Dababneh, valid through December 31, 2026.
            </p>
            <a
              href="/certificate/letter-of-confirmation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#003da5] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#003080] transition-colors"
            >
              <FileText size={16} />
              Download Certificate (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003da5] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">Need a Festo product?</h2>
            <p className="text-sm text-blue-200 mt-1">Contact our team for pricing, technical specs and availability.</p>
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
