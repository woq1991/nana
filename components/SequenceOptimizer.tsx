import React, { useState } from 'react';
import { optimizeSequence } from '../services/geminiService';
import { OptimizerResponse } from '../types';
import { Wand2, Copy, AlertCircle, Loader2 } from 'lucide-react';

const SequenceOptimizer: React.FC = () => {
  const [sequence, setSequence] = useState('');
  const [result, setResult] = useState<OptimizerResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOptimize = async () => {
    if (!sequence.trim()) return;
    
    // Basic validation: Check if sequence contains only valid amino acids
    const invalidChars = sequence.replace(/[\s\n\r]/g, '').match(/[^ACDEFGHIKLMNPQRSTVWY*]/i);
    if (invalidChars) {
        setError(`检测到无效氨基酸字符: "${invalidChars[0]}". 请只输入标准单字母序列。`);
        return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await optimizeSequence(sequence);
      setResult(data);
    } catch (e: any) {
      setError(e.message || "优化过程中发生未知错误");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result?.dnaSequence) {
        navigator.clipboard.writeText(result.dnaSequence);
        // Could add a toast here, but keeping it simple for now
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            输入蛋白质序列 (单字母)
        </label>
        <textarea
            className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm resize-none"
            placeholder="例如: MKTIIALSYIFCLVFADYKDDDDK..."
            value={sequence}
            onChange={(e) => {
                setSequence(e.target.value.toUpperCase());
                setError(null);
            }}
        />
        
        {error && (
            <div className="mt-3 flex items-center text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                {error}
            </div>
        )}

        <button
            onClick={handleOptimize}
            disabled={loading || !sequence}
            className={`mt-4 w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-white font-semibold shadow-lg transition-all
                ${loading || !sequence 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-500/30 active:scale-[0.98]'
                }`}
        >
            {loading ? (
                <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    正在优化...
                </>
            ) : (
                <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    AI 生成优化序列
                </>
            )}
        </button>
      </div>

      {/* Results Section */}
      {result && (
        <div className="animate-fade-in-up space-y-4">
             <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-indigo-100 dark:border-indigo-900/30">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
                        优化结果 (DNA)
                    </h3>
                    <button 
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-500 hover:text-indigo-600"
                        title="复制序列"
                    >
                        <Copy className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 break-all font-mono text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-h-60 overflow-y-auto">
                    {result.dnaSequence}
                </div>

                <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">优化策略说明</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                        {result.explanation}
                    </p>
                </div>
             </div>
        </div>
      )}

      {!process.env.API_KEY && (
          <div className="text-center p-4 text-xs text-slate-400">
              注意：使用此功能需要配置 API Key。
          </div>
      )}
    </div>
  );
};

export default SequenceOptimizer;
