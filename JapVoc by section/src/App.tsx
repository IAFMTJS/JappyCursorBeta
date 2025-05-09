import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import Home from './components/Home';
import WordPractice from './components/WordPractice';
import SentencePractice from './components/SentencePractice';
import KanjiPractice from './components/Kanji';
import Progress from './components/Progress';
import Dictionary from './components/Dictionary';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <nav className="bg-primary text-white p-4">
              <div className="container mx-auto flex flex-wrap justify-center gap-4">
                <Link to="/" className="hover:text-primary-light">Home</Link>
                <Link to="/word-practice" className="hover:text-primary-light">Word Practice</Link>
                <Link to="/sentence-practice" className="hover:text-primary-light">Sentence Practice</Link>
                <Link to="/kanji-practice" className="hover:text-primary-light">Kanji Practice</Link>
                <Link to="/dictionary" className="hover:text-primary-light">Dictionary</Link>
                <Link to="/progress" className="hover:text-primary-light">Progress</Link>
              </div>
            </nav>

            <main className="container mx-auto py-8 px-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/word-practice" element={<WordPractice />} />
                <Route path="/sentence-practice" element={<SentencePractice />} />
                <Route path="/kanji-practice" element={<KanjiPractice />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/progress" element={<Progress />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default App; 