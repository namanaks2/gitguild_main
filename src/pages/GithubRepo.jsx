import { Star, GitFork, RefreshCw, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';

export default function GithubRepo() {
  const repos = [
    { name: 'gitguild-web', stars: 128, forks: 45, updated: '2 hours ago', language: 'JavaScript' },
    { name: 'rpg-ui-kit', stars: 450, forks: 89, updated: '1 day ago', language: 'TypeScript' },
    { name: 'quest-api', stars: 56, forks: 12, updated: '3 days ago', language: 'Python' },
    { name: 'discord-bot', stars: 21, forks: 4, updated: '1 week ago', language: 'JavaScript' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
         <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
               <GithubIcon className="text-white" size={32} /> Armory (Repositories)
            </h1>
            <p className="text-[var(--color-text-secondary)] mt-2">Your connected repositories and open source contributions.</p>
         </div>
         <button className="game-button bg-[#2ea043] text-white px-5 py-2.5 flex items-center gap-2 rounded-md shadow-[0_0_15px_rgba(46,160,67,0.4)]">
            <RefreshCw size={18} /> Sync with GitHub
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, i) => (
          <div key={i} className="glass-panel p-6 border-t-2 border-t-[var(--color-neon-blue)] group hover:border-[var(--color-dark-border)] hover:border-t-white transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[var(--color-neon-blue)] flex items-center gap-2 group-hover:text-white transition-colors cursor-pointer">
                <ExternalLink size={18} /> {repo.name}
              </h3>
              <span className="text-xs bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] px-2 py-1 rounded-full text-gray-400">Public</span>
            </div>
            
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">
              A brief description of this repository. Built for gamifying the developer experience.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${repo.language === 'JavaScript' ? 'bg-yellow-400' : repo.language === 'TypeScript' ? 'bg-blue-400' : 'bg-green-500'}`}></div>
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
      
      <div className="mt-8 glass-panel p-8 text-center border-dashed border-[var(--color-dark-border)]">
         <GithubIcon size={48} className="mx-auto text-gray-600 mb-4 opacity-50" />
         <h3 className="text-xl font-bold mb-2">Connect more repositories</h3>
         <p className="text-gray-400 mb-6">Link your GitHub account to sync all your projects and track stats automatically.</p>
         <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition-colors">
            Connect GitHub Account
         </button>
      </div>
    </div>
  );
}
