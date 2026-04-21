import { useState } from 'react';
import { Settings as SettingsIcon, User, Monitor, Key, Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Settings() {
  const { 
    user, 
    theme, setTheme, 
    animationsEnabled, setAnimationsEnabled, 
    particlesEnabled, setParticlesEnabled, 
    soundsEnabled, setSoundsEnabled 
  } = useAppContext();
  
  const [activeTab, setActiveTab] = useState('profile');

  // Dummy states for UI feedback
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handleUpdatePassword = () => {
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Dummy Action: Account deletion is disabled in demo mode.");
    }
  };

  const handleSaveInterface = () => {
    alert("Interface settings saved successfully!");
  };

  const handleSaveProfile = () => {
    alert("Profile changes saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className={`mb-8 ${animationsEnabled ? 'animate-fade-in-up' : ''}`}>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <SettingsIcon className="text-gray-400" size={32} /> Configuration
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-2">Adjust your guild preferences and account settings.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className={`w-full md:w-64 space-y-2 ${animationsEnabled ? 'animate-fade-in-up delay-100 opacity-0' : ''}`} style={!animationsEnabled ? {opacity: 1} : {}}>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full text-left px-4 py-3 rounded-lg border flex items-center gap-3 transition-colors ${
              activeTab === 'profile' 
                ? 'bg-[var(--color-dark-panel)] border-[var(--color-dark-border)] text-[var(--color-neon-blue)] font-bold' 
                : 'border-transparent hover:bg-[var(--color-dark-panel)] hover:border-[var(--color-dark-border)] text-gray-400 hover:text-white'
            }`}>
             <User size={18} /> Profile
          </button>
          <button 
            onClick={() => setActiveTab('interface')}
            className={`w-full text-left px-4 py-3 rounded-lg border flex items-center gap-3 transition-colors ${
              activeTab === 'interface' 
                ? 'bg-[var(--color-dark-panel)] border-[var(--color-dark-border)] text-[var(--color-neon-blue)] font-bold' 
                : 'border-transparent hover:bg-[var(--color-dark-panel)] hover:border-[var(--color-dark-border)] text-gray-400 hover:text-white'
            }`}>
             <Monitor size={18} /> Interface
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full text-left px-4 py-3 rounded-lg border flex items-center gap-3 transition-colors ${
              activeTab === 'security' 
                ? 'bg-[var(--color-dark-panel)] border-[var(--color-dark-border)] text-[var(--color-neon-blue)] font-bold' 
                : 'border-transparent hover:bg-[var(--color-dark-panel)] hover:border-[var(--color-dark-border)] text-gray-400 hover:text-white'
            }`}>
             <Key size={18} /> Security
          </button>
        </div>

        <div className={`flex-1 glass-panel p-6 ${animationsEnabled ? 'animate-fade-in-up delay-200 opacity-0' : ''} relative overflow-hidden`} style={!animationsEnabled ? {opacity: 1} : {}}>
          {/* Subtle glow effect */}
          {particlesEnabled && <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[80px] opacity-20 pointer-events-none"></div>}

          {activeTab === 'profile' && (
            <div className={animationsEnabled ? 'animate-fade-in' : ''}>
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-[var(--color-dark-border)]">Player Profile</h2>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-[var(--color-dark-bg)] border-2 border-[var(--color-neon-blue)] rounded-xl flex items-center justify-center text-3xl font-bold shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                       {user?.name?.charAt(0) || 'U'}
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
                          defaultValue={user?.name || ''}
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
                    <button onClick={handleSaveProfile} className="game-button bg-[var(--color-neon-blue)] text-white px-6 py-2 rounded-lg shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                       Save Changes
                    </button>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'interface' && (
            <div className={animationsEnabled ? 'animate-fade-in' : ''}>
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-[var(--color-dark-border)]">Interface Settings</h2>
              
              <div className="space-y-6">
                 <div>
                    <label className="block text-sm text-[var(--color-text-secondary)] mb-3">Theme Options</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                       <div 
                         onClick={() => setTheme('cyberpunk')}
                         className={`border-2 ${theme === 'cyberpunk' ? 'border-[var(--color-neon-blue)] bg-[var(--color-dark-panel)]' : 'border-[var(--color-dark-border)] bg-[var(--color-dark-bg)]'} p-4 rounded-lg cursor-pointer text-center relative overflow-hidden group transition-colors`}
                       >
                           {theme === 'cyberpunk' && <div className="absolute inset-0 bg-[var(--color-neon-blue)] opacity-10"></div>}
                           <span className={`font-bold block mb-2 ${theme === 'cyberpunk' ? 'text-[var(--color-neon-blue)]' : 'text-gray-400'} text-sm`}>Cyberpunk</span>
                           <div className="h-10 rounded bg-[#0a0a0f] flex border border-gray-800">
                               <div className="w-1/3 bg-[#13131a] border-r border-gray-800"></div>
                               <div className="flex-1 p-2">
                                   <div className="h-2 w-full bg-[var(--color-neon-blue)] rounded mb-1 opacity-50"></div>
                                   <div className="h-2 w-2/3 bg-[#ff00ff] rounded opacity-50"></div>
                               </div>
                           </div>
                       </div>
                       
                       <div 
                         onClick={() => setTheme('midnight')}
                         className={`border-2 ${theme === 'midnight' ? 'border-[var(--color-neon-blue)] bg-[var(--color-dark-panel)]' : 'border-[var(--color-dark-border)] bg-[var(--color-dark-bg)]'} p-4 rounded-lg cursor-pointer text-center transition-colors`}
                       >
                           <span className={`font-bold block mb-2 ${theme === 'midnight' ? 'text-[var(--color-neon-blue)]' : 'text-gray-400'} text-sm`}>Midnight (Dark)</span>
                           <div className="h-10 rounded bg-gray-900 flex border border-gray-800">
                               <div className="w-1/3 bg-gray-800 border-r border-gray-700"></div>
                               <div className="flex-1 p-2">
                                   <div className="h-2 w-full bg-[#0ea5e9] rounded mb-1 opacity-50"></div>
                                   <div className="h-2 w-2/3 bg-gray-600 rounded opacity-50"></div>
                               </div>
                           </div>
                       </div>

                       <div 
                         onClick={() => setTheme('light')}
                         className={`border-2 ${theme === 'light' ? 'border-[var(--color-neon-blue)] bg-[var(--color-dark-panel)]' : 'border-[var(--color-dark-border)] bg-[var(--color-dark-bg)]'} p-4 rounded-lg cursor-pointer text-center transition-colors hidden sm:block`}
                       >
                           <span className={`font-bold block mb-2 ${theme === 'light' ? 'text-[var(--color-neon-blue)]' : 'text-gray-400'} text-sm`}>Light Theme</span>
                           <div className="h-10 rounded bg-gray-100 flex border border-gray-300">
                               <div className="w-1/3 bg-white border-r border-gray-200"></div>
                               <div className="flex-1 p-2">
                                   <div className="h-2 w-full bg-blue-600 rounded mb-1 opacity-50"></div>
                                   <div className="h-2 w-2/3 bg-gray-400 rounded opacity-50"></div>
                               </div>
                           </div>
                       </div>
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm text-[var(--color-text-secondary)] mb-3">Animation Preferences</label>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 p-3 border border-[var(--color-dark-border)] rounded-lg bg-[var(--color-dark-bg)] cursor-pointer hover:border-[var(--color-neon-blue)] transition-colors">
                            <input 
                              type="checkbox" 
                              checked={animationsEnabled}
                              onChange={(e) => setAnimationsEnabled(e.target.checked)}
                              className="w-4 h-4 rounded bg-gray-900 border-gray-700 text-[var(--color-neon-blue)] focus:ring-[var(--color-neon-blue)]" 
                            />
                            <div>
                                <div className="font-bold text-[var(--color-text-primary)] text-sm">Enable Interface Animations</div>
                                <div className="text-xs text-[var(--color-text-secondary)]">Toggle fade-ins, sliding transitions, and hover effects.</div>
                            </div>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-[var(--color-dark-border)] rounded-lg bg-[var(--color-dark-bg)] cursor-pointer hover:border-[var(--color-neon-blue)] transition-colors">
                            <input 
                              type="checkbox" 
                              checked={particlesEnabled}
                              onChange={(e) => setParticlesEnabled(e.target.checked)}
                              className="w-4 h-4 rounded bg-gray-900 border-gray-700 text-[var(--color-neon-blue)] focus:ring-[var(--color-neon-blue)]" 
                            />
                            <div>
                                <div className="font-bold text-[var(--color-text-primary)] text-sm">Particle Effects</div>
                                <div className="text-xs text-[var(--color-text-secondary)]">Enable background ambient particles and level-up effects.</div>
                            </div>
                        </label>
                        <label className="flex items-center gap-3 p-3 border border-[var(--color-dark-border)] rounded-lg bg-[var(--color-dark-bg)] cursor-pointer hover:border-[var(--color-neon-blue)] transition-colors">
                            <input 
                              type="checkbox" 
                              checked={soundsEnabled}
                              onChange={(e) => setSoundsEnabled(e.target.checked)}
                              className="w-4 h-4 rounded bg-gray-900 border-gray-700 text-[var(--color-neon-blue)] focus:ring-[var(--color-neon-blue)]" 
                            />
                            <div>
                                <div className="font-bold text-[var(--color-text-primary)] text-sm">Sound Effects</div>
                                <div className="text-xs text-[var(--color-text-secondary)]">Play subtle sounds on buttons, notifications, and quests.</div>
                            </div>
                        </label>
                    </div>
                 </div>

                 <div className="pt-6 mt-6 border-t border-[var(--color-dark-border)] flex justify-end">
                    <button onClick={handleSaveInterface} className="game-button bg-[var(--color-neon-blue)] text-white px-6 py-2 rounded-lg shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                       Save Interface Settings
                    </button>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className={animationsEnabled ? 'animate-fade-in' : ''}>
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-[var(--color-dark-border)]">Security Rules</h2>
              
              <div className="space-y-6">
                 <div>
                    <h3 className="text-sm font-bold text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider">Authentication</h3>
                    <div className="space-y-4">
                        <div>
                           <label className="block text-sm text-[var(--color-text-secondary)] mb-1">Current Password</label>
                           <input 
                              type="password" 
                              placeholder="••••••••"
                              className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-blue)] text-[var(--color-text-primary)]"
                           />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                               <label className="block text-sm text-[var(--color-text-secondary)] mb-1">New Password</label>
                               <input 
                                  type="password" 
                                  className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-blue)] text-[var(--color-text-primary)]"
                               />
                            </div>
                            <div>
                               <label className="block text-sm text-[var(--color-text-secondary)] mb-1">Confirm Password</label>
                               <input 
                                  type="password" 
                                  className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-blue)] text-[var(--color-text-primary)]"
                               />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                              onClick={handleUpdatePassword}
                              className="px-4 py-2 bg-[var(--color-dark-panel)] border border-[var(--color-dark-border)] rounded-md hover:bg-[var(--color-dark-border)] transition-colors text-sm font-bold mt-2 text-[var(--color-text-primary)]"
                            >
                               Update Password
                            </button>
                            {passwordSaved && <span className="text-[var(--color-neon-green)] flex items-center gap-1 mt-2 text-sm font-bold"><Check size={16} /> Saved!</span>}
                        </div>
                    </div>
                 </div>

                 <div className="pt-6 mt-6 border-t border-[var(--color-dark-border)]">
                    <h3 className="text-sm font-bold text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider">Two-Factor Authentication (2FA)</h3>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-[var(--color-dark-border)] rounded-lg bg-[var(--color-dark-bg)]">
                        <div>
                            <div className="font-bold text-[var(--color-text-primary)] mb-1">Protect your account setup</div>
                            <div className="text-sm text-[var(--color-text-secondary)]">Add an additional layer of security by requiring a code from your authenticator app.</div>
                        </div>
                        <button 
                          onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                          className={`game-button border px-4 py-2 rounded-lg whitespace-nowrap ${is2FAEnabled ? 'border-[var(--color-neon-green)] text-[var(--color-neon-green)] hover:bg-[rgba(34,197,94,0.1)]' : 'border-[var(--color-neon-purple)] text-[var(--color-neon-purple)] hover:bg-[rgba(168,85,247,0.1)]'}`}
                        >
                            {is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA'}
                        </button>
                    </div>
                 </div>

                 <div className="pt-6 mt-6 border-t border-[var(--color-dark-border)]">
                    <h3 className="text-sm font-bold text-[#ef4444] mb-3 uppercase tracking-wider">Danger Zone</h3>
                    <div className="border border-red-900/30 rounded-lg p-4 bg-red-950/10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="font-bold text-white mb-1">Delete Account</div>
                                <div className="text-sm text-gray-400">Permanently delete your account and all of your data. This action cannot be undone.</div>
                            </div>
                            <button 
                              onClick={handleDeleteAccount}
                              className="border border-red-500 text-red-500 hover:bg-red-500/10 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-bold transition-colors"
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
