import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Target, CheckSquare, FileText, Settings as SettingsIcon } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export default function Sidebar() {
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
        <div className="w-8 h-8 rounded-full bg-[var(--color-neon-purple)] shadow-[0_0_15px_rgba(168,85,247,0.8)] flex items-center justify-center font-bold">
          G
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
      
      <div className="p-4 mt-auto">
        <div className="glass-panel text-sm p-4 text-center text-[var(--color-text-secondary)]">
          v1.0.0 Alpha
        </div>
      </div>
    </div>
  );
}
