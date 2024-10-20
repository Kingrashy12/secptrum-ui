import { colors } from '../../styles/colors';
import { ButtonProps } from '../../types/sui';

const getButtonRadius = (radius: ButtonProps['radius']) => {
  switch (radius) {
    case 'md':
      return `4px`;
    case 'lg':
      return `6px`;
    case 'xl':
      return `12px`;
    case 'full':
      return `9999px`;
    default:
      return `12px`;
  }
};

const getSizeVariant = (size: ButtonProps['size']) => {
  switch (size) {
    case 'md':
      return `8px`;
    case 'lg':
      return `12px`;
    case 'xl':
      return `16px`;
    default:
      return `8px`;
  }
};

const getModeColors = (
  mode: ButtonProps['mode'],
  onHoverBackgroundOutline: ButtonProps['onHoverBackgroundOutline'],
  onHoverBackgroundGhost: ButtonProps['onHoverBackgroundGhost'],
  onHoverBackgroundSolid: ButtonProps['onHoverBackgroundSolid'],
  onHoverBackgroundLight: ButtonProps['onHoverBackgroundLight']
) => {
  switch (mode) {
    case 'light':
      return {
        outline_hover_bg: onHoverBackgroundOutline || colors.gray[50],
        ghost_hover_bg: onHoverBackgroundGhost || colors.blue[100],
        solid_hover_bg: onHoverBackgroundSolid || colors.blue[600],
        light_hover_bg: onHoverBackgroundLight || colors.blue[200],
      };
    case 'dark':
      return {
        outline_hover_bg: onHoverBackgroundOutline || 'rgb(59,130,246,.1)',
        ghost_hover_bg: onHoverBackgroundGhost || 'rgb(59,130,246,.1)',
        solid_hover_bg: onHoverBackgroundSolid || colors.blue[600],
        light_hover_bg: onHoverBackgroundLight || colors.blue[200],
      };
  }
};

const getModeStyles = (
  mode: ButtonProps['mode'],
  backgroundColor: ButtonProps['backgroundColor'],
  color: ButtonProps['color'],
  outlineBorderColor: ButtonProps['outlineBorderColor']
) => {
  switch (mode) {
    case 'light':
      return {
        solid_bg: backgroundColor || colors.blue[500],
        solid_text_color: color || 'white',
        ghost_bg: backgroundColor || 'transparent',
        ghost_text_color: color || colors.blue[500],
        light_bg: backgroundColor || colors.blue[100],
        light_border_color: colors.blue[500],
        light_text_color: color || colors.blue[500],
        outline_bg: backgroundColor || 'none',
        outline_border_color: outlineBorderColor || colors.neutral[200],
        outline_text_color: color || 'currentColor',
      };
    case 'dark':
      return {
        solid_bg: backgroundColor || colors.blue[600],
        solid_text_color: color || 'white',
        ghost_bg: backgroundColor || 'transparent',
        ghost_text_color: color || colors.blue[500],
        light_bg: backgroundColor || colors.blue[100],
        light_border_color: colors.blue[500],
        light_text_color: color || colors.blue[500],
        outline_bg: backgroundColor || 'none',
        outline_border_color: outlineBorderColor || colors.slate[900],
        outline_text_color: color || 'white',
      };
  }
};

const getHoverStyle = ({
  variant,
  onHoverBackgroundSolid,
  onHoverBackgroundOutline,
  onHoverBackgroundGhost,
  onHoverBackgroundLight,
  mode,
}: ButtonProps) => {
  const modeColors = getModeColors(
    mode,
    onHoverBackgroundOutline,
    onHoverBackgroundGhost,
    onHoverBackgroundSolid,
    onHoverBackgroundLight
  );

  switch (variant) {
    case 'solid':
      return {
        background: modeColors?.solid_hover_bg,
      };
    case 'ghost':
      return {
        background: modeColors?.ghost_hover_bg,
      };
    case 'light':
      return {
        background: modeColors?.light_hover_bg,
      };
    case 'outline':
      return {
        background: modeColors?.outline_hover_bg,
      };
    case 'danger':
      return {
        background: colors.red[700],
      };
  }
};

const getSolidButtonStyles = ({
  mode,
  backgroundColor,
  color,
  outlineBorderColor,
}: ButtonProps) => {
  const modeStyles = getModeStyles(
    mode,
    backgroundColor,
    color,
    outlineBorderColor
  );
  return {
    background: modeStyles?.solid_bg,
    color: modeStyles?.solid_text_color,
    border: 'none',
    filter: 'none',
  };
};

const getGhostButtonStyles = ({
  mode,
  backgroundColor,
  color,
  outlineBorderColor,
}: ButtonProps) => {
  const modeStyles = getModeStyles(
    mode,
    backgroundColor,
    color,
    outlineBorderColor
  );
  return {
    color: modeStyles?.ghost_text_color,
    background: modeStyles?.ghost_bg,
    border: 'none',
    filter: 'none',
  };
};

const getLightButtonStyles = ({
  mode,
  backgroundColor,
  color,
  outlineBorderColor,
}: ButtonProps) => {
  const modeStyles = getModeStyles(
    mode,
    backgroundColor,
    color,
    outlineBorderColor
  );
  return {
    background: modeStyles?.light_bg,
    border: `1px solid ${modeStyles?.light_border_color}`,
    color: modeStyles?.light_text_color,
    filter: 'none',
  };
};

const getOutlineButtonStyles = ({
  mode,
  backgroundColor,
  color,
  outlineBorderColor,
}: ButtonProps) => {
  const modeStyles = getModeStyles(
    mode,
    backgroundColor,
    color,
    outlineBorderColor
  );
  return {
    background: modeStyles?.outline_bg,
    border: `1.35px solid ${modeStyles?.outline_border_color}`,
    color: modeStyles?.outline_text_color,
    filter: `drop-shadow(0 1px 1pxpx rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))`,
  };
};

const getDangerButtonStyles = () => {
  return {
    background: colors.red[600],
    color: 'white',
    border: 'none',
    filter: 'none',
  };
};

const getButtonStyles = ({
  variant,
  color,
  outlineBorderColor,
  backgroundColor,
  mode,
}: ButtonProps) => {
  switch (variant) {
    case 'solid':
      return getSolidButtonStyles({
        mode,
        backgroundColor,
        color,
        outlineBorderColor,
      });
    case 'ghost':
      return getGhostButtonStyles({
        mode,
        backgroundColor,
        color,
        outlineBorderColor,
      });
    case 'light':
      return getLightButtonStyles({
        mode,
        backgroundColor,
        color,
        outlineBorderColor,
      });
    case 'outline':
      return getOutlineButtonStyles({
        mode,
        backgroundColor,
        color,
        outlineBorderColor,
      });
    case 'danger':
      return getDangerButtonStyles();
    default:
      return getSolidButtonStyles({
        mode,
        backgroundColor,
        color,
        outlineBorderColor,
      });
  }
};

export { getButtonStyles, getHoverStyle, getButtonRadius, getSizeVariant };
