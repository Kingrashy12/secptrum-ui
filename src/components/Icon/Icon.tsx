import React from "react";

type IconBaseType = {
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon: any;
  size?: number;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  styles?: React.CSSProperties;
  color?: string;
  title?: string;
};

const Icon = ({
  icon,
  size,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color,
  title,
}: IconBaseType) => {
  const BaseIcon: IconBaseType["icon"] = icon;
  return (
    <BaseIcon
      title={title}
      size={size}
      className={className}
      color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default Icon;
