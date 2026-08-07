'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import type { NavItem, NavColumn, NavChild } from '@/data/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openDropdown = useCallback((label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-40" ref={headerRef}>
      {/* Single white bar only */}
      <div className="bg-white border-b border-[#ddd]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
          {/* Logo + Tagline */}
          <Link href="/" className="flex-shrink-0 flex flex-col justify-center">
            <Image src={siteConfig.logo} alt="Automation Technology" width={175} height={40} className="max-w-[175px] w-auto h-auto" />
            <span className="text-[10px] text-[#999] tracking-[0.04em] mt-0.5 hidden sm:block">Open New Automation Mind</span>
          </Link>

          {/* Desktop Nav Items - Center */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && openDropdown(item.label)}
                onMouseLeave={item.hasDropdown ? closeDropdown : undefined}
              >
                <Link
                  href={item.href}
                  className="text-[12px] font-semibold uppercase tracking-wide text-[#222] hover:text-[#003da5] transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={11} className="mt-px" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right: Search + Contact Us + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center w-8 h-8 text-[#555] hover:text-[#222] transition-colors" aria-label="Search">
              <Search size={17} />
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-1.5 border border-[#bbb] text-[#333] text-[11px] font-semibold uppercase tracking-wide hover:border-[#999] hover:text-[#111] transition-colors"
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

        {/* Dropdown Menus */}
        {activeDropdown && (
          <div
            className="absolute left-0 right-0 bg-white shadow-lg border-t border-[#eee]"
            onMouseEnter={() => openDropdown(activeDropdown)}
            onMouseLeave={closeDropdown}
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {mainNavItems
                .filter((item) => item.label === activeDropdown && item.hasDropdown)
                .map((item) => (
                  <DropdownContent key={item.label} item={item} />
                ))}
            </div>
          </div>
        )}
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function DropdownContent({ item }: { item: NavItem }) {
  if (item.dropdownType === 'mega' && item.megaColumns) {
    return <MegaDropdown columns={item.megaColumns} />;
  }
  if (item.dropdownType === 'simple' && item.simpleLinks) {
    return <SimpleDropdown links={item.simpleLinks} />;
  }
  return null;
}

function MegaDropdown({ columns }: { columns: NavColumn[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {columns.map((col) => (
        <div key={col.title}>
          <h3 className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-4 pb-2 border-b border-[#e0e0e0]">
            {col.title}
          </h3>
          {col.groups.map((group) => (
            <div key={group.heading} className="mb-4 last:mb-0">
              <p className="text-[10px] font-bold text-[#999] uppercase tracking-widest mb-2">{group.heading}</p>
              <div className="space-y-1.5">
                {group.children.map((child) => (
                  <Link
                    key={child.label + child.href}
                    href={child.href}
                    className="block text-[13px] text-[#444] hover:text-[#003da5] transition-colors py-0.5"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SimpleDropdown({ links }: { links: NavChild[] }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
      {links.map((link) => (
        <Link
          key={link.label + link.href}
          href={link.href}
          className="text-[13px] text-[#444] hover:text-[#003da5] transition-colors py-0.5"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
