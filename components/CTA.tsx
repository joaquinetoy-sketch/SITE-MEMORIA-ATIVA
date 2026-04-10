import React, { useState } from 'react';
import { Button } from './Button';
import { X, User, Phone, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', whatsapp: '' });
  
  const FINAL_APP_URL = 'https://memoria-ativa-pro.vercel.app/';
  const WEBHOOK_URL = 'https://hook.us2.make.com/m47wi6zqyh8s74my0pld2j0ay9zo2g3w';
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    if (!isSubmitting) setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.name || !leadData.whatsapp) return;

    setIsSubmitting(true);
    const payload = JSON.stringify({
      ...leadData,
      source: 'CTA Final',
      timestamp: new Date().toISOString()
    });

    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(WEBHOOK_URL, payload);
      } else {
        await fetch(WEBHOOK_URL, { method: 'POST', body: payload, mode: 'no-cors' });
      }
    } catch (err) {
        console.warn("Erro no webhook", err);
    }

    setTimeout(() => {
      window.open(FINAL_APP_URL, '_blank');
      setIsSubmitting(false);
      setIsModalOpen(false);
    }, 1000);
  };

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-slate-900 rounded-[40px] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden border border-white/5">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 opacity-60">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Consolidando sua Aprovação</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-8 leading-tight">
                Sua memória merece <br />
                <span className="text-orange-500">Alta Performance.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Junte-se a milhares de concurseiros que pararam de perder tempo lendo e começaram a treinar a lembrança ativa.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              onClick={handleOpenModal}
              className="px-12 py-6 text-xl bg-orange-500 text-white hover:bg-orange-600 transition-all rounded-2xl shadow-xl font-black"
            >
              TESTAR MÉTODO AGORA
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={handleCloseModal}></div>
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md relative z-10 overflow-hidden p-8 animate-in zoom-in-95 duration-200">
            <button onClick={handleCloseModal} className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900 transition-colors"><X size={20} /></button>
            <div className="mb-8 text-center flex flex-col items-center">
              <img src="/logo.png" alt="Memória Ativa" className="h-12 mb-6 object-contain" />
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Pronto para o Próximo Nível?</h3>
              <p className="text-slate-600 text-sm">Preencha seus dados para finalizar seu acesso.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold text-slate-900 uppercase tracking-widest ml-1 opacity-70">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input type="text" required disabled={isSubmitting} placeholder="Seu nome" className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-orange-500/20" value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} />
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
                className="w-full mt-8 gap-3 bg-orange-500 h-16 rounded-2xl text-white font-bold flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                {isSubmitting ? <><Loader2 className="animate-spin mr-2" size={20} /> Entrando...</> : <>Garantir minha Vaga <ArrowRight className="ml-2" size={20} /></>}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};