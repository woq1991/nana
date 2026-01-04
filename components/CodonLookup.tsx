import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { findAminoAcidData, CODON_TABLE } from '../constants';
import { AminoAcidData } from '../types';
import { Search, Zap } from 'lucide-react';

const CodonLookup: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<AminoAcidData | null>(null);

  useEffect(() => {
    if (!query) {
      setResult(null);
      return;
    }
    const data = findAminoAcidData(query);
    setResult(data);
  }, [query]);

  // Handle preset clicks
  const handleQuickSelect = (val: string) => {
    setQuery(val);
  };

  const optimalCodon = result?.codons.find(c => c.isOptimal);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-2xl leading-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
          placeholder="输入氨基酸 (如: A, Ala, 丙氨酸)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      {/* Result Card */}
      {result ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden animate-fade-in-up">
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {result.chineseName}
                  <span className="text-lg font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">
                    {result.threeLetter} / {result.singleLetter}
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">E. Coli K12 偏好性分析</p>
              </div>
              <div className="flex flex-col items-end">
                 <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold mb-1">最优密码子</div>
                 <div className="text-4xl md:text-5xl font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                    {optimalCodon?.codon}
                    <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                 </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-64 w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={result.codons} layout="vertical" margin={{ left: 0, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="codon" 
                    type="category" 
                    width={50} 
                    tick={{ fill: '#94a3b8', fontSize: 14, fontWeight: 'bold' }} 
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="fraction" barSize={24} radius={[0, 4, 4, 0]}>
                    {result.codons.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.isOptimal ? '#3b82f6' : '#cbd5e1'} 
                        className="transition-all duration-500"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {result.codons.map((c) => (
                    <div key={c.codon} className={`flex justify-between p-2 rounded ${c.isOptimal ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                        <span className={`font-mono font-bold ${c.isOptimal ? 'text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400'}`}>{c.codon}</span>
                        <span className="text-slate-500">{Math.round(c.fraction * 100)}%</span>
                    </div>
                ))}
            </div>

          </div>
        </div>
      ) : (
        <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">快速选择</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {CODON_TABLE.map(aa => (
                    <button
                        key={aa.singleLetter}
                        onClick={() => handleQuickSelect(aa.threeLetter)}
                        className="p-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-200 dark:border-slate-700 rounded-xl text-center transition-all active:scale-95"
                    >
                        <div className="font-bold text-slate-800 dark:text-slate-200">{aa.singleLetter}</div>
                        <div className="text-xs text-slate-400">{aa.threeLetter}</div>
                    </button>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default CodonLookup;
