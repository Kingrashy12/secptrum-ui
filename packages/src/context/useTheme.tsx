import React, { createContext, useContext, useState, useEffect } from 'react';
import deepmerge from 'deepmerge';
import { SystemTheme, Theme, ThemeContextType } from '../types/local';
import { modeColors } from '../styles/colors';

const systemTheme: SystemTheme = {
  defaultLightTheme: {
    colors: {
      ...modeColors.light,
    },
    fonts: {
      body: "'Poppins-Medium', sans-serif",
      heading: "'Poppins-Semibold', sans-serif",
    },
    effects: {
      drop_blur: 6,
    },
    spacing: {
      xs: '4px', // Smallest unit of spacing, typically for compact layouts.
      sm: '8px', // Small spacing, useful for padding or margin.
      md: '16px', // Medium spacing, the base unit for consistent spacing.
      lg: '24px', // Large spacing, suitable for separating major sections.
    },
    breakpoints: {
      sm: '640px', // Breakpoint for mobile screens.
      md: '768px', // Breakpoint for tablet screens.
      lg: '1024px', // Breakpoint for small desktop screens.
      xl: '1280px', // Breakpoint for large desktop screens.
    },
  },
  defaultDarkTheme: {
    colors: {
      ...modeColors.dark,
    },
    fonts: {
      body: "'Poppins-Medium', sans-serif",
      heading: "'Poppins-Semibold', sans-serif",
    },
    effects: {
      drop_blur: 6,
    },
    spacing: {
      xs: '4px', // Smallest unit of spacing, typically for compact layouts.
      sm: '8px', // Small spacing, useful for padding or margin.
      md: '16px', // Medium spacing, the base unit for consistent spacing.
      lg: '24px', // Large spacing, suitable for separating major sections.
    },
    breakpoints: {
      sm: '640px', // Breakpoint for mobile screens.
      md: '768px', // Breakpoint for tablet screens.
      lg: '1024px', // Breakpoint for small desktop screens.
      xl: '1280px', // Breakpoint for large desktop screens.
    },
  },
};

// Create ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to access the current theme context.
 * @deprecated useTheme is deprecated and will be removed in the next major release.
 * Use the `useTheme` hook from `styled-chroma` instead.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: systemTheme.defaultLightTheme,
      mode: 'light',
      toggleTheme: () => {},
      setCustomTheme: () => {},
    };
  }
  return context;
};

/**
 * ThemeProvider component to wrap your application with the theme context.
 * @deprecated ThemeProvider is deprecated and will be removed in the next major release.
 * Use the `ThemeProvider` component from `styled-chroma` instead.
 */
const ThemeProvider = ({
  children,
  theme: userTheme = { light: {}, dark: {} },
}: {
  children: React.ReactNode;
  theme?: { light: any; dark: any };
}) => {
  const savedMode = global?.localStorage?.getItem('secptrum-ui-theme') as
    | 'light'
    | 'dark'
    | null;
  const initialMode = savedMode ? savedMode : 'light';
  // Set initial theme state
  const [theme, setTheme] = useState(
    deepmerge(
      initialMode === 'light'
        ? systemTheme.defaultLightTheme
        : systemTheme.defaultDarkTheme,
      initialMode === 'light' ? userTheme.light : userTheme.dark
    )
  );
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode);

  useEffect(() => {
    setTheme(
      deepmerge(
        mode === 'light'
          ? systemTheme.defaultLightTheme
          : systemTheme.defaultDarkTheme,
        mode === 'light' ? userTheme.light : userTheme.dark
      )
    );
  }, [mode, userTheme]);

  /**
   *
   * @deprecated
   */
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      if (typeof window !== undefined) {
        localStorage.setItem('secptrum-ui-theme', newMode);
      }
      return newMode;
    });
  };

  // Allow setting both light and dark custom themes dynamically
  const setCustomTheme = (newTheme: { light: any; dark: any }) => {
    setTheme((_prevTheme) => {
      return deepmerge(
        mode === 'light'
          ? systemTheme.defaultLightTheme
          : systemTheme.defaultDarkTheme,
        mode === 'light' ? newTheme.light : newTheme.dark
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCustomTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
ThemeProvider.displayName = 'ThemeProvider';

// Adjust the useThemeMode function
export const getThemeMode = (mode: 'light' | 'dark'): Theme => {
  if (mode === 'light') {
    return systemTheme.defaultLightTheme;
  } else if (mode === 'dark') {
    return systemTheme.defaultDarkTheme;
  }
  return systemTheme.defaultLightTheme; // Fallback to light theme if mode not recognized
};
