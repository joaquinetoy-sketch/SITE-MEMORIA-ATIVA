import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const FINAL_APP_URL = 'https://memoria-ativa-pro.vercel.app/';

  const navLinks = [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleAction = () => {
    setIsMobileMenuOpen(false);
    window.open(FINAL_APP_URL, '_blank');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          <a 
            href="#" 
            className="flex items-center h-8 md:h-10" 
            onClick={(e) => { 
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
          >
            <img src="/logo.png" alt="Memória Ativa" className="h-8 md:h-10 object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={handleAction} className="text-sm text-slate-700 hover:text-slate-900">Entrar</Button>
            <Button variant="primary" size="sm" onClick={handleAction} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 text-sm">Começar Agora</Button>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 lg:hidden flex flex-col gap-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-900 font-bold px-4 py-3 rounded-lg hover:bg-slate-50 text-base transition-colors"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-slate-200 my-2 pt-4 flex flex-col gap-3 px-4 pb-2">
            <Button variant="ghost" fullWidth onClick={handleAction} className="text-slate-700 hover:text-slate-900">Entrar</Button>
            <Button variant="primary" fullWidth onClick={handleAction} className="bg-orange-500 hover:bg-orange-600 text-white">Começar Agora</Button>
          </div>
        </div>
      )}
    </header>
  );
};