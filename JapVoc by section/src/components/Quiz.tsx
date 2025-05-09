import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Quiz: React.FC = () => {
  const { theme, isDarkMode } = useTheme();

  const getThemeClasses = () => {
    if (isDarkMode) {
      return {
        container: 'bg-dark-card',
        text: 'text-dark-text',
      };
    }

    switch (theme) {
      case 'blue':
        return {
          container: 'bg-blue-card',
          text: 'text-blue-text',
        };
      case 'green':
        return {
          container: 'bg-green-card',
          text: 'text-green-text',
        };
      default:
        return {
          container: 'bg-white',
          text: 'text-gray-800',
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`${themeClasses.container} rounded-lg shadow-md p-6`}>
      <h2 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>Section 1 Quiz</h2>
      <p className={`mb-4 ${themeClasses.text}`}>
        This quiz will test your knowledge of the vocabulary from Section 1.
      </p>
      {/* Add quiz content here */}
    </div>
  );
};

export default Quiz; 