'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigation } from '@/store/navigation'
import { NAV_ITEMS } from '@/data/navigation'
import { CONTAINER } from '@/data/site'

export function Header() {
  const { currentPage, navigate } = useNavigation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const delayTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const mouseEnter = useCallback((label: string) => {
    if (delayTimer.current) clearTimeout(delayTimer.current)
    setHovered(label)
  }, [])

  const mouseLeave = useCallback(() => {
    delayTimer.current = setTimeout(() => setHovered(null), 150)
  }, [])

  const goTo = (page: Parameters<typeof navigate>[0]) => {
    navigate(page)
    setHovered(null)
    setMobileOpen(false)
  }

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      style={scrolled ? { boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } : {}}
    >
      <div className="bg-white">
        <div className={CONTAINER}>
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <button
              onClick={() => goTo('home')}
              className="flex flex-col items-start h-full justify-center shrink-0"
            >
              <img src="/logo.png" alt="Automation Technology" className="h-[36px] w-auto" />
              <span className="text-[10px] text-[#999] tracking-[0.05em] mt-0.5 hidden sm:block">
                Open New Automation Mind
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 flex-1 ml-8">
              <nav className="flex items-center">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.dropdown && mouseEnter(item.label)}
                    onMouseLeave={() => item.dropdown && mouseLeave()}
                  >
                    <button
                      onClick={() => goTo(item.page)}
                      className={`px-3 py-2 text-[13px] font-normal uppercase tracking-[0.08em] transition-colors whitespace-nowrap ${
                        currentPage === item.page
                          ? 'text-[#00aa73] border-b-2 border-[#00aa73]'
                          : 'text-[#1c1c1c] hover:text-[#00aa73]'
                      }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <svg
                          className="inline-block w-3 h-3 ml-1 opacity-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>

                    {/* Dropdown */}
                    {item.dropdown && hovered === item.label && (
                      <div
                        className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-lg min-w-[250px] py-2"
                        onMouseEnter={() => mouseEnter(item.label)}
                        onMouseLeave={() => mouseLeave()}
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => goTo(sub.page)}
                            className="block w-full text-left px-4 py-2.5 text-[13px] text-[#1c1c1c] hover:text-[#00aa73] hover:bg-gray-50 transition-colors"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => goTo('contact')}
                className="hidden sm:inline-flex px-4 py-1.5 text-[12px] font-normal uppercase tracking-[0.05em] text-[#00aa73] border border-[#00aa73] hover:bg-[#00aa73] hover:text-white transition-all"
              >
                Contact Us
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#1c1c1c] hover:text-[#00aa73]"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className={CONTAINER}>
            <div className="py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => goTo(item.page)}
                    className={`block w-full text-left px-3 py-2.5 text-[13px] font-normal uppercase tracking-[0.08em] transition-colors ${
                      currentPage === item.page
                        ? 'text-[#00aa73] bg-[#f0faf6]'
                        : 'text-[#1c1c1c] hover:text-[#00aa73] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => goTo(sub.page)}
                          className="block w-full text-left px-3 py-2 text-[12px] text-[#666] hover:text-[#00aa73] hover:bg-gray-50"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
