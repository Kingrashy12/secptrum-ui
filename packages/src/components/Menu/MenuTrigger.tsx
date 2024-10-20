import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import { DivProps } from 'styled-chroma';

/**
 * MenuTrigger component that opens a menu when clicked.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the trigger.
 * @param {React.Ref} ref - The ref to be forwarded to the div element.
 */

const MenuTrigger = React.forwardRef<HTMLDivElement, DivProps>(
  ({ children }, ref) => {
    const { onOpen } = useMenu();
    return (
      <div onClick={onOpen} ref={ref}>
        {children}
      </div>
    );
  }
);

export default MenuTrigger;
MenuTrigger.displayName = 'MenuTrigger';
