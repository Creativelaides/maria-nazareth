// src/components/Themes.jsx
import { useState } from 'react';

const Themes = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`theme-${theme}`}>
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Toggle Theme
      </button>
    </div>
  );
};

export default Themes;
