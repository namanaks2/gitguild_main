import { Star, GitFork, RefreshCw, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';
import { useState, useEffect } from 'react';

export default function GithubRepo() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const repos = [
    { name: 'gitguild-web', stars: 128, forks: 45, updated: '2 hours ago', language: 'JavaScript', link: 'https://github.com/NamankX/gitguild-web-demo' },
    { name: 'rpg-ui-kit', stars: 450, forks: 89, updated: '1 day ago', language: 'TypeScript', link: 'https://github.com/NamankX/rpg-ui-kit-demo' },
    { name: 'quest-api', stars: 56, forks: 12, updated: '3 days ago', language: 'Python', link: 'https://github.com/NamankX/quest-api-demo' },
    { name: 'discord-bot', stars: 21, forks: 4, updated: '1 week ago', language: 'JavaScript', link: 'https://github.com/NamankX/discord-bot-demo' },
  ];

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
         <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
               <GithubIcon className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" size={32} /> Armory (Repositories)
            </h1>
            <p className="text-[var(--color-text-secondary)] mt-2">Your connected repositories and open source contributions.</p>
         </div>
         <button 
           onClick={handleSync}
           className="game-button bg-[#2ea043] text-white px-5 py-2.5 flex items-center gap-2 rounded-md shadow-[0_0_15px_rgba(46,160,67,0.4)] hover:shadow-[0_0_25px_rgba(46,160,67,0.8)] hover:bg-[#3fb950] transition-all">
            <RefreshCw size={18} className={isSyncing ? "animate-spin" : ""} /> {isSyncing ? "Syncing..." : "Sync with GitHub"}
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, i) => (
          <div 
            key={i} 
            className={`glass-panel p-6 border-t-2 border-t-[var(--color-neon-blue)] group hover:border-[var(--color-dark-border)] hover:border-t-[var(--color-neon-purple)] transition-all transform duration-500 ease-out hover:scale-105 hover:z-10 relative overflow-hidden ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Background glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/5 to-[var(--color-neon-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <a 
                href={repo.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-bold text-[var(--color-neon-blue)] flex items-center gap-2 group-hover:text-[var(--color-neon-purple)] transition-colors cursor-pointer drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]"
              >
                <ExternalLink size={18} /> {repo.name}
              </a>
              <span className="text-xs bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] px-2 py-1 rounded-full text-gray-400 group-hover:border-[var(--color-neon-purple)]/50 transition-colors">Public</span>
            </div>
            
            <p className="text-sm text-[var(--color-text-secondary)] mb-6 relative z-10">
              A brief description of this repository. Built for gamifying the developer experience.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-[var(--color-text-secondary)] relative z-10">
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full shadow-[0_0_8px_currentColor] ${repo.language === 'JavaScript' ? 'bg-yellow-400 text-yellow-400' : repo.language === 'TypeScript' ? 'bg-blue-400 text-blue-400' : 'bg-green-500 text-green-500'}`}></div>
                {repo.language}
              </div>
              <div className="flex items-center gap-1 hover:text-[var(--color-neon-blue)] cursor-pointer transition-colors">
                <Star size={16} /> {repo.stars}
              </div>
              <div className="flex items-center gap-1 hover:text-[var(--color-neon-purple)] cursor-pointer transition-colors">
                <GitFork size={16} /> {repo.forks}
              </div>
              <div className="text-xs text-gray-500 ml-auto">
                Updated {repo.updated}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={`mt-8 glass-panel p-8 text-center border-dashed border-[var(--color-dark-border)] hover:border-[var(--color-neon-blue)] group transition-all duration-700 ease-in-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
         <GithubIcon size={48} className="mx-auto text-gray-600 mb-4 opacity-50 group-hover:text-white group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
         <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-neon-blue)] transition-colors">Connect more repositories</h3>
         <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">Link your GitHub account to sync all your projects and track stats automatically.</p>
         <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-[var(--color-neon-blue)] hover:text-white hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] transition-all">
            Connect GitHub Account
         </button>
      </div>
    </div>
  );
}
