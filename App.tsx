import React, { useState } from 'react';
import CodonLookup from './components/CodonLookup';
import SequenceOptimizer from './components/SequenceOptimizer';
import { AppMode } from './types';
import { Dna, Search, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.LOOKUP);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
                <Dna className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold tracking-tight">EC Codon</h1>
          </div>
          
          {/* Simple Tab Switcher for Mobile/Desktop */}
          <nav className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
             <button 
                onClick={() => setMode(AppMode.LOOKUP)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${mode === AppMode.LOOKUP ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}
             >
                查单字
             </button>
             <button 
                onClick={() => setMode(AppMode.OPTIMIZER)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${mode === AppMode.OPTIMIZER ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}
             >
                AI 优化
             </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 pb-24">
        <div className="transition-opacity duration-300 ease-in-out">
            {mode === AppMode.LOOKUP ? (
                <div className="animate-fade-in">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-bold mb-2">氨基酸最优密码子</h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            专为大肠杆菌 (E. Coli K12) 表达系统设计
                        </p>
                    </div>
                    <CodonLookup />
                </div>
            ) : (
                <div className="animate-fade-in">
                     <div className="mb-6 text-center">
                        <h2 className="text-2xl font-bold mb-2">序列智能优化</h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            使用 Gemini AI 生成高表达量的 DNA 序列
                        </p>
                    </div>
                    <SequenceOptimizer />
                </div>
            )}
        </div>
      </main>

      {/* Footer info for PakePlus context */}
      <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 pb-safe-area text-center text-xs text-slate-400">
        <p>Built for Research • E. Coli K12 Database</p>
      </footer>
      
      {/* Global CSS for animations */}
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .pb-safe-area {
            padding-bottom: env(safe-area-inset-bottom, 20px);
        }
      `}</style>
    </div>
  );
};

export default App;
