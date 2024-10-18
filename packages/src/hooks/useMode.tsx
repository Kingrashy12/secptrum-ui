import { createContext, useContext } from 'react';

type ModeContextType = {
  mode: 'light' | 'dark' | any;
};

type ModeProviderProps = {
  children: React.ReactNode;
  /**
   * The mode of the ModeProvider component.
   * Note: This is should be used in conjunction with the `useTheme` hook from `styled-chroma`.
   * @default 'light'
   * @example
   * const { mode } = useTheme();
   * <ModeProvider mode={mode}>
   *   <App />
   * </ModeProvider>
   */
  mode: 'light' | 'dark' | any;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

/**
 * ModeProvider is a component that provides the mode context to its children.
 * @param {ModeProviderProps} param - The props for the ModeProvider component.
 * @param {React.ReactNode} param.children - The children of the ModeProvider component.
 * @param {'light' | 'dark'} param.mode - The mode of the ModeProvider component.
 * @returns {React.ReactNode} - The ModeProvider component.
 */
const ModeProvider = ({ children, mode }: ModeProviderProps) => {
  return (
    <ModeContext.Provider value={{ mode }}>{children}</ModeContext.Provider>
  );
};

export default ModeProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    return {
      mode: 'light',
    };
  }
  return context;
};
