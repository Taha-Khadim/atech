'use client'

import { useState, useEffect, useRef } from 'react'

// ─── TYPES ───────────────────────────────────────────
type Page = 'home' | 'festo' | 'products' | 'industries' | 'about' | 'contact'

// ─── DATA ────────────────────────────────────────────
const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Festo Distribution', page: 'festo' },
  { label: 'Products & Solutions', page: 'products' },
  { label: 'Industries', page: 'industries' },
  { label: 'About Us', page: 'about' },
  { label: 'Contact', page: 'contact' },
]

const PRODUCT_CATEGORIES = [
  {
    title: 'Pneumatic Automation',
    description: 'Complete range of pneumatic components including cylinders, valves, air preparation units, and fittings for reliable and efficient automation systems.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop',
    festoLink: 'https://www.festo.com/catalog/en-us/us/#/products/pneumatic',
  },
  {
    title: 'Electric Automation',
    description: 'Electric drives, servo motors, controllers, and integrated electric axes for precision motion control in modern manufacturing environments.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    festoLink: 'https://www.festo.com/catalog/en-us/us/#/products/electric',
  },
  {
    title: 'Process Automation',
    description: 'Process valves, actuators, positioners, and valve assemblies for controlling liquids, gases, and solids in industrial process applications.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
    festoLink: 'https://www.festo.com/catalog/en-us/us/#/products/process',
  },
  {
    title: 'Valve Automation',
    description: 'Quarter turn actuators, linear actuators, solenoid valves, limit switch boxes, and smart pneumatic positioners for complete valve control solutions.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c014d2df8d?w=600&h=400&fit=crop',
    festoLink: 'https://www.festo.com/catalog/en-us/us/#/products/valve_automation',
  },
  {
    title: 'Sensors & Accessories',
    description: 'Flow sensors, pressure sensors, proximity sensors, displacement encoders, cables, tubing, and fittings for complete automation system integration.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    festoLink: 'https://www.festo.com/catalog/en-us/us/#/products/sensors',
  },
  {
    title: 'Control Systems',
    description: 'PLC systems, valve terminals, pneumatic control cabinets, remote I/O terminals, and fieldbus communication solutions for centralized and decentralized automation.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&h=400&fit=crop',
    festoLink: 'https://www.festo.com/catalog/en-us/us/#/products/controllers',
  },
]

const INDUSTRIES = [
  { name: 'Oil & Gas', description: 'Process valve assemblies and control systems for upstream, midstream, and downstream operations.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop' },
  { name: 'Chemical Industry', description: 'Corrosion-resistant automation solutions for chemical processing and petrochemical plants.', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop' },
  { name: 'Food & Beverage', description: 'Hygienic automation components meeting food-grade standards for packaging and processing.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop' },
  { name: 'Water & Wastewater', description: 'Reliable valve automation and flow control for water treatment and distribution systems.', image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=600&h=400&fit=crop' },
  { name: 'Pharmaceutical', description: 'Precision control solutions for biotech, pharmaceutical, and cosmetic manufacturing processes.', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop' },
  { name: 'Automotive', description: 'High-speed pneumatic and electric automation for automotive assembly and manufacturing lines.', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop' },
  { name: 'Pulp & Paper', description: 'Robust automation components designed for the demanding pulp and paper production environment.', image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&h=400&fit=crop' },
  { name: 'Electronics & Assembly', description: 'Precision handling and cleanroom-compatible automation for electronics manufacturing.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop' },
  { name: 'Power & Energy', description: 'Automation solutions for power generation, including hydrogen and renewable energy systems.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop' },
  { name: 'Laboratory Automation', description: 'Compact, precise automation components for laboratory and analytical equipment.', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop' },
  { name: 'Mineral Processing', description: 'Heavy-duty valve assemblies and actuators for mining and mineral processing applications.', image: 'https://images.unsplash.com/photo-1578496479511-38845b74b0c6?w=600&h=400&fit=crop' },
  { name: 'Textiles', description: 'Reliable pneumatic solutions for textile manufacturing and processing machinery.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop' },
]

const FESTO_PRODUCTS = [
  { name: 'Quarter Turn Actuators', category: 'Valve Automation', range: '10-32,000 Nm', description: 'Pneumatic actuators for butterfly, ball, and plug valves. Double or single acting, with manual override options.', link: 'https://www.festo.com/catalog/en-us/us/#/products/pneumatic_actuators' },
  { name: 'Linear Actuators', category: 'Valve Automation', range: 'Various stroke lengths', description: 'Pneumatic linear actuators for linear valve automation including gate valves and globe valves.', link: 'https://www.festo.com/catalog/en-us/us/#/products/linear_actuators' },
  { name: 'Solenoid Valves (NAMUR)', category: 'Valve Automation', range: '24 VDC / 230 VAC', description: 'NAMUR standard solenoid valves for on/off valve control in process automation applications.', link: 'https://www.festo.com/catalog/en-us/us/#/products/solenoid_valves' },
  { name: 'Smart Pneumatic Positioners', category: 'Valve Automation', range: 'Modulating control', description: 'Advanced positioners for modulating control of process valves with HART and fieldbus communication.', link: 'https://www.festo.com/catalog/en-us/us/#/products/positioners' },
  { name: 'Limit Switch Boxes', category: 'Accessories', range: '24 VDC / 230 VAC', description: 'Mechanical and inductive limit switch boxes for valve position feedback and monitoring.', link: 'https://www.festo.com/catalog/en-us/us/#/products/limit_switches' },
  { name: 'Filter Regulators', category: 'Air Preparation', range: 'Various port sizes', description: 'Compressed air preparation units for ensuring clean, regulated air supply to pneumatic equipment.', link: 'https://www.festo.com/catalog/en-us/us/#/products/air_preparation' },
  { name: 'Process Butterfly Valves', category: 'Process Valves', range: 'Various sizes', description: 'High-performance butterfly valves for process applications in water, chemical, and food industries.', link: 'https://www.festo.com/catalog/en-us/us/#/products/butterfly_valves' },
  { name: 'Process Ball Valves', category: 'Process Valves', range: 'Threaded & Flanged', description: 'Threaded and flanged ball valve assemblies for shutoff and control applications.', link: 'https://www.festo.com/catalog/en-us/us/#/products/ball_valves' },
  { name: 'Knife Gate Valves', category: 'Process Valves', range: 'Various sizes', description: 'Knife gate valves for handling slurries, powders, and granular materials in process industries.', link: 'https://www.festo.com/catalog/en-us/us/#/products/knife_gate_valves' },
  { name: 'Valve Terminals (CPX-MPA)', category: 'Control Systems', range: 'Up to 4,000 l/min', description: 'Modular valve terminals combining pneumatic and electrical functions with fieldbus communication.', link: 'https://www.festo.com/catalog/en-us/us/#/products/valve_terminals' },
  { name: 'Pneumatic Control Cabinets', category: 'Control Systems', range: 'Custom configurations', description: 'Tailored pneumatic control cabinets for centralized or decentralized automation architectures.', link: 'https://www.festo.com/catalog/en-us/us/#/products/control_cabinets' },
  { name: 'Flow & Pressure Sensors', category: 'Sensors', range: 'Various ranges', description: 'Precision sensors for monitoring flow rate, pressure, and other process parameters.', link: 'https://www.festo.com/catalog/en-us/us/#/products/sensors' },
  { name: 'Position Transmitters', category: 'Sensors', range: 'Analog & Digital', description: 'Contact and non-contact position transmitters for continuous valve position feedback.', link: 'https://www.festo.com/catalog/en-us/us/#/products/position_transmitters' },
  { name: 'Pneumatic Cylinders', category: 'Pneumatic Automation', range: 'Various bore sizes', description: 'Standard and specialty pneumatic cylinders for factory automation and industrial applications.', link: 'https://www.festo.com/catalog/en-us/us/#/products/cylinders' },
  { name: 'Tubing & Fittings', category: 'Accessories', range: 'Various sizes', description: 'Comprehensive range of pneumatic tubing, push-in fittings, and connection technology.', link: 'https://www.festo.com/catalog/en-us/us/#/products/tubing_fittings' },
  { name: 'Festo Motion Terminal (VTEM)', category: 'Innovation', range: 'App-controlled', description: 'Revolutionary app-controlled automation platform combining multiple pneumatic functions in one device.', link: 'https://www.festo.com/catalog/en-us/us/#/products/vtem' },
]

const FESTO_STATS = [
  { value: '3.2 Bn Euro', label: 'Annual Turnover' },
  { value: '20,100+', label: 'Employees Worldwide' },
  { value: '300,000+', label: 'Industry Customers' },
  { value: '176', label: 'Countries Served' },
  { value: '33,000+', label: 'Catalogue Products' },
  { value: '100+', label: 'Patents Per Year' },
  { value: '61', label: 'Countries with Subsidiaries' },
  { value: '24h', label: 'Delivery Service' },
]

// ─── COMPONENTS ───────────────────────────────────────

function Header({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (p: Page) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-200'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#00aa73] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <div className="ml-3 hidden sm:block">
                <div className="text-sm font-semibold text-[#333] leading-tight">MS Automation</div>
                <div className="text-xs text-[#666] leading-tight">Technology</div>
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  currentPage === item.page
                    ? 'text-[#00aa73] border-b-2 border-[#00aa73]'
                    : 'text-[#333] hover:text-[#00aa73]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.festo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#00aa73] hover:text-[#008c5e] font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Festo Global
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-[#00aa73] border border-[#00aa73] hover:bg-[#00aa73] hover:text-white transition-colors"
            >
              Contact Us
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#333] hover:text-[#00aa73]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page)
                  setMobileOpen(false)
                }}
                className={`block w-full text-left px-3 py-2.5 text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-[#00aa73] bg-[#f0faf6]'
                    : 'text-[#333] hover:text-[#00aa73] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.festo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2.5 text-sm font-medium text-[#00aa73] hover:bg-[#f0faf6]"
            >
              Festo Global →
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#1a1a1a] text-[#ccc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00aa73] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white leading-tight">MS Automation</div>
                <div className="text-xs text-[#999] leading-tight">Technology</div>
              </div>
            </div>
            <p className="text-sm text-[#999] leading-relaxed mb-4">
              Authorized Festo distributor in Pakistan. Providing world-class industrial automation solutions for process and factory automation.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#999]">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Gulberg Center, Main Boulevard, 2nd Floor, 54660 Lahore, Pakistan
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm text-[#999] hover:text-[#00aa73] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2.5">
              {['Pneumatic Automation', 'Electric Automation', 'Process Automation', 'Valve Automation', 'Sensors & Accessories', 'Control Systems'].map((p) => (
                <li key={p}>
                  <button
                    onClick={() => onNavigate('products')}
                    className="text-sm text-[#999] hover:text-[#00aa73] transition-colors"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-[#999]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +92 42 3576 1234
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@automationtechnology.com.pk
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Mon - Sat: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666]">
            © {new Date().getFullYear()} MS Automation Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#666]">Authorized Festo Distributor in Pakistan</span>
            <span className="text-xs text-[#444]">|</span>
            <span className="text-xs text-[#666]">Powered by Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── HOME PAGE ────────────────────────────────────────

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&h=800&fit=crop"
            alt="Industrial automation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-4">Industrial Automation Solutions</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Enhancing Safety and Reliability with Advanced Automation
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              MS Automation Technology is Pakistan's authorized Festo distributor, delivering world-class pneumatic, electric, and process automation solutions to industries across the nation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('festo')}
                className="inline-flex items-center px-6 py-3 bg-[#00aa73] hover:bg-[#008c5e] text-white text-sm font-medium transition-colors"
              >
                Explore Festo Products
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center px-6 py-3 border border-white/40 hover:border-white text-white text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Statement - Emerson Style */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-[#333] leading-relaxed">
              Integrating advanced technology, expert industry insight, and a passion for innovation to develop a product portfolio that provides sustainable, reliable solutions for our customers. We are dedicated to maximizing efficiencies, optimizing applications, and delivering the industry's widest range of automation solutions in Pakistan.
            </h2>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-10">Our Principals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="bg-white p-8 border border-gray-200 hover:border-[#00aa73] transition-colors cursor-pointer group"
              onClick={() => onNavigate('festo')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#00aa73] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#333] group-hover:text-[#00aa73] transition-colors">FESTO</p>
                  <p className="text-xs text-[#666]">Authorized Distributor</p>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed">
                World-leading supplier of industrial automation with over 33,000 catalogue products, 100+ patents per year, and presence in 176 countries. Pneumatic, electric, and process automation solutions.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 hover:border-[#00aa73] transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#333] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#333] group-hover:text-[#00aa73] transition-colors">EMERSON</p>
                  <p className="text-xs text-[#666]">Technology Partner</p>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed">
                Global technology and engineering leader providing innovative solutions for customers in industrial, commercial, and residential markets through its Appleton Group brands.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 hover:border-[#00aa73] transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0066cc] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MS</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#333] group-hover:text-[#00aa73] transition-colors">MS AUTOMATION</p>
                  <p className="text-xs text-[#666]">Custom Solutions</p>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed">
                In-house engineering and integration services for custom automation solutions, system design, commissioning support, and technical training programs in Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-2">What We Offer</h2>
          <p className="text-[#666] mb-10">Comprehensive automation solutions backed by global expertise</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Product Distribution', desc: 'Authorized distributor of Festo automation products with 24h delivery service and access to 33,000+ catalogue components.', icon: '📦' },
              { title: 'System Integration', desc: 'Custom engineered solutions including valve assemblies, pneumatic control cabinets, and complete automation systems.', icon: '🔧' },
              { title: 'Technical Support', desc: 'On-site commissioning, training sessions for local staff, and integration support with third-party PLC systems.', icon: '🛠' },
              { title: 'After-Sales Service', desc: 'FAT testing, freight management, spare parts supply, and ongoing maintenance support for all delivered equipment.', icon: '🤝' },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 p-6 hover:border-[#00aa73] transition-colors">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-base font-semibold text-[#333] mb-2">{item.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-2">Industry Solutions</h2>
          <p className="text-[#666] mb-10">Serving diverse industries across Pakistan with tailored automation solutions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <div
                key={ind.name}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => onNavigate('industries')}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{ind.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('industries')}
              className="inline-flex items-center text-sm font-medium text-[#00aa73] hover:text-[#008c5e] transition-colors"
            >
              View All Industries
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Automate?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Contact our engineering team to discuss your automation requirements. We provide expert consultation, system design, and comprehensive support throughout Pakistan.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-3 bg-[#00aa73] hover:bg-[#008c5e] text-white font-medium transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  )
}

// ─── FESTO DISTRIBUTION PAGE ──────────────────────────

function FestoPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const categories = ['All', ...Array.from(new Set(FESTO_PRODUCTS.map(p => p.category)))]
  const filteredProducts = activeCategory === 'All' ? FESTO_PRODUCTS : FESTO_PRODUCTS.filter(p => p.category === activeCategory)

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1600&h=600&fit=crop"
            alt="Festo Automation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-[#00aa73] rounded flex items-center justify-center">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <div>
                <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase">Authorized Distributor</p>
                <h1 className="text-3xl sm:text-4xl font-light">Festo Distribution</h1>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              MS Automation Technology is the official authorized distributor of Festo industrial automation products in Pakistan. We bring you the full power of Festo's global expertise, innovation, and comprehensive product portfolio to serve your automation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Authorization Proof */}
      <section className="py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f0faf6] border border-[#00aa73]/20 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#00aa73] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#333] mb-2">Official Authorization Confirmation</h2>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  This is to confirm that <strong className="text-[#333]">MS Automation Technology</strong>, located at Gulberg Center, Main Boulevard, 2nd Floor, 54660 Lahore, Pakistan, is authorized to sell Festo Industrial Automation products as an official distributor in the territory of Pakistan. This confirmation has been issued by Festo Sanayi ve Ticaret A.S., signed by <strong className="text-[#333]">Zaid Dababneh, Head of Sales, Middle East & Northeast Africa</strong>, and is valid through <strong className="text-[#333]">December 31st, 2026</strong>.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-[#00aa73]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Festo Authorized
                  </div>
                  <div className="flex items-center gap-2 text-[#00aa73]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Territory: Pakistan
                  </div>
                  <div className="flex items-center gap-2 text-[#00aa73]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Valid Through 2026
                  </div>
                  <div className="flex items-center gap-2 text-[#00aa73]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Signed by Regional Head of Sales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Festo */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">About Festo</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-6">A Global Leader in Industrial Automation</h2>
              <p className="text-[#666] leading-relaxed mb-4">
                Founded in 1925, Festo is a leading worldwide supplier of industrial automation and technical education. With an annual turnover of 3.2 billion Euro and over 20,100 employees, Festo operates in 176 countries through 61 subsidiaries and more than 250 branch offices.
              </p>
              <p className="text-[#666] leading-relaxed mb-4">
                Festo's comprehensive portfolio spans pneumatic and electric automation, process automation, and learning systems. With over 33,000 catalogue products and more than 15,000 customer solutions developed every year, Festo maintains an R&D quota of 8% of total revenue, filing 100 new patents annually.
              </p>
              <p className="text-[#666] leading-relaxed">
                The company serves over 300,000 industry customers and 56,000 didactic customers across factory automation, process automation, and technical education sectors. Festo's product certifications include ISO 9001 (all plants), ISO 14001 (all plants), and OHSAS 18001 (Sao Paulo and Shanghai plants).
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {FESTO_STATS.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-[#f5f5f5]">
                    <p className="text-2xl font-semibold text-[#00aa73]">{stat.value}</p>
                    <p className="text-xs text-[#666] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">Business Sectors</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-10">Festo's Core Business Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Factory Automation', desc: 'Pneumatic and electric automation solutions for manufacturing, assembly, and packaging with over 30,000 catalogue products and 24h delivery service.', icon: '🏭' },
              { title: 'Process Automation', desc: 'Complete valve automation, process valves, actuators, and control systems for oil & gas, chemical, water, pharma, and food industries.', icon: '⚙' },
              { title: 'Learning Systems', desc: 'Technical education equipment and training systems for industrial automation, serving over 56,000 didactic customers across 40+ years.', icon: '🎓' },
              { title: 'Training & Consulting', desc: 'On-site commissioning support, staff training sessions, system integration assistance, and expert consultation services.', icon: '📋' },
            ].map((sector) => (
              <div key={sector.title} className="bg-white p-6 border border-gray-200">
                <div className="text-3xl mb-3">{sector.icon}</div>
                <h3 className="text-base font-semibold text-[#333] mb-2">{sector.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products - Filterable Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">Product Portfolio</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-2">Festo Products Available in Pakistan</h2>
          <p className="text-[#666] mb-8">Browse our complete range of Festo automation products available through MS Automation Technology</p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#00aa73] text-white'
                    : 'bg-[#f5f5f5] text-[#333] hover:bg-[#e8e8e8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.name} className="border border-gray-200 p-6 hover:border-[#00aa73] transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-[#333] group-hover:text-[#00aa73] transition-colors">{product.name}</h3>
                  <span className="text-xs text-[#999] bg-[#f5f5f5] px-2 py-1 whitespace-nowrap ml-2">{product.category}</span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#999]">Range: {product.range}</span>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#00aa73] hover:text-[#008c5e] font-medium transition-colors"
                  >
                    View on Festo
                    <svg className="ml-1 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Concepts */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">Expertise</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-10">Automation Architecture Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Centralized Automation',
                desc: 'Traditional architecture where all I/O signals are wired individually to the main PLC cabinet. Best suited for small installations with short distances, effective for ATEX and SIL applications. Standardization with NAMUR products ensures reliability.',
                features: ['Short distance installations', 'ATEX & SIL compliant', 'NAMUR standard products', 'Basic maintenance knowledge required'],
              },
              {
                title: 'Partially Decentralized',
                desc: 'Hybrid approach using Remote I/O terminals in the field, significantly reducing cable length and installation time. Reduces the number of I/O cards in the main cabinet and makes plant upgrades easier with HMI capabilities at the field level.',
                features: ['Reduced cable length', 'Fewer I/O cards needed', 'Easy plant upgrades', 'Field-level HMI support'],
              },
              {
                title: 'Fully Decentralized',
                desc: 'Advanced architecture with pneumatic control cabinets in the field, offering centralized manual override, hot-swap capabilities, remote diagnostics, and high-level protection through metal or GRP enclosures for maximum system uptime.',
                features: ['Lowest installation time', 'Remote diagnostics', 'Hot-swap capability', 'Metal/GRP enclosure protection'],
              },
            ].map((concept) => (
              <div key={concept.title} className="bg-white p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-[#333] mb-3">{concept.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">{concept.desc}</p>
                <ul className="space-y-2">
                  {concept.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#666]">
                      <svg className="w-4 h-4 text-[#00aa73] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">Services & Support</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#333] mb-10">End-to-End Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'FAT Testing & Freight',
                desc: 'We ensure full functioning of all equipment prior to shipment. Our Factory Acceptance Testing includes as-build design verification, dynamic function testing, and third-party inspection facilitation. Freight shipment is arranged to your site location with confirmed Incoterms.',
              },
              {
                title: 'On-Site Commissioning',
                desc: 'Local support engineers assist with system start-up to reduce commissioning time and avoid initial installation mistakes. Our team provides hands-on support with integration of third-party PLC systems and delivers comprehensive training sessions for your local staff on all delivered equipment.',
              },
              {
                title: 'Engineered Solutions',
                desc: 'Custom valve assemblies including butterfly valve units, ball valve units, actuator assemblies, and special configurations. We handle high/low temperature requirements, NACE MR0175 compliance, integrated modulating control, and specific tubing requirements.',
              },
              {
                title: 'Pneumatic Control Cabinets',
                desc: 'Basic and tailored designs to project requirements with direct or fieldbus communication capabilities. Our cabinets feature pneumatic valve terminals, digital and analogue signals, multiple enclosure styles, and complete technical documentation for seamless integration.',
              },
            ].map((service) => (
              <div key={service.title} className="border-l-4 border-[#00aa73] pl-6">
                <h3 className="text-base font-semibold text-[#333] mb-2">{service.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Provider */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Festo: A Turnkey System Provider</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Alignment of all system requirements from air generation through control and cabinet to valve actuation, installation, and services (ISO-11011)
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Air Generation', 'Air Quality ISO8573', 'Piping Design', 'Control Cabinet', 'Tube & Fitting', 'Valve Actuation', 'Installation', 'Services ISO-11011'].map((item) => (
              <div key={item} className="text-center p-4 border border-[#333]">
                <p className="text-sm font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── PRODUCTS PAGE ────────────────────────────────────

function ProductsPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <main>
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">Products & Solutions</p>
          <h1 className="text-3xl sm:text-4xl font-light mb-4">Complete Automation Portfolio</h1>
          <p className="text-gray-400 max-w-2xl">
            From pneumatic components to process valve assemblies, we provide a comprehensive range of industrial automation products and engineered solutions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((product) => (
              <div key={product.title} className="group border border-gray-200 overflow-hidden hover:border-[#00aa73] transition-colors">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#333] mb-2 group-hover:text-[#00aa73] transition-colors">{product.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed mb-4">{product.description}</p>
                  <a
                    href={product.festoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[#00aa73] hover:text-[#008c5e] transition-colors"
                  >
                    Browse Products
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#333] mb-10">Engineered Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Butterfly Valve Assemblies', desc: 'Pre-assembled butterfly valve units with actuators, positioners, and accessories ready for installation.' },
              { title: 'Ball Valve Assemblies', desc: 'Threaded and flanged ball valve assemblies engineered for specific process conditions and media types.' },
              { title: 'Pneumatic Control Cabinets', desc: 'Custom-designed control cabinets with valve terminals, fieldbus communication, and complete documentation.' },
              { title: 'Knife Gate Valve Assemblies', desc: 'Heavy-duty knife gate valve units for slurry, powder, and granulate handling applications.' },
              { title: 'Special Assemblies', desc: 'High/low temperature, NACE MR0175 compliant, integrated modulating control, and custom tubing configurations.' },
              { title: 'FAT & Commissioning', desc: 'Complete factory acceptance testing, documentation verification, and on-site commissioning support.' },
            ].map((sol) => (
              <div key={sol.title} className="bg-white p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-[#333] mb-2">{sol.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('festo')}
              className="inline-flex items-center text-sm font-medium text-[#00aa73] hover:text-[#008c5e] transition-colors"
            >
              View Full Festo Catalog
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── INDUSTRIES PAGE ───────────────────────────────────

function IndustriesPage() {
  return (
    <main>
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">Industries We Serve</p>
          <h1 className="text-3xl sm:text-4xl font-light mb-4">Solutions Across Industries</h1>
          <p className="text-gray-400 max-w-2xl">
            With over 11 industry segments served, our automation solutions drive efficiency and reliability across diverse industrial sectors in Pakistan and beyond.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="group relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">{ind.name}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{ind.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Segments - Process & Factory */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold text-[#333] mb-6 pb-3 border-b-2 border-[#00aa73]">Process Industries</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Oil & Gas', 'Chemicals', 'Food & Beverage', 'Water & Wastewater', 'Pharma & Cosmetics', 'Power & Energy', 'Pulp & Paper', 'Mineral Processing'].map((ind) => (
                  <div key={ind} className="flex items-center gap-3 p-3 bg-white">
                    <svg className="w-5 h-5 text-[#00aa73] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                    <span className="text-sm text-[#333] font-medium">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#333] mb-6 pb-3 border-b-2 border-[#00aa73]">Factory Automation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Automotive', 'Electronics & Assembly', 'Food & Packaging', 'Laboratory Automation', 'Biotech-Pharma', 'Medical Technology', 'Intralogistics', 'Technical Education'].map((ind) => (
                  <div key={ind} className="flex items-center gap-3 p-3 bg-white">
                    <svg className="w-5 h-5 text-[#00aa73] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                    <span className="text-sm text-[#333] font-medium">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── ABOUT PAGE ───────────────────────────────────────

function AboutPage() {
  return (
    <main>
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">About Us</p>
          <h1 className="text-3xl sm:text-4xl font-light mb-4">MS Automation Technology</h1>
          <p className="text-gray-400 max-w-2xl">
            Pakistan's trusted partner for industrial automation solutions, backed by global expertise from Festo and Emerson.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-[#333] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#666] leading-relaxed">
              <p>
                MS Automation Technology is a Lahore-based industrial automation company serving as the authorized distributor for Festo in Pakistan. Located at Gulberg Center on Main Boulevard, we bring world-class automation products and engineering expertise to Pakistani industries.
              </p>
              <p>
                Our partnership with Festo, a global leader in industrial automation founded in 1925, gives us access to the most comprehensive portfolio of pneumatic, electric, and process automation products available anywhere in the world. With over 33,000 catalogue components and a 24-hour delivery service, we ensure our customers get the right products when they need them.
              </p>
              <p>
                Beyond product distribution, we provide comprehensive engineering services including system design, custom valve assemblies, pneumatic control cabinets, factory acceptance testing, on-site commissioning, and technical training for local staff. Our team of trained engineers works closely with customers to understand their specific requirements and deliver tailored solutions.
              </p>
              <p>
                We serve a wide range of industries including oil and gas, chemicals, food and beverage, water treatment, pharmaceuticals, automotive, pulp and paper, electronics assembly, and power generation. Our goal is to maximize efficiency, optimize applications, and deliver measurable outcomes for every customer we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#333] mb-10">Why Choose MS Automation Technology</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Authorized Distributor', desc: 'Officially authorized by Festo to sell and support their complete product range in Pakistan, with direct access to Festo HQ in Germany.' },
              { title: 'Engineering Expertise', desc: 'Our engineers are trained by Festo on products and services, ensuring expert-level support for system design, integration, and troubleshooting.' },
              { title: 'Comprehensive Solutions', desc: 'From individual components to complete engineered systems, we provide turnkey automation solutions tailored to your specific process requirements.' },
              { title: 'Local Presence', desc: 'Based in Lahore with direct access to customers across Pakistan. We provide on-site support, training, and commissioning services.' },
              { title: 'Global Backing', desc: 'Backed by the global Festo network of 250+ branch offices in 61 countries, ensuring reliable supply chain and technical support.' },
              { title: 'Quality Assurance', desc: 'All products carry full Festo warranties and certifications including ISO 9001, ISO 14001, and industry-specific approvals.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#00aa73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <h3 className="text-base font-semibold text-[#333]">{item.title}</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── CONTACT PAGE ─────────────────────────────────────

function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#00aa73] text-sm font-semibold tracking-wider uppercase mb-3">Contact Us</p>
          <h1 className="text-3xl sm:text-4xl font-light mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl">
            Ready to discuss your automation requirements? Our engineering team is here to help you find the right solution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold text-[#333] mb-8">MS Automation Technology</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00aa73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#333] mb-1">Office Address</h3>
                    <p className="text-sm text-[#666]">Gulberg Center, Main Boulevard, 2nd Floor<br />54660 Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00aa73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#333] mb-1">Phone</h3>
                    <p className="text-sm text-[#666]">+92 42 3576 1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00aa73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#333] mb-1">Email</h3>
                    <p className="text-sm text-[#666]">info@automationtechnology.com.pk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00aa73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#333] mb-1">Business Hours</h3>
                    <p className="text-sm text-[#666]">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-[#f0faf6] border border-[#00aa73]/20 p-8 text-center">
                  <div className="w-16 h-16 bg-[#00aa73] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#333] mb-2">Thank You</h3>
                  <p className="text-sm text-[#666]">Your message has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#333] focus:outline-none focus:border-[#00aa73] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#333] focus:outline-none focus:border-[#00aa73] transition-colors"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#333] focus:outline-none focus:border-[#00aa73] transition-colors"
                        placeholder="+92 300 0000000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1.5">Company</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#333] focus:outline-none focus:border-[#00aa73] transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#333] focus:outline-none focus:border-[#00aa73] transition-colors resize-none"
                      placeholder="Tell us about your automation requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#00aa73] hover:bg-[#008c5e] text-white text-sm font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── MAIN APP ─────────────────────────────────────────

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const topRef = useRef<HTMLDivElement>(null)

  const handleNavigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={topRef} className="min-h-screen flex flex-col bg-white text-[#333]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'festo' && <FestoPage />}
        {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        {currentPage === 'industries' && <IndustriesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}