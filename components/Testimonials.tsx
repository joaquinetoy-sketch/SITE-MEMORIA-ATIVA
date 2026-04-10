import React from 'react';
import { Check } from 'lucide-react';

const testimonials = [
  {
    name: "Camila",
    role: "Estuda para TRF",
    quote: "Passei a memorizar sem precisar reler tudo. Minha confiança nas provas aumentou demais.",
  },
  {
    name: "João",
    role: "Foco em concursos fiscais",
    quote: "Eu errava muito em Direito Administrativo. Agora acerto quase tudo.",
  },
  {
    name: "Luiza",
    role: "OAB",
    quote: "A diferença é absurda. Dá até prazer em revisar.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl text-slate-900">
            QUEM JÁ USA, RECOMENDA
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-orange-500/30 transition-colors shadow-md">
              <p className="text-slate-900 mb-6 leading-relaxed text-lg italic">"{t.quote}"</p>
              <div>
                <h5 className="font-bold text-slate-900">{t.name}</h5>
                <span className="text-sm text-slate-600">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-bold text-slate-600 uppercase tracking-wide">
             <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>Mais de 5.000 exercícios gerados</span>
             </div>
             <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>Alunos de todo o Brasil</span>
             </div>
             <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>Método validado por neurociência</span>
             </div>
        </div>
      </div>
    </section>
  );
};