import React, { useState } from 'react';
import { Button } from './Button';
import { Brain, Sparkles, Loader2, X, User, Phone, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', whatsapp: '' });

  const CHECKOUT_LINK = 'https://script.google.com/macros/s/AKfycbxx8N9l7p0QcfUPHWx_AzHfZElnyht-gCWqOoO075TQMfL2ptW-tuTgASQoZHfGWR1dnw/exec';
  const WEBHOOK_URL = 'https://hook.us2.make.com/m47wi6zqyh8s74my0pld2j0ay9zo2g3w';

  const handleOpenModal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    if (!isSubmitting) setIsModalOpen(false);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadData.name && leadData.whatsapp) {
      setIsSubmitting(true);
      
      try {
        // Enviando os dados para o webhook do Make.com para registrar o lead
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...leadData,
            contentOfInterest: question,
            source: 'Hero - Testar Gratuitamente',
            timestamp: new Date().toISOString()
          }),
        });
      } catch (error) {
        console.error('Erro ao registrar lead:', error);
      } finally {
        // Redireciona para o link de checkout solicitado
        window.location.href = CHECKOUT_LINK;
      }
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo e Botão de Disparo */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-surface border border-brand-border mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                Memorização com Inteligência Artificial
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-dark mb-6 leading-tight">
              Pare de Repetir e <br />
              <span className="text-brand-gray">Não Memorizar:</span><br />
              Estude Leis com Memória Ativa
            </h1>
            
            <p className="text-lg text-brand-gray mb-10 leading-relaxed">
              Finalmente um método que faz você lembrar de verdade — conecte-se agora ao nosso sistema.
            </p>

            <form onSubmit={handleOpenModal} className="space-y-4 bg-brand-surface p-6 md:p-8 rounded-2xl border border-brand-border shadow-soft relative overflow-hidden">
              <textarea 
                required
                placeholder="O que você quer memorizar hoje?"
                className="w-full px-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-primary outline-none transition-all min-h-[120px] bg-white resize-none"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                size="lg"
                className="gap-2 text-lg py-4"
              >
                <Sparkles className="w-5 h-5" />
                TESTAR GRATUITAMENTE
              </Button>
            </form>
          </div>

          {/* Lado Direito: Elemento Visual de Dashboard */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 bg-white border border-brand-border rounded-2xl shadow-card p-3">
              <div className="bg-brand-surface rounded-xl p-8 aspect-[4/3] flex flex-col justify-between overflow-hidden relative">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <div className="h-4 w-32 bg-brand-dark/10 rounded"></div>
                    <div className="h-8 w-56 bg-brand-dark/20 rounded"></div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-brand-border shadow-sm">
                    <Brain className="text-brand-primary" size={28} />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-brand-gray uppercase tracking-widest">
                      <span>Nível de Retenção</span>
                      <span className="text-brand-primary">87%</span>
                    </div>
                    <div className="h-2.5 w-full bg-brand-border rounded-full overflow-hidden">
                      <div className="h-full w-[87%] bg-brand-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-primary">
                      <Sparkles size={20} />
                    </div>
                    <div className="h-12 flex-1 rounded-xl bg-brand-dark/5 border border-brand-border"></div>
                  </div>
                </div>

                <div className="absolute -right-8 -bottom-8 p-12 opacity-5 rotate-12">
                   <Brain size={200} />
                </div>
              </div>
            </div>
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-brand-dark/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Lead Capture Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={handleCloseModal}
          ></div>
          
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
                  <Brain size={32} />
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">Excelente escolha!</h3>
                <p className="text-brand-gray text-sm">Para liberar seu teste gratuito e acessar a ferramenta, preencha os dados abaixo.</p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider ml-1">Seu Nome</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                    <input 
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Nome completo"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-primary outline-none transition-all bg-brand-surface/50 disabled:opacity-50"
                      value={leadData.name}
                      onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider ml-1">Seu WhatsApp</label>
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
                      Preparando seu acesso...
                    </>
                  ) : (
                    <>
                      Liberar meu Teste
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                <p className="text-[10px] text-brand-gray text-center mt-4">
                  Seus dados estão protegidos. Você será redirecionado para concluir seu cadastro gratuito.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};