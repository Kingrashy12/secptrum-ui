import { useEffect, useRef } from 'react';
import { MenuPanel } from '../../styles/selection/styled';
import { MenuSui } from '../../styles/selection/styled';
import { useMode } from '../../hooks/useMode';
import { useMenu } from '../../hooks/useMenu';
import { MenuProps } from '../../types/sui';

const Menu = ({
  children,
  className,
  style,
  mode,
  zIndex,
  top,
  left,
  right,
  bottom,
  ...props
}: MenuProps) => {
  const { mode: themeMode } = useMode();
  const currentMode = mode ?? themeMode;
  const { isOpen, onClose } = useMenu();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <MenuPanel
      open={isOpen}
      zIndex={zIndex as number}
      ref={menuRef}
      top={top}
      left={left}
      right={right}
    >
      <MenuSui
        mode={currentMode as 'light' | 'dark'}
        zIndex={zIndex as number}
        className={className}
        style={style}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        {...props}
      >
        {children}
      </MenuSui>
    </MenuPanel>
  );
};

export default Menu;
Menu.displayName = 'Menu';
