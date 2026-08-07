'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search } from 'lucide-react';
import { utilityLinks, mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import type { NavItem, NavCategory } from '@/data/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const megaTimeout = useRef<NodeJS.Timeout | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  const openMega = useCallback((label: string) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setActiveMega(label);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 150);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-40" ref={megaRef}>
      {/* Tier 1: Black utility bar */}
      <div className="bg-black h-[34px] flex items-center justify-end px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <div className="hidden sm:flex items-center gap-5">
          {utilityLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-[11px] text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Tier 2: White main nav bar */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo + Tagline */}
          <Link href="/" className="flex-shrink-0 flex flex-col justify-center">
            <Image src={siteConfig.logo} alt="Automation Technology" width={140} height={36} className="max-h-[36px] w-auto" />
            <span className="text-[10px] text-[#999] tracking-[0.05em] mt-0.5 hidden sm:block">Open New Automation Mind</span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-9">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && openMega(item.label)}
                onMouseLeave={item.megaMenu ? closeMega : undefined}
              >
                <Link
                  href={item.href}
                  className="text-[13px] font-semibold uppercase tracking-wide text-[#222] hover:text-[#003da5] transition-colors inline-flex items-center gap-1 pb-1 border-b-2 border-transparent hover:border-[#003da5]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right: Search + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center w-8 h-8 text-[#666] hover:text-[#003da5] transition-colors">
              <Search size={18} />
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-[#00aa73] text-white text-[11px] font-semibold uppercase tracking-wide hover:bg-[#009663] transition-colors"
            >
              Contact Us
            </Link>
            <button
              className="lg:hidden p-2 text-[#222]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        {activeMega && (
          <div
            className="absolute left-0 right-0 bg-white shadow-lg border-t border-[#e0e0e0] animate-[fadeIn_0.15s_ease-out]"
            onMouseEnter={() => openMega(activeMega)}
            onMouseLeave={closeMega}
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {mainNavItems
                .filter((item) => item.label === activeMega && item.megaMenu)
                .map((item) => (
                  <MegaMenuContent key={item.label} categories={item.megaMenu!} />
                ))}
            </div>
          </div>
        )}
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MegaMenuContent({ categories }: { categories: NavCategory[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((cat) => (
        <div key={cat.title}>
          <Link
            href={cat.href || '#'}
            className="text-[14px] font-bold text-[#1a1a1a] hover:text-[#003da5] transition-colors mb-3 block"
          >
            {cat.title}
          </Link>
          <div className="space-y-2">
            {cat.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="flex items-start gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-[#ccc] mt-2 group-hover:bg-[#003da5] transition-colors flex-shrink-0" />
                <div>
                  <span className="text-[13px] text-[#333] group-hover:text-[#003da5] transition-colors">
                    {child.label}
                  </span>
                  {child.description && (
                    <p className="text-[11px] text-[#999] leading-tight mt-0.5">{child.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
