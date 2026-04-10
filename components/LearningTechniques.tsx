import React from 'react';
import { Anchor, Zap, Repeat, BookOpen, Eye, Target } from 'lucide-react';

const techniques = [
  { name: "Ancoragem", icon: Anchor },
  { name: "Gatilhos Mentais", icon: Zap },
  { name: "Memória Ativa", icon: Repeat },
  { name: "Explicações de Termos", icon: BookOpen },
  { name: "Gatilho Visual", icon: Eye },
  { name: "Aplicação do Conceito", icon: Target },
];

export const LearningTechniques: React.FC = () => {
  // Duplicating the list to ensure seamless infinite scrolling
  // We repeat it enough times to cover wide screens before the animation loops
  const allItems = [...techniques, ...techniques, ...techniques, ...techniques];

  return (
    <section className="py-12 bg-slate-50/50 border-b border-slate-200 overflow-hidden relative">
      
      {/* Title */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Técnicas de Aprendizagem Inclusas
        </p>
      </div>

      {/* Gradient Masks for smooth fade effect at edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:w-48"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:w-48"></div>

      {/* Carousel Container */}
      <div className="flex w-full">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {allItems.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 mx-4 px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm min-w-[max-content] hover:border-orange-500/30 hover:shadow-md transition-all duration-300"
            >
              <div className="bg-slate-50 p-2 rounded-xl text-orange-500">
                <tech.icon size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display font-semibold text-slate-900 text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};