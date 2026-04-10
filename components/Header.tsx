import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onLogin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLoginClick = () => {
    setIsMobileMenuOpen(false);
    if (onLogin) onLogin();
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="bg-brand-dark p-1.5 rounded-lg text-white">
              <Brain className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-brand-dark">
              Memória Ativa
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-brand-gray hover:text-brand-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={handleLoginClick}>Entrar</Button>
            <Button variant="primary" size="sm" onClick={handleLoginClick}>Criar conta</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-brand-dark hover:bg-brand-surface rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-brand-border p-4 md:hidden flex flex-col gap-2 animate-in slide-in-from-top-2 shadow-lg h-auto overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-dark font-medium px-4 py-3 rounded-lg hover:bg-brand-surface"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-brand-border my-2 pt-4 flex flex-col gap-3 px-4 pb-2">
            <Button variant="ghost" fullWidth onClick={handleLoginClick}>Entrar</Button>
            <Button variant="primary" fullWidth onClick={handleLoginClick}>Criar conta</Button>
          </div>
        </div>
      )}
    </header>
  );
};