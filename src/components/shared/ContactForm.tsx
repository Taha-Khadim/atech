'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#f7f8fa] border border-[#e0e0e0] p-8 text-center">
        <div className="w-12 h-12 bg-[#00aa73] rounded-full flex items-center justify-center mx-auto mb-3">
          <Send size={20} className="text-white" />
        </div>
        <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-1">Message Sent</h3>
        <p className="text-[13px] text-[#666]">Thank you for contacting us. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-medium text-[#333] mb-1">Full Name *</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-[#e0e0e0] text-[13px] text-[#222] focus:outline-none focus:border-[#003da5] focus:ring-1 focus:ring-[#003da5]/30 bg-white"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-[12px] font-medium text-[#333] mb-1">Email *</label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-[#e0e0e0] text-[13px] text-[#222] focus:outline-none focus:border-[#003da5] focus:ring-1 focus:ring-[#003da5]/30 bg-white"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-medium text-[#333] mb-1">Phone</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-[#e0e0e0] text-[13px] text-[#222] focus:outline-none focus:border-[#003da5] focus:ring-1 focus:ring-[#003da5]/30 bg-white"
            placeholder="+92-XXX-XXXXXXX"
          />
        </div>
        <div>
          <label className="block text-[12px] font-medium text-[#333] mb-1">Company</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-[#e0e0e0] text-[13px] text-[#222] focus:outline-none focus:border-[#003da5] focus:ring-1 focus:ring-[#003da5]/30 bg-white"
            placeholder="Company Name"
          />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-medium text-[#333] mb-1">Subject *</label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-[#e0e0e0] text-[13px] text-[#222] focus:outline-none focus:border-[#003da5] focus:ring-1 focus:ring-[#003da5]/30 bg-white"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label className="block text-[12px] font-medium text-[#333] mb-1">Message *</label>
        <textarea
          required
          rows={5}
          className="w-full px-3 py-2 border border-[#e0e0e0] text-[13px] text-[#222] focus:outline-none focus:border-[#003da5] focus:ring-1 focus:ring-[#003da5]/30 bg-white resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00aa73] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[#009663] transition-colors disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
        <Send size={14} />
      </button>
    </form>
  );
}
