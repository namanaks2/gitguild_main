import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, Zap, Fingerprint } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { GitGuildLogo } from '../components/GitGuildLogo';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [statusText, setStatusText] = useState('');
  const navigate = useNavigate();
  const { loginExistingUser } = useAppContext();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsAuthenticating(true);
    setStatusText('INITIALIZING HANDSHAKE...');

    setTimeout(() => setStatusText('VERIFYING GUILD CREDENTIALS...'), 600);
    setTimeout(() => setStatusText('BYPASSING MAINFRAME ENCRYPTION...'), 1200);
    setTimeout(() => setStatusText('ACCESS GRANTED.'), 1800);
    
    setTimeout(() => {
      // Set a fun user name based on the email input's first part
      const name = email.split('@')[0] || 'Player One';
      loginExistingUser(name);
      navigate('/');
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#050B14] flex items-center justify-center relative overflow-hidden font-mono">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) scale(2.5) translateY(-100px)' }}>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[200px] opacity-10 animate-pulse pointer-events-none"></div>
      
      <div className={`glass-panel w-full max-w-md p-1 bg-[#0a1120]/90 backdrop-blur-xl relative z-10 border border-[var(--color-neon-blue)]/30 rounded-none shadow-[0_0_50px_rgba(14,165,233,0.15)] transition-all duration-1000 ${isAuthenticating ? 'scale-105 border-[var(--color-neon-blue)] shadow-[0_0_80px_rgba(14,165,233,0.4)]' : ''}`}>
        
        {/* Scanner line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
           <div className="w-full h-1 bg-[var(--color-neon-blue)]/50 shadow-[0_0_20px_var(--color-neon-blue)] absolute top-0 animate-[scan_3s_ease-in-out_infinite]" style={{ animation: 'scan 4s linear infinite', top: '-10px' }}></div>
        </div>
        
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-neon-blue)]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-neon-blue)]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--color-neon-blue)]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-neon-blue)]"></div>

        <div className="p-8">
          <div className="flex flex-col items-center mb-10 relative">
            <div className="relative mb-6 group cursor-pointer">
              <div className="absolute inset-0 bg-[var(--color-neon-blue)] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <div className="w-24 h-24 flex items-center justify-center relative z-10 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                 <GitGuildLogo className="w-full h-full text-[var(--color-neon-blue)]" />
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-[0.2em] uppercase neon-text-blue text-center flex items-center gap-2">
              <Zap size={24} className="text-[var(--color-neon-blue)] animate-pulse" />
              GitGuild
            </h1>
            <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent mt-4"></div>
            <p className="text-[var(--color-neon-blue)]/70 mt-3 text-sm tracking-[0.3em] uppercase">System uplink required</p>
          </div>

          {!isAuthenticating ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-[var(--color-neon-blue)] opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-300"></div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[var(--color-neon-blue)] transition-colors">Player ID / Comm Link</label>
                  <input 
                    type="text" required
                    value={email} onChange={e => setEmail(e.target.value)}
                    className="w-full bg-[#050B14]/80 border border-gray-800 rounded-none p-4 pl-12 outline-none focus:border-[var(--color-neon-blue)] transition-colors text-[var(--color-neon-blue)] placeholder-gray-700 font-mono"
                    placeholder="ANY_EMAIL_ACCEPTED"
                  />
                  <ShieldAlert size={18} className="absolute left-4 bottom-4 text-gray-600 group-focus-within:text-[var(--color-neon-blue)] transition-colors" />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-[var(--color-neon-blue)] opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-[var(--color-neon-blue)] transition-colors">Passcode</label>
                    <span className="text-[10px] tracking-widest text-[var(--color-neon-blue)]/50 uppercase">Open Access Mode</span>
                  </div>
                  <input 
                    type="password" required
                    value={password} onChange={e => setPassword(e.target.value)}
                    className="w-full bg-[#050B14]/80 border border-gray-800 rounded-none p-4 pl-12 outline-none focus:border-[var(--color-neon-blue)] transition-colors text-[var(--color-neon-blue)] placeholder-gray-700 font-mono"
                    placeholder="••••••••"
                  />
                  <Fingerprint size={18} className="absolute left-4 bottom-4 text-gray-600 group-focus-within:text-[var(--color-neon-blue)] transition-colors" />
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full relative group overflow-hidden border border-[var(--color-neon-blue)] bg-transparent text-[var(--color-neon-blue)] py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-[var(--color-neon-blue)] hover:text-[#050B14] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Initialize Connection
                  </span>
                  <div className="absolute inset-0 h-full w-0 bg-[var(--color-neon-blue)] transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                </button>
              </div>
            </form>
          ) : (
             <div className="h-[300px] flex flex-col items-center justify-center relative">
               <div className="w-24 h-24 border-2 border-[var(--color-neon-blue)] border-dashed rounded-full animate-[spin_4s_linear_infinite] flex items-center justify-center mb-8 relative">
                 <div className="w-16 h-16 bg-[var(--color-neon-blue)]/20 animate-pulse rounded-full flex items-center justify-center">
                   <Fingerprint size={32} className="text-[var(--color-neon-blue)]" />
                 </div>
               </div>
               
               <div className="text-[var(--color-neon-blue)] font-mono text-sm tracking-widest uppercase text-center min-h-[40px] flex items-center">
                 <span className="animate-pulse">{statusText}</span>
               </div>
               
               {/* Decorative progress bar */}
               <div className="w-64 h-1 bg-gray-800 mt-8 relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full bg-[var(--color-neon-blue)] animate-[loading_1.8s_ease-in-out_forwards]"></div>
               </div>
             </div>
          )}

          {!isAuthenticating && (
            <div className="mt-10 border-t border-gray-800 pt-6 flex justify-between items-center text-xs tracking-widest text-gray-500 uppercase">
              <span>Status: Offline</span>
              <Link to="/signup" className="text-[var(--color-neon-blue)] hover:text-white transition-colors flex items-center gap-2">
                Register New Link <span className="text-lg">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Global animations required for this component */}
      <style>{`
        @keyframes scan {
          0% { top: -10px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes loading {
          0% { width: 0%; }
          30% { width: 40%; }
          60% { width: 60%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
