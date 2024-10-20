import React from 'react';
import { BoxType } from '../../types/sui';
import Box from '../Box/Box';

/**
 * DrawerContent component is used to display the content of the Drawer.
 * It is a wrapper around the Box component.
 * @param {BoxType} props - The properties of the Box component.
 * @param {React.Ref<HTMLDivElement>} ref - The reference to the HTMLDivElement.
 * @returns {React.ReactElement} - The rendered DrawerContent component.
 */

const DrawerContent = React.forwardRef<HTMLDivElement, BoxType>(
  ({ children, ...props }, ref) => {
    return (
      <Box ref={ref} {...props}>
        {children}
      </Box>
    );
  }
);
export default DrawerContent;
DrawerContent.displayName = 'DrawerContent';
