import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { DrawerHeaderSui, DrawerSui } from '../../styles/overlays/styled';
import { useMode } from '../../hooks/useMode';
import { DrawerProps } from '../../types/sui';

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
      header,
      preventClose,
      className,
      style,
    },
    ref
  ) => {
    const { mode: modeContext } = useMode();
    const currentMode = mode ?? modeContext;
    return (
      <Backdrop
        open={open}
        onClose={onClose}
        glassEffect={glassEffect}
        mode={currentMode as 'light' | 'dark'}
        preventClose={preventClose}
      >
        <DrawerSui
          ref={ref}
          width={width || '500px'}
          position={position || 'right'}
          variant={variant || 'default'}
          background={background}
          mode={currentMode as 'light' | 'dark'}
          spacing={spacing || 6}
          className={className}
          style={style}
        >
          {header && <DrawerHeaderSui>{header}</DrawerHeaderSui>}
          {children}
        </DrawerSui>
      </Backdrop>
    );
  }
);

export default Drawer;
Drawer.displayName = 'Drawer';
