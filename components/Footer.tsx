import React from 'react';
import { Instagram, Youtube, Mail, Phone, Lock } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src="/logo.png" alt="Memória Ativa" className="h-10 object-contain" />
            </div>
            <p className="text-slate-600 text-sm mb-6 max-w-xs">
              Transforme leis em treino real de memória utilizando Active Recall e Inteligência Artificial.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange-500 transition-colors">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-red-600 transition-colors">
                <Youtube size={18} /> YouTube
              </a>
            </div>
            
             <div className="text-sm text-slate-600 space-y-2">
               <div className="flex items-center gap-2">
                 <Mail size={16} />
                 <span>contato@memoriaativa.com.br</span>
               </div>
               <div className="flex items-center gap-2">
                 <Phone size={16} />
                 <span>Suporte via WhatsApp</span>
               </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col items-start md:items-end">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wide">Legal</h4>
            <div className="flex flex-col md:items-end space-y-4 text-sm text-slate-600">
               <a href="#" className="hover:text-orange-500">Termos de Uso</a>
               <a href="#" className="hover:text-orange-500">Política de Privacidade</a>
               <div className="flex items-center gap-2 text-slate-900/70 pt-4">
                 <Lock size={14} />
                 <span>Seus dados estão seguros.</span>
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-xs text-slate-600">
          <p>Memória Ativa © {new Date().getFullYear()}. Feito por e para concurseiros.</p>
        </div>
      </div>
    </footer>
  );
};