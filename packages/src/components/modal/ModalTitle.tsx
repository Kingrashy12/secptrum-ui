import React, { forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';
import Box from '../Box/Box';
import { BoxType } from '../../types/sui';
import { useModalContext } from '../../context/useModal';
import { colors, styled } from 'styled-chroma';
import HoverableIcon from '../Icon/HoverableIcon';

interface ModalTitleType extends BoxType {
  /**
   * Model title text.
   * @type {string}
   */
  title: string;

  /**
   * Whether to show the close button.
   * @type {boolean}
   * @default false
   */
  showClose?: boolean;

  /**
   * CSS class for the icon.
   * @type {string}
   */
  iconClass?: string;

  /**
   * Custom styles for the icon.
   * @type {React.CSSProperties}
   */
  iconStyle?: React.CSSProperties;

  /**
   * Size of the icon.
   * @type {number}
   */
  iconSize?: number;

  /**
   * Callback function when the close button is clicked.
   * @type {() => void}
   */
  onClose?: () => void;

  /**
   * CSS class for the title text.
   * @type {string}
   */
  titleClassName?: string;

  /**
   * Custom styles for the title text.
   * @type {React.CSSProperties}
   */
  titleStyle?: React.CSSProperties;

  /**
   * Prevents the modal from closing when the close button is clicked.
   * @type {boolean}
   * @default false
   */
  preventClose?: boolean;
  /**
   * Adds border-bottom to the component.
   * @type {boolean}
   * @default true
   */
  showBorder?: boolean;
}

/**
 * ModalTitle component renders a header for a modal, including a title and optional close icon.
 *
 * @param {ModalTitleType} props - The props for the ModalTitle component.
 * @returns {JSX.Element} The rendered ModalTitle component.
 */
const ModalTitle = forwardRef<HTMLDivElement, ModalTitleType>(
  (
    {
      iconClass,
      iconSize,
      title,
      iconStyle,
      onClose,
      titleClassName,
      titleStyle,
      showClose,
      preventClose,
      showBorder = true,
      ...props
    },
    ref
  ): JSX.Element => {
    function close() {
      if (!preventClose) {
        if (onClose) {
          onClose();
        }
      }
    }

    const { mode } = useModalContext();

    return (
      <TitleWrap
        {...props}
        ref={ref}
        showBorder={showBorder}
        mode={mode as 'light' | 'dark'}
      >
        <Title
          className={titleClassName}
          mode={mode as 'light' | 'dark'}
          style={titleStyle}
        >
          {title}
        </Title>
        {showClose && (
          <HoverableIcon
            icon={IoClose}
            className={iconClass}
            size={iconSize ?? 24}
            styles={iconStyle}
            onClick={close}
          />
        )}
      </TitleWrap>
    );
  }
);

export default ModalTitle;
ModalTitle.displayName = 'ModalTitle';

const titleMode = (mode: 'light' | 'dark') => {
  return {
    title: mode === 'dark' ? 'white' : 'black',
    border: mode === 'dark' ? colors.neutral[800] : colors.neutral[200],
  };
};

/**
 * TitleWrap is a styled-component that wraps the title and close icon in the modal header.
 */
const TitleWrap = styled<
  BoxType & { showBorder: boolean; mode: 'light' | 'dark' }
>(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px;
  ${(props) =>
    props.showBorder
      ? `border-bottom: 1px solid ${titleMode(props.mode).border};`
      : ''}
`;

/**
 * Title is a styled-component that renders the title (`h2`) element.
 */
const Title = styled<{ mode: 'light' | 'dark' }>('h2')`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => titleMode(props.mode).title};
  font-family: inherit;
`;
