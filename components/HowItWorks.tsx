import React from 'react';
import { Upload, Wand2, BrainCircuit, CalendarClock, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Envie o conteúdo",
      desc: "Cole ou anexe a lei, resumo ou apostila que precisa estudar."
    },
    {
      icon: Wand2,
      title: "2. O sistema transforma em treino",
      desc: "Nossa tecnologia cria exercícios de memória ativa automaticamente."
    },
    {
      icon: BrainCircuit,
      title: "3. Você estuda respondendo",
      desc: "Force seu cérebro a buscar a informação em vez de apenas ler passivamente."
    },
    {
      icon: CalendarClock,
      title: "4. A revisão aparece na hora certa",
      desc: "O algoritmo agenda suas revisões baseado no seu desempenho individual."
    },
    {
      icon: TrendingUp,
      title: "5. Você acompanha seu progresso",
      desc: "Visualize sua evolução diária e sinta a segurança aumentar."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">
            COMO FUNCIONA
          </h2>
          <p className="text-slate-600">
            Cinco passos simples para transformar sua rotina de estudos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-3xl border border-slate-200 shadow-md hover:border-orange-500/50 transition-colors bg-white group h-full">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-slate-900 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                <step.icon size={24} />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-3 leading-tight">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};