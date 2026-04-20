import { Link, useNavigate } from 'react-router-dom';
import { Fingerprint, Cpu, Crosshair, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [statusText, setStatusText] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    
    setIsRegistering(true);
    setStatusText('ALLOCATING RESOURCES...');

    setTimeout(() => setStatusText('GENERATING UNIQUE ID KEY...'), 800);
    setTimeout(() => setStatusText('SYNCING NEURAL NETWORK...'), 1600);
    setTimeout(() => setStatusText('PROFILES CREATED.'), 2400);
    
    setTimeout(() => {
      // Setup the context to this user and login directly
      setUser(prev => ({ ...prev, name }));
      navigate('/');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050510] flex items-center justify-center relative overflow-hidden font-mono">
      {/* Dynamic Grid Background - Purple */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(168, 85, 247, 0.2) 2px, transparent 2px)', backgroundSize: '60px 60px', transform: 'perspective(1000px) rotateX(45deg) scale(2.5) translateY(50px)' }}>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[250px] opacity-15 animate-pulse pointer-events-none"></div>
      
      <div className={`glass-panel w-full max-w-md bg-[#0a0a1a]/90 backdrop-blur-xl relative z-10 border-0 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-1000 ${isRegistering ? 'scale-105 shadow-[0_0_80px_rgba(168,85,247,0.4)]' : ''}`}>
        
        {/* Top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-neon-purple)] to-transparent opacity-80"></div>
        
        {/* Animated matrix streams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="h-[200%] w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] animate-[scroll_20s_linear_infinite]"></div>
        </div>

        <div className="p-10 relative z-20">
          <div className="flex flex-col items-center mb-10 relative">
            <div className="mb-4 relative">
               <div className="absolute inset-0 bg-[var(--color-neon-purple)] blur-lg opacity-40 animate-pulse rounded-full"></div>
               <div className="w-16 h-16 rounded-full border border-[var(--color-neon-purple)]/60 bg-[#0a0a1a] flex items-center justify-center relative z-10">
                 <Crosshair size={28} className="text-[var(--color-neon-purple)]" />
               </div>
            </div>
            <h1 className="text-3xl font-black tracking-widest uppercase text-white shadow-[var(--color-neon-purple)] flex items-center gap-2">
              Join Protocol
            </h1>
            <p className="text-[var(--color-neon-purple)] mt-2 text-xs tracking-widest uppercase">New Origin Registration</p>
          </div>

          {!isRegistering ? (
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="relative group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#a855f7]/70 mb-1">Codename / Alias</label>
                <div className="relative flex items-center">
                  <Cpu size={16} className="absolute left-3 text-[#a855f7]/50" />
                  <input 
                    type="text" required
                    value={name} onChange={e => setName(e.target.value)}
                    className="w-full bg-[#050510]/80 border-b-2 border-[#1e1e30] py-3 pl-10 pr-4 outline-none focus:border-[var(--color-neon-purple)] transition-colors text-white placeholder-[#1e1e30] font-mono text-sm"
                    placeholder="ENTER ALIAS"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#a855f7]/70 mb-1">Comm Link</label>
                <div className="relative flex items-center">
                  <Sparkles size={16} className="absolute left-3 text-[#a855f7]/50" />
                  <input 
                    type="text" required
                    value={email} onChange={e => setEmail(e.target.value)}
                    className="w-full bg-[#050510]/80 border-b-2 border-[#1e1e30] py-3 pl-10 pr-4 outline-none focus:border-[var(--color-neon-purple)] transition-colors text-white placeholder-[#1e1e30] font-mono text-sm"
                    placeholder="ANY DATA ACCEPTED"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#a855f7]/70 mb-1">Authorization Code</label>
                <div className="relative flex items-center">
                  <Fingerprint size={16} className="absolute left-3 text-[#a855f7]/50" />
                  <input 
                    type="password" required
                    value={password} onChange={e => setPassword(e.target.value)}
                    className="w-full bg-[#050510]/80 border-b-2 border-[#1e1e30] py-3 pl-10 pr-4 outline-none focus:border-[var(--color-neon-purple)] transition-colors text-white placeholder-[#1e1e30] font-mono text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-gradient-to-r from-[var(--color-neon-purple)] to-[#c084fc] text-white py-4 rounded font-bold uppercase tracking-[0.1em] text-sm hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all transform hover:-translate-y-1">
                  Establish Identity
                </button>
              </div>
            </form>
          ) : (
             <div className="h-[300px] flex flex-col items-center justify-center relative">
               <div className="w-24 h-24 mb-8 relative">
                 <div className="absolute inset-0 border-4 border-t-[var(--color-neon-purple)] border-r-[var(--color-neon-purple)] border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                 <div className="absolute inset-2 border-4 border-b-[#c084fc] border-l-[#c084fc] border-t-transparent border-r-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[var(--color-neon-purple)] rounded-full animate-ping"></div>
                 </div>
               </div>
               
               <div className="text-[#c084fc] font-mono text-sm tracking-widest text-center h-10 flex items-center">
                 <span className="animate-pulse">{statusText}</span>
               </div>
               
               <div className="w-full h-1 bg-[#1e1e30] mt-6 rounded-full overflow-hidden">
                 <div className="h-full bg-[var(--color-neon-purple)] animate-[loading_2.4s_ease-in-out_forwards]"></div>
               </div>
             </div>
          )}

          {!isRegistering && (
            <div className="mt-8 text-center text-xs tracking-widest text-[#1e1e30] uppercase pt-4 flex flex-col gap-2">
              <span className="text-gray-500">Already initialized?</span>
              <Link to="/login" className="text-[var(--color-neon-purple)] hover:text-white transition-colors relative inline-block group mx-auto">
                Execute Run: Login
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-neon-purple)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}
