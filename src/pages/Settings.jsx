import { Settings as SettingsIcon, User, Monitor, Key } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Settings() {
  const { user } = useAppContext();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <SettingsIcon className="text-gray-400" size={32} /> Configuration
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-2">Adjust your guild preferences and account settings.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-2 animate-fade-in-up delay-100 opacity-0">
          <button className="w-full text-left px-4 py-3 rounded-lg bg-[var(--color-dark-panel)] border border-[var(--color-dark-border)] flex items-center gap-3 text-[var(--color-neon-blue)] font-bold">
             <User size={18} /> Profile
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[var(--color-dark-panel)] border border-transparent hover:border-[var(--color-dark-border)] flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
             <Monitor size={18} /> Interface
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-[var(--color-dark-panel)] border border-transparent hover:border-[var(--color-dark-border)] flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
             <Key size={18} /> Security
          </button>
        </div>

        <div className="flex-1 glass-panel p-6 animate-fade-in-up delay-200 opacity-0 relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[80px] opacity-20 pointer-events-none"></div>

          <h2 className="text-xl font-bold mb-6 pb-4 border-b border-[var(--color-dark-border)]">Player Profile</h2>
          
          <div className="space-y-6">
             <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[var(--color-dark-bg)] border-2 border-[var(--color-neon-blue)] rounded-xl flex items-center justify-center text-3xl font-bold shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                   {user.name.charAt(0)}
                </div>
                <div>
                   <button className="px-4 py-2 border border-[var(--color-dark-border)] rounded-md hover:bg-[var(--color-dark-border)] transition-colors text-sm font-bold">
                      Change Avatar
                   </button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm text-[var(--color-text-secondary)] mb-1">Display Name</label>
                   <input 
                      type="text" 
                      defaultValue={user.name}
                      className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-blue)]"
                   />
                </div>
                <div>
                   <label className="block text-sm text-[var(--color-text-secondary)] mb-1">Guild Email</label>
                   <input 
                      type="email" 
                      defaultValue="player@gitguild.dev"
                      className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-blue)]"
                   />
                </div>
             </div>

             <div>
                <label className="block text-sm text-[var(--color-text-secondary)] mb-1">Bio (Lore)</label>
                <textarea 
                   rows="4"
                   defaultValue="A wandering developer seeking legendary quests and ancient code snippets."
                   className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-blue)] resize-none"
                ></textarea>
             </div>

             <div className="pt-6 mt-6 border-t border-[var(--color-dark-border)] flex justify-end">
                <button className="game-button bg-[var(--color-neon-blue)] text-white px-6 py-2 rounded-lg shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                   Save Changes
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
