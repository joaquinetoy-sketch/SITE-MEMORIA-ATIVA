import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const faqItems = [
  {
    question: "Para quem é o Memória Ativa?",
    answer: "O Memória Ativa foi criado inicialmente para quem estuda para concursos públicos, OAB ou provas que exigem memorização de textos legais e sente dificuldade em lembrar o conteúdo na hora da prova. Hoje, o método também tem gerado excelentes resultados em outras áreas de estudo."
  },
  {
    question: "Como posso testar gratuitamente?",
    answer: "Basta criar sua conta. Você terá acesso a um período de testes ou limite gratuito de exercícios para conhecer a metodologia na prática antes de decidir assinar."
  },
  {
    question: "Funciona bem no celular?",
    answer: "Sim! A plataforma é totalmente responsiva. Você pode revisar seus cards na fila do banco, no ônibus ou em qualquer intervalo do dia direto pelo smartphone."
  },
  {
    question: "Que tipo de conteúdo posso enviar?",
    answer: "O sistema aceita textos colados diretamente ou arquivos (como PDFs de leis e resumos). O foco principal é conteúdo textual que precisa ser memorizado."
  },
  {
    question: "É difícil de usar?",
    answer: "Não. A interface é limpa e intuitiva. Você envia o texto e o sistema gera os exercícios. Sua única tarefa é estudar e responder."
  },
  {
    question: "Meus dados e arquivos ficam seguros?",
    answer: "Sim. Levamos privacidade a sério. Seus materiais de estudo são privados e não são compartilhados com outros usuários."
  },
  {
    question: "Substitui meu cursinho ou videoaulas?",
    answer: "Não. O Memória Ativa é uma ferramenta de retenção. Você usa o material do seu cursinho (PDFs e leis) para garantir que não vai esquecer o que aprendeu."
  },
  {
    question: "Tenho alguma garantia se não gostar?",
    answer: "Sim. Oferecemos garantia de satisfação nos planos pagos. Se você sentir que o método não é para você nos primeiros dias, devolvemos seu investimento."
  },
  {
    question: "Preciso montar cronograma de revisão?",
    answer: "Não! Esse é um dos maiores benefícios. O algoritmo de Repetição Espaçada calcula automaticamente quando você deve rever cada item para não esquecer."
  },
  {
    question: "Serve para matérias de Exatas?",
    answer: "O foco da ferramenta é texto e legislação (Direito, Humanas, Biológicas). Para cálculos matemáticos complexos, a metodologia de resolução de problemas tradicional pode ser mais indicada."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const WHATSAPP_LINK = "https://wa.me/5588992113541?text=Ol%C3%A1%2C%20estou%20no%20site%20do%20Mem%C3%B3ria%20Ativa%2C%20pode%20me%20ajudar%3F";

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">PERGUNTAS FREQUENTES</h2>
          <p className="text-slate-600">Tire suas dúvidas e comece a estudar do jeito certo.</p>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200 mb-12">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white">
              <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium text-lg pr-4 transition-colors ${openIndex === index ? 'text-orange-500' : 'text-slate-900 group-hover:text-slate-600'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-orange-500 w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-500 w-5 h-5 flex-shrink-0 group-hover:text-slate-900" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed pr-8 text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Support Card */}
        <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-200 shadow-md">
          <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#25D366]">
            <MessageCircle size={28} fill="currentColor" className="opacity-80" />
          </div>
          <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Ainda tem alguma dúvida?</h3>
          <p className="text-slate-600 mb-6">
            Não encontrou o que procurava? Fale diretamente com nossa equipe de suporte agora mesmo.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all hover:scale-105 shadow-sm group"
          >
            Falar com Suporte no WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};