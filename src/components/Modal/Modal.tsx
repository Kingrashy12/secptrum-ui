import React, { useEffect, useState } from "react";
import { ModalContainer } from "../../styles/styled";
import { ModalProvider } from "../../context/useModalContext";

type ModalType = {
  /**
   * Whether the component is open or not.
   */
  open: boolean;

  /**
   * Function to be called when the component is requested to close.
   */
  onClose: () => void;

  /**
   * Optional additional class names to be applied to the component.
   */
  className?: string;

  /**
   * Optional custom styles to be applied to the component.
   */
  styles?: React.CSSProperties;

  /**
   * Content to be rendered inside the component.
   */
  children: React.ReactNode;

  /**
   * Optional flag to indicate if the component is used in a story or not.
   */
  isStory?: boolean;
};

/**
 * This component renders a modal dialog that wraps the `ModalPanel` component
 * with customizable content and behaviors.
 *
 * Props:
 * - `open`: Whether the modal is currently open or not.
 * - `onClose`: Callback function to be called when the modal requests to close.
 * - `className`: Optional additional class names to be applied to the modal.
 * - `styles`: Optional custom styles to be applied to the modal.
 *
 * Example:
 *
 * ```
 * <Modal open onClose={()=>setOpenModal(false)}>
 *      <ModalPanel align='vertical'>
 *       <h1>A modal</h1>
 *    </ModalPanel>
 * </Modal>
 * ```
 */

const Modal = ({
  onClose,
  open,
  children,
  className,
  styles,
  isStory,
}: ModalType) => {
  return (
    <>
      {isStory ? (
        <>{children}</>
      ) : (
        <ModalProvider>
          <ModalContainer
            style={styles}
            className={className}
            onClick={onClose}
            open={open}
          >
            {children}
          </ModalContainer>
        </ModalProvider>
      )}
    </>
  );
};

export default Modal;
