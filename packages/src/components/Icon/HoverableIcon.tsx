import React from 'react';
import { colors } from '../../styles/colors';
import Icon from './Icon';
import { css, DivProps, styled } from 'styled-chroma';
import { useMode } from '../../hooks/useMode';

type IconTypes = {
  icon: React.ElementType;
  size?: number;
  backgroundColor?: string;
  mode?: 'light' | 'dark';
  radius?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  color?: string;
  title?: string;
  styles?: React.CSSProperties;
  disabled?: boolean;
};

/**
 * HoverableIcon Component
 *
 * A customizable icon component that changes appearance on hover.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ElementType} props.icon - The icon to be displayed
 * @param {number} [props.size] - The size of the icon
 * @param {string} [props.backgroundColor] - Custom background color for the icon
 * @param {"light" | "dark"} [props.mode="light"] - The color mode of the icon
 * @param {number} [props.radius=6] - The border radius of the icon container
 *
 * @example
 * <HoverableIcon icon={IoClose} size={20} mode="dark" />
 */

const HoverableIcon = ({
  icon,
  size,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color,
  title,
  styles,
  backgroundColor,
  mode,
  radius,
  disabled,
}: IconTypes) => {
  const { mode: themeMode } = useMode();
  const currentMode = mode ?? themeMode;
  const modeColor = currentMode === 'dark' ? 'white' : 'black';

  return (
    <HoverIcon
      backgroundColor={backgroundColor}
      mode={currentMode as IconTypes['mode']}
      radius={radius || 6}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      title={title}
      styles={styles}
      disabled={disabled}
    >
      <Icon icon={icon} color={color || modeColor} size={size} />
    </HoverIcon>
  );
};

export default HoverableIcon;

const Istyle = (
  mode: IconTypes['mode'],
  background: IconTypes['backgroundColor']
) => {
  return {
    background:
      background || mode === 'dark' ? colors.gray[700] : colors.gray[100],
    hover: mode === 'dark' ? colors.gray[800] : colors.gray[200],
  };
};

interface IStyleIcon extends DivProps {
  backgroundColor: IconTypes['backgroundColor'];
  mode: IconTypes['mode'];
  radius: number;
  disabled?: boolean;
}

const HoverIcon = styled<IStyleIcon>('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: ${(props) => props.radius}px;
  cursor: pointer;
  ${(props) => {
    const bg = Istyle(props.mode, props.backgroundColor);
    return css`
      background: ${bg.background};
      &:hover {
        background: ${bg.hover};
      }
    `;
  }}
  transition: background-color 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.9 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;
HoverIcon.displayName = 'HoverIconSui';
