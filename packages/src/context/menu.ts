import { createContext } from 'react';

type MenuContextProps = {
  /**
   * Indicates if the menu is currently open.
   */
  isOpen: boolean;
  /**
   * Function to open the menu.
   */
  onOpen: () => void;
  /**
   * Function to close the menu.
   */
  onClose: () => void;
};

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);
