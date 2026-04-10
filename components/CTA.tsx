import React, { useState } from 'react';
import { Button } from './Button';
import { X, User, Phone, ArrowRight, Loader2 } from 'lucide-react';

export const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', whatsapp: '' });
  
  const EXTERNAL_LINK = 'https://script.google.com/macros/s/AKfycbxx8N9l7p0QcfUPHWx_AzHfZElnyht-gCWqOoO075TQMfL2ptW-tuTgASQoZHfGWR1dnw/exec';
  const WEBHOOK_URL = 'https://hook.us2.make.com/m47wi6zqyh8s74my0pld2j0ay9zo2g3w';

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    if (!isSubmitting) setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadData.name && leadData.whatsapp) {
      setIsSubmitting(true);
      
      try {
        // Enviando os dados para o webhook do Make.com
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...leadData,
            source: 'CTA Final - Landing Page',
            timestamp: new Date().toISOString()
          }),
        });
      } catch (error) {
        console.error('Erro ao enviar dados para o webhook:', error);
      } finally {
        // Redireciona o usuário independentemente do sucesso do webhook para não perder a venda
        window.location.href = EXTERNAL_LINK;
      }
    }
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-brand-dark rounded-xl p-10 md:p-20 text-center shadow-soft relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 uppercase tracking-tight">
                COMECE AGORA    
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Use o conteúdo que você já estuda para treinar sua memória e ver resultado de verdade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleOpenModal}
                className="px-10 text-lg hover:scale-105 transition-transform"
              >
                Começar meus Estudos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={handleCloseModal}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white rounded-2xl shadow-card w-full max-w-md relative z-10 animate-in zoom-in-95 duration-300 overflow-hidden">
            <div className="p-6 md:p-8">
              {!isSubmitting && (
                <button 
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 text-brand-gray hover:text-brand-dark transition-colors rounded-lg"
                >
                  <X size={20} />
                </button>
              )}

              <div className="mb-6 text-center">
                <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
                  <ArrowRight size={32} />
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">Quase lá!</h3>
                <p className="text-brand-gray text-sm">Preencha seus dados para acessar o método.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider ml-1">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                    <input 
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Seu nome"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-primary outline-none transition-all bg-brand-surface/50 disabled:opacity-50"
                      value={leadData.name}
                      onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider ml-1">WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                    <input 
                      type="tel"
                      required
                      disabled={isSubmitting}
                      placeholder="(00) 00000-0000"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-primary outline-none transition-all bg-brand-surface/50 disabled:opacity-50"
                      value={leadData.whatsapp}
                      onChange={(e) => setLeadData({...leadData, whatsapp: e.target.value})}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth 
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-6 gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Processando...
                    </>
                  ) : (
                    <>
                      Continuar
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                <p className="text-[10px] text-brand-gray text-center mt-4">
                  Seus dados estão protegidos. Ao clicar em continuar você será redirecionado para o checkout.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};