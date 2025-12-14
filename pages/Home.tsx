import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { PageView } from '../types';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Tech Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* Animated Orbs/Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-outlier/10 rounded-full blur-3xl"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <Activity className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-slate-300">Next Gen Data Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 font-sans">
          We Find What <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">
            Others Miss.
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 font-body mb-10">
          From deep prediction to <span className="text-outlier font-semibold">anomaly detection</span>. 
          We transform noise into strategic advantage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate('services')}
            className="group px-8 py-4 rounded-lg bg-accent hover:bg-sky-400 text-navy font-bold transition-all shadow-lg shadow-sky-900/20 flex items-center justify-center gap-2"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};