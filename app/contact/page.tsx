'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill all required fields.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/backend-api/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Network error. Please try again later.');
    }
  };
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Get in touch</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-serif">
              Contact Our Firm
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Professional legal counsel is just a call or message away. Our team of expert attorneys is ready to provide the guidance and representation you deserve.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white font-serif">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name *</label>
                  <input
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400"
                    placeholder="John Doe"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address *</label>
                  <input
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400"
                    placeholder="john@example.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400"
                  placeholder="Legal Inquiry - Corporate Law"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message *</label>
                <textarea
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400 resize-none"
                  placeholder="How can we help you?"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {status !== 'idle' && (
                <div className={`p-4 rounded-lg text-sm font-semibold ${status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'}`}>
                  {statusMessage}
                </div>
              )}

              <button
                className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 shadow-lg shadow-primary/20 transition-all disabled:opacity-50"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white font-serif">Office Information</h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Our Location</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      1201 Avenue of the Americas<br />
                      Suite 400, New York, NY 10036
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Phone & Fax</p>
                    <p className="text-slate-600 dark:text-slate-400">Main: +1 (212) 555-0198</p>
                    <p className="text-slate-600 dark:text-slate-400">Fax: +1 (212) 555-0199</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Email Us</p>
                    <p className="text-slate-600 dark:text-slate-400">contact@lexpartners.com</p>
                    <p className="text-slate-600 dark:text-slate-400">support@lexpartners.com</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">WhatsApp Support</p>
                    <a className="text-green-600 dark:text-green-400 font-semibold hover:underline flex items-center gap-1" href="#">
                      Chat with an advisor
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-900 dark:bg-slate-800 rounded-xl text-white">
              <h4 className="font-bold mb-2">Business Hours</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[450px] bg-slate-200 relative overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa793yVWChOjLnHP0nqUgJWmm8my1OEOAS4AASiLT56tx6U2Ot2FST4MsPdj0dwI7G-uoAwSrj2mG3FP5P6yjzrUk-JceWomNMctoWfz1eJWnlVRI58kYhq0VcEFJ8Dv9OdLhVg3n526SnKPXu7CJwNH7EWWOflEm-zh1jNK6mPbfhVS-Oq3GRMpnbg5AqJsfZGIo5r3bOOV_i7XWfo0DEGzvegNvsuiWbs3hEjYJzVySUXngQzdvcz9EGkwOvnmYP3KlDdNEPlug"
          alt="Office Location Map"
          fill
          className="object-cover filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 bg-primary/20 rounded-full animate-ping"></div>
            <div className="relative w-12 h-12 bg-primary rounded-full border-4 border-white flex items-center justify-center shadow-xl">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-xl max-w-xs border border-slate-100 dark:border-slate-800">
          <p className="font-bold text-slate-900 dark:text-white text-sm">Lex & Partners HQ</p>
          <p className="text-xs text-slate-500 mt-1">1201 Avenue of the Americas, Manhattan</p>
          <button className="mt-3 text-primary text-xs font-bold flex items-center gap-1 hover:underline">
            Get Directions <Navigation className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
