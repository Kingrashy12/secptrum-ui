import React from "react";
import { MenuItemSui } from "../../styles/selection/styled";
import { useMode } from "../../hooks/useMode";
import { useMenu } from "src/hooks/useMenu";

interface MenuItemProps {
  /**
   * Menu item content, typically text or an icon.
   */
  children: React.ReactNode;

  /**
   * Optional CSS class name to apply to the menu item.
   */
  className?: string;

  /**
   * Optional inline styles to apply to the menu item.
   */
  style?: React.CSSProperties;

  /**
   * Spacing between menu items (e.g., pixels).
   * @default `0.25rem`
   */
  space?: number;

  /**
   * Text color (e.g., '#000', 'rgba(0, 0, 0, 1)').
   * @default '#000'
   */
  color?: string;

  /**
   * Theme mode, either 'light' or 'dark'.
   * @default 'light'
   */
  mode?: "light" | "dark";
  /**
   * Function to be called when the MenuItem is clicked.
   */
  onClick?: () => void;
  /**
   * Unique identifier for the MenuItem.
   */
  id?: string;
  /**
   * Indicates if the MenuItem is disabled.
   */
  disabled?: boolean;
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
  onClick,
  disabled,
  id,
}: MenuItemProps) => {
  const { mode: themeMode } = useMode();
  const currentMode = mode ?? themeMode;
  const { onClose: closeMenu } = useMenu();

  function killMenu() {
    try {
      if (onClick) {
        onClick();
      }
    } catch (error) {
      console.error("Error calling onClick:", error);
    } finally {
      closeMenu();
    }
  }

  return (
    <MenuItemSui
      className={className}
      style={style}
      space={space}
      color={color}
      mode={currentMode as "light" | "dark"}
      onClick={killMenu}
      disabled={disabled}
      id={id}
    >
      {children}
    </MenuItemSui>
  );
};

export default MenuItem;
MenuItem.displayName = "MenuItem";
