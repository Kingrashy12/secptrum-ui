import { css, styled } from 'styled-chroma';
import {
  IStyleDrop,
  IStyleModalFooter,
  IStyleModalPanel,
  IStyleToast,
  IStyleToastCloseIcon,
} from '../../types/istyle';
import { getModalPanelTransition, getPanelSize } from '../../utils/feedback';
import { FixedBox } from '../global';
import { BoxSui } from '../layout/styled';
import { spacingValues } from '../../utils/spacing';
import { colors } from '../colors';
import { getToastPosition } from '../../utils/position';
import { getToastTransition } from '../../utils/transitions';

//*************Backdrop Components*************//
export const DropSui = styled<IStyleDrop>(FixedBox)`
  background: ${(props) => props.backgroundColor};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: ${(props) => (props.centerContent ? 'center' : '')};
  align-items: ${(props) => (props.centerContent ? 'center' : '')};
  backdrop-filter: ${(props) => `blur(${props.glassEffect}px)`};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;
DropSui.displayName = 'DropSui';

//*************Modal Components*************//
// Modal Panel
export const ModalPanelSui = styled<IStyleModalPanel>('div')`
  position: relative;
  background: ${(props) => props.backgroundColor || 'white'};
  border-radius: 11px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  padding: 20px;
  z-index: 1000;
  overflow: hidden;
  border: 1px solid ${colors.neutral[200]};
  ${(props) => {
    const size = getPanelSize(props.size);
    return css`
      ${size}
    `;
  }};
  ${(props) => {
    const transition = getModalPanelTransition(
      props.transition,
      props.isVisible
    );
    return css`
      ${transition}
    `;
  }}
  animation-fill-mode: forwards;
  animation-delay: 0s;
  display: flex;
  gap: ${(props) => spacingValues(props.spacing) || '10px'};
  flex-direction: ${(props) => (props.align === 'vertical' ? 'column' : 'row')};
`;
ModalPanelSui.displayName = 'ModalPanelSui';

// Modal Description
export const ModalContent = styled(BoxSui)`
  margin: ${({ margin }) => margin || '5px 0'};
  ${(props) =>
    props.padding
      ? css`
          padding: ${props.padding};
        `
      : ''}
  ${(props) =>
    props.paddingTop
      ? css`
          padding-top: ${props.paddingTop};
        `
      : ''}
  ${(props) =>
    props.paddingBottom
      ? css`
          padding-bottom: ${props.paddingBottom};
        `
      : ''}
  ${(props) =>
    props.border
      ? css`
          border: ${props.border};
        `
      : ''}
  flex-direction: ${(props) => props.direction || 'column'};
  gap: ${(props) => props.spacing || 16}px;
  justify-content: ${(props) => (props.centered ? 'center' : '')};
  align-items: ${(props) => (props.centered ? 'center' : '')};
`;
ModalContent.displayName = 'ModalContent';

// Modal Footer
export const ModalFooter = styled<IStyleModalFooter>('div')`
  display: flex;
  justify-content: ${(props) =>
    props.position === 'left' ? 'flex-start' : 'flex-end'};
  margin-top: 20px;
  padding-top: 10px;
  gap: ${(props) => props.space || 10}px;
`;
ModalFooter.displayName = 'ModalFooterSui';

//*****************Toast Components****************//
// Toast style
export const StyledToast = styled<IStyleToast>('div')`
  background: white;
  width: auto;
  height: auto;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid ${colors.neutral[200]};
  gap: 5px;
  position: fixed;
  display: flex;
  max-width: 400px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  ${(props) => {
    const positions = getToastPosition(props.position);
    return css`
      top: ${positions.top};
      bottom: ${positions.bottom};
      right: ${positions.right};
      left: ${positions.left};
    `;
  }}
  ${(props) => {
    const transition = getToastTransition(props.transition, props.isVisible);
    return css`
      ${transition}
    `;
  }}
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .header {
    font-weight: 600;
    color: black;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  span {
    font-weight: 500;
    color: ${colors.neutral[600]};
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    max-width: 90%;
  }
`;

export const ContentWrap = styled(BoxSui)`
  padding: 12px;
  gap: 8px;
  width: fit-content;
`;

export const ToastContent = styled(BoxSui)`
  gap: 2px;
  width: 90%;
`;

export const CloseIcon = styled<IStyleToastCloseIcon>(BoxSui)`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${colors.neutral[200]};
  padding: 12px;
  height: auto;
  transition: all;
  transition-duration: 100ms;
  transition-delay: 100ms;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    background: ${colors.slate[100]};
    transition: all;
    transition-duration: 100ms;
    transition-delay: 100ms;
  }

  svg {
    padding: 4px;
  }
`;
