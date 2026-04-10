import React from 'react';
import { Sparkles } from 'lucide-react';

export const MindMaps: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-8">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                Nova Funcionalidade
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Sua anotação vira um <span className="text-orange-500">Mapa Mental</span> em segundos.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Nosso Tutor IA não apenas explica a lei, ele desenha o conhecimento para você. Exporte mapas ortogonais perfeitos e diretos ao ponto.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80" 
              alt="Mapa Mental IA" 
              className="w-full h-auto rounded-3xl shadow-2xl border border-slate-700" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
