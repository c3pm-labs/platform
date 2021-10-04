import {
  createContext, ReactNode, useContext, useMemo, useState,
} from 'react';

interface ColorTheme {
  mode: 'light' | 'dark';
  toggle: () => void;
}

const ColorThemeContext = createContext(null as unknown as ColorTheme);

export function ColorThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const value = useMemo<ColorTheme>(() => ({
    mode: isDarkMode ? 'dark' : 'light',
    toggle: () => setIsDarkMode(!isDarkMode),
  }), [isDarkMode]);

  return <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>;
}

export function useColorTheme(): [('light' | 'dark'), (() => void)] {
  const context = useContext(ColorThemeContext);

  if (!context) {
    throw new Error('useColorTheme must be inside of a ColorThemeProvider component');
  }

  return [context.mode, context.toggle];
}
