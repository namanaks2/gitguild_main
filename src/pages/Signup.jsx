import { Link, useNavigate } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import { useState } from 'react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if(name && email && password) navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[var(--color-dark-bg)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[150px] opacity-20" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      
      <div className="glass-panel w-full max-w-md p-8 relative z-10 border-t-4 border-t-[var(--color-neon-purple)]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[var(--color-dark-bg)] border-2 border-[var(--color-neon-purple)] rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
             <Gamepad2 size={32} className="text-[var(--color-neon-purple)]" />
          </div>
          <h1 className="text-3xl font-black tracking-widest uppercase neon-text-purple">Join Guild</h1>
          <p className="text-[var(--color-text-secondary)] mt-2">Create your character.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-1">Display Name</label>
            <input 
              type="text" required
              value={name} onChange={e => setName(e.target.value)}
              className="w-full bg-[var(--color-dark-bg)]/80 border border-[var(--color-dark-border)] rounded-lg p-3 outline-none focus:border-[var(--color-neon-purple)] transition-colors shadow-inner"
              placeholder="Player One"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-1">Email</label>
            <input 
              type="email" required
              value={email} onChange={e => setEmail(e.target.value)}
              className="w-full bg-[var(--color-dark-bg)]/80 border border-[var(--color-dark-border)] rounded-lg p-3 outline-none focus:border-[var(--color-neon-purple)] transition-colors shadow-inner"
              placeholder="player@gitguild.dev"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-1">Password</label>
            <input 
              type="password" required
              value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-[var(--color-dark-bg)]/80 border border-[var(--color-dark-border)] rounded-lg p-3 outline-none focus:border-[var(--color-neon-purple)] transition-colors shadow-inner"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full game-button bg-[var(--color-neon-purple)] text-white py-3 rounded-lg text-lg uppercase tracking-wider mt-6 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            Create Character
          </button>
        </form>

        <p className="text-center text-sm text-[var(--color-text-secondary)] mt-8">
          Already in the guild? <Link to="/login" className="text-[var(--color-neon-blue)] font-bold hover:underline">Login Here</Link>
        </p>
      </div>
    </div>
  );
}
