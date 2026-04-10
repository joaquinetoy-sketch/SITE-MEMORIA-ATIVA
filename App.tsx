import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LearningTechniques } from './components/LearningTechniques';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'app'>('landing');

  // Simple mock authentication flow
  const handleLogin = () => {
    setCurrentView('app');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  if (currentView === 'app') {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-primary selection:text-white">
      <Header onLogin={handleLogin} />
      <main>
        <Hero />
        <LearningTechniques />
        <ProblemSolution />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;