import { css } from 'styled-chroma';
import { IStyleDrawer } from '../../types/istyle';

const getDrawerPosition = (
  position: IStyleDrawer['position'],
  variant: IStyleDrawer['variant']
) => {
  if (variant === 'modal') {
    return position === 'left' ? 'left: 10px' : 'right: 10px';
  }
  return position === 'left' ? 'left: 0' : 'right: 0';
};

const getDrawerPositionMobile = (variant: IStyleDrawer['variant']) => {
  if (variant === 'modal') {
    return css`
      left: 5px;
      right: 5px;
    `;
  }
  return css`
    left: 0;
    right: 0;
  `;
};

const getDrawerRadius = (
  variant: IStyleDrawer['variant'],
  position: IStyleDrawer['position']
) => {
  if (variant === 'modal') {
    return '0.35rem';
  }

  switch (position) {
    case 'left':
      return '0 0.65rem 0.65rem 0';
    case 'right':
      return '0.65rem 0 0 0.65rem';
  }
};

export { getDrawerPosition, getDrawerRadius, getDrawerPositionMobile };
