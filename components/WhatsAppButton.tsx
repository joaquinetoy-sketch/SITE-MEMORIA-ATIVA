import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5588992113541?text=Ol%C3%A1%2C%20estou%20no%20site%20do%20Mem%C3%B3ria%20Ativa%2C%20pode%20me%20ajudar%3F";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-card hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 active:scale-95 group animate-in fade-in slide-in-from-bottom-10"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle 
        size={32} 
        fill="currentColor" 
        className="group-hover:rotate-12 transition-transform" 
      />
      
      {/* Tooltip Label */}
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-200 translate-x-4 group-hover:translate-x-0 hidden md:block">
        Fale Conosco
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-slate-200 rotate-45"></div>
      </span>
      
      {/* Pulse Effect for visibility */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
    </a>
  );
};