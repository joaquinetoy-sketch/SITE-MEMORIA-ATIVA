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
    <section id="depoimentos" className="py-24 bg-white border-b border-brand-border scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl text-brand-dark">
            QUEM JÁ USA, RECOMENDA
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-brand-surface p-8 rounded-lg border border-brand-border hover:border-brand-primary/30 transition-colors">
              <p className="text-brand-dark mb-6 leading-relaxed text-lg italic">"{t.quote}"</p>
              <div>
                <h5 className="font-bold text-brand-dark">{t.name}</h5>
                <span className="text-sm text-brand-gray">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-bold text-brand-gray uppercase tracking-wide">
             <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-brand-primary" />
                <span>Mais de 5.000 exercícios gerados</span>
             </div>
             <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-brand-primary" />
                <span>Alunos de todo o Brasil</span>
             </div>
             <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-brand-primary" />
                <span>Método validado por neurociência</span>
             </div>
        </div>
      </div>
    </section>
  );
};