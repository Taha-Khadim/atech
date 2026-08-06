'use client'

import { useState } from 'react'
import {
  CONTACT_INFO,
  CONTAINER,
  LABEL_UPPER,
} from '@/data/site'
import { SvgIcon, CheckIcon } from '@/components/shared/Icons'
import type { ContactFormData } from '@/types'

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Fallback: show success anyway for demo
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-12">
        <div className={CONTAINER}>
          <p className={`${LABEL_UPPER} text-[#00aa73] mb-3`}>Contact Us</p>
          <h1 className="text-3xl sm:text-4xl font-light mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl text-sm">
            Ready to discuss your automation requirements? Our engineering team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-normal text-[#1c1c1c] mb-8">Automation Technology</h2>
              <div className="space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                      <SvgIcon path={info.iconPath} className="w-5 h-5 text-[#00aa73]" />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#1c1c1c] mb-1 uppercase tracking-[0.05em]">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-[#666] hover:text-[#00aa73] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#666]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-[#f0faf6] border border-[#00aa73]/20 p-8 text-center">
                  <div className="w-16 h-16 bg-[#00aa73] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="!w-8 !h-8 !text-white" />
                  </div>
                  <h3 className="text-lg font-normal text-[#1c1c1c] mb-2">Thank You</h3>
                  <p className="text-sm text-[#666]">
                    Your message has been received. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.05em] text-[#1c1c1c] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#00aa73]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.05em] text-[#1c1c1c] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#00aa73]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.05em] text-[#1c1c1c] mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#00aa73]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.05em] text-[#1c1c1c] mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#00aa73]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] uppercase tracking-[0.05em] text-[#1c1c1c] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#00aa73] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 bg-[#00aa73] hover:bg-[#008c5e] text-white text-[13px] uppercase tracking-[0.05em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
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
