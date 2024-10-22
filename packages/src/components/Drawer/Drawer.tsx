import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { DrawerSui } from '../../styles/overlays/styled';
import { useMode } from '../../hooks/useMode';
import { DrawerProps } from '../../types/sui';
import DrawerProvider from '../../context/useDrawer';

/**
 * A customizable overlay drawer component for displaying content.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.open - Indicates if the drawer is open.
 * @param {function} props.onClose - Callback to close the drawer.
 * @param {ReactNode} props.children - Content rendered inside the drawer.
 * @param {string} [props.width] - Width of the drawer.
 * @param {string} [props.position] - Position of the drawer (e.g., 'left', 'right').
 * @param {string} [props.variant] - Variant style of the drawer.
 * @param {number} [props.glassEffect] - Intensity of the glass effect.
 * @param {string} [props.background] - Background color of the drawer.
 * @param {string} [props.mode] - Theme mode (e.g., 'light', 'dark').
 * @param {number} [props.spacing] - Inner spacing of the drawer.
 * @param {boolean} [props.preventClose] - Prevents closing on backdrop click.
 * @param {number} [props.zIndex] - Z-index for stacking context.
 */
const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onClose,
      children,
      width,
      position,
      variant,
      glassEffect = 0,
      background,
      mode,
      spacing,
      preventClose,
      zIndex,
    },
    ref
  ) => {
    const { mode: modeContext } = useMode();
    const currentMode = mode ?? modeContext;
    return (
      <DrawerProvider mode={currentMode as 'light' | 'dark'}>
        <Backdrop
          open={open}
          onClose={onClose}
          glassEffect={glassEffect}
          mode={currentMode as 'light' | 'dark'}
          preventClose={preventClose}
          zIndex={zIndex}
        >
          <DrawerSui
            ref={ref}
            width={width || '500px'}
            position={position || 'right'}
            variant={variant || 'default'}
            background={background}
            mode={currentMode as 'light' | 'dark'}
            spacing={spacing || 6}
          >
            {children}
          </DrawerSui>
        </Backdrop>
      </DrawerProvider>
    );
  }
);

export default Drawer;
Drawer.displayName = 'Drawer';
