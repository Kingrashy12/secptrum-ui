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
import { getModeStyle } from 'src/utils/mode';

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
  z-index: ${(props) => props.zIndex || 500};
`;
DropSui.displayName = 'DropSui';

//*************Modal Components*************//
// Modal Panel
export const ModalPanelSui = styled<IStyleModalPanel>('div')`
  position: relative;
  background: ${(props) => props.backgroundColor};
  border-radius: 11px;
  box-shadow: 0 4px 6px
    ${(props) =>
      props.mode === 'dark' ? colors.slate[950] : 'rgba(0, 0, 0, 0.1)'};
  max-width: 100%;
  height: auto;
  max-height: 93%;
  z-index: 1000;
  overflow: hidden;
  border: 1px solid
    ${(props) =>
      props.mode === 'dark' ? colors.neutral[800] : colors.neutral[200]};
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
  overflow-y: auto;
  height: 100%;
  flex-direction: ${(props) => props.direction || 'column'};
  gap: ${(props) => props.spacing || 16}px;
  justify-content: ${(props) => (props.centered ? 'center' : '')};
  align-items: ${(props) => (props.centered ? 'center' : '')};
  padding: ${(props) => props.padding ?? '13px'};
`;
ModalContent.displayName = 'ModalContent';

// Modal Footer
export const ModalFooterSui = styled<IStyleModalFooter>('div')`
  display: flex;
  justify-content: ${(props) =>
    props.position === 'left' ? 'flex-start' : 'flex-end'};
  gap: ${(props) => props.space || 10}px;
  padding: 13px;
  ${(props) =>
    props.showBorder
      ? `border-top: 1px solid ${getModeStyle(props.mode).border};`
      : ''}
`;
ModalFooterSui.displayName = 'ModalFooterSui';

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
