import { useAppContext } from '../context/AppContext';
import { Bell, Search, Hexagon } from 'lucide-react';

export default function Navbar() {
  const { user } = useAppContext();

  return (
    <header className="h-16 glass-panel border-x-0 border-t-0 rounded-none flex items-center justify-between px-6 z-10 sticky top-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search quests, tasks..." 
            className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-full py-1.5 pl-10 pr-4 text-sm outline-none focus:border-[var(--color-neon-blue)] transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>
        
        <div className="flex items-center gap-4 bg-[var(--color-dark-bg)] pl-3 pr-1 py-1 rounded-full border border-[var(--color-dark-border)]">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold">{user.name}</span>
            <span className="text-xs text-[var(--color-neon-blue)] font-medium tracking-wide">
              Level {user.level}
            </span>
          </div>
          <div className="relative">
            <Hexagon size={36} className="text-[var(--color-neon-purple)] fill-[var(--color-dark-panel)]" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
              {user.level}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
