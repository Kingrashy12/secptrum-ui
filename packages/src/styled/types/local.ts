/* eslint-disable @typescript-eslint/no-explicit-any */
export type Theme = {
  colors?: {
    [key: string]: string;
  };
  fonts?: {
    [key: string]: string;
  };
  [key: string]: any; // To handle custom properties
};

export type ThemeContextType = {
  /**
   * The current theme configuration applied to the application.
   * This includes settings for colors, fonts, and effects based on the current mode.
   *
   * @type {typeof `light` | typeof `dark`}
   * @property theme - `colors`, `fonts`, and other custom properties.
   */
  theme: Theme;
  /**
   * Toggles the theme mode between `light` and `dark`.
   *
   * This function switches the application between light and dark modes by updating the `mode` state and merging the appropriate default theme with any user-provided theme overrides. The new mode is also saved to local storage to persist the user's preference across sessions.
   *
   * @example
   * // Toggle between light and dark modes
   * toggleTheme();
   */
  toggleTheme: () => void;
  setCustomTheme: (theme: { light: any; dark: any }) => void;
  /**
   * The current theme mode of the application, either `light` or `dark`.
   *
   * @type {`light` | `dark`}
   */
  mode: "light" | "dark";
};

export type SystemTheme = {
  colors?: {
    background?: string;
    text?: string;
    [key: string]: string | undefined; // Allows additional custom color properties
  };
  fonts?: {
    body?: string;
    heading?: string;
    [key: string]: string | undefined; // Allows additional custom font properties
  };
  [key: string]: any; // General catch-all for any additional custom properties
};

export type ContextProviderType = {
  children: React.ReactNode;
};
