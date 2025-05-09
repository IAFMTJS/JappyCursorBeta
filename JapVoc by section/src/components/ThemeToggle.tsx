import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'default' | 'blue' | 'green')}
        className="p-2 rounded-lg border border-gray-300 dark:border-dark-border dark:bg-dark-hover dark:text-dark-text"
      >
        <option value="default">Default Theme</option>
        <option value="blue">Blue Theme</option>
        <option value="green">Green Theme</option>
      </select>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg border border-gray-300 dark:border-dark-border dark:bg-dark-hover dark:text-dark-text"
      >
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle; 