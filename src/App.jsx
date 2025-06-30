
import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import MainContent from './components/maincontent';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('market');
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  

  return (
    <div className="app-layout" style={{ display: 'flex' }}>
      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
          toggleTheme={toggleTheme}
          theme={theme}
          toggleSidebar={toggleSidebar}    
          isSidebarOpen={isSidebarOpen}    
        />
      )}

      {/* Main Content */}
      <MainContent
  activeSection={activeSection}
  theme={theme}
  toggleTheme={toggleTheme}
    toggleSidebar={toggleSidebar}  
  isSidebarOpen={isSidebarOpen} 
/>

    </div>
  );
};

export default App;
