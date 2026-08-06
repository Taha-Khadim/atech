'use client'

import { useNavigation } from '@/store/navigation'
import { CONTAINER, HEADING2_UPPER } from '@/data/site'

export function Footer() {
  const { navigate } = useNavigation()

  return (
    <footer className="bg-[#1a1a1a] text-[#ccc]">
      <div className={CONTAINER}>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <img
              src="/logo.png"
              alt="Automation Technology"
              className="h-[32px] w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-[#999] leading-relaxed mb-4">
              Pakistan&apos;s leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration and Motion
              Control Equipment &amp; Instrumentation.
            </p>
            <div className="space-y-2 text-sm text-[#999]">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>S-42, 2nd Floor, Gulberg Center, Main Boulevard, Gulberg-III Lahore-54660-Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+924235750039" className="hover:text-[#00aa73] transition-colors">
                  +92-42-35750039
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Info@automationtechnology.com.pk" className="hover:text-[#00aa73] transition-colors">
                  Info@automationtechnology.com.pk
                </a>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className={`${HEADING2_UPPER} text-white mb-4`}>Company</h3>
            <ul className="space-y-2.5">
              {['Leadership', 'Company History', 'Our Purpose', 'Sustainability'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigate('about')}
                    className="text-sm text-[#999] hover:text-[#00aa73] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className={`${HEADING2_UPPER} text-white mb-4`}>Useful Links</h3>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Latest News', 'Our Sitemap'].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => navigate('contact')}
                      className="text-sm text-[#999] hover:text-[#00aa73] transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className={`${HEADING2_UPPER} text-white mb-4`}>Industries</h3>
            <ul className="space-y-2.5">
              {['Oil & Gas', 'Power', 'Mining & Metal', 'Food & Beverage', 'Pulp & Paper'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigate('industries')}
                    className="text-sm text-[#999] hover:text-[#00aa73] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333] mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-[11px] text-[#666]">
            &copy; {new Date().getFullYear()}{' '}
            <strong className="text-[#999]">Automation Technology</strong>. All rights reserved.
          </p>
          <span className="text-[11px] text-[#555]">Authorized Festo Distributor in Pakistan</span>
        </div>
      </div>
    </footer>
  )
}
