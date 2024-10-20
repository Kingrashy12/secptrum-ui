import { useContext } from 'react';
import { MenuContext } from '../context/menu';

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('MenuTrigger must be within Menu component');
  }
  return context;
};
