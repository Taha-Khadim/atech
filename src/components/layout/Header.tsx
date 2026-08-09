'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import type { NavItem, NavAsideCategory } from '@/data/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeAside, setActiveAside] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openDropdown = useCallback((label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
    setActiveAside(null);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveAside(null);
    }, 150);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveAside(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const activeItem = mainNavItems.find((item) => item.label === activeDropdown);

  return (
    <header className="sticky top-0 z-40" ref={headerRef}>
      {/* White nav bar - single row, matching automationtechnology.com.pk */}
      <div className="bg-white border-b border-[rgba(129,129,129,0.2)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
          {/* Logo + Tagline */}
          <Link href="/" className="flex-shrink-0 flex flex-col justify-center">
            <Image
              src={siteConfig.logo}
              alt="Automation Technology"
              width={175}
              height={40}
              className="max-w-[175px] w-auto h-auto"
              priority
            />
            <span className="text-[10px] text-[#999] tracking-[0.04em] mt-0.5 hidden sm:block">
              Open New Automation Mind
            </span>
          </Link>

          {/* Desktop Nav - Center */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown ? openDropdown(item.label) : undefined}
                onMouseLeave={item.hasDropdown ? closeDropdown : undefined}
              >
                <Link
                  href={item.href}
                  className="text-[12px] font-bold uppercase tracking-normal text-[#409BEC] hover:text-[#333] transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={11} className="mt-px" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right: Search + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex items-center justify-center w-8 h-8 text-[#555] hover:text-[#222] transition-colors"
              aria-label="Search"
            >
              <Search size={15} />
            </button>
            <button
              className="lg:hidden p-2 text-[#222]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mega Aside Dropdown */}
        {activeDropdown && activeItem?.hasDropdown && activeItem?.asideCategories && (
          <div
            className="absolute left-0 right-0 bg-white shadow-lg border-t border-[#eee]"
            onMouseEnter={() => openDropdown(activeDropdown)}
            onMouseLeave={closeDropdown}
          >
            <div className="max-w-[1280px] mx-auto flex">
              {/* Aside column - 270px wide with category list */}
              <div className="w-[270px] flex-shrink-0 bg-white border-r border-[#e8e8e8]">
                <ul className="py-2">
                  {activeItem.asideCategories.map((cat) => (
                    <li key={cat.label}>
                      <button
                        className={`w-full text-left px-5 py-3 text-[14px] font-semibold transition-colors flex items-center justify-between hover:bg-[#f7f8fa] ${
                          activeAside === cat.label
                            ? 'bg-[#f7f8fa] text-[#1a1a1a]'
                            : 'text-[#555]'
                        }`}
                        onMouseEnter={() => setActiveAside(cat.label)}
                      >
                        {cat.label}
                        <ChevronRight size={14} className="text-[#999]" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content panel */}
              <div className="flex-1 bg-white min-h-[300px]">
                {activeItem.asideCategories.map((cat) => (
                  <div
                    key={cat.label}
                    className={`${activeAside === cat.label ? 'block' : 'hidden'}`}
                  >
                    <div className="p-6 lg:p-8">
                      {cat.sections.map((section, sIdx) => (
                        <div
                          key={section.heading}
                          className={sIdx > 0 ? 'mt-6 pt-6 border-t border-[#f0f0f0]' : ''}
                        >
                          <h4 className="text-[10px] font-bold text-[#999] uppercase tracking-[0.15em] mb-3">
                            {section.heading}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
                            {section.items.map((item) => (
                              <Link
                                key={item.label + item.href}
                                href={item.href}
                                className="text-[13px] text-[#555] hover:text-[#409BEC] transition-colors py-1.5 leading-snug"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Default: show first category if none selected */}
                {!activeAside && activeItem.asideCategories[0] && (
                  <div className="p-6 lg:p-8">
                    {activeItem.asideCategories[0].sections.map((section, sIdx) => (
                      <div
                        key={section.heading}
                        className={sIdx > 0 ? 'mt-6 pt-6 border-t border-[#f0f0f0]' : ''}
                      >
                        <h4 className="text-[10px] font-bold text-[#999] uppercase tracking-[0.15em] mb-3">
                          {section.heading}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.label + item.href}
                              href={item.href}
                              className="text-[13px] text-[#555] hover:text-[#409BEC] transition-colors py-1.5 leading-snug"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
