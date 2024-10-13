declare type Theme = {
  colors?: {
    [key: string]: string;
  };
  fonts?: {
    [key: string]: string;
  };
  [key: string]: any; // To handle custom properties
};
/**
 * @deprecated
 */
declare type ThemeContextType = {
  /**
   * The current theme configuration applied to the application.
   * This includes settings for colors, fonts, and effects based on the current mode.
   *
   * @type {typeof `defaultLightTheme` | typeof `defaultDarkTheme`}
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
   * @deprecated
   */
  mode: "light" | "dark";
};

declare type SystemTheme = {
  colors?: {
    background?: string;
    text?: string;
    outline_ButtonBorderColor?: string;
    active_TabColor?: string;
    active_TabColor_Solid?: string;
    inActiveTabColor?: string;
    tabListBackground?: string;
    button_OutlineHoverColor?: string;
    checkBoxBorderColor?: string;
    card?: string;
    drop?: string;
    cardShadow?: string;
    card_BorderColor?: string;
    [key: string]: string | undefined; // Allows additional custom color properties
  };
  fonts?: {
    body?: string;
    heading?: string;
    [key: string]: string | undefined; // Allows additional custom font properties
  };
  effects?: {
    drop_blur?: number;
    [key: string]: any; // Allows additional custom effect properties
  };
  [key: string]: any; // General catch-all for any additional custom properties
};

export declare type ContextProviderType = {
  children: React.ReactNode;
};
