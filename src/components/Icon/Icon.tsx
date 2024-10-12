import React from "react";

type IconBaseType = {
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon: React.ElementType;
  /**
   * Size of the icon, this accepts only `number`
   * @type {number}
   */
  size?: number;

  /**
   * Custom class name for the icon
   * @type {string}
   */
  className?: string;

  /**
   * Click event handler
   * @type {function}
   */
  onClick?: () => void;

  /**
   * Mouse enter event handler
   * @type {function}
   */
  onMouseEnter?: () => void;

  /**
   * Mouse leave event handler
   * @type {function}
   */
  onMouseLeave?: () => void;

  /**
   * Custom styles for the icon
   * @type {React.CSSProperties}
   */
  styles?: React.CSSProperties;

  /**
   * Color of the icon
   * @type {string}
   */
  color?: string;

  /**
   * Title of the icon if any
   * @type {string}
   */
  title?: string;
};

/**
 * An Icon component that renders a given icon with customizable properties.
 */
const Icon = ({
  icon: IconComponent,
  size,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color,
  title,
  styles,
}: IconBaseType) => {
  return (
    <IconComponent
      title={title}
      size={size}
      className={className}
      color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={styles}
    />
  );
};

export default Icon;
Icon.displayName = "Icon";
