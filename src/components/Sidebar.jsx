import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Target, CheckSquare, FileText, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { GitGuildLogo } from './GitGuildLogo';

export default function Sidebar() {
  const navigate = useNavigate();

  const links = [
    { to: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { to: '/projects', name: 'Quests (Projects)', icon: <Target size={20} /> },
    { to: '/tasks', name: 'Tasks (TODO)', icon: <CheckSquare size={20} /> },
    { to: '/notes', name: 'Grimoire (Notes)', icon: <FileText size={20} /> },
    { to: '/github', name: 'Armory (GitHub)', icon: <GithubIcon size={20} /> },
    { to: '/settings', name: 'Settings', icon: <SettingsIcon size={20} /> },
  ];

  return (
    <div className="w-64 glass-panel border-y-0 border-l-0 rounded-none h-full flex flex-col pt-6 z-10 transition-all">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="flex-shrink-0 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
           <GitGuildLogo className="w-10 h-10" />
        </div>
        <h1 className="text-xl font-bold tracking-widest neon-text-purple uppercase">GitGuild</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                isActive
                  ? 'bg-[var(--color-dark-border)] text-white shadow-[inset_4px_0_0_var(--color-neon-blue)]'
                  : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-dark-border)]/50'
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 mt-auto space-y-4">
        <button 
          onClick={() => navigate('/login')}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[var(--color-dark-panel)] border border-[var(--color-dark-border)] rounded-lg text-red-400 hover:text-red-300 hover:border-red-500/50 hover:bg-red-500/10 transition-all font-bold uppercase tracking-wider text-sm"
        >
          <LogOut size={18} /> Disconnect
        </button>
        <div className="text-xs text-center text-[var(--color-text-secondary)] opacity-50 uppercase tracking-widest">
          v1.0.0 Alpha
        </div>
      </div>
    </div>
  );
}
