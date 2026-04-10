import React from 'react';
import { X, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
          
          {/* Problem Card */}
          <div className="bg-white p-10 md:p-12">
            <h3 className="font-bold text-xs text-slate-500 mb-6 uppercase tracking-wider">O PROBLEMA QUE VOCÊ ENFRENTA</h3>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">
              Estudar leis é fácil.
            </h2>
            <h2 className="font-display font-bold text-2xl text-slate-500 mb-8">
              Memorizar, não.
            </h2>

            <p className="text-slate-600 mb-6">Você já tem:</p>

            <ul className="space-y-4 mb-8">
              {[
                "Relido o mesmo artigo várias vezes?",
                "Voltado sempre para o mesmo trecho?",
                "Travado na hora de responder questões?"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-900 font-medium border-t border-slate-200 pt-6">
              Se sim — o problema não é falta de esforço. É o método.
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-slate-900 p-10 md:p-12 text-white">
            <h3 className="font-bold text-xs text-slate-400 mb-6 uppercase tracking-wider">A SOLUÇÃO QUE FUNCIONA DE VERDADE</h3>
            <h2 className="font-display font-bold text-2xl text-white mb-2">
              Memorização não vem de leitura…
            </h2>
             <h2 className="font-display font-bold text-2xl text-slate-400 mb-8">
              vem de testar sua memória.
            </h2>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Com Memória Ativa, você não relê.
              </p>
              <p>
                Você pratica lembrar desde o primeiro contato com o conteúdo — e é assim que seu cérebro aprende de fato.
              </p>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
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