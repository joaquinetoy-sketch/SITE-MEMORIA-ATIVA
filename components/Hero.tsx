import React, { useState } from 'react';
import { Button } from './Button';
import { Sparkles, Loader2, X, User, Phone, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', whatsapp: '' });

  // URL OFICIAL CONSOLIDADA
  const APP_OFFICIAL_URL = 'https://memoria-ativa-pro.vercel.app/';
  const WEBHOOK_URL = 'https://hook.us2.make.com/m47wi6zqyh8s74my0pld2j0ay9zo2g3w';

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    if (!isSubmitting) setIsModalOpen(false);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!leadData.name || !leadData.whatsapp) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    setIsSubmitting(true);
    
    const payload = JSON.stringify({
      ...leadData,
      source: 'Hero Principal - React',
      timestamp: new Date().toISOString()
    });

    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(WEBHOOK_URL, payload);
      } else {
        await fetch(WEBHOOK_URL, { 
          method: 'POST', 
          body: payload, 
          mode: 'no-cors',
          keepalive: true 
        });
      }
    } catch (err) {
      console.warn("Webhook bypass, indo para o App...", err);
    }

    // Redirecionamento GARANTIDO para a Vercel Pro (Substituindo a aba atual para evitar erros de bloqueio de popup)
    setTimeout(() => {
      window.location.href = APP_OFFICIAL_URL;
    }, 500); 
  };

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl -mr-96 -mt-96 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                A Nova Era da Memorização para Concursos
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Pare de Repetir e <br />
              <span className="text-slate-500 italic font-medium">Não Memorizar:</span><br />
              Estude Leis com <span className="text-slate-900 relative inline-block">
                Memória Ativa
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500/30"></div>
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Finalmente um método baseado em <span className="text-slate-900 font-semibold">Active Recall</span> que faz você lembrar de verdade o que estudou — no dia da prova.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleOpenModal}
                variant="primary" 
                size="lg"
                className="gap-3 text-lg py-6 px-12 bg-orange-500 hover:bg-orange-600 text-white group shadow-lg rounded-2xl"
              >
                <Sparkles className="w-5 h-5 text-white group-hover:scale-125 transition-transform" />
                TESTAR MÉTODO GRATUITAMENTE
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80" alt="App Memória Ativa" className="w-full h-auto rounded-3xl shadow-2xl border border-slate-200" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={handleCloseModal}></div>
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md relative z-10 overflow-hidden p-8 text-center animate-in zoom-in-95 duration-200">
            <button onClick={handleCloseModal} className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900 transition-colors"><X size={20} /></button>
            <img src="/logo.png" alt="Memória Ativa" className="h-12 mb-6 mx-auto object-contain" />
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Quase lá!</h3>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">Insira seu WhatsApp para que o sistema possa vincular seu acesso no aplicativo oficial.</p>
            
            <form onSubmit={handleLeadSubmit} className="space-y-5 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold text-slate-900 uppercase tracking-widest ml-1 opacity-70">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input type="text" required disabled={isSubmitting} placeholder="Seu Nome" className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-orange-500/20" value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold text-slate-900 uppercase tracking-widest ml-1 opacity-70">WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input type="tel" required disabled={isSubmitting} placeholder="(00) 00000-0000" className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-orange-500/20" value={leadData.whatsapp} onChange={(e) => setLeadData({...leadData, whatsapp: e.target.value})} />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full mt-8 gap-3 bg-orange-500 h-16 text-lg rounded-2xl text-white font-bold flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                {isSubmitting ? <><Loader2 className="animate-spin mr-2" size={20} /> Redirecionando...</> : <>Acessar Aplicativo <ArrowRight className="ml-2" size={20} /></>}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};