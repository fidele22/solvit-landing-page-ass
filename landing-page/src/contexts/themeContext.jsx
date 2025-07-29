import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  console.log('Toggling theme to:', newTheme); 
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
};


useEffect(() => {
  document.body.className = theme; 
}, [theme]);



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
