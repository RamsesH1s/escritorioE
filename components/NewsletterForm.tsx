'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function NewsletterForm({ variant = 'footer' }: { variant?: 'footer' | 'sidebar' }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            const response = await fetch('/backend-api/api/newsletter.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message || 'Inscrito com sucesso!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Falha na inscrição.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Erro de rede.');
        }
    };

    if (variant === 'sidebar') {
        return (
            <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="Endereço de e-mail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg text-sm transition-all disabled:opacity-50"
                    type="submit"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Inscrevendo...' : 'Inscreva-se Agora'}
                </button>
                {status !== 'idle' && (
                    <p className={`text-xs mt-2 text-center ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                        {message}
                    </p>
                )}
            </form>
        );
    }

    // Default 'footer' variant
    return (
        <div>
            <form className="flex" onSubmit={handleSubmit}>
                <input
                    className="bg-slate-800 border-none text-white text-sm px-4 py-2 rounded-l-lg w-full focus:ring-1 focus:ring-accent outline-none"
                    placeholder="Endereço de E-mail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-accent text-slate-900 px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors disabled:opacity-50"
                >
                    <Send className="w-5 h-5" />
                </button>
            </form>
            {status !== 'idle' && (
                <p className={`text-xs mt-2 ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}
