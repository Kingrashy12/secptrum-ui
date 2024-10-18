import React, { useEffect, useRef } from 'react';
import { MenuPanel } from '../../styles/selection/styled';
import { MenuSui } from '../../styles/selection/styled';
import { useMode } from '../../hooks/useMode';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  onClose?: () => void;
  mode?: 'light' | 'dark';
  zIndex?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

/**
 * Menu component for displaying a context menu in a vertical modal.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the menu.
 * @param {string} [props.className] - Additional CSS class for the menu.
 * @param {React.CSSProperties} [props.style] - Inline styles for the menu.
 * @param {boolean} [props.open] - Whether the menu is open or closed.
 * @param {() => void} [props.onClose] - Function to be called when the menu should close.
 * @param {'light' | 'dark'} [props.mode] - The color mode of the menu.
 * @param {number} [props.zIndex] - The z-index of the menu.
 * @param {number} [props.top] - The top position of the menu.
 * @param {number} [props.left] - The left position of the menu.
 * @param {number} [props.right] - The right position of the menu.
 * @param {number} [props.bottom] - The bottom position of the menu.
 */

const Menu = ({
  children,
  className,
  style,
  open,
  onClose,
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

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <MenuPanel open={open} zIndex={zIndex as number} ref={menuRef}>
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
