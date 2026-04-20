import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Target, Plus, X, Server, Layers } from 'lucide-react';

export default function Projects() {
  const { projects, addProject, deleteProject } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuest, setNewQuest] = useState({ title: '', theme: '', techStack: '', days: 7, description: '' });

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newQuest.title) return;
    addProject(newQuest);
    setIsModalOpen(false);
    setNewQuest({ title: '', theme: '', techStack: '', days: 7, description: '' });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Target className="text-[var(--color-neon-purple)]" size={32} /> Quests Registry
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-2">Manage your active projects and milestones.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="game-button bg-[var(--color-neon-purple)] text-white px-5 py-2.5 flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        >
          <Plus size={18} /> Add Quest
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="glass-panel overflow-hidden group">
            <div className="h-2 bg-[var(--color-dark-bg)]">
              <div className="h-full bg-[var(--color-neon-purple)] transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:neon-text-purple transition-all">{project.title}</h3>
                <button onClick={() => deleteProject(project.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                  <X size={18} />
                </button>
              </div>
              
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="bg-[var(--color-dark-bg)] p-3 rounded-lg border border-[var(--color-dark-border)] mb-4 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Server size={14} className="text-[var(--color-neon-blue)]" /> {project.techStack}
                 </div>
                 <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Layers size={14} className="text-[var(--color-neon-green)]" /> Theme: {project.theme}
                 </div>
              </div>

              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="bg-[var(--color-dark-panel)] px-3 py-1 rounded-full border border-[var(--color-dark-border)]">
                  {project.days} days remain
                </span>
                <span className="font-bold text-[var(--color-neon-purple)]">{project.progress}% Complete</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-panel w-full max-w-md p-6 animate-in zoom-in-95">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">New Quest Request</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-[var(--color-text-secondary)]">Quest Title</label>
                <input 
                  type="text" required
                  value={newQuest.title} onChange={e => setNewQuest({...newQuest, title: e.target.value})}
                  className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-purple)] transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-[var(--color-text-secondary)]">Theme</label>
                  <input 
                    type="text" 
                    value={newQuest.theme} onChange={e => setNewQuest({...newQuest, theme: e.target.value})}
                    className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-purple)]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[var(--color-text-secondary)]">Time Limit (Days)</label>
                  <input 
                    type="number" min="1" required
                    value={newQuest.days} onChange={e => setNewQuest({...newQuest, days: parseInt(e.target.value)})}
                    className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-purple)]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 text-[var(--color-text-secondary)]">Tech Stack</label>
                <input 
                  type="text" 
                  value={newQuest.techStack} onChange={e => setNewQuest({...newQuest, techStack: e.target.value})}
                  className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-purple)]"
                  placeholder="React, Node, etc."
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[var(--color-text-secondary)]">Quest Description</label>
                <textarea 
                  rows="3"
                  value={newQuest.description} onChange={e => setNewQuest({...newQuest, description: e.target.value})}
                  className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-lg p-2.5 outline-none focus:border-[var(--color-neon-purple)] resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full game-button bg-[var(--color-neon-purple)] text-white py-3 rounded-lg mt-4 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                Commission Quest
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
