import React, { useState } from 'react';
import { Lock, ShieldAlert, Terminal, Eye, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulated network delay for realism
    setTimeout(() => {
      if (username === 'digital-era' && email === 'digital_era@sina.com') {
        onLogin();
      } else {
        setError('身份验证失败：凭证无效或无访问权限');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-polaris-900">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-md p-8 glass-panel rounded-xl shadow-2xl border-t border-polaris-700 relative"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-polaris-900 px-4 py-1 border border-polaris-accent text-polaris-accent text-xs font-mono tracking-widest uppercase rounded">
          Top Secret
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-polaris-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-polaris-700 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Lock className="w-8 h-8 text-polaris-accent" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">对话北极星系统</h1>
          <p className="text-slate-400 text-sm mt-2 font-mono">核心架构文档访问入口</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-polaris-accent uppercase tracking-wider block">Username</label>
            <div className="relative">
              <Terminal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-polaris-900/50 border border-slate-700 rounded p-2.5 pl-10 text-sm text-white focus:outline-none focus:border-polaris-accent focus:ring-1 focus:ring-polaris-accent transition-all font-mono placeholder-slate-600"
                placeholder="Enter identifier"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-polaris-accent uppercase tracking-wider block">Email Verification</label>
            <div className="relative">
              <Eye className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-polaris-900/50 border border-slate-700 rounded p-2.5 pl-10 text-sm text-white focus:outline-none focus:border-polaris-accent focus:ring-1 focus:ring-polaris-accent transition-all font-mono placeholder-slate-600"
                placeholder="name@domain.com"
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-950/30 border border-red-900/50 p-3 rounded flex items-start space-x-2"
            >
              <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-xs text-red-400 mt-0.5">{error}</p>
            </motion.div>
          )}

          <div className="pt-2">
             <button 
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 bg-polaris-accent/10 hover:bg-polaris-accent/20 border border-polaris-accent text-polaris-accent font-medium rounded transition-all duration-300 flex items-center justify-center space-x-2 group ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="animate-pulse">VERIFYING CREDENTIALS...</span>
              ) : (
                <>
                  <span>ACCESS SECURE TERMINAL</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 pt-4 border-t border-slate-800 text-center">
          <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-600 font-mono">
            <AlertTriangle className="w-3 h-3" />
            <span>UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};