import React from 'react';
import Box from '../Box/Box';
import { BoxType } from '../../types/sui';
import { useDrawer } from '../../context/useDrawer';
import { styled } from 'styled-chroma';
import { colors } from '../../styles/colors';

interface DrawerHeaderType extends BoxType {
  /**
   * Adds border-bottom to the component.
   * @type {boolean}
   * @default true
   */
  showBorder?: boolean;
}

/**
 * A header component for the Drawer,
 *
 * @param {DrawerHeaderType} props - The props for the DrawerHeader component.
 * @returns {JSX.Element} The rendered DrawerHeader component.
 */
const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderType>(
  ({ showBorder = true, children, ...props }, ref): JSX.Element => {
    const { mode } = useDrawer();

    return (
      <HeaderSui
        {...props}
        ref={ref}
        showBorder={showBorder}
        mode={mode as 'light' | 'dark'}
      >
        {children}
      </HeaderSui>
    );
  }
);

export default DrawerHeader;
DrawerHeader.displayName = 'DrawerHeader';

const titleMode = (mode: 'light' | 'dark') => {
  return {
    title: mode === 'dark' ? 'white' : 'black',
    border: mode === 'dark' ? colors.neutral[800] : colors.neutral[200],
  };
};

/**
 * HeaderSui is a styled-component that wraps the title and close icon in the modal header.
 */
const HeaderSui = styled<
  BoxType & { showBorder: boolean; mode: 'light' | 'dark' }
>(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px;
  ${(props) =>
    props.showBorder
      ? `border-bottom: 1px solid ${titleMode(props.mode).border};`
      : ''}
`;
HeaderSui.displayName = 'DrawerHeaderSui';
