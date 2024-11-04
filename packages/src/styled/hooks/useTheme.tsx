/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import { SystemTheme, Theme, ThemeContextType } from "../types/local";
import { modeColors } from "../utils/colors";
import deepmerge from "../utils/deepmerge";

const systemTheme: SystemTheme = {
  defaultLightTheme: {
    colors: {
      ...modeColors.light,
    },
    fonts: {
      body: "'Poppins-Medium', sans-serif",
      heading: "'Poppins-Semibold', sans-serif",
    },
    breakpoints: {
      sm: "640px", // Breakpoint for mobile screens.
      md: "768px", // Breakpoint for tablet screens.
      lg: "1024px", // Breakpoint for small desktop screens.
      xl: "1280px", // Breakpoint for large desktop screens.
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
    breakpoints: {
      sm: "640px", // Breakpoint for mobile screens.
      md: "768px", // Breakpoint for tablet screens.
      lg: "1024px", // Breakpoint for small desktop screens.
      xl: "1280px", // Breakpoint for large desktop screens.
    },
  },
};

// Create ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to access the current theme context.
 *
 * @returns {ThemeContextType} An object containing:
 *   - theme: The current theme configuration
 *   - mode: The current theme mode ('light' or 'dark')
 *   - toggleTheme: Function to switch between light and dark modes
 *   - setCustomTheme: Function to set a custom theme
 *
 * @example
 * const { theme, mode, toggleTheme } = useTheme();
 *
 * // Access theme properties
 * const backgroundColor = theme.colors.background;
 *
 * // Toggle between light and dark modes
 * <button onClick={toggleTheme}>Switch Theme</button>
 */

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: systemTheme.defaultLightTheme,
      mode: "light",
      toggleTheme: () => {},
      setCustomTheme: () => {},
    };
  }
  return context;
};

/**
 * ThemeProvider component to wrap your application with the theme context.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be wrapped by the provider.
 * @param {Object} [props.theme] - The user-defined theme configuration.
 *
 * @returns {React.ReactNode} The ThemeProvider component wrapping the children.
 */
const ThemeProvider = ({
  children,
  theme: userTheme = { light: {}, dark: {} },
}: {
  children: React.ReactNode;
  theme?: { light: Partial<Theme>; dark: Partial<Theme> };
}) => {
  const savedMode =
    typeof window !== "undefined"
      ? (localStorage?.getItem("sui-theme") as "light" | "dark")
      : "light";
  const initialMode = savedMode ? savedMode : "light";
  // Set initial theme state
  const [theme, setTheme] = useState(
    deepmerge(
      initialMode === "light"
        ? systemTheme.defaultLightTheme
        : systemTheme.defaultDarkTheme,
      initialMode === "light" ? userTheme.light : userTheme.dark
    )
  );
  const [mode, setMode] = useState<"light" | "dark">(initialMode);

  useEffect(() => {
    setTheme(
      deepmerge(
        mode === "light"
          ? systemTheme.defaultLightTheme
          : systemTheme.defaultDarkTheme,
        mode === "light" ? userTheme.light : userTheme.dark
      )
    );
  }, [mode, userTheme]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("sui-theme", newMode);
      }
      return newMode;
    });
  };

  // Allow setting both light and dark custom themes dynamically
  const setCustomTheme = (newTheme: {
    light: Partial<Theme>;
    dark: Partial<Theme>;
  }) => {
    setTheme((prevTheme: any) =>
      deepmerge(prevTheme, mode === "light" ? newTheme.light : newTheme.dark)
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCustomTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const getThemeMode = (mode: "light" | "dark"): Theme => {
  if (mode === "light") {
    return systemTheme.defaultLightTheme;
  } else if (mode === "dark") {
    return systemTheme.defaultDarkTheme;
  }
  return systemTheme.defaultLightTheme;
};
