import React from 'react';
import { Zap, Clock, Brain, Target, ShieldCheck, ListTodo } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: "Fim da Leitura Passiva",
    desc: "Pare de ler a mesma página 10 vezes sem absorver nada do conteúdo."
  },
  {
    icon: Target,
    title: "Estudo Ativo Real",
    desc: "Aprenda testando seu conhecimento na prática, não apenas consumindo teoria."
  },
  {
    icon: Clock,
    title: "Revisão Automática",
    desc: "Nunca mais perca tempo montando planilhas complexas de revisão."
  },
  {
    icon: Zap,
    title: "Foco na Lacuna",
    desc: "Identifique exatamente o que você não sabe e corrija suas falhas rapidamente."
  },
  {
    icon: ListTodo,
    title: "Ganho de Tempo",
    desc: "Estude em menos tempo com muito mais eficiência e retenção de longo prazo."
  },
  {
    icon: ShieldCheck,
    title: "Confiança na Prova",
    desc: "Chegue no dia do exame sabendo que o conteúdo está realmente fixado na memória."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-brand-surface scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            BENEFÍCIOS REAIS
          </h2>
          <p className="text-brand-gray text-lg">
            Memorizar é lembrar, não reler. Veja o que muda na sua rotina:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-brand-border shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 inline-flex p-3 rounded-lg bg-brand-surface text-brand-primary">
                <benefit.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};