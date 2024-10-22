import { styled } from 'styled-chroma';
import { IStyleDrawer } from '../../types/istyle';
import { cardStyles } from '../../utils/layout';
import {
  getDrawerPosition,
  getDrawerPositionMobile,
  getDrawerRadius,
} from '../../utils/overlays';
import { slideInFromLeft, slideInFromRight } from '../animations';

//******* Drawer Component ********** */
export const DrawerSui = styled<IStyleDrawer>('div')`
  position: fixed;
  top: ${(props) => (props.variant === 'modal' ? '8px' : '0')};
  width: ${(props) => props.width};
  height: ${(props) => (props.variant === 'modal' ? '97%' : '100%')};
  ${(props) => getDrawerPosition(props.position, props.variant)};
  border-radius: ${(props) => getDrawerRadius(props.variant, props.position)};
  background: ${(props) => props.background || cardStyles(props.mode).drawerBg};
  display: flex;
  flex-direction: column;
  border: ${({ mode }) => cardStyles(mode).border};
  box-shadow: ${({ mode }) => cardStyles(mode).boxShadow};
  ${(props) =>
    props.position === 'left'
      ? `
  animation: ${slideInFromLeft} 0.3s ease-in-out;
  `
      : `animation: ${slideInFromRight} 0.3s ease-in-out;`}
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  gap: ${(props) => props.spacing}px;

  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: ${(props) => (props.variant === 'modal' ? '98%' : '100%')};
    ${(props) => getDrawerPositionMobile(props.variant)};
    border-radius: ${(props) => (props.variant === 'default' ? '0' : '9px')};
  }
`;

DrawerSui.displayName = 'DrawerSui';

export const DrawerHeaderSui = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
