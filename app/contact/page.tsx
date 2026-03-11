'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Navigation, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.subject || !formData.message) {
      setStatus('error');
      setStatusMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('loading');
    try {
      // Format the message for WhatsApp
      let text = `Olá! Gostaria de entrar em contato.\n\n`;
      text += `*Nome:* ${formData.name}\n`;
      text += `*Assunto:* ${formData.subject}\n`;
      text += `\n*Mensagem:*\n${formData.message}`;

      const encodedText = encodeURIComponent(text);
      const whatsappNumber = '558694404644';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setStatusMessage('Redirecionando para o WhatsApp...');
      setFormData({ name: '', subject: '', message: '' });

      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setStatusMessage('Erro ao abrir o WhatsApp. Por favor, tente novamente.');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Entre em contato</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-serif">
              Contate Nosso Escritório
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              O aconselhamento jurídico profissional está a apenas uma ligação ou mensagem de distância. Nossa equipe de advogados especialistas está pronta para fornecer a orientação e a representação que você merece.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white font-serif">Envie-nos uma mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nome Completo *</label>
                  <input
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400"
                    placeholder="Digite aqui seu nome"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Qual é o assunto do seu problema? *</label>
                <div className="relative">
                  <select
                    id="subject"
                    data-testid="subject-select"
                    className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="" disabled>Selecione uma área de atuação</option>
                    <option value="Direito Civil">Direito Civil</option>
                    <option value="Direito do Consumidor">Direito do Consumidor</option>
                    <option value="Direito Bancário">Direito Bancário</option>
                    <option value="Direito Previdenciário">Direito Previdenciário</option>
                    <option value="Direito Trabalhista">Direito Trabalhista</option>
                    <option value="Direito Público">Direito Público</option>
                    <option value="Outro assunto">Outro assunto</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mensagem *</label>
                <textarea
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400 resize-none"
                  placeholder="Como podemos ajudá-lo?"
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
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white font-serif">Informações do Escritório</h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Localização</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Avenida Prefeito Freitas Neto, Quadra 19, Casa 01, Sala 02<br />
                      Mocambinho I, Teresina - PI, 64010-067
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Telefone</p>
                    <p className="text-slate-600 dark:text-slate-400">+55 (86) 9440-4644</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <a href="https://www.instagram.com/dayraoliveiradv?igsh=MWF0c3NxMGtrYW11" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 rounded-xl flex items-center justify-center hover:bg-pink-500/20 dark:hover:bg-pink-500/30 transition-colors cursor-pointer">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Instagram</p>
                    <a className="text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-1" href="https://www.instagram.com/dayraoliveiradv?igsh=MWF0c3NxMGtrYW11" target="_blank" rel="noopener noreferrer">
                      @dayraoliveiradv
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <a href="https://wa.me/558694404644" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center hover:bg-green-500/20 dark:hover:bg-green-500/30 transition-colors cursor-pointer">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Suporte via WhatsApp</p>
                    <a className="text-green-600 dark:text-green-400 font-semibold hover:underline flex items-center gap-1" href="https://wa.me/558694404644" target="_blank" rel="noopener noreferrer">
                      Fale com um consultor
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-900 dark:bg-slate-800 rounded-xl text-white">
              <h4 className="font-bold mb-2">Horário de Funcionamento</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex justify-between"><span>Seg - Sexta:</span> <span>09:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Sáb - Dom:</span> <span>Fechado</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[450px] relative overflow-hidden bg-slate-200">
        <iframe
          src="https://maps.google.com/maps?q=Avenida+Prefeito+Freitas+Neto,+Mocambinho,+Teresina,+PI&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          title="Dayra Oliveira Office Location"
        ></iframe>
        
        {/* Decorative Overlay Box (Optional, can be kept for styling or removed if the map is enough) */}
        <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-xl max-w-xs border border-slate-100 dark:border-slate-800 pointer-events-none transition-opacity duration-300 hover:opacity-0">
          <p className="font-bold text-slate-900 dark:text-white text-sm">Escritório Dayra Oliveira</p>
          <p className="text-xs text-slate-500 mt-1">Av. Pref. Freitas Neto, Q. 19, C. 01, S. 02</p>
          <div className="mt-3 text-primary text-xs font-bold flex items-center gap-1">
            Mocambinho I, Teresina - PI <MapPin className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
