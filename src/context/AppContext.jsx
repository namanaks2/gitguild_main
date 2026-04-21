import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Player One',
    level: 12,
    xp: 4500,
    nextLevelXp: 5000,
    isAuthenticated: false
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
  const [hasClaimedDaily, setHasClaimedDaily] = useState(false);

  // Settings state
  const [theme, setTheme] = useState('midnight');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [soundsEnabled, setSoundsEnabled] = useState(true);

  // Load from DB if user is authenticated or on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: pData, error: pErr } = await supabase.from('projects').select('*');
        if (pData && pData.length > 0) setProjects(pData);
        
        const { data: tData, error: tErr } = await supabase.from('tasks').select('*');
        if (tData && tData.length > 0) setTasks(tData);
      } catch (err) {
        console.error("Error fetching from supabase", err);
      }
    };
    
    // We attempt fetch. If tables don't exist yet, it'll fail gracefully and use defaults.
    fetchData();
  }, [user.isAuthenticated]);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const addProject = async (project) => {
    const tempId = Date.now();
    const newProject = { ...project, id: tempId, progress: 0 };
    setProjects(prev => [...prev, newProject]);
    
    const { data, error } = await supabase.from('projects').insert([{ ...project, progress: 0 }]).select();
    if (data && data[0]) {
      setProjects(prev => prev.map(p => p.id === tempId ? data[0] : p));
    }
  };

  const addTask = async (task) => {
    const tempId = Date.now();
    const newTask = { ...task, id: tempId, completed: false };
    setTasks(prev => [...prev, newTask]);

    const { data, error } = await supabase.from('tasks').insert([{ ...task, completed: false }]).select();
    if (data && data[0]) {
      setTasks(prev => prev.map(t => t.id === tempId ? data[0] : t));
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    const newCompletedState = !task.completed;
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: newCompletedState } : t));
    
    // Wait until db updates
    await supabase.from('tasks').update({ completed: newCompletedState }).eq('id', id);
  };

  const deleteProject = async (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    await supabase.from('projects').delete().eq('id', id);
  };
  
  const deleteTask = async (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
    await supabase.from('tasks').delete().eq('id', id);
  };

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

  const claimDaily = () => {
    if (hasClaimedDaily) return;
    addXp(50);
    setHasClaimedDaily(true);
  };

  const loginExistingUser = (name) => {
    setUser({ name, level: 12, xp: 4500, nextLevelXp: 5000, isAuthenticated: true });
    // fetch is triggered by useEffect on isAuthenticated change
    setHasClaimedDaily(false);
  };

  const registerNewUser = (name) => {
    setUser({ name, level: 1, xp: 0, nextLevelXp: 1000, isAuthenticated: true });
    setProjects([]);
    setTasks([]);
    setHasClaimedDaily(false);
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      projects, addProject, deleteProject,
      tasks, addTask, toggleTask, deleteTask,
      notes, setNotes,
      addXp,
      hasClaimedDaily, claimDaily,
      loginExistingUser,
      registerNewUser,
      logoutUser: () => setUser(prev => ({ ...prev, isAuthenticated: false })),
      theme, setTheme,
      animationsEnabled, setAnimationsEnabled,
      particlesEnabled, setParticlesEnabled,
      soundsEnabled, setSoundsEnabled
    }}>
      {children}
    </AppContext.Provider>
  );
};
