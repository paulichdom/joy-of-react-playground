import React from 'react';
import { COLORS, Theme, ThemeInfo } from '../constants';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeInfo;
};

const intialValue = {
  theme: window.localStorage.getItem('color-theme') as Theme,
  toggleTheme: () => {},
  colors: {
    text: '',
    bg: '',
  },
};

export const ThemeContext = React.createContext<ThemeContextValue>(intialValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<Theme>((): Theme => {
    return (window.localStorage.getItem('color-theme') as Theme) || 'light';
  });

  React.useEffect(() => {
    window.localStorage.setItem('color-theme', theme);
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light';
    });
  }, []);

  const colors = COLORS[theme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValue => {
  return React.useContext(ThemeContext);
}
