import React from "react";
import { BottomNavTabSui } from "../../styles/navigation/styled";
import { BoxType } from "../../types/sui";
import Icon from "../Icon/Icon";
import useRouter from "../../hooks/useRouter";
import { colors } from "styled-chroma";
import { GoDotFill } from "react-icons/go";
import { toast } from "../Toast/Toast";
import Toaster from "../Toast/Toaster";

interface BottomNavTabProps extends BoxType {
  /** The text to display below the icon, name of the tab */
  title?: string;
  /** The icon component to render Note: don't include the fragment only the element `e.g. <Icon icon={AiFillHome} />` */
  icon: React.ElementType;
  /** The color to use when the tab is active */
  activeColor?: string;
  /** The color to use when the tab is inactive */
  inactiveColor?: string;
  /** The URL to navigate to when the tab is clicked */
  href: string;
  /** The size of the icon in pixels */
  iconSize?: number;
  /** Whether to show a dot instead of text when the tab is active */
  useDotOnActive?: boolean;
  /**
   * This prop is for testing purposes only and should not be used in production.
   * Active state is determined by the `href` prop in combination with the router automatically.
   * @deprecated
   */
  isactive?: boolean;
  /**
   * Prevents the tab from navigating to the specified `href` when clicked.
   */
  preventPush?: boolean;
  /**
   * A callback function that is executed when `preventPush` is set to true.
   * This function is intended to handle the navigation logic when the default
   * navigation behavior is prevented.
   */
  onClick?: () => void;
  /**
   * Indicates if the tab is disabled and cannot be clicked.
   */
  disabled?: boolean;
}

/**
 * BottomNavTab component for navigation tabs in a bottom navigation bar.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.title] - The text to display below the icon, name of the tab.
 * @param {React.ElementType} props.icon - The icon component to render.
 * @param {string} [props.activeColor] - The color to use when the tab is active.
 * @param {string} [props.inactiveColor] - The color to use when the tab is inactive.
 * @param {string} props.href - The URL to navigate to when the tab is clicked.
 * @param {number} [props.iconSize] - The size of the icon in pixels.
 * @param {boolean} [props.useDotOnActive] - Whether to show a dot instead of text when the tab is active.
 * @param {boolean} [props.isactive] - Deprecated. For testing purposes only.
 * @param {string} [props.padding='0.2rem'] - The padding for the tab.
 * @param {BoxType} props - Additional props inherited from BoxType.
 * @returns {React.ReactElement} The rendered BottomNavTab component.
 */

const BottomNavTab = ({
  title,
  icon,
  activeColor,
  inactiveColor,
  href,
  iconSize,
  useDotOnActive,
  isactive,
  padding = "0.2rem",
  preventPush,
  onClick,
  ...props
}: BottomNavTabProps) => {
  const { router } = useRouter();
  const isActive = router.pathname === href;
  const tabColor = {
    active: activeColor || colors.blue[600],
    inactive: inactiveColor || colors.gray[500],
  };
  const color = isActive || isactive ? tabColor.active : tabColor.inactive;

  function push(e: React.MouseEvent) {
    e.stopPropagation();
    if (preventPush) {
      if (!onClick) {
        toast.error("onClick function is required when preventPush is true", {
          position: "bottom-left",
          transition: "slideIn",
        });
        return;
      }
      onClick();
    } else router.push(href);
  }

  return (
    <>
      <Toaster />
      <BottomNavTabSui
        {...props}
        padding={padding}
        color={color}
        onClick={(e) => push(e)}
      >
        {icon && <Icon icon={icon} color={color} size={iconSize || 25} />}
        {title && (
          <>{useDotOnActive ? <GoDotFill color={color} /> : <p>{title}</p>}</>
        )}
      </BottomNavTabSui>
    </>
  );
};

export default BottomNavTab;
BottomNavTab.displayName = "BottomNavTab";
