import React, { useState } from 'react';
import { 
  LogOut, 
  Trash2,
  EyeOff,
  AlertTriangle,
  Plus,
  Wand2,
  BookOpen,
  Target,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Logo } from './Logo';
import { GoogleGenAI } from "@google/genai";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função centralizada para chamar o Gemini
  const generateAiContent = async (type: 'fundamento' | 'pratica') => {
    if (!content.trim()) {
      setError("Por favor, insira o conteúdo da lei ou material antes de gerar.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAiResult('');

    try {
      // 1. Verificação de Segurança da API Key
      if (!process.env.API_KEY) {
        throw new Error("Configuração ausente: API_KEY não encontrada no ambiente de produção.");
      }

      // 2. Inicialização do SDK (conforme diretrizes oficiais)
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = type === 'fundamento' 
        ? `Aja como um professor de Direito. Explique de forma didática os fundamentos e a lógica por trás deste texto legal, destacando pegadinhas comuns em provas:\n\n${content}`
        : `Aja como uma banca examinadora de concursos. Com base no texto legal abaixo, crie 3 questões de múltipla escolha ou 'Certo/Errado' focadas em decoreba de prazos e exceções, seguidas do gabarito comentado:\n\n${content}`;

      // 3. Chamada da API com o modelo de maior raciocínio
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
      });

      // 4. Extração segura do texto
      const textResult = response.text;
      if (textResult) {
        setAiResult(textResult);
      } else {
        throw new Error("A IA retornou uma resposta vazia.");
      }

    } catch (err: any) {
      console.error("Erro na integração IA:", err);
      setError(err.message || "Ocorreu um erro ao processar sua solicitação.");
    } finally {
      // 5. SEMPRE interrompe o loading, mesmo em caso de erro
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans text-brand-dark overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-[300px] bg-[#F0F2F6] border-r border-brand-border flex flex-col h-full z-40">
        <div className="p-8">
          <div className="mb-12">
             <Logo className="h-10" />
          </div>

          <div className="mb-10">
            <div className="flex justify-between items-center text-xs font-bold text-brand-dark mb-2 uppercase tracking-wider">
              <span>Progresso de Estudo</span>
              <span>Nível 2</span>
            </div>
            <div className="h-2 w-full bg-white rounded-full overflow-hidden shadow-inner border border-brand-border">
               <div className="h-full w-[55%] bg-brand-dark rounded-full"></div>
            </div>
          </div>

          <button className="w-full bg-brand-dark text-white font-bold py-3.5 rounded-xl mb-10 hover:bg-slate-900 transition-all shadow-md flex items-center justify-center gap-2">
            <Plus size={18} strokeWidth={3} />
            Novo Material
          </button>

          <div className="space-y-6">
            <h3 className="font-extrabold text-[10px] text-brand-gray flex items-center gap-2 uppercase tracking-[0.2em]">
              📚 BIBLIOTECA
            </h3>
            
            <div className="flex items-center gap-2 group">
              <div className="flex-1 bg-brand-dark text-white px-4 py-2.5 rounded-lg text-xs font-bold truncate flex items-center gap-2">
                <span className="opacity-70">🚩</span> CF: Bens da União
              </div>
              <button className="p-2.5 bg-brand-dark text-white rounded-lg hover:bg-slate-900 transition-colors shadow-sm">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-auto p-8 border-t border-brand-border bg-[#F0F2F6]/50">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 text-sm font-semibold text-brand-gray hover:text-brand-dark transition-colors group"
          >
            <div className="p-2 rounded-lg group-hover:bg-white transition-colors">
              <LogOut size={18} />
            </div>
            Voltar para o site
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-16 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-brand-dark tracking-tight">Painel de Estudos</h2>
            <p className="text-brand-gray">Transforme leitura passiva em memorização ativa com Inteligência Artificial.</p>
          </header>

          <section className="mb-12 bg-brand-surface rounded-3xl p-8 border border-brand-border">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-brand-gray mb-3 ml-1">Título do Material</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Artigo 5º da Constituição Federal"
                  className="w-full bg-white border border-brand-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-dark outline-none transition-all font-medium" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-brand-gray mb-3 ml-1">Conteúdo Legal (PDF ou Texto)</label>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Cole aqui o texto da lei ou material que deseja memorizar..."
                  className="w-full bg-white border border-brand-border rounded-xl px-5 py-4 h-48 focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-dark outline-none resize-none transition-all font-medium leading-relaxed"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => generateAiContent('fundamento')}
                  disabled={isLoading}
                  className="bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-slate-900 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : <BookOpen size={20} />}
                  Gerar Fundamento
                </button>
                <button 
                  onClick={() => generateAiContent('pratica')}
                  disabled={isLoading}
                  className="bg-brand-cyan text-brand-dark font-bold py-4 rounded-xl hover:bg-cyan-400 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Target size={20} />}
                  Gerar Prática
                </button>
              </div>
            </div>
          </section>

          {/* Feedback Section */}
          {(error || aiResult || isLoading) && (
            <section className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className={`rounded-3xl p-8 border ${error ? 'bg-red-50 border-red-200' : 'bg-white border-brand-border shadow-card'}`}>
                
                {isLoading && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Loader2 className="animate-spin text-brand-dark mb-4" size={48} />
                    <h3 className="font-bold text-xl text-brand-dark mb-2">Acelerando sua Memorização...</h3>
                    <p className="text-brand-gray">Nossa IA está analisando os pontos cegos do texto jurídico.</p>
                  </div>
                )}

                {error && (
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-lg text-red-600">
                      <AlertCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800">Ops! Erro de Conexão</h4>
                      <p className="text-red-700 text-sm mt-1">{error}</p>
                      <button 
                        onClick={() => window.location.reload()}
                        className="mt-4 text-xs font-bold uppercase tracking-widest text-red-600 hover:underline"
                      >
                        Recarregar Página
                      </button>
                    </div>
                  </div>
                )}

                {aiResult && !isLoading && (
                  <div className="prose prose-slate max-w-none">
                    <div className="flex items-center gap-2 mb-6 text-brand-cyan">
                      <CheckCircle2 size={24} />
                      <span className="font-bold uppercase tracking-widest text-xs">Treino Gerado com Sucesso</span>
                    </div>
                    <div className="whitespace-pre-wrap font-sans text-brand-dark leading-relaxed text-lg">
                      {aiResult}
                    </div>
                    <div className="mt-12 pt-8 border-t border-brand-border flex justify-between items-center">
                       <span className="text-xs text-brand-gray font-medium italic">Baseado em Active Recall • Memória Ativa v2.5</span>
                       <button className="text-sm font-bold text-brand-dark hover:underline">Salvar na Biblioteca</button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
};