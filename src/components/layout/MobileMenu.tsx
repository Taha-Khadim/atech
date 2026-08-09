'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import type { NavItem, NavChild, NavAsideCategory } from '@/data/navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-[#e0e0e0]">
          <span className="font-semibold text-[#1a1a1a] text-[13px] uppercase tracking-wide">Menu</span>
          <button onClick={onClose} className="p-1 text-[#666] hover:text-[#222]" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className="py-2">
          {mainNavItems.map((item) => (
            <MobileNavItem key={item.label} item={item} expanded={expanded === item.label} onToggle={() => toggle(item.label)} onClose={onClose} />
          ))}
        </nav>
      </div>
    </div>
  );
}

function MobileNavItem({ item, expanded, onToggle, onClose }: { item: NavItem; expanded: boolean; onToggle: () => void; onClose: () => void }) {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3">
        <Link
          href={item.href}
          onClick={onClose}
          className="text-[12px] font-bold uppercase tracking-normal text-[#409BEC] hover:text-[#333]"
        >
          {item.label}
        </Link>
        {item.hasDropdown && (
          <button onClick={onToggle} className="p-1 text-[#666]">
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>
      {expanded && item.hasDropdown && item.dropdownType === 'mega-aside' && item.asideCategories && (
        <div className="bg-[#f7f8fa] border-t border-[#e0e0e0]">
          {item.asideCategories.map((cat: NavAsideCategory) => (
            <div key={cat.label} className="px-4 py-2">
              <p className="text-[11px] font-semibold text-[#1a1a1a] mb-1">{cat.label}</p>
              {cat.sections.map((section) => (
                <div key={section.heading} className="mb-2">
                  <p className="text-[9px] font-bold text-[#999] uppercase tracking-widest mb-0.5">{section.heading}</p>
                  {section.items.map((child: NavChild) => (
                    <Link
                      key={child.label + child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block py-1 text-[13px] text-[#555] hover:text-[#409BEC]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
