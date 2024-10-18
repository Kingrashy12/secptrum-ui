import React from 'react';
import { MenuItemSui } from '../../styles/selection/styled';
import { useMode } from '../../hooks/useMode';

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  space?: number;
  color?: string;
  mode?: 'light' | 'dark';
}

/**
 * MenuItem component for displaying a menu item within the `Menu` component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the menu item.
 * @param {string} [props.className] - Additional CSS class for the menu item.
 * @param {React.CSSProperties} [props.style] - Inline styles for the menu item.
 * @param {number} [props.space] - The space between the menu item and the next item.
 * @param {string} [props.color] - The color of the menu item.
 * @param {'light' | 'dark'} [props.mode] - The color mode of the menu item.
 */
const MenuItem = ({
  children,
  className,
  style,
  space,
  color,
  mode,
  ...props
}: MenuItemProps) => {
  const { mode: themeMode } = useMode();
  const currentMode = mode ?? themeMode;
  return (
    <MenuItemSui
      className={className}
      style={style}
      space={space}
      color={color}
      mode={currentMode as 'light' | 'dark'}
      {...props}
    >
      {children}
    </MenuItemSui>
  );
};

export default MenuItem;
MenuItem.displayName = 'MenuItem';
