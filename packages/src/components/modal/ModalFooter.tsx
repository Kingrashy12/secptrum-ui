import { DivProps } from 'styled-chroma';
import { ModalFooterSui } from '../../styles/feedback/styled';
import { useModalContext } from '../../context/useModal';

interface ModalFooterProps extends DivProps {
  /**
   * Specifies the space between elements in the footer.
   * @type {number}
   */
  space?: number;
  /**
   * Specifies the alignment of the footer content.
   * @type {"right" | "left"}
   *
   * @default `right`
   */
  position?: 'right' | 'left';
  /**
   * Add a border-top to the component.
   * @type {boolean}
   * @default true
   */
  showBorder?: boolean;
}

const ModalFooter = ({
  children,
  showBorder = true,
  ...props
}: ModalFooterProps) => {
  const { mode } = useModalContext();
  return (
    <ModalFooterSui showBorder={showBorder} mode={mode} {...props}>
      {children}
    </ModalFooterSui>
  );
};

export default ModalFooter;
ModalFooter.displayName = 'ModalFooter';
