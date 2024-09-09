import React from "react";
import { FixedBox } from "../../styles/styled";
import styled from "styled-components";

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
  const Drop = styled(FixedBox)`
    background: rgb(0, 0, 0, 0.6);
    display: ${open ? "flex" : "none"};
    justify-content: ${centerContent && "center"};
    align-items: ${centerContent && "center"};
  `;
  return (
    <>
      {isStory ? (
        <>{children}</>
      ) : (
        <Drop className={className} style={style} onClick={onClose}>
          {children}
        </Drop>
      )}
    </>
  );
};

export default Backdrop;
