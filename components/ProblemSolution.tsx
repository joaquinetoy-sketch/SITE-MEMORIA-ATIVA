import React from 'react';
import { X, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-xl overflow-hidden border border-brand-border shadow-sm">
          
          {/* Problem Card */}
          <div className="bg-white p-10 md:p-12">
            <h3 className="font-bold text-xs text-brand-gray mb-6 uppercase tracking-wider">O PROBLEMA QUE VOCÊ ENFRENTA</h3>
            <h2 className="font-display font-bold text-2xl text-brand-dark mb-2">
              Estudar leis é fácil.
            </h2>
            <h2 className="font-display font-bold text-2xl text-brand-gray mb-8">
              Memorizar, não.
            </h2>

            <p className="text-brand-gray mb-6">Você já tem:</p>

            <ul className="space-y-4 mb-8">
              {[
                "Relido o mesmo artigo várias vezes?",
                "Voltado sempre para o mesmo trecho?",
                "Travado na hora de responder questões?"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-brand-gray">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-dark font-medium border-t border-brand-border pt-6">
              Se sim — o problema não é falta de esforço. É o método.
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-brand-dark p-10 md:p-12 text-white">
            <h3 className="font-bold text-xs text-brand-border/60 mb-6 uppercase tracking-wider">A SOLUÇÃO QUE FUNCIONA DE VERDADE</h3>
            <h2 className="font-display font-bold text-2xl text-white mb-2">
              Memorização não vem de leitura…
            </h2>
             <h2 className="font-display font-bold text-2xl text-brand-gray mb-8">
              vem de testar sua memória.
            </h2>

            <div className="space-y-6 text-brand-border/80 leading-relaxed">
              <p>
                Com Memória Ativa, você não relê.
              </p>
              <p>
                Você pratica lembrar desde o primeiro contato com o conteúdo — e é assim que seu cérebro aprende de fato.
              </p>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 mt-4">
                 <p className="text-white text-sm">
                   O sistema pega o texto que você envia e o transforma em exercícios que treinam sua memória de forma ativa.
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};