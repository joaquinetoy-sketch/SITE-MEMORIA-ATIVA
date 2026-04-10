import React from 'react';
import { 
  LayoutDashboard, 
  Upload, 
  BookOpen, 
  Settings, 
  LogOut, 
  Brain,
  Plus
} from 'lucide-react';
import { Button } from './Button';

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-brand-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark text-white flex flex-col fixed h-full z-20 hidden md:flex">
        <div className="p-6 flex items-center gap-2 border-b border-white/10">
          <div className="bg-brand-primary p-1.5 rounded-lg text-white">
            <Brain className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Memória Ativa
          </span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <div className="mb-8">
            <Button variant="secondary" fullWidth className="gap-2 justify-start pl-4" size="md">
              <Plus size={18} />
              Novo Estudo
            </Button>
          </div>

          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-lg font-medium transition-colors">
            <LayoutDashboard size={20} />
            Visão Geral
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-gray hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <Upload size={20} />
            Importar Arquivos
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-gray hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <BookOpen size={20} />
            Meus Materiais
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-gray hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
            <Settings size={20} />
            Configurações
          </a>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-brand-gray hover:text-red-400 hover:bg-white/5 rounded-lg font-medium transition-colors"
          >
            <LogOut size={20} />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-display font-bold text-2xl text-brand-dark">Olá, Estudante</h1>
            <p className="text-brand-gray">Vamos exercitar sua memória hoje?</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                E
             </div>
          </div>
        </header>

        {/* Empty State / Dashboard Content */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
           {/* Stat Cards */}
           <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
              <span className="text-brand-gray text-sm font-medium">Estudos Ativos</span>
              <div className="flex items-end gap-2 mt-2">
                 <span className="text-3xl font-bold text-brand-dark">0</span>
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
              <span className="text-brand-gray text-sm font-medium">Revisões Pendentes</span>
              <div className="flex items-end gap-2 mt-2">
                 <span className="text-3xl font-bold text-brand-dark">0</span>
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
              <span className="text-brand-gray text-sm font-medium">Precisão Média</span>
              <div className="flex items-end gap-2 mt-2">
                 <span className="text-3xl font-bold text-brand-dark">-%</span>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-xl border border-brand-border shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gray">
              <Upload size={32} />
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">Comece seu primeiro estudo</h3>
            <p className="text-brand-gray mb-6 max-w-md mx-auto">
              Faça upload de um PDF ou cole um texto de lei para gerar seus primeiros cartões de memória ativa.
            </p>
            <Button onClick={() => {}}>
              Criar Novo Estudo
            </Button>
        </div>
      </main>
    </div>
  );
};