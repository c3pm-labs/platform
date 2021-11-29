import {
  createContext, ReactNode, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState,
} from 'react';
import { useMediaQuery } from '@material-ui/core';
import useCookie from '../hooks/useCookie';

interface ColorTheme {
  mode: 'light' | 'dark';
  toggle: () => void;
}

const ColorThemeContext = createContext(null as unknown as ColorTheme);

export function ColorThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const systemPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
  const [isDarkMode, setIsDarkMode] = useCookie<boolean | undefined>('prefersDarkMode', undefined);

  useEffect(() => {
    if (isDarkMode === undefined) {
      setIsDarkMode(systemPrefersDarkMode);
    }
  }, [isDarkMode, setIsDarkMode]);

  const value = useMemo<ColorTheme>(() => ({
    mode: isDarkMode ? 'dark' : 'light',
    toggle: () => setIsDarkMode(!isDarkMode),
  }), [isDarkMode, setIsDarkMode]);

  return <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>;
}

export function useColorTheme(): [('light' | 'dark'), (() => void)] {
  const context = useContext(ColorThemeContext);

  if (!context) {
    throw new Error('useColorTheme must be inside of a ColorThemeProvider component');
  }

  return [context.mode, context.toggle];
}
