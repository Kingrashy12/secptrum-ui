import React, { forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import Box from "../Box/Box";
import { BoxType } from "../../types/sui";
import { colors } from "../../styles/colors";
import { styled } from "styled-chroma";

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
    return (
      <TitleWrap {...props} ref={ref}>
        <Title className={titleClassName} style={titleStyle}>
          {title}
        </Title>
        {showClose && (
          <CloseIcon>
            <IoClose
              className={iconClass}
              style={iconStyle}
              size={iconSize || 25}
              onClick={close}
            />
          </CloseIcon>
        )}
      </TitleWrap>
    );
  }
);

export default ModalTitle;
ModalTitle.displayName = "ModalTitle";

/**
 * TitleWrap is a styled-component that wraps the title and close icon in the modal header.
 */
const TitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

/**
 * Title is a styled-component that renders the title (`h2`) element.
 */
const Title = styled("h2")`
  margin: 0;
  font-size: 1.5rem;
  color: currentColor;
  font-family: inherit;
`;

const CloseIcon = styled(Box)`
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${colors.gray[100]};
  }
`;
