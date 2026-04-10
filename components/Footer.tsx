import React from 'react';
import { Brain, Instagram, Youtube, Mail, Phone, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-dark p-1 rounded text-white">
                <Brain className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-brand-dark">
                Memória Ativa
              </span>
            </div>
            <p className="text-brand-gray text-sm mb-6 max-w-xs">
              Transforme leis em treino real de memória.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="flex items-center gap-2 text-sm text-brand-gray hover:text-brand-primary transition-colors">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-brand-gray hover:text-red-600 transition-colors">
                <Youtube size={18} /> YouTube
              </a>
            </div>
            
             <div className="text-sm text-brand-gray space-y-2">
               <div className="flex items-center gap-2">
                 <Mail size={16} />
                 <span>contato@memoriaativa.com.br</span>
               </div>
               <div className="flex items-center gap-2">
                 <Phone size={16} />
                 <span>WhatsApp: (xx) xxxx-xxxx</span>
               </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col items-start md:items-end">
            <h4 className="font-bold text-brand-dark mb-6 text-sm uppercase tracking-wide">Legal</h4>
            <div className="flex flex-col md:items-end space-y-4 text-sm text-brand-gray">
               <a href="#" className="hover:text-brand-primary">Termos de Uso</a>
               <a href="#" className="hover:text-brand-primary">Política de Privacidade</a>
               <div className="flex items-center gap-2 text-brand-dark/70 pt-4">
                 <Lock size={14} />
                 <span>Seus dados estão seguros.</span>
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-brand-border pt-8 text-center text-xs text-brand-gray">
          <p>Memória Ativa. Feito por e para concurseiros.</p>
        </div>
      </div>
    </footer>
  );
};