import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LearningTechniques } from './components/LearningTechniques';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { MindMaps } from './components/MindMaps';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        <LearningTechniques />
        <ProblemSolution />
        <HowItWorks />
        <MindMaps />
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
