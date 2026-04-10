import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  const brandDark = "#1B1F4B"; 
  const color = variant === 'dark' ? brandDark : "#FFFFFF";
  const iconBg = variant === 'dark' ? brandDark : "#FFFFFF";
  const brainColor = variant === 'dark' ? "#FFFFFF" : brandDark;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="h-full aspect-square flex-shrink-0">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fundo do Ícone - Ajustado para ser idêntico ao quadrado do Streamlit */}
          <rect width="100" height="100" rx="20" fill={iconBg} />
          
          {/* Desenho do Cérebro Fiel ao App */}
          <g transform="translate(50, 50) scale(0.8)">
            <path 
              d="M-5,32 C-22,32 -38,24 -38,0 C-38,-24 -22,-32 -5,-32 L-5,32 Z" 
              fill={brainColor} 
            />
            <path 
              d="M5,32 C22,32 38,24 38,0 C38,-24 22,-32 5,-32 L5,32 Z" 
              fill={brainColor} 
            />
            {/* Divisão central */}
            <rect x="-3" y="-32" width="6" height="64" fill={iconBg} rx="3" />
            {/* Detalhes internos (sulcos) */}
            <path d="M-20,-14 A14,14 0 0,0 -20,14" stroke={iconBg} strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M20,-14 A14,14 0 0,1 20,14" stroke={iconBg} strokeWidth="6" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      </div>
      <span 
        className="font-sans font-extrabold text-[1.2rem] md:text-[1.3rem] tracking-tight whitespace-nowrap"
        style={{ color: color, letterSpacing: '-0.02em' }}
      >
        Memória Ativa
      </span>
    </div>
  );
};