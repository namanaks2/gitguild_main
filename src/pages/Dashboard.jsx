import { useAppContext } from '../context/AppContext';
import { Target, CheckSquare, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user, projects, tasks, hasClaimedDaily, claimDaily } = useAppContext();

  const xpPercentage = Math.round((user.xp / user.nextLevelXp) * 100);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8 animate-fade-in-up">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back, <span className="neon-text-blue">{user.name}</span></h1>
          <p className="text-[var(--color-text-secondary)]">Your guild awaits. Continue your quests to earn XP.</p>
        </div>
        <button 
          onClick={claimDaily}
          disabled={hasClaimedDaily}
          className={`game-button px-6 py-2.5 flex items-center gap-2 transition-all ${
            hasClaimedDaily 
              ? 'bg-[var(--color-dark-panel)] text-gray-500 cursor-not-allowed border border-[var(--color-dark-border)]' 
              : 'bg-[var(--color-neon-blue)] text-white shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.8)]'
          }`}
        >
          <Zap size={18} fill="currentColor" className={hasClaimedDaily ? 'text-gray-600' : 'text-white'} />
          {hasClaimedDaily ? 'Reward Claimed' : 'Claim Daily Login'}
        </button>
      </div>

      <div className="glass-panel p-6 mb-8 relative overflow-hidden animate-fade-in-up delay-100 opacity-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-center relative z-10">
          <div className="w-32 h-32 rounded-full border-4 border-[var(--color-dark-panel)] flex items-center justify-center p-2 relative shadow-[0_0_30px_rgba(14,165,233,0.4)]">
             <div className="absolute inset-0 rounded-full border-4 border-[var(--color-neon-blue)] border-t-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
             <div className="text-center">
               <div className="text-3xl font-black neon-text-blue">{user.level}</div>
               <div className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">Level</div>
             </div>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-lg tracking-wide uppercase">Experience Points</span>
              <span className="text-[var(--color-neon-blue)] font-bold">{user.xp} / {user.nextLevelXp} XP</span>
            </div>
            <div className="h-4 bg-[var(--color-dark-bg)] rounded-full overflow-hidden border border-[var(--color-dark-border)] shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-[var(--color-neon-blue)] relative"
                style={{ width: `${xpPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 flex flex-col h-[400px] animate-fade-in-up delay-200 opacity-0 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Target className="text-[var(--color-neon-purple)]" /> Active Quests
            </h2>
            <Link to="/projects" className="text-sm text-[var(--color-neon-purple)] hover:underline">View All</Link>
          </div>
          
          <div className="space-y-4 overflow-y-auto flex-1 pr-2">
            {projects.map(project => (
              <div key={project.id} className="bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] p-4 rounded-lg hover:border-[var(--color-neon-purple)]/50 transition-colors cursor-pointer relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-neon-purple)] group-hover:w-2 transition-all"></div>
                <div className="pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{project.title}</h3>
                    <span className="text-xs bg-[var(--color-dark-panel)] px-2 py-1 rounded border border-[var(--color-dark-border)]">{project.days} days left</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mt-3">
                    <div className="flex-1 h-1.5 bg-[var(--color-dark-panel)] rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-neon-purple)]" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <span className="text-xs">{project.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
            {projects.length === 0 && <div className="text-center text-gray-500 mt-10">No active quests.</div>}
          </div>
        </div>

        <div className="glass-panel p-6 flex flex-col h-[400px] animate-fade-in-up delay-300 opacity-0 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <CheckSquare className="text-[var(--color-neon-green)]" /> Today's Targets
            </h2>
            <Link to="/tasks" className="text-sm text-[var(--color-neon-green)] hover:underline">Manage All</Link>
          </div>
          
          <div className="space-y-3 overflow-y-auto flex-1 pr-2">
            {tasks.slice(0, 5).map(task => (
              <div key={task.id} className="flex items-center gap-3 bg-[var(--color-dark-bg)] p-3 rounded-lg border border-[var(--color-dark-border)]">
                <div className={`w-5 h-5 rounded border flex items-center justify-center ${task.completed ? 'bg-[var(--color-neon-green)] border-[var(--color-neon-green)]' : 'border-gray-500'}`}>
                  {task.completed && <CheckSquare size={14} className="text-white" />}
                </div>
                <span className={`flex-1 text-sm ${task.completed ? 'text-gray-500 line-through' : ''}`}>
                  {task.title}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-bold ${
                  task.difficulty === 'hard' ? 'bg-red-500/20 text-red-400' :
                  task.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {task.difficulty}
                </span>
              </div>
            ))}
             {tasks.length === 0 && <div className="text-center text-gray-500 mt-10">No tasks for today.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
