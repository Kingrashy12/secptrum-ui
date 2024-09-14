import React from "react";
import { FixedBox } from "../../styles/styled";
import styled from "styled-components";
import shouldForwardProp from "../../utils/is-prop-valid";

interface DropType {
  /**
   * The content to be rendered inside the drop component.
   */
  children: React.ReactNode;

  /**
   * Additional CSS class names to apply to the drop component.
   */
  className?: string;

  /**
   * Inline styles to apply to the drop component.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the drop component is currently open (visible) or not.
   */
  open: boolean;

  /**
   * Callback function triggered to close the drop component.
   */
  onClose: () => void;

  /**
   * Determines whether to center the content within the drop component.
   * @default false
   */
  centerContent?: boolean;

  /**
   * Indicates if the component is being used in Storybook.
   * - `Note` This should not be used outside of a Storybook environment.
   */
  isStory?: boolean;
}

const Backdrop = ({
  open,
  onClose,
  children,
  className,
  style,
  centerContent = true,
  isStory,
}: DropType) => {
  return (
    <>
      {isStory ? (
        <>{children}</>
      ) : (
        <Drop
          open={open}
          centerContent={centerContent}
          className={className}
          style={style}
          onClick={onClose}
        >
          {children}
        </Drop>
      )}
    </>
  );
};

export default Backdrop;

const Drop = styled(FixedBox).withConfig({ shouldForwardProp })<{
  open: boolean;
  centerContent: boolean;
}>`
  background: rgb(0, 0, 0, 0.6);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: ${(props) => props.centerContent && "center"};
  align-items: ${(props) => props.centerContent && "center"};
  backdrop-filter: blur(6px);
`;
