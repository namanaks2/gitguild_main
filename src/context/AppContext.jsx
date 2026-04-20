import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Player One',
    level: 12,
    xp: 4500,
    nextLevelXp: 5000,
  });

  const [projects, setProjects] = useState([
    { id: 1, title: 'Build GitGuild', theme: 'space', techStack: 'React, Tailwind', days: 14, description: 'A gamified dev environment.', progress: 45 },
    { id: 2, title: 'AI Chatbot', theme: 'cyberpunk', techStack: 'Python, FastAPI', days: 7, description: 'An AI assistant for devs.', progress: 10 },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Setup React Router', difficulty: 'easy', completed: true },
    { id: 2, title: 'Design Dashboard UI', difficulty: 'hard', completed: false },
    { id: 3, title: 'Implement Auth API', difficulty: 'medium', completed: false },
  ]);

  const [notes, setNotes] = useState('## Welcome to GitGuild\n\nWrite your thoughts here...');

  const addProject = (project) => {
    setProjects(prev => [...prev, { ...project, id: Date.now(), progress: 0 }]);
  };

  const addTask = (task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteProject = (id) => setProjects(prev => prev.filter(p => p.id !== id));
  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  const addXp = (amount) => {
    setUser(prev => {
      let newXp = prev.xp + amount;
      let newLevel = prev.level;
      let nextLevel = prev.nextLevelXp;
      if (newXp >= nextLevel) {
        newLevel += 1;
        newXp -= nextLevel;
        nextLevel = Math.floor(nextLevel * 1.2);
      }
      return { ...prev, xp: newXp, level: newLevel, nextLevelXp: nextLevel };
    });
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      projects, addProject, deleteProject,
      tasks, addTask, toggleTask, deleteTask,
      notes, setNotes,
      addXp
    }}>
      {children}
    </AppContext.Provider>
  );
};
