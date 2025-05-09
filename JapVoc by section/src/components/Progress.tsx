import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import Achievements from './Achievements';
import Statistics from './Statistics';
import StreakCalendar from './StreakCalendar';

type Tab = 'overview' | 'achievements' | 'statistics' | 'calendar';

const Progress: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const { progress, resetProgress } = useProgress();

  const getThemeClasses = () => {
    if (isDarkMode) {
      return {
        container: 'bg-dark-card',
        text: 'text-dark-text',
        card: 'bg-dark-hover',
        border: 'border-dark-border',
        tab: {
          active: 'bg-primary text-white',
          inactive: 'bg-dark-hover text-dark-text hover:bg-dark-border',
        },
      };
    }

    switch (theme) {
      case 'blue':
        return {
          container: 'bg-blue-card',
          text: 'text-blue-text',
          card: 'bg-blue-hover',
          border: 'border-blue-border',
          tab: {
            active: 'bg-primary text-white',
            inactive: 'bg-blue-hover text-blue-text hover:bg-blue-border',
          },
        };
      case 'green':
        return {
          container: 'bg-green-card',
          text: 'text-green-text',
          card: 'bg-green-hover',
          border: 'border-green-border',
          tab: {
            active: 'bg-primary text-white',
            inactive: 'bg-green-hover text-green-text hover:bg-green-border',
          },
        };
      default:
        return {
          container: 'bg-white',
          text: 'text-gray-800',
          card: 'bg-gray-50',
          border: 'border-gray-200',
          tab: {
            active: 'bg-primary text-white',
            inactive: 'bg-gray-50 text-gray-800 hover:bg-gray-100',
          },
        };
    }
  };

  const themeClasses = getThemeClasses();

  const calculateAccuracy = (section: any): number => {
    if (section.totalQuestions === 0) return 0;
    return Math.round((section.correctAnswers / section.totalQuestions) * 100);
  };

  const calculateOverallProgress = (): number => {
    const sections = Object.values(progress);
    const totalAccuracy = sections.reduce((sum, section) => sum + calculateAccuracy(section), 0);
    return Math.round(totalAccuracy / sections.length);
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const renderProgressCard = (title: string, data: any) => {
    const accuracy = calculateAccuracy(data);
    return (
      <div className={`${themeClasses.card} rounded-lg p-6 border ${themeClasses.border}`}>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Accuracy:</span>
            <span className="font-semibold">{accuracy}%</span>
          </div>
          <div className="flex justify-between">
            <span>Questions Answered:</span>
            <span className="font-semibold">{data.totalQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span>Best Streak:</span>
            <span className="font-semibold">{data.bestStreak}</span>
          </div>
          <div className="flex justify-between">
            <span>Average Time:</span>
            <span className="font-semibold">{data.averageTime.toFixed(1)}s</span>
          </div>
          <div className="flex justify-between">
            <span>Last Attempt:</span>
            <span className="font-semibold">{formatDate(data.lastAttempt)}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Learning Progress</h2>
              <div className="text-2xl font-semibold">
                Overall Progress: {calculateOverallProgress()}%
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {renderProgressCard('Word Practice', progress.wordPractice)}
              {renderProgressCard('Sentence Practice', progress.sentencePractice)}
              {renderProgressCard('Kanji Practice', progress.kanji)}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={resetProgress}
                className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Reset Progress
              </button>
            </div>
          </>
        );
      case 'achievements':
        return <Achievements />;
      case 'statistics':
        return <Statistics />;
      case 'calendar':
        return <StreakCalendar />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className={`mb-8 ${themeClasses.container} rounded-lg shadow-md p-6`}>
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'overview' ? themeClasses.tab.active : themeClasses.tab.inactive
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'achievements' ? themeClasses.tab.active : themeClasses.tab.inactive
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveTab('statistics')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'statistics' ? themeClasses.tab.active : themeClasses.tab.inactive
            }`}
          >
            Statistics
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'calendar' ? themeClasses.tab.active : themeClasses.tab.inactive
            }`}
          >
            Calendar
          </button>
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default Progress; 