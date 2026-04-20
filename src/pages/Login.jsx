import { Link, useNavigate } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email && password) navigate('/');
  };

  return (
    <div className="min-h-screen bg-[var(--color-dark-bg)] flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[150px] opacity-20" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      
      <div className="glass-panel w-full max-w-md p-8 relative z-10 border-t-4 border-t-[var(--color-neon-blue)]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[var(--color-dark-bg)] border-2 border-[var(--color-neon-blue)] rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(14,165,233,0.5)]">
             <Gamepad2 size={32} className="text-[var(--color-neon-blue)]" />
          </div>
          <h1 className="text-3xl font-black tracking-widest uppercase neon-text-blue">GitGuild</h1>
          <p className="text-[var(--color-text-secondary)] mt-2">Enter the arena.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-1">Email / Player ID</label>
            <input 
              type="email" required
              value={email} onChange={e => setEmail(e.target.value)}
              className="w-full bg-[var(--color-dark-bg)]/80 border border-[var(--color-dark-border)] rounded-lg p-3 outline-none focus:border-[var(--color-neon-blue)] transition-colors shadow-inner"
              placeholder="player@gitguild.dev"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-bold text-gray-300">Password</label>
              <a href="#" className="text-xs text-[var(--color-neon-blue)] hover:underline">Forgot password?</a>
            </div>
            <input 
              type="password" required
              value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-[var(--color-dark-bg)]/80 border border-[var(--color-dark-border)] rounded-lg p-3 outline-none focus:border-[var(--color-neon-blue)] transition-colors shadow-inner"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full game-button bg-[var(--color-neon-blue)] text-white py-3 rounded-lg text-lg uppercase tracking-wider mt-4 shadow-[0_0_20px_rgba(14,165,233,0.5)]">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-[var(--color-text-secondary)] mt-8">
          New to the guild? <Link to="/signup" className="text-[var(--color-neon-purple)] font-bold hover:underline">Register Here</Link>
        </p>
      </div>
    </div>
  );
}
